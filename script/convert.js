const osmData = {
  "version": 0.6,
  "generator": "Overpass API 0.7.62.1 084b4234",
  "osm3s": {
    "timestamp_osm_base": "2024-09-20T18:19:34Z",
    "timestamp_areas_base": "2024-09-20T13:25:58Z",
    "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL."
  },
  "elements": [
    {
      "type": "node",
      "id": 21409384,
      "lat": 53.3773784,
      "lon": -2.9033161,
      "tags": {
        "amenity": "post_box",
        "brand": "Royal Mail",
        "ref": "L18 755"
      }
    },
    {
      "type": "node",
      "id": 24932020,
      "lat": 53.4060542,
      "lon": -2.9649132,
      "tags": {
        "amenity": "post_box",
        "description": "QE II post boxes L3 5 & 5000 on Brownlow Hill at the University",
        "operator": "Royal Mail",
        "ref": "L3 5;L3 5000"
      }
    }
  ]
};

const postboxes = osmData.elements.map(postbox => {
  const name = postbox.tags.ref || Post Box ${postbox.id};
  const coords = [postbox.lon, postbox.lat];

  return { name, coords };
});

const presets = {
  postboxes: postboxes
};

console.log(JSON.stringify(presets, null, 2));
