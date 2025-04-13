import { presets } from './presets.js';

console.log("v1.2")
mapboxgl.accessToken = 'pk.eyJ1IjoiODgxcmQ3d2MiLCJhIjoiY2x6NWczOTc1M3cxczJqcjRseWdtZGNxayJ9.Q7rT9130fic6rc8dNV9kNg';

const map = new mapboxgl.Map({
  container: 'map',
  projection: 'globe',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [0, 53.4],
  zoom: 5
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());

let points = [];  // Array to store user-defined points (lng, lat)
let markers = []; // Array to store draggable Mapbox markers

function getColor(index, total) {
  return `hsl(${(index * 360 / total) % 360}, 70%, 70%)`;
}

function clearPoints() {
  points = [];
  markers.forEach(marker => marker.remove());
  markers = [];
  updateVoronoi();
}

function updateVoronoi() {
  if (points.length === 0) {
    map.getSource('voronoi').setData({
      type: 'FeatureCollection',
      features: []
    });
    return;
  }

  const viewportBounds = getViewportBounds();
  const delaunay = d3.Delaunay.from(points);
  const voronoi = delaunay.voronoi(viewportBounds);

  const features = [];
  for (let i = 0; i < points.length; i++) {
    const cell = voronoi.cellPolygon(i);
    if (!cell) continue;

    const coordinates = cell.map(([lng, lat]) => [lng, lat]);

    features.push({
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [coordinates]
      },
      properties: {
        site: points[i],
        color: getColor(i, points.length)
      }
    });
  }

  map.getSource('voronoi').setData({
    type: 'FeatureCollection',
    features: features
  });

  markers.forEach((marker, index) => {
    const color = getColor(index, points.length);
    const el = marker.getElement();
    el.style.backgroundColor = color;
  });
}

map.on('load', () => {
  map.addSource('voronoi', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  });

  map.addLayer({
    id: 'voronoi-layer',
    type: 'fill',
    source: 'voronoi',
    paint: {
      'fill-color': ['get', 'color'],
      'fill-opacity': 0.2,
      'fill-outline-color': '#000'
    }
  });

  updateVoronoi();
});

document.getElementById('add-seed').addEventListener('click', () => {
  const randomPoint = getRandomPointInViewport();
  const color = getColor(points.length, points.length + 1);
  points.push(randomPoint);
  addDraggableMarker(randomPoint, color);
  updateVoronoi();
});

document.getElementById('delete-all').addEventListener('click', clearPoints);

document.getElementById('preset-selector').addEventListener('change', (event) => {
  const selectedPreset = event.target.value;
  if (selectedPreset) {
    loadPreset(selectedPreset);
  }
});

// Recalculate Voronoi diagram when the map is moved or zoomed
// This can be set to moveend and zoomend if it's too laggy
map.on('move', updateVoronoi);
map.on('zoom', updateVoronoi);

function addDraggableMarker(lngLat, color) {
  const el = document.createElement('div');
  el.className = 'marker';
  el.style.width = '15px';
  el.style.height = '15px';
  el.style.borderRadius = '50%';
  el.style.backgroundColor = color;
  el.style.border = '2px solid white';

  const marker = new mapboxgl.Marker({
    element: el,
    draggable: true
  })
    .setLngLat(lngLat)
    .addTo(map);

  markers.push(marker);

  marker.on('drag', () => {
    const index = markers.indexOf(marker);
    points[index] = marker.getLngLat().toArray();
    updateVoronoi();
  });
}

function getViewportBounds() {
  const bounds = map.getBounds();
  const sw = bounds.getSouthWest();
  const ne = bounds.getNorthEast();

  // Disable buffer for now, leads to issues when zoomed out
  const bufferLng = (ne.lng - sw.lng) * 0;
  const bufferLat = (ne.lat - sw.lat) * 0;

  return [
    sw.lng - bufferLng,
    sw.lat - bufferLat,
    ne.lng + bufferLng,
    ne.lat + bufferLat
  ];
}

function loadPreset(presetName) {
  clearPoints();
  const preset = presets[presetName];
  preset.forEach((point, index) => {
    const color = getColor(index, preset.length);
    points.push(point.coords);
    addDraggableMarker(point.coords, color);
  });
  updateVoronoi();

  const bounds = new mapboxgl.LngLatBounds();
  points.forEach(point => bounds.extend(point));
  map.fitBounds(bounds, { padding: 50 });
}

function getRandomPointInViewport() {
  const bounds = map.getBounds();
  const sw = bounds.getSouthWest();
  const ne = bounds.getNorthEast();
  const randomLng = sw.lng + (ne.lng - sw.lng) * (Math.random() + Math.random()) / 2;
  const randomLat = sw.lat + (ne.lat - sw.lat) * (Math.random() + Math.random()) / 2;
  return [randomLng, randomLat];
}

// Search func

async function geocode(address) {
  const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`);
  const data = await response.json();
  return data.features[0].center;
}

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', async () => {
  const address = searchInput.value;
  if (!address) return;

  const [lng, lat] = await geocode(address);
  const originalZoom = map.getZoom();

  map.easeTo({ center: [lng, lat], zoom: originalZoom - 4, duration: 2000 });

  setTimeout(() => {
    map.easeTo({ center: [lng, lat], zoom: originalZoom, duration: 2000 });
  }, 1000);
});
