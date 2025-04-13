const capitals = [
  {
    "name": "Kabul",
    "coords": [
      69.1725,
      34.5289
    ]
  },
  {
    "name": "Tiranë (Tirana)",
    "coords": [
      19.8189,
      41.3275
    ]
  },
  {
    "name": "El Djazaïr  (Algiers)",
    "coords": [
      3.042,
      36.7525
    ]
  },
  {
    "name": "Pago Pago",
    "coords": [
      -170.7025,
      -14.2781
    ]
  },
  {
    "name": "Andorra la Vella",
    "coords": [
      1.5211,
      42.5078
    ]
  },
  {
    "name": "Luanda",
    "coords": [
      13.2343,
      -8.8368
    ]
  },
  {
    "name": "The Valley",
    "coords": [
      -63.0578,
      18.217
    ]
  },
  {
    "name": "St. John's",
    "coords": [
      -61.8457,
      17.1172
    ]
  },
  {
    "name": "Buenos Aires",
    "coords": [
      -58.4004,
      -34.6051
    ]
  },
  {
    "name": "Yerevan",
    "coords": [
      44.5146,
      40.182
    ]
  },
  {
    "name": "Oranjestad",
    "coords": [
      -70.027,
      12.524
    ]
  },
  {
    "name": "Canberra",
    "coords": [
      149.1281,
      -35.2835
    ]
  },
  {
    "name": "Wien (Vienna)",
    "coords": [
      16.3707,
      48.2064
    ]
  },
  {
    "name": "Baku",
    "coords": [
      49.892,
      40.3777
    ]
  },
  {
    "name": "Nassau",
    "coords": [
      -77.3431,
      25.0582
    ]
  },
  {
    "name": "Al-Manamah (Manama)",
    "coords": [
      50.5832,
      26.2154
    ]
  },
  {
    "name": "Dhaka",
    "coords": [
      90.4074,
      23.7104
    ]
  },
  {
    "name": "Bridgetown",
    "coords": [
      -59.6167,
      13.1
    ]
  },
  {
    "name": "Minsk",
    "coords": [
      27.5667,
      53.9
    ]
  },
  {
    "name": "Bruxelles-Brussel",
    "coords": [
      4.3499,
      50.8467
    ]
  },
  {
    "name": "Belmopan",
    "coords": [
      -88.7667,
      17.25
    ]
  },
  {
    "name": "Cotonou",
    "coords": [
      2.4183,
      6.3654
    ]
  },
  {
    "name": "Hamilton",
    "coords": [
      -64.778,
      32.2915
    ]
  },
  {
    "name": "Thimphu",
    "coords": [
      89.6419,
      27.4661
    ]
  },
  {
    "name": "La Paz",
    "coords": [
      -68.15,
      -16.5
    ]
  },
  {
    "name": "Sarajevo",
    "coords": [
      18.3564,
      43.8486
    ]
  },
  {
    "name": "Gaborone",
    "coords": [
      25.9086,
      -24.6545
    ]
  },
  {
    "name": "Brasília",
    "coords": [
      -47.9297,
      -15.7797
    ]
  },
  {
    "name": "Road Town",
    "coords": [
      -64.6167,
      18.4167
    ]
  },
  {
    "name": "Bandar Seri Begawan",
    "coords": [
      114.9481,
      4.9403
    ]
  },
  {
    "name": "Sofia",
    "coords": [
      23.3242,
      42.6975
    ]
  },
  {
    "name": "Ouagadougou",
    "coords": [
      -1.5383,
      12.3642
    ]
  },
  {
    "name": "Bujumbura",
    "coords": [
      29.3644,
      -3.3822
    ]
  },
  {
    "name": "Praia",
    "coords": [
      -23.5087,
      14.9215
    ]
  },
  {
    "name": "Phnum Pénh (Phnom Penh)",
    "coords": [
      104.916,
      11.5625
    ]
  },
  {
    "name": "Yaoundé",
    "coords": [
      11.5167,
      3.8667
    ]
  },
  {
    "name": "Ottawa-Gatineau",
    "coords": [
      -75.698,
      45.4166
    ]
  },
  {
    "name": "Kralendijk",
    "coords": [
      -68.2667,
      12.15
    ]
  },
  {
    "name": "George Town",
    "coords": [
      -81.3744,
      19.2866
    ]
  },
  {
    "name": "Bangui",
    "coords": [
      18.555,
      4.3612
    ]
  },
  {
    "name": "N'Djaména",
    "coords": [
      15.0444,
      12.1067
    ]
  },
  {
    "name": "St. Helier",
    "coords": [
      -2.1049,
      49.188
    ]
  },
  {
    "name": "St. Peter Port",
    "coords": [
      -2.5353,
      49.4598
    ]
  },
  {
    "name": "Santiago",
    "coords": [
      -70.6483,
      -33.4569
    ]
  },
  {
    "name": "Beijing",
    "coords": [
      116.3972,
      39.9075
    ]
  },
  {
    "name": "Hong Kong SAR\"",
    "coords": [
      22.2796,
      null
    ]
  },
  {
    "name": "Macao SAR\"",
    "coords": [
      22.2006,
      null
    ]
  },
  {
    "name": "Taiwan Province of China\"",
    "coords": [
      25.047,
      null
    ]
  },
  {
    "name": "Bogotá",
    "coords": [
      -74.0818,
      4.6097
    ]
  },
  {
    "name": "Moroni",
    "coords": [
      43.2551,
      -11.7022
    ]
  },
  {
    "name": "Brazzaville",
    "coords": [
      15.2832,
      -4.2658
    ]
  },
  {
    "name": "Rarotonga",
    "coords": [
      -159.76,
      -21.23
    ]
  },
  {
    "name": "San José",
    "coords": [
      -84.0807,
      9.9278
    ]
  },
  {
    "name": "Abidjan",
    "coords": [
      -4.0268,
      5.3453
    ]
  },
  {
    "name": "Zagreb",
    "coords": [
      15.978,
      45.8144
    ]
  },
  {
    "name": "La Habana (Havana)",
    "coords": [
      -82.3785,
      23.1195
    ]
  },
  {
    "name": "Willemstad",
    "coords": [
      -68.9335,
      12.1084
    ]
  },
  {
    "name": "Lefkosia (Nicosia)",
    "coords": [
      33.3669,
      35.1595
    ]
  },
  {
    "name": "Praha (Prague)",
    "coords": [
      14.4208,
      50.088
    ]
  },
  {
    "name": "P'yongyang",
    "coords": [
      125.7543,
      39.0339
    ]
  },
  {
    "name": "Kinshasa",
    "coords": [
      15.3136,
      -4.3276
    ]
  },
  {
    "name": "København (Copenhagen)",
    "coords": [
      12.5655,
      55.6759
    ]
  },
  {
    "name": "Djibouti",
    "coords": [
      43.1447,
      11.5877
    ]
  },
  {
    "name": "Roseau",
    "coords": [
      -61.3881,
      15.3017
    ]
  },
  {
    "name": "Santo Domingo",
    "coords": [
      -69.9018,
      18.4896
    ]
  },
  {
    "name": "Quito",
    "coords": [
      -78.525,
      -0.2299
    ]
  },
  {
    "name": "Al-Qahirah (Cairo)",
    "coords": [
      31.2394,
      30.0392
    ]
  },
  {
    "name": "San Salvador",
    "coords": [
      -89.1872,
      13.6894
    ]
  },
  {
    "name": "Malabo",
    "coords": [
      8.7833,
      3.75
    ]
  },
  {
    "name": "Asmara",
    "coords": [
      38.9333,
      15.3333
    ]
  },
  {
    "name": "Tallinn",
    "coords": [
      24.7535,
      59.437
    ]
  },
  {
    "name": "Addis Ababa",
    "coords": [
      38.7469,
      9.025
    ]
  },
  {
    "name": "Tórshavn",
    "coords": [
      -6.7716,
      62.0097
    ]
  },
  {
    "name": "Stanley",
    "coords": [
      -57.8494,
      -51.7012
    ]
  },
  {
    "name": "Suva",
    "coords": [
      178.4415,
      -18.1416
    ]
  },
  {
    "name": "Helsinki",
    "coords": [
      24.9402,
      60.1692
    ]
  },
  {
    "name": "Paris",
    "coords": [
      2.3488,
      48.8534
    ]
  },
  {
    "name": "Cayenne",
    "coords": [
      -52.3333,
      4.9333
    ]
  },
  {
    "name": "Papeete",
    "coords": [
      -149.5667,
      -17.5333
    ]
  },
  {
    "name": "Libreville",
    "coords": [
      9.4537,
      0.3925
    ]
  },
  {
    "name": "Banjul",
    "coords": [
      -16.6794,
      13.4531
    ]
  },
  {
    "name": "Tbilisi",
    "coords": [
      44.8337,
      41.6941
    ]
  },
  {
    "name": "Berlin",
    "coords": [
      13.4105,
      52.5244
    ]
  },
  {
    "name": "Accra",
    "coords": [
      -0.1969,
      5.556
    ]
  },
  {
    "name": "Gibraltar",
    "coords": [
      -5.3526,
      36.1447
    ]
  },
  {
    "name": "Athínai (Athens)",
    "coords": [
      23.749,
      37.9534
    ]
  },
  {
    "name": "Nuuk (Godthåb)",
    "coords": [
      -51.7216,
      64.1835
    ]
  },
  {
    "name": "St.George's",
    "coords": [
      -61.7485,
      12.0564
    ]
  },
  {
    "name": "Basse-Terre",
    "coords": [
      -61.7255,
      15.9985
    ]
  },
  {
    "name": "Hagåtña",
    "coords": [
      144.7489,
      13.4757
    ]
  },
  {
    "name": "Ciudad de Guatemala (Guatemala City)",
    "coords": [
      -90.5307,
      14.6127
    ]
  },
  {
    "name": "Conakry",
    "coords": [
      -13.6476,
      9.5716
    ]
  },
  {
    "name": "Bissau",
    "coords": [
      -15.5977,
      11.8636
    ]
  },
  {
    "name": "Georgetown",
    "coords": [
      -58.1553,
      6.8045
    ]
  },
  {
    "name": "Port-au-Prince",
    "coords": [
      -72.335,
      18.5392
    ]
  },
  {
    "name": "Vatican City",
    "coords": [
      12.4533,
      41.9024
    ]
  },
  {
    "name": "Tegucigalpa",
    "coords": [
      -87.2068,
      14.0818
    ]
  },
  {
    "name": "Budapest",
    "coords": [
      19.0399,
      47.498
    ]
  },
  {
    "name": "Reykjavík",
    "coords": [
      -21.8954,
      64.1355
    ]
  },
  {
    "name": "Delhi",
    "coords": [
      77.2167,
      28.6667
    ]
  },
  {
    "name": "Jakarta",
    "coords": [
      106.8416,
      -6.2118
    ]
  },
  {
    "name": "Tehran",
    "coords": [
      51.4215,
      35.6944
    ]
  },
  {
    "name": "Baghdad",
    "coords": [
      44.4009,
      33.3406
    ]
  },
  {
    "name": "Dublin",
    "coords": [
      -6.2489,
      53.3331
    ]
  },
  {
    "name": "Douglas",
    "coords": [
      -4.4833,
      54.15
    ]
  },
  {
    "name": "Jerusalem",
    "coords": [
      35.2163,
      31.769
    ]
  },
  {
    "name": "Roma (Rome)",
    "coords": [
      12.4811,
      41.8947
    ]
  },
  {
    "name": "Kingston",
    "coords": [
      -76.7936,
      17.997
    ]
  },
  {
    "name": "Tokyo",
    "coords": [
      139.6917,
      35.6895
    ]
  },
  {
    "name": "Amman",
    "coords": [
      35.945,
      31.9552
    ]
  },
  {
    "name": "Astana",
    "coords": [
      71.446,
      51.1801
    ]
  },
  {
    "name": "Nairobi",
    "coords": [
      36.8167,
      -1.2833
    ]
  },
  {
    "name": "Tarawa",
    "coords": [
      172.9813,
      1.3272
    ]
  },
  {
    "name": "Al Kuwayt (Kuwait City)",
    "coords": [
      47.9783,
      29.3697
    ]
  },
  {
    "name": "Bishkek",
    "coords": [
      74.59,
      42.87
    ]
  },
  {
    "name": "Vientiane",
    "coords": [
      102.6,
      17.9667
    ]
  },
  {
    "name": "Riga",
    "coords": [
      24.1059,
      56.946
    ]
  },
  {
    "name": "Bayrut (Beirut)",
    "coords": [
      35.4833,
      33.9
    ]
  },
  {
    "name": "Maseru",
    "coords": [
      27.4833,
      -29.3167
    ]
  },
  {
    "name": "Monrovia",
    "coords": [
      -10.7969,
      6.3005
    ]
  },
  {
    "name": "Tarabulus (Tripoli)",
    "coords": [
      13.1875,
      32.8752
    ]
  },
  {
    "name": "Vaduz",
    "coords": [
      9.5215,
      47.1415
    ]
  },
  {
    "name": "Vilnius",
    "coords": [
      25.2798,
      54.6892
    ]
  },
  {
    "name": "Luxembourg",
    "coords": [
      6.13,
      49.6117
    ]
  },
  {
    "name": "Antananarivo",
    "coords": [
      47.5361,
      -18.9137
    ]
  },
  {
    "name": "Lilongwe",
    "coords": [
      33.7873,
      -13.9669
    ]
  },
  {
    "name": "Kuala Lumpur",
    "coords": [
      101.6865,
      3.1412
    ]
  },
  {
    "name": "Male",
    "coords": [
      73.5089,
      4.1748
    ]
  },
  {
    "name": "Bamako",
    "coords": [
      -8,
      12.65
    ]
  },
  {
    "name": "Valletta",
    "coords": [
      14.5147,
      35.8997
    ]
  },
  {
    "name": "Majuro",
    "coords": [
      171.3803,
      7.0897
    ]
  },
  {
    "name": "Fort-de-France",
    "coords": [
      -61.0733,
      14.6089
    ]
  },
  {
    "name": "Nouakchott",
    "coords": [
      -15.9785,
      18.0858
    ]
  },
  {
    "name": "Port Louis",
    "coords": [
      57.4989,
      -20.1619
    ]
  },
  {
    "name": "Mamoudzou",
    "coords": [
      45.2272,
      -12.7794
    ]
  },
  {
    "name": "Ciudad de México (Mexico City)",
    "coords": [
      -99.1419,
      19.4273
    ]
  },
  {
    "name": "Palikir",
    "coords": [
      158.1588,
      6.9174
    ]
  },
  {
    "name": "Monaco",
    "coords": [
      7.4167,
      43.7333
    ]
  },
  {
    "name": "Ulaanbaatar",
    "coords": [
      106.8832,
      47.9077
    ]
  },
  {
    "name": "Podgorica",
    "coords": [
      19.2636,
      42.4411
    ]
  },
  {
    "name": "Brades Estate",
    "coords": [
      -62.2106,
      16.7918
    ]
  },
  {
    "name": "Rabat",
    "coords": [
      -6.8326,
      34.0133
    ]
  },
  {
    "name": "Maputo",
    "coords": [
      32.5892,
      -25.9653
    ]
  },
  {
    "name": "Nay Pyi Taw",
    "coords": [
      96.1297,
      19.745
    ]
  },
  {
    "name": "Windhoek",
    "coords": [
      17.0832,
      -22.5594
    ]
  },
  {
    "name": "Nauru",
    "coords": [
      166.9112,
      -0.5308
    ]
  },
  {
    "name": "Kathmandu",
    "coords": [
      85.3206,
      27.7017
    ]
  },
  {
    "name": "Amsterdam",
    "coords": [
      4.8897,
      52.374
    ]
  },
  {
    "name": "Nouméa",
    "coords": [
      166.4572,
      -22.2763
    ]
  },
  {
    "name": "Wellington",
    "coords": [
      174.7756,
      -41.2866
    ]
  },
  {
    "name": "Managua",
    "coords": [
      -86.2504,
      12.1328
    ]
  },
  {
    "name": "Niamey",
    "coords": [
      2.1098,
      13.5137
    ]
  },
  {
    "name": "Abuja",
    "coords": [
      7.4898,
      9.0574
    ]
  },
  {
    "name": "Alofi",
    "coords": [
      -169.9213,
      -19.0585
    ]
  },
  {
    "name": "Saipan",
    "coords": [
      145.7545,
      15.2123
    ]
  },
  {
    "name": "Oslo",
    "coords": [
      10.7461,
      59.9127
    ]
  },
  {
    "name": "Masqat (Muscat)",
    "coords": [
      58.5922,
      23.6139
    ]
  },
  {
    "name": "Islamabad",
    "coords": [
      73.0594,
      33.7035
    ]
  },
  {
    "name": "Koror",
    "coords": [
      134.4789,
      7.3426
    ]
  },
  {
    "name": "Ciudad de Panamá (Panama City)",
    "coords": [
      -79.5196,
      8.9958
    ]
  },
  {
    "name": "Port Moresby",
    "coords": [
      147.1797,
      -9.4431
    ]
  },
  {
    "name": "Asunción",
    "coords": [
      -57.6359,
      -25.3007
    ]
  },
  {
    "name": "Lima",
    "coords": [
      -77.0282,
      -12.0432
    ]
  },
  {
    "name": "Manila",
    "coords": [
      120.9822,
      14.6042
    ]
  },
  {
    "name": "Warszawa (Warsaw)",
    "coords": [
      21.0118,
      52.2298
    ]
  },
  {
    "name": "Lisboa (Lisbon)",
    "coords": [
      -9.1399,
      38.7169
    ]
  },
  {
    "name": "San Juan",
    "coords": [
      -66.1057,
      18.4663
    ]
  },
  {
    "name": "Ad-Dawhah (Doha)",
    "coords": [
      51.5245,
      25.2747
    ]
  },
  {
    "name": "Seoul",
    "coords": [
      126.9778,
      37.5683
    ]
  },
  {
    "name": "Chişinău",
    "coords": [
      28.8575,
      47.0056
    ]
  },
  {
    "name": "Saint-Denis",
    "coords": [
      55.4504,
      -20.8823
    ]
  },
  {
    "name": "Bucuresti (Bucharest)",
    "coords": [
      26.1043,
      44.4328
    ]
  },
  {
    "name": "Moskva (Moscow)",
    "coords": [
      37.6218,
      55.755
    ]
  },
  {
    "name": "Kigali",
    "coords": [
      30.0579,
      -1.9474
    ]
  },
  {
    "name": "Jamestown",
    "coords": [
      -5.7168,
      -15.9387
    ]
  },
  {
    "name": "Basseterre",
    "coords": [
      -62.7261,
      17.2948
    ]
  },
  {
    "name": "Castries",
    "coords": [
      -60.991,
      14.006
    ]
  },
  {
    "name": "Saint-Pierre",
    "coords": [
      -56.1815,
      46.7738
    ]
  },
  {
    "name": "Kingstown",
    "coords": [
      -61.2248,
      13.1587
    ]
  },
  {
    "name": "Apia",
    "coords": [
      -171.7667,
      -13.8333
    ]
  },
  {
    "name": "San Marino",
    "coords": [
      12.45,
      43.9333
    ]
  },
  {
    "name": "São Tomé",
    "coords": [
      6.7273,
      0.3365
    ]
  },
  {
    "name": "Ar-Riyadh (Riyadh)",
    "coords": [
      46.7096,
      24.6905
    ]
  },
  {
    "name": "Dakar",
    "coords": [
      -17.4441,
      14.6937
    ]
  },
  {
    "name": "Beograd (Belgrade)",
    "coords": [
      20.4633,
      44.8176
    ]
  },
  {
    "name": "Victoria",
    "coords": [
      55.45,
      -4.6167
    ]
  },
  {
    "name": "Freetown",
    "coords": [
      -13.2299,
      8.484
    ]
  },
  {
    "name": "Singapore",
    "coords": [
      103.8501,
      1.2897
    ]
  },
  {
    "name": "Philipsburg",
    "coords": [
      -63.0458,
      18.026
    ]
  },
  {
    "name": "Bratislava",
    "coords": [
      17.1067,
      48.1482
    ]
  },
  {
    "name": "Ljubljana",
    "coords": [
      14.5051,
      46.0511
    ]
  },
  {
    "name": "Honiara",
    "coords": [
      159.95,
      -9.4333
    ]
  },
  {
    "name": "Muqdisho (Mogadishu)",
    "coords": [
      45.3435,
      2.0416
    ]
  },
  {
    "name": "Cape Town",
    "coords": [
      18.4232,
      -33.9258
    ]
  },
  {
    "name": "Juba",
    "coords": [
      31.5825,
      4.8517
    ]
  },
  {
    "name": "Madrid",
    "coords": [
      -3.7026,
      40.4165
    ]
  },
  {
    "name": "Colombo",
    "coords": [
      79.8478,
      6.9319
    ]
  },
  {
    "name": "Al-Quds[East Jerusalem]",
    "coords": [
      35.2339,
      31.7834
    ]
  },
  {
    "name": "Al-Khartum (Khartoum)",
    "coords": [
      32.5324,
      15.5518
    ]
  },
  {
    "name": "Paramaribo",
    "coords": [
      -55.1668,
      5.8664
    ]
  },
  {
    "name": "Mbabane",
    "coords": [
      31.1333,
      -26.3167
    ]
  },
  {
    "name": "Stockholm",
    "coords": [
      18.0649,
      59.3326
    ]
  },
  {
    "name": "Bern",
    "coords": [
      7.4474,
      46.9481
    ]
  },
  {
    "name": "Dimashq (Damascus)",
    "coords": [
      36.3084,
      33.5086
    ]
  },
  {
    "name": "Dushanbe",
    "coords": [
      68.7791,
      38.5358
    ]
  },
  {
    "name": "Skopje",
    "coords": [
      21.4333,
      42
    ]
  },
  {
    "name": "Krung Thep (Bangkok)",
    "coords": [
      100.5252,
      13.722
    ]
  },
  {
    "name": "Dili",
    "coords": [
      125.5668,
      -8.5601
    ]
  },
  {
    "name": "Lomé",
    "coords": [
      1.2123,
      6.1375
    ]
  },
  {
    "name": "Tokelau",
    "coords": [
      -171.25,
      -9.38
    ]
  },
  {
    "name": "Nuku'alofa",
    "coords": [
      -175.2032,
      -21.1394
    ]
  },
  {
    "name": "Port of Spain",
    "coords": [
      -61.5166,
      10.6662
    ]
  },
  {
    "name": "Tunis",
    "coords": [
      10.1658,
      36.819
    ]
  },
  {
    "name": "Ankara",
    "coords": [
      32.8543,
      39.9199
    ]
  },
  {
    "name": "Ashgabat",
    "coords": [
      58.3833,
      37.95
    ]
  },
  {
    "name": "Cockburn Town",
    "coords": [
      -71.1419,
      21.4612
    ]
  },
  {
    "name": "Funafuti",
    "coords": [
      179.1991,
      -8.5189
    ]
  },
  {
    "name": "Kampala",
    "coords": [
      32.5822,
      0.3163
    ]
  },
  {
    "name": "Kyiv (Kiev)",
    "coords": [
      30.5186,
      50.4454
    ]
  },
  {
    "name": "Abu Zaby (Abu Dhabi)",
    "coords": [
      54.3618,
      24.4648
    ]
  },
  {
    "name": "London",
    "coords": [
      -0.1257,
      51.5085
    ]
  },
  {
    "name": "Dodoma",
    "coords": [
      35.7395,
      -6.1722
    ]
  },
  {
    "name": "\"Washington",
    "coords": [
      38.8951,
      null
    ]
  },
  {
    "name": "Charlotte Amalie",
    "coords": [
      -64.9307,
      18.3419
    ]
  },
  {
    "name": "Montevideo",
    "coords": [
      -56.1674,
      -34.8335
    ]
  },
  {
    "name": "Tashkent",
    "coords": [
      69.2163,
      41.2647
    ]
  },
  {
    "name": "Port Vila",
    "coords": [
      168.3219,
      -17.7338
    ]
  },
  {
    "name": "Caracas",
    "coords": [
      -66.8792,
      10.488
    ]
  },
  {
    "name": "Hà Noi",
    "coords": [
      105.8412,
      21.0245
    ]
  },
  {
    "name": "Matu-Utu",
    "coords": [
      -176.1745,
      -13.2816
    ]
  },
  {
    "name": "El Aaiún",
    "coords": [
      -13.2014,
      27.1532
    ]
  },
  {
    "name": "Sana'a'",
    "coords": [
      44.2078,
      15.3531
    ]
  },
  {
    "name": "Lusaka",
    "coords": [
      28.2771,
      -15.4134
    ]
  },
  {
    "name": "Harare",
    "coords": [
      31.0539,
      -17.8294
    ]
  }
]

const postboxes = [
  {
    "name": "L18 755",
    "coords": [
      -2.9033161,
      53.3773784
    ]
  },
  {
    "name": "L3 5;L3 5000",
    "coords": [
      -2.9649132,
      53.4060542
    ]
  },
  {
    "name": "L16 620",
    "coords": [
      -2.8944605,
      53.3892959
    ]
  },
  {
    "name": "L25 391",
    "coords": [
      -2.8700014,
      53.3771152
    ]
  },
  {
    "name": "L25 980",
    "coords": [
      -2.869642,
      53.3824902
    ]
  },
  {
    "name": "L25 750",
    "coords": [
      -2.8742235,
      53.3848946
    ]
  },
  {
    "name": "L25 842",
    "coords": [
      -2.8838988,
      53.3866577
    ]
  },
  {
    "name": "L16 671",
    "coords": [
      -2.8869961,
      53.3932794
    ]
  },
  {
    "name": "L16 817",
    "coords": [
      -2.8886566,
      53.3882851
    ]
  },
  {
    "name": "L25 332",
    "coords": [
      -2.8795268,
      53.3812984
    ]
  },
  {
    "name": "L19 360",
    "coords": [
      -2.8965486,
      53.3540214
    ]
  },
  {
    "name": "L16 695",
    "coords": [
      -2.8874212,
      53.3990978
    ]
  },
  {
    "name": "L25 939",
    "coords": [
      -2.8563576,
      53.38833
    ]
  },
  {
    "name": "L19 489",
    "coords": [
      -2.885457,
      53.3511244
    ]
  },
  {
    "name": "L19 575",
    "coords": [
      -2.916534,
      53.3633789
    ]
  },
  {
    "name": "L19 736",
    "coords": [
      -2.9191961,
      53.3644
    ]
  },
  {
    "name": "L1 147",
    "coords": [
      -2.9769427,
      53.4035668
    ]
  },
  {
    "name": "L1 407",
    "coords": [
      -2.975581,
      53.4015077
    ]
  },
  {
    "name": "L1 432",
    "coords": [
      -2.9798811,
      53.4012523
    ]
  },
  {
    "name": "L1 100",
    "coords": [
      -2.9810162,
      53.404516
    ]
  },
  {
    "name": "L8 611",
    "coords": [
      -2.9490802,
      53.3931008
    ]
  },
  {
    "name": "L8 66",
    "coords": [
      -2.9494557,
      53.3956727
    ]
  },
  {
    "name": "L8 19",
    "coords": [
      -2.9569681,
      53.3841535
    ]
  },
  {
    "name": "L15 765",
    "coords": [
      -2.8994141,
      53.394168
    ]
  },
  {
    "name": "L7 578",
    "coords": [
      -2.9459267,
      53.39721
    ]
  },
  {
    "name": "L16 672",
    "coords": [
      -2.8955023,
      53.4024825
    ]
  },
  {
    "name": "L1 539",
    "coords": [
      -2.9802622,
      53.3972843
    ]
  },
  {
    "name": "L8 697",
    "coords": [
      -2.9715708,
      53.391193
    ]
  },
  {
    "name": "L17 64",
    "coords": [
      -2.9513419,
      53.3845216
    ]
  },
  {
    "name": "L17 159",
    "coords": [
      -2.9266522,
      53.3724065
    ]
  },
  {
    "name": "L17 164",
    "coords": [
      -2.9300844,
      53.3698552
    ]
  },
  {
    "name": "L15 387",
    "coords": [
      -2.9309809,
      53.3935024
    ]
  },
  {
    "name": "L15 448",
    "coords": [
      -2.9319789,
      53.3915809
    ]
  },
  {
    "name": "L15 258",
    "coords": [
      -2.9348557,
      53.3936899
    ]
  },
  {
    "name": "L15 444",
    "coords": [
      -2.9289832,
      53.3900377
    ]
  },
  {
    "name": "L15 603",
    "coords": [
      -2.9134962,
      53.3979374
    ]
  },
  {
    "name": "L18 497",
    "coords": [
      -2.9139536,
      53.3798816
    ]
  },
  {
    "name": "Post Box 248482522",
    "coords": [
      -2.8660263,
      53.4184149
    ]
  },
  {
    "name": "L17 14",
    "coords": [
      -2.9445053,
      53.377225
    ]
  },
  {
    "name": "L8 272",
    "coords": [
      -2.9483693,
      53.38725
    ]
  },
  {
    "name": "L17 605",
    "coords": [
      -2.93939,
      53.3751139
    ]
  },
  {
    "name": "L17 253",
    "coords": [
      -2.9503817,
      53.376666
    ]
  },
  {
    "name": "L2 469",
    "coords": [
      -2.9894438,
      53.4074838
    ]
  },
  {
    "name": "L8 706",
    "coords": [
      -2.9650356,
      53.3791053
    ]
  },
  {
    "name": "L8 101",
    "coords": [
      -2.9694793,
      53.381773
    ]
  },
  {
    "name": "L8 237",
    "coords": [
      -2.9652207,
      53.3815179
    ]
  },
  {
    "name": "L8 71",
    "coords": [
      -2.9626242,
      53.3831955
    ]
  },
  {
    "name": "L3 239",
    "coords": [
      -2.9935009,
      53.4078066
    ]
  },
  {
    "name": "L3 178",
    "coords": [
      -2.9856266,
      53.396459
    ]
  },
  {
    "name": "Post Box 288096880",
    "coords": [
      -2.9156302,
      53.4242206
    ]
  },
  {
    "name": "L8 69",
    "coords": [
      -2.9557103,
      53.3895856
    ]
  },
  {
    "name": "L8 953",
    "coords": [
      -2.961404,
      53.3907251
    ]
  },
  {
    "name": "L8 234",
    "coords": [
      -2.9599226,
      53.389116
    ]
  },
  {
    "name": "L16 766",
    "coords": [
      -2.892203,
      53.394425
    ]
  },
  {
    "name": "L3 107",
    "coords": [
      -2.9962714,
      53.4189257
    ]
  },
  {
    "name": "L1 30D",
    "coords": [
      -2.9711838,
      53.3989254
    ]
  },
  {
    "name": "L1 143",
    "coords": [
      -2.9707775,
      53.4015063
    ]
  },
  {
    "name": "L8 959",
    "coords": [
      -2.9737165,
      53.3828671
    ]
  },
  {
    "name": "L8 746",
    "coords": [
      -2.9682857,
      53.3893952
    ]
  },
  {
    "name": "L8 202",
    "coords": [
      -2.9683304,
      53.3970145
    ]
  },
  {
    "name": "L8 67",
    "coords": [
      -2.9684115,
      53.3872548
    ]
  },
  {
    "name": "L8 506",
    "coords": [
      -2.9710021,
      53.3852588
    ]
  },
  {
    "name": "L1 420",
    "coords": [
      -2.9788355,
      53.4033023
    ]
  },
  {
    "name": "L7 531",
    "coords": [
      -2.9669493,
      53.4032964
    ]
  },
  {
    "name": "L7 122",
    "coords": [
      -2.9600261,
      53.4031157
    ]
  },
  {
    "name": "L8 233",
    "coords": [
      -2.9597754,
      53.3925944
    ]
  },
  {
    "name": "L8 449",
    "coords": [
      -2.9565098,
      53.391619
    ]
  },
  {
    "name": "L8 18",
    "coords": [
      -2.9581442,
      53.3952462
    ]
  },
  {
    "name": "L8 261",
    "coords": [
      -2.9546997,
      53.3937714
    ]
  },
  {
    "name": "L6 213",
    "coords": [
      -2.943518,
      53.4309862
    ]
  },
  {
    "name": "L7 10",
    "coords": [
      -2.9509079,
      53.4035222
    ]
  },
  {
    "name": "L7 231",
    "coords": [
      -2.9447138,
      53.4054603
    ]
  },
  {
    "name": "L7 95",
    "coords": [
      -2.9445021,
      53.4121489
    ]
  },
  {
    "name": "L1 694",
    "coords": [
      -2.9742195,
      53.4020633
    ]
  },
  {
    "name": "L3 13D",
    "coords": [
      -2.9903782,
      53.3996484
    ]
  },
  {
    "name": "L1 12",
    "coords": [
      -2.9788811,
      53.4085186
    ]
  },
  {
    "name": "L2 217",
    "coords": [
      -2.9928278,
      53.4063316
    ]
  },
  {
    "name": "L1 103",
    "coords": [
      -2.9809425,
      53.4044709
    ]
  },
  {
    "name": "L1 342",
    "coords": [
      -2.9826082,
      53.4049588
    ]
  },
  {
    "name": "L1 1000;L1 1001",
    "coords": [
      -2.9816257,
      53.4061605
    ]
  },
  {
    "name": "L1 36",
    "coords": [
      -2.9815535,
      53.4060971
    ]
  },
  {
    "name": "L1 158",
    "coords": [
      -2.9862476,
      53.40733
    ]
  },
  {
    "name": "L2 742",
    "coords": [
      -2.987546,
      53.4067321
    ]
  },
  {
    "name": "L2 740",
    "coords": [
      -2.9876255,
      53.4066942
    ]
  },
  {
    "name": "L3 212;L3 1212",
    "coords": [
      -2.9926158,
      53.4066315
    ]
  },
  {
    "name": "L2 219",
    "coords": [
      -2.9926908,
      53.4066091
    ]
  },
  {
    "name": "L1 150",
    "coords": [
      -2.9735655,
      53.4006844
    ]
  },
  {
    "name": "L1 421",
    "coords": [
      -2.9858191,
      53.4049671
    ]
  },
  {
    "name": "L2 74;L2 7400",
    "coords": [
      -2.987431,
      53.4054004
    ]
  },
  {
    "name": "L1 20",
    "coords": [
      -2.9877686,
      53.4049633
    ]
  },
  {
    "name": "L17 582",
    "coords": [
      -2.9512801,
      53.3797537
    ]
  },
  {
    "name": "L8 60",
    "coords": [
      -2.973078,
      53.3949164
    ]
  },
  {
    "name": "L9 186",
    "coords": [
      -2.956245,
      53.4663969
    ]
  },
  {
    "name": "L9 927",
    "coords": [
      -2.9492606,
      53.4723506
    ]
  },
  {
    "name": "L9 409",
    "coords": [
      -2.9469818,
      53.4718703
    ]
  },
  {
    "name": "L3 105",
    "coords": [
      -2.9907469,
      53.4104068
    ]
  },
  {
    "name": "L2 91",
    "coords": [
      -2.9839544,
      53.4098036
    ]
  },
  {
    "name": "L3 4",
    "coords": [
      -2.9881819,
      53.4113896
    ]
  },
  {
    "name": "L7 28",
    "coords": [
      -2.9306328,
      53.4056335
    ]
  },
  {
    "name": "L16 594",
    "coords": [
      -2.895958,
      53.3969521
    ]
  },
  {
    "name": "L3 140",
    "coords": [
      -2.9961611,
      53.4052155
    ]
  },
  {
    "name": "L2 463",
    "coords": [
      -2.989476,
      53.407527
    ]
  },
  {
    "name": "L2 756",
    "coords": [
      -2.9923084,
      53.4057649
    ]
  },
  {
    "name": "L1 31",
    "coords": [
      -2.9877109,
      53.4049625
    ]
  },
  {
    "name": "L3 335",
    "coords": [
      -2.9924064,
      53.4095048
    ]
  },
  {
    "name": "L3 337",
    "coords": [
      -2.9923717,
      53.4094855
    ]
  },
  {
    "name": "L3 172D",
    "coords": [
      -2.9936185,
      53.4087252
    ]
  },
  {
    "name": "L2 579",
    "coords": [
      -2.991576,
      53.4074497
    ]
  },
  {
    "name": "L18 23",
    "coords": [
      -2.9206517,
      53.3768086
    ]
  },
  {
    "name": "L18 230",
    "coords": [
      -2.9105194,
      53.3875323
    ]
  },
  {
    "name": "L18 763",
    "coords": [
      -2.895249,
      53.3851444
    ]
  },
  {
    "name": "L8 114",
    "coords": [
      -2.9490192,
      53.3893124
    ]
  },
  {
    "name": "L3 7",
    "coords": [
      -2.9731997,
      53.4038188
    ]
  },
  {
    "name": "L3 617",
    "coords": [
      -2.9768725,
      53.4047454
    ]
  },
  {
    "name": "L15 120",
    "coords": [
      -2.9393732,
      53.3954472
    ]
  },
  {
    "name": "L17 301",
    "coords": [
      -2.9364503,
      53.3897238
    ]
  },
  {
    "name": "L15 459",
    "coords": [
      -2.9231036,
      53.389871
    ]
  },
  {
    "name": "L2 216",
    "coords": [
      -2.9891433,
      53.4084271
    ]
  },
  {
    "name": "L3 203",
    "coords": [
      -2.975163,
      53.4092215
    ]
  },
  {
    "name": "L3 500",
    "coords": [
      -2.9717298,
      53.4093206
    ]
  },
  {
    "name": "L3 83",
    "coords": [
      -2.967521,
      53.4087165
    ]
  },
  {
    "name": "L3 141",
    "coords": [
      -2.9731678,
      53.4109949
    ]
  },
  {
    "name": "L17 225",
    "coords": [
      -2.9410947,
      53.3787431
    ]
  },
  {
    "name": "L17 549",
    "coords": [
      -2.925025,
      53.3671188
    ]
  },
  {
    "name": "L7 450",
    "coords": [
      -2.9664915,
      53.4008781
    ]
  },
  {
    "name": "L8 250",
    "coords": [
      -2.9527199,
      53.3896247
    ]
  },
  {
    "name": "L3 73",
    "coords": [
      -2.9800299,
      53.3860012
    ]
  },
  {
    "name": "L3 63",
    "coords": [
      -2.9800186,
      53.3860046
    ]
  },
  {
    "name": "L8 414",
    "coords": [
      -2.968341,
      53.3996336
    ]
  },
  {
    "name": "L8 302",
    "coords": [
      -2.9667321,
      53.3951375
    ]
  },
  {
    "name": "L8 221",
    "coords": [
      -2.9443145,
      53.3925026
    ]
  },
  {
    "name": "L8 236",
    "coords": [
      -2.9799546,
      53.3874644
    ]
  },
  {
    "name": "L8 75",
    "coords": [
      -2.966456,
      53.3981962
    ]
  },
  {
    "name": "L8 76",
    "coords": [
      -2.9664236,
      53.3914206
    ]
  },
  {
    "name": "L8 62",
    "coords": [
      -2.9738084,
      53.3906684
    ]
  },
  {
    "name": "L8 59",
    "coords": [
      -2.9625773,
      53.3876676
    ]
  },
  {
    "name": "L16 22",
    "coords": [
      -2.8822413,
      53.3952636
    ]
  },
  {
    "name": "L7 522",
    "coords": [
      -2.9472598,
      53.404088
    ]
  },
  {
    "name": "L15 629",
    "coords": [
      -2.9048991,
      53.3964261
    ]
  },
  {
    "name": "L15 483",
    "coords": [
      -2.9293609,
      53.3961574
    ]
  },
  {
    "name": "L15 257",
    "coords": [
      -2.933631,
      53.4015244
    ]
  },
  {
    "name": "L15 609",
    "coords": [
      -2.9358196,
      53.3971937
    ]
  },
  {
    "name": "L13 199",
    "coords": [
      -2.9145159,
      53.4093675
    ]
  },
  {
    "name": "L3 520",
    "coords": [
      -2.977722,
      53.4147731
    ]
  },
  {
    "name": "L3 174",
    "coords": [
      -2.9993352,
      53.4146676
    ]
  },
  {
    "name": "L3 509",
    "coords": [
      -2.9998878,
      53.418015
    ]
  },
  {
    "name": "L4 574",
    "coords": [
      -2.9665337,
      53.432167
    ]
  },
  {
    "name": "L4 8",
    "coords": [
      -2.9540909,
      53.4280005
    ]
  },
  {
    "name": "L5 434",
    "coords": [
      -2.9584597,
      53.422987
    ]
  },
  {
    "name": "L5 328",
    "coords": [
      -2.9661426,
      53.4263914
    ]
  },
  {
    "name": "L19 588",
    "coords": [
      -2.9120601,
      53.3606962
    ]
  },
  {
    "name": "L4 504",
    "coords": [
      -2.9500492,
      53.4284895
    ]
  },
  {
    "name": "L4 774",
    "coords": [
      -2.9502348,
      53.4452178
    ]
  },
  {
    "name": "L4 464",
    "coords": [
      -2.9538444,
      53.432118
    ]
  },
  {
    "name": "L4 35",
    "coords": [
      -2.9752449,
      53.4361581
    ]
  },
  {
    "name": "L3 447",
    "coords": [
      -2.9744835,
      53.4141939
    ]
  },
  {
    "name": "L3 701",
    "coords": [
      -2.9905246,
      53.4181607
    ]
  },
  {
    "name": "L19 200",
    "coords": [
      -2.8940368,
      53.356728
    ]
  },
  {
    "name": "L6 3",
    "coords": [
      -2.9668207,
      53.4196338
    ]
  },
  {
    "name": "L25 936",
    "coords": [
      -2.8761084,
      53.3944979
    ]
  },
  {
    "name": "L25 911",
    "coords": [
      -2.8776169,
      53.3833006
    ]
  },
  {
    "name": "L5 115",
    "coords": [
      -2.9828782,
      53.4291016
    ]
  },
  {
    "name": "L8 308",
    "coords": [
      -2.9635224,
      53.3965506
    ]
  },
  {
    "name": "L4 660",
    "coords": [
      -2.9765822,
      53.4305956
    ]
  },
  {
    "name": "L12 61",
    "coords": [
      -2.8834681,
      53.4373251
    ]
  },
  {
    "name": "L5 96",
    "coords": [
      -2.9882697,
      53.4254979
    ]
  },
  {
    "name": "L1 1;L1 1002",
    "coords": [
      -2.981611,
      53.4061488
    ]
  },
  {
    "name": "L5 394",
    "coords": [
      -2.9922364,
      53.4305054
    ]
  },
  {
    "name": "L2 218",
    "coords": [
      -2.9891773,
      53.408451
    ]
  },
  {
    "name": "L7 508",
    "coords": [
      -2.9555517,
      53.4058416
    ]
  },
  {
    "name": "L2 422",
    "coords": [
      -2.9909475,
      53.4060848
    ]
  },
  {
    "name": "L2 426",
    "coords": [
      -2.9909958,
      53.406072
    ]
  },
  {
    "name": "L9 607",
    "coords": [
      -2.9555208,
      53.4703471
    ]
  },
  {
    "name": "L11 210",
    "coords": [
      -2.9124638,
      53.4490853
    ]
  },
  {
    "name": "L6 353",
    "coords": [
      -2.9358916,
      53.42393
    ]
  },
  {
    "name": "L12 185",
    "coords": [
      -2.8809768,
      53.4337043
    ]
  },
  {
    "name": "L6 15",
    "coords": [
      -2.964248,
      53.4156743
    ]
  },
  {
    "name": "L14 513",
    "coords": [
      -2.877506,
      53.4188221
    ]
  },
  {
    "name": "L6 511",
    "coords": [
      -2.9483656,
      53.4211344
    ]
  },
  {
    "name": "L19 362",
    "coords": [
      -2.9058274,
      53.3530062
    ]
  },
  {
    "name": "L2 322",
    "coords": [
      -2.989472,
      53.405298
    ]
  },
  {
    "name": "L3 94",
    "coords": [
      -2.9959094,
      53.405944
    ]
  },
  {
    "name": "L3 295",
    "coords": [
      -2.9817056,
      53.4125834
    ]
  },
  {
    "name": "L3 998",
    "coords": [
      -2.973903,
      53.3808043
    ]
  },
  {
    "name": "L3 999",
    "coords": [
      -2.9739325,
      53.3808297
    ]
  },
  {
    "name": "L4 48",
    "coords": [
      -2.9520396,
      53.4261913
    ]
  },
  {
    "name": "L4 113",
    "coords": [
      -2.9718681,
      53.4314987
    ]
  },
  {
    "name": "L4 117",
    "coords": [
      -2.9402718,
      53.4455542
    ]
  },
  {
    "name": "L4 157",
    "coords": [
      -2.9779368,
      53.4397
    ]
  },
  {
    "name": "L4 270",
    "coords": [
      -2.9708929,
      53.4417971
    ]
  },
  {
    "name": "L4 299",
    "coords": [
      -2.9581424,
      53.4306096
    ]
  },
  {
    "name": "L4 327",
    "coords": [
      -2.9732429,
      53.4332844
    ]
  },
  {
    "name": "L4 326",
    "coords": [
      -2.980759,
      53.4332768
    ]
  },
  {
    "name": "L4 339",
    "coords": [
      -2.9607195,
      53.4430533
    ]
  },
  {
    "name": "L4 431",
    "coords": [
      -2.9799302,
      53.4372996
    ]
  },
  {
    "name": "L4 462",
    "coords": [
      -2.9402185,
      53.4420681
    ]
  },
  {
    "name": "L4 472",
    "coords": [
      -2.9665151,
      53.441052
    ]
  },
  {
    "name": "L4 507",
    "coords": [
      -2.9442278,
      53.4380271
    ]
  },
  {
    "name": "L4 558",
    "coords": [
      -2.9688164,
      53.4447481
    ]
  },
  {
    "name": "L4 608",
    "coords": [
      -2.9612217,
      53.4450849
    ]
  },
  {
    "name": "L4 584",
    "coords": [
      -2.9587347,
      53.4281857
    ]
  },
  {
    "name": "L4 610",
    "coords": [
      -2.9757388,
      53.4424485
    ]
  },
  {
    "name": "L4 705",
    "coords": [
      -2.9731788,
      53.4471271
    ]
  },
  {
    "name": "L4 730",
    "coords": [
      -2.9557634,
      53.4443367
    ]
  },
  {
    "name": "L4 710",
    "coords": [
      -2.9458746,
      53.4405975
    ]
  },
  {
    "name": "L4 735",
    "coords": [
      -2.9504784,
      53.4352457
    ]
  },
  {
    "name": "L4 749",
    "coords": [
      -2.9376217,
      53.4390407
    ]
  },
  {
    "name": "L4 853",
    "coords": [
      -2.9503288,
      53.4400716
    ]
  },
  {
    "name": "L4 886",
    "coords": [
      -2.9432724,
      53.4439796
    ]
  },
  {
    "name": "L4 963",
    "coords": [
      -2.9710273,
      53.4390191
    ]
  },
  {
    "name": "L5 109",
    "coords": [
      -2.9731188,
      53.4228397
    ]
  },
  {
    "name": "L5 112",
    "coords": [
      -2.9860727,
      53.421451
    ]
  },
  {
    "name": "L5 116",
    "coords": [
      -2.9853363,
      53.4340548
    ]
  },
  {
    "name": "L5 138",
    "coords": [
      -2.9693934,
      53.4229008
    ]
  },
  {
    "name": "L5 168",
    "coords": [
      -2.9792056,
      53.4268904
    ]
  },
  {
    "name": "L5 273",
    "coords": [
      -2.984549,
      53.4260812
    ]
  },
  {
    "name": "L5 279",
    "coords": [
      -2.9979091,
      53.4299162
    ]
  },
  {
    "name": "L5 533",
    "coords": [
      -2.9621978,
      53.4237252
    ]
  },
  {
    "name": "L5 576",
    "coords": [
      -2.9845424,
      53.4319692
    ]
  },
  {
    "name": "L5 703",
    "coords": [
      -2.9866039,
      53.418593
    ]
  },
  {
    "name": "L9 27",
    "coords": [
      -2.9646066,
      53.4633261
    ]
  },
  {
    "name": "L9 274",
    "coords": [
      -2.96594,
      53.4500864
    ]
  },
  {
    "name": "L9 245",
    "coords": [
      -2.9700797,
      53.4628784
    ]
  },
  {
    "name": "L9 467",
    "coords": [
      -2.9613446,
      53.4615138
    ]
  },
  {
    "name": "L9 564",
    "coords": [
      -2.9585234,
      53.4643697
    ]
  },
  {
    "name": "L9 711",
    "coords": [
      -2.9694985,
      53.4655462
    ]
  },
  {
    "name": "L6 392",
    "coords": [
      -2.9490389,
      53.4144001
    ]
  },
  {
    "name": "L6 145",
    "coords": [
      -2.9445602,
      53.425184
    ]
  },
  {
    "name": "L6 238",
    "coords": [
      -2.9557715,
      53.4153708
    ]
  },
  {
    "name": "L6 251",
    "coords": [
      -2.9676459,
      53.4108452
    ]
  },
  {
    "name": "L6 262",
    "coords": [
      -2.9439305,
      53.422276
    ]
  },
  {
    "name": "L6 458",
    "coords": [
      -2.9459581,
      53.4199059
    ]
  },
  {
    "name": "L6 515",
    "coords": [
      -2.9484158,
      53.4168052
    ]
  },
  {
    "name": "L6 525",
    "coords": [
      -2.9401829,
      53.4227532
    ]
  },
  {
    "name": "L9 425",
    "coords": [
      -2.9329973,
      53.4691433
    ]
  },
  {
    "name": "L9 6",
    "coords": [
      -2.9369621,
      53.4696016
    ]
  },
  {
    "name": "L9 512",
    "coords": [
      -2.9414036,
      53.4684563
    ]
  },
  {
    "name": "L9 437",
    "coords": [
      -2.9446122,
      53.4679225
    ]
  },
  {
    "name": "L9 470",
    "coords": [
      -2.9504156,
      53.4664396
    ]
  },
  {
    "name": "L9 896",
    "coords": [
      -2.949148,
      53.4652524
    ]
  },
  {
    "name": "L9 82",
    "coords": [
      -2.9425635,
      53.4646471
    ]
  },
  {
    "name": "L9 725",
    "coords": [
      -2.9468492,
      53.4605166
    ]
  },
  {
    "name": "L9 727",
    "coords": [
      -2.9468673,
      53.4605178
    ]
  },
  {
    "name": "L9 719",
    "coords": [
      -2.9658749,
      53.4608104
    ]
  },
  {
    "name": "L9 798",
    "coords": [
      -2.9279131,
      53.4556635
    ]
  },
  {
    "name": "L9 827",
    "coords": [
      -2.9465154,
      53.4569603
    ]
  },
  {
    "name": "L9 759",
    "coords": [
      -2.9366653,
      53.4511023
    ]
  },
  {
    "name": "L9 406",
    "coords": [
      -2.9501607,
      53.4524276
    ]
  },
  {
    "name": "L9 25",
    "coords": [
      -2.9568293,
      53.4515055
    ]
  },
  {
    "name": "L9 601",
    "coords": [
      -2.9616105,
      53.4545731
    ]
  },
  {
    "name": "L9 478",
    "coords": [
      -2.9581395,
      53.4554264
    ]
  },
  {
    "name": "L9 111",
    "coords": [
      -2.9715533,
      53.4561409
    ]
  },
  {
    "name": "L7 16",
    "coords": [
      -2.9653234,
      53.4095263
    ]
  },
  {
    "name": "L7 58",
    "coords": [
      -2.9306338,
      53.4056723
    ]
  },
  {
    "name": "L7 86",
    "coords": [
      -2.9482956,
      53.4060607
    ]
  },
  {
    "name": "L7 126",
    "coords": [
      -2.9354578,
      53.4137927
    ]
  },
  {
    "name": "L7 118",
    "coords": [
      -2.9490606,
      53.398664
    ]
  },
  {
    "name": "L7 242",
    "coords": [
      -2.9483074,
      53.4086432
    ]
  },
  {
    "name": "L7 156",
    "coords": [
      -2.9564789,
      53.4116003
    ]
  },
  {
    "name": "L7 359",
    "coords": [
      -2.9367139,
      53.4105892
    ]
  },
  {
    "name": "L7 510",
    "coords": [
      -2.9302768,
      53.4103028
    ]
  },
  {
    "name": "L7 519",
    "coords": [
      -2.951371,
      53.4118754
    ]
  },
  {
    "name": "L7 682",
    "coords": [
      -2.9650066,
      53.4107388
    ]
  },
  {
    "name": "L7 536",
    "coords": [
      -2.9405676,
      53.41301
    ]
  },
  {
    "name": "L11 191",
    "coords": [
      -2.9256369,
      53.4406619
    ]
  },
  {
    "name": "L11 266",
    "coords": [
      -2.9132989,
      53.4383247
    ]
  },
  {
    "name": "L11 568",
    "coords": [
      -2.930958,
      53.4457033
    ]
  },
  {
    "name": "L11 640",
    "coords": [
      -2.9211059,
      53.4539619
    ]
  },
  {
    "name": "L11 962",
    "coords": [
      -2.9143022,
      53.4436763
    ]
  },
  {
    "name": "L11 970",
    "coords": [
      -2.9311001,
      53.4422708
    ]
  },
  {
    "name": "L11 707",
    "coords": [
      -2.931373,
      53.4370134
    ]
  },
  {
    "name": "L11 816",
    "coords": [
      -2.9090061,
      53.4569028
    ]
  },
  {
    "name": "L11 661",
    "coords": [
      -2.8939527,
      53.4604664
    ]
  },
  {
    "name": "L11 259",
    "coords": [
      -2.9011569,
      53.4584175
    ]
  },
  {
    "name": "L11 336",
    "coords": [
      -2.8983007,
      53.4573603
    ]
  },
  {
    "name": "L11 839",
    "coords": [
      -2.902021,
      53.4531271
    ]
  },
  {
    "name": "L11 173",
    "coords": [
      -2.9031991,
      53.4512397
    ]
  },
  {
    "name": "L9 854",
    "coords": [
      -2.9639366,
      53.4666039
    ]
  },
  {
    "name": "L10 131",
    "coords": [
      -2.9295709,
      53.4666192
    ]
  },
  {
    "name": "L10 528",
    "coords": [
      -2.9234083,
      53.4694087
    ]
  },
  {
    "name": "L8 51",
    "coords": [
      -2.9622073,
      53.3928832
    ]
  },
  {
    "name": "L8 795",
    "coords": [
      -2.9815297,
      53.3909676
    ]
  },
  {
    "name": "Post Box 9659740585",
    "coords": [
      -2.9344092,
      53.4349579
    ]
  },
  {
    "name": "L14 630",
    "coords": [
      -2.8727235,
      53.4286126
    ]
  }
]

const airports = [
  { name: "London Heathrow Airport", coords: [-0.454295, 51.470020] },
  { name: "London Gatwick Airport", coords: [-0.182152, 51.153629] },
  { name: "Manchester Airport", coords: [-2.277543, 53.355350] },
  { name: "London Stansted Airport", coords: [0.240006, 51.885000] },
  { name: "London Luton Airport", coords: [-0.372940, 51.875458] },
  { name: "Edinburgh Airport", coords: [-3.363355, 55.948547] },
  { name: "Birmingham Airport", coords: [-1.743507, 52.452381] },
  { name: "Bristol Airport", coords: [-2.719090, 51.382702] },
  { name: "Glasgow Airport", coords: [-4.433177, 55.865101] },
  { name: "Belfast International Airport", coords: [-6.215830, 54.657501] },
  { name: "Newcastle International Airport", coords: [-1.689577, 55.037958] },
  { name: "Liverpool John Lennon Airport", coords: [-2.849720, 53.333599] },
  { name: "Leeds Bradford Airport", coords: [-1.660570, 53.865898] },
  { name: "East Midlands Airport", coords: [-1.328056, 52.831111] },
  { name: "London City Airport", coords: [0.055278, 51.505299] },
  { name: "Aberdeen Airport", coords: [-2.197778, 57.201944] },
  { name: "Belfast City Airport", coords: [-5.8725, 54.618056] },
  { name: "Jersey Airport", coords: [-2.195508, 49.207974] },
  { name: "Bournemouth Airport", coords: [-1.842500, 50.779999] },
  { name: "Cardiff Airport", coords: [-3.343333, 51.396667] },
  { name: "Inverness Airport", coords: [-4.056944, 57.5425] },
  { name: "Southampton Airport", coords: [-1.357222, 50.950278] },
  { name: "Guernsey Airport", coords: [-2.601944, 49.435] },
  { name: "Isle of Man Airport", coords: [-4.623889, 54.083333] },
  { name: "Glasgow Prestwick Airport", coords: [-4.610395, 55.511234] }
]

const stadiums = [
  { name: "Old Trafford", coords: [-2.2913, 53.4631] }, //Man U
  { name: "Tottenham Hotspur Stadium", coords: [-0.0664, 51.6043] }, //Tottenham
  { name: "Anfield", coords: [-2.9608, 53.4308] }, //Liverpool
  { name: "London Stadium", coords: [-0.017136, 51.538811] }, //West Ham
  { name: "Etihad Stadium", coords: [-2.2004, 53.4831] }, //Man City
  { name: "Stamford Bridge", coords: [-0.1909, 51.4817] }, //Chelsea
  { name: "Emirates Stadium", coords: [-0.1086, 51.5549] }, //Arsenal
  { name: "Villa Park", coords: [-1.885249, 52.509090] }, //Aston Villa
  { name: "St James' Park", coords: [-1.6216, 54.9756] }, //Newcastle
  { name: "Goodison Park", coords: [-2.9666, 53.4388] }, //Everton
  { name: "Selhurst Park", coords: [-0.0855, 51.3983] }, //Crystal Palace
  { name: "Molineux Stadium", coords: [-2.130924, 52.590382] }, //Wolverhampton
  { name: "Craven Cottage", coords: [-0.2217, 51.4748] }, //Fulham
  { name: "King Power Stadium", coords: [-1.1427, 52.6204] }, //Leicester
  { name: "American Express Stadium", coords: [-0.084357, 50.861782] }, //Brighton
  { name: "Brentford Community Stadium", coords: [-0.289048, 51.490715] }, //Brentford
  { name: "Vitality Stadium", coords: [-1.8383, 50.7352] }, //Bournemouth
  { name: "The City Ground", coords: [-1.1327, 52.9399] }, //Nottingham Forest
  { name: "St Mary's Stadium", coords: [-1.3909, 50.9058] }, //Southampton
  { name: "Portman Road", coords: [1.1451, 52.0549] }, //Ipswich

  { name: "Turf Moor", coords: [-2.2300, 53.7890] }, //Burnley
  { name: "Elland Road", coords: [-1.5722, 53.777782] }, //Leeds
  { name: "Bramall Lane", coords: [-1.4707, 53.3703] } //Sheffield
]

const stations = [
  {
    "name": "Swindon",
    "coords": [
      -1.7858762,
      51.5656526
    ]
  },
  {
    "name": "Royston",
    "coords": [
      -0.0269749,
      52.0532089
    ]
  },
  {
    "name": "Beaulieu Road",
    "coords": [
      -1.5049707,
      50.8550478
    ]
  },
  {
    "name": "Sway",
    "coords": [
      -1.6099505,
      50.7847131
    ]
  },
  {
    "name": "New Milton",
    "coords": [
      -1.6576697,
      50.7557623
    ]
  },
  {
    "name": "Canley",
    "coords": [
      -1.5475333,
      52.3993806
    ]
  },
  {
    "name": "Rhyl",
    "coords": [
      -3.4887917,
      53.3181979
    ]
  },
  {
    "name": "Sandal and Agbrigg",
    "coords": [
      -1.480623,
      53.6628109
    ]
  },
  {
    "name": "Wellingborough",
    "coords": [
      -0.6762814,
      52.3037832
    ]
  },
  {
    "name": "Ulleskelf",
    "coords": [
      -1.2143782,
      53.853331
    ]
  },
  {
    "name": "Adwick",
    "coords": [
      -1.1800228,
      53.5720808
    ]
  },
  {
    "name": "Elsecar",
    "coords": [
      -1.427499,
      53.4986826
    ]
  },
  {
    "name": "Dodworth",
    "coords": [
      -1.5320346,
      53.5442059
    ]
  },
  {
    "name": "Bursledon",
    "coords": [
      -1.305111,
      50.8835729
    ]
  },
  {
    "name": "Walton-on-Thames",
    "coords": [
      -0.4143441,
      51.3729077
    ]
  },
  {
    "name": "Erdington",
    "coords": [
      -1.8392253,
      52.5285663
    ]
  },
  {
    "name": "Chester Road",
    "coords": [
      -1.8324576,
      52.5357946
    ]
  },
  {
    "name": "Sutton Coldfield",
    "coords": [
      -1.8252548,
      52.5647207
    ]
  },
  {
    "name": "Gravelly Hill",
    "coords": [
      -1.8527077,
      52.5153876
    ]
  },
  {
    "name": "Ardwick",
    "coords": [
      -2.2132093,
      53.4711613
    ]
  },
  {
    "name": "Romsey",
    "coords": [
      -1.4932507,
      50.9927043
    ]
  },
  {
    "name": "Mottisfont & Dunbridge",
    "coords": [
      -1.5468958,
      51.033863
    ]
  },
  {
    "name": "Shepherd's Bush Market",
    "coords": [
      -0.2263134,
      51.50607
    ]
  },
  {
    "name": "Maidenhead",
    "coords": [
      -0.722846,
      51.5183532
    ]
  },
  {
    "name": "West Drayton",
    "coords": [
      -0.4718293,
      51.5097364
    ]
  },
  {
    "name": "Finchley Central",
    "coords": [
      -0.192318,
      51.6008355
    ]
  },
  {
    "name": "Hedge End",
    "coords": [
      -1.2944932,
      50.9323988
    ]
  },
  {
    "name": "Butlers Lane",
    "coords": [
      -1.8383384,
      52.5925882
    ]
  },
  {
    "name": "Kettering",
    "coords": [
      -0.7320452,
      52.3934872
    ]
  },
  {
    "name": "Ryde St John's Road",
    "coords": [
      -1.1566159,
      50.7241835
    ]
  },
  {
    "name": "Brading",
    "coords": [
      -1.1386031,
      50.6783048
    ]
  },
  {
    "name": "Smallbrook Junction",
    "coords": [
      -1.1549982,
      50.7114652
    ]
  },
  {
    "name": "Havenstreet",
    "coords": [
      -1.2146336,
      50.7054566
    ]
  },
  {
    "name": "Dean",
    "coords": [
      -1.6343927,
      51.042415
    ]
  },
  {
    "name": "Lydney",
    "coords": [
      -2.5304821,
      51.7142815
    ]
  },
  {
    "name": "Botley",
    "coords": [
      -1.2590525,
      50.9163612
    ]
  },
  {
    "name": "Culham",
    "coords": [
      -1.2365761,
      51.6538921
    ]
  },
  {
    "name": "Appleford",
    "coords": [
      -1.2424741,
      51.6394882
    ]
  },
  {
    "name": "St Mary Cray",
    "coords": [
      0.1057186,
      51.394738
    ]
  },
  {
    "name": "Hamble",
    "coords": [
      -1.3289942,
      50.8712423
    ]
  },
  {
    "name": "Llandudno Junction",
    "coords": [
      -3.8086287,
      53.2838623
    ]
  },
  {
    "name": "Flint",
    "coords": [
      -3.1322555,
      53.249742
    ]
  },
  {
    "name": "Shotton Low Level",
    "coords": [
      -3.0379443,
      53.214035
    ]
  },
  {
    "name": "Acton Bridge",
    "coords": [
      -2.602769,
      53.2662973
    ]
  },
  {
    "name": "Carlisle",
    "coords": [
      -2.9329194,
      54.8905816
    ]
  },
  {
    "name": "Carluke",
    "coords": [
      -3.8489042,
      55.731118
    ]
  },
  {
    "name": "Newton",
    "coords": [
      -4.1332654,
      55.818827
    ]
  },
  {
    "name": "Combe",
    "coords": [
      -1.3939977,
      51.8326251
    ]
  },
  {
    "name": "Shipton",
    "coords": [
      -1.5926475,
      51.8659832
    ]
  },
  {
    "name": "Finstock",
    "coords": [
      -1.4696045,
      51.8528179
    ]
  },
  {
    "name": "Portchester",
    "coords": [
      -1.125024,
      50.8488504
    ]
  },
  {
    "name": "Alresford",
    "coords": [
      -1.1610285,
      51.0883048
    ]
  },
  {
    "name": "Pickering",
    "coords": [
      -0.7784454,
      54.2472695
    ]
  },
  {
    "name": "Levisham",
    "coords": [
      -0.7443884,
      54.3082776
    ]
  },
  {
    "name": "Newton Dale Halt",
    "coords": [
      -0.7175713,
      54.3424692
    ]
  },
  {
    "name": "Goathland",
    "coords": [
      -0.7120943,
      54.4005905
    ]
  },
  {
    "name": "Grosmont",
    "coords": [
      -0.7248771,
      54.4366677
    ]
  },
  {
    "name": "Settle",
    "coords": [
      -2.2808342,
      54.0669551
    ]
  },
  {
    "name": "Water Orton",
    "coords": [
      -1.743655,
      52.5185309
    ]
  },
  {
    "name": "Mill Hill Broadway",
    "coords": [
      -0.2488001,
      51.6126689
    ]
  },
  {
    "name": "Catford",
    "coords": [
      -0.0261521,
      51.4444696
    ]
  },
  {
    "name": "Cosham",
    "coords": [
      -1.0673875,
      50.8418849
    ]
  },
  {
    "name": "Ellesmere Port",
    "coords": [
      -2.8960456,
      53.2821114
    ]
  },
  {
    "name": "Corfe Castle",
    "coords": [
      -2.0549484,
      50.6382716
    ]
  },
  {
    "name": "Harman's Cross",
    "coords": [
      -2.0265551,
      50.6197911
    ]
  },
  {
    "name": "Herston Halt",
    "coords": [
      -1.9804011,
      50.6130644
    ]
  },
  {
    "name": "Littlehaven",
    "coords": [
      -0.3085216,
      51.0793769
    ]
  },
  {
    "name": "Faygate",
    "coords": [
      -0.2630067,
      51.0959458
    ]
  },
  {
    "name": "Ifield",
    "coords": [
      -0.2144647,
      51.1155376
    ]
  },
  {
    "name": "Gatwick Airport",
    "coords": [
      -0.1609224,
      51.1567346
    ]
  },
  {
    "name": "Hassocks",
    "coords": [
      -0.1457168,
      50.9247179
    ]
  },
  {
    "name": "Islip",
    "coords": [
      -1.2376466,
      51.826163
    ]
  },
  {
    "name": "Bicester Village",
    "coords": [
      -1.1493759,
      51.8924126
    ]
  },
  {
    "name": "Sloane Square",
    "coords": [
      -0.1558767,
      51.4922264
    ]
  },
  {
    "name": "Wokingham",
    "coords": [
      -0.8429813,
      51.4119036
    ]
  },
  {
    "name": "Blackwater",
    "coords": [
      -0.776776,
      51.3315657
    ]
  },
  {
    "name": "Ascott-under-Wychwood",
    "coords": [
      -1.5639687,
      51.8674576
    ]
  },
  {
    "name": "Cheltenham Racecourse",
    "coords": [
      -2.0678139,
      51.9243306
    ]
  },
  {
    "name": "Netley",
    "coords": [
      -1.3416249,
      50.8749
    ]
  },
  {
    "name": "Helsby",
    "coords": [
      -2.7711482,
      53.2752889
    ]
  },
  {
    "name": "Patchway",
    "coords": [
      -2.5623447,
      51.5258271
    ]
  },
  {
    "name": "Hinton Admiral",
    "coords": [
      -1.7136258,
      50.752603
    ]
  },
  {
    "name": "Yate",
    "coords": [
      -2.4321734,
      51.5413993
    ]
  },
  {
    "name": "Fratton",
    "coords": [
      -1.0732559,
      50.7964461
    ]
  },
  {
    "name": "Bicester North",
    "coords": [
      -1.1499566,
      51.9034655
    ]
  },
  {
    "name": "Gomshall",
    "coords": [
      -0.4422487,
      51.2192418
    ]
  },
  {
    "name": "Trowbridge",
    "coords": [
      -2.2143313,
      51.3200055
    ]
  },
  {
    "name": "Ashurst",
    "coords": [
      0.1526024,
      51.1284231
    ]
  },
  {
    "name": "Cyprus",
    "coords": [
      0.0639692,
      51.5084776
    ]
  },
  {
    "name": "Wimbledon",
    "coords": [
      -0.2052902,
      51.4220721
    ]
  },
  {
    "name": "Caldicot",
    "coords": [
      -2.7597685,
      51.5845063
    ]
  },
  {
    "name": "Stamford",
    "coords": [
      -0.4800873,
      52.647832
    ]
  },
  {
    "name": "Mansion House",
    "coords": [
      -0.0952228,
      51.5118924
    ]
  },
  {
    "name": "Narborough",
    "coords": [
      -1.2028067,
      52.5713504
    ]
  },
  {
    "name": "Oxenhope",
    "coords": [
      -1.9524816,
      53.8149218
    ]
  },
  {
    "name": "Northolt Park",
    "coords": [
      -0.3592754,
      51.5575208
    ]
  },
  {
    "name": "North Harrow",
    "coords": [
      -0.3631762,
      51.5851618
    ]
  },
  {
    "name": "Penshurst",
    "coords": [
      0.1734867,
      51.1972229
    ]
  },
  {
    "name": "Pokesdown",
    "coords": [
      -1.8267335,
      50.7311874
    ]
  },
  {
    "name": "Parkstone",
    "coords": [
      -1.9478482,
      50.7229607
    ]
  },
  {
    "name": "Branksome",
    "coords": [
      -1.9196847,
      50.7269847
    ]
  },
  {
    "name": "Poole",
    "coords": [
      -1.9836745,
      50.7189814
    ]
  },
  {
    "name": "Holton Heath",
    "coords": [
      -2.077724,
      50.7114998
    ]
  },
  {
    "name": "Milford Haven",
    "coords": [
      -5.0414117,
      51.7157559
    ]
  },
  {
    "name": "Johnston",
    "coords": [
      -4.9968493,
      51.7564283
    ]
  },
  {
    "name": "Haverfordwest",
    "coords": [
      -4.960232,
      51.8026795
    ]
  },
  {
    "name": "Fishguard Harbour",
    "coords": [
      -4.9862275,
      52.0106512
    ]
  },
  {
    "name": "Styal",
    "coords": [
      -2.2404522,
      53.3485037
    ]
  },
  {
    "name": "Chirk",
    "coords": [
      -3.06615,
      52.9332472
    ]
  },
  {
    "name": "Ruabon",
    "coords": [
      -3.0433247,
      52.9872119
    ]
  },
  {
    "name": "Bourne End",
    "coords": [
      -0.710798,
      51.5769144
    ]
  },
  {
    "name": "Clarbeston Road",
    "coords": [
      -4.8821672,
      51.8517201
    ]
  },
  {
    "name": "Harrow & Wealdstone",
    "coords": [
      -0.3348748,
      51.5922178
    ]
  },
  {
    "name": "Kings Langley",
    "coords": [
      -0.4378216,
      51.7064134
    ]
  },
  {
    "name": "Clunderwen",
    "coords": [
      -4.7310195,
      51.8401054
    ]
  },
  {
    "name": "Whitland",
    "coords": [
      -4.6149893,
      51.818025
    ]
  },
  {
    "name": "Skegness",
    "coords": [
      0.3345214,
      53.1431867
    ]
  },
  {
    "name": "Havenhouse",
    "coords": [
      0.2729912,
      53.1146157
    ]
  },
  {
    "name": "Wainfleet",
    "coords": [
      0.2345366,
      53.105126
    ]
  },
  {
    "name": "Boston",
    "coords": [
      -0.0313195,
      52.978108
    ]
  },
  {
    "name": "Reigate",
    "coords": [
      -0.2038369,
      51.2418815
    ]
  },
  {
    "name": "Kilgetty",
    "coords": [
      -4.7145215,
      51.7323317
    ]
  },
  {
    "name": "Tenby",
    "coords": [
      -4.7066919,
      51.6729277
    ]
  },
  {
    "name": "Penally",
    "coords": [
      -4.7219504,
      51.6589346
    ]
  },
  {
    "name": "Manorbier",
    "coords": [
      -4.7927577,
      51.6602508
    ]
  },
  {
    "name": "Lamphey",
    "coords": [
      -4.8728813,
      51.6671229
    ]
  },
  {
    "name": "Pembroke",
    "coords": [
      -4.9064413,
      51.673007
    ]
  },
  {
    "name": "Wallyford",
    "coords": [
      -3.0147883,
      55.9404591
    ]
  },
  {
    "name": "Longniddry",
    "coords": [
      -2.8886468,
      55.9762365
    ]
  },
  {
    "name": "Drem",
    "coords": [
      -2.7853021,
      56.0051337
    ]
  },
  {
    "name": "Dunbar",
    "coords": [
      -2.5136844,
      55.9982113
    ]
  },
  {
    "name": "North Ealing",
    "coords": [
      -0.2887523,
      51.5174885
    ]
  },
  {
    "name": "St Albans Abbey",
    "coords": [
      -0.342528,
      51.7446585
    ]
  },
  {
    "name": "Park Street",
    "coords": [
      -0.3400687,
      51.7256643
    ]
  },
  {
    "name": "Bricket Wood",
    "coords": [
      -0.3591176,
      51.7055662
    ]
  },
  {
    "name": "Garston",
    "coords": [
      -0.3818122,
      51.6865229
    ]
  },
  {
    "name": "Watford North",
    "coords": [
      -0.3902879,
      51.6750417
    ]
  },
  {
    "name": "How Wood",
    "coords": [
      -0.3446753,
      51.7176358
    ]
  },
  {
    "name": "Carmarthen",
    "coords": [
      -4.3057649,
      51.8533058
    ]
  },
  {
    "name": "Alnmouth",
    "coords": [
      -1.6367716,
      55.392793
    ]
  },
  {
    "name": "Berwick-upon-Tweed",
    "coords": [
      -2.0105423,
      55.7745555
    ]
  },
  {
    "name": "Chathill",
    "coords": [
      -1.7066521,
      55.5367261
    ]
  },
  {
    "name": "Loughborough Central",
    "coords": [
      -1.1959184,
      52.7690651
    ]
  },
  {
    "name": "Pembrey and Burry Port",
    "coords": [
      -4.2489624,
      51.6840593
    ]
  },
  {
    "name": "Kidwelly",
    "coords": [
      -4.3176545,
      51.7343994
    ]
  },
  {
    "name": "Llanelli",
    "coords": [
      -4.1610727,
      51.6737797
    ]
  },
  {
    "name": "Ferryside",
    "coords": [
      -4.3695963,
      51.7682462
    ]
  },
  {
    "name": "Port Talbot Parkway",
    "coords": [
      -3.7817162,
      51.5924394
    ]
  },
  {
    "name": "Briton Ferry",
    "coords": [
      -3.8199507,
      51.6381644
    ]
  },
  {
    "name": "Bridgend",
    "coords": [
      -3.5752586,
      51.5071098
    ]
  },
  {
    "name": "Pyle",
    "coords": [
      -3.6976297,
      51.5253321
    ]
  },
  {
    "name": "Llanharan",
    "coords": [
      -3.4416549,
      51.5376296
    ]
  },
  {
    "name": "Pontyclun",
    "coords": [
      -3.3920553,
      51.5238395
    ]
  },
  {
    "name": "Aberystwyth",
    "coords": [
      -4.0815468,
      52.4138938
    ]
  },
  {
    "name": "Borth",
    "coords": [
      -4.0496662,
      52.4909831
    ]
  },
  {
    "name": "Cyffordd Dyfi / Dovey Junction",
    "coords": [
      -3.9237919,
      52.564764
    ]
  },
  {
    "name": "Machynlleth",
    "coords": [
      -3.8548131,
      52.5951801
    ]
  },
  {
    "name": "Brighton",
    "coords": [
      -0.1407393,
      50.8288602
    ]
  },
  {
    "name": "Caersws",
    "coords": [
      -3.4325855,
      52.5161538
    ]
  },
  {
    "name": "Newtown",
    "coords": [
      -3.3114829,
      52.5122378
    ]
  },
  {
    "name": "Welshpool",
    "coords": [
      -3.1394424,
      52.6580323
    ]
  },
  {
    "name": "Dullingham",
    "coords": [
      0.3658792,
      52.2015139
    ]
  },
  {
    "name": "MetroCentre",
    "coords": [
      -1.664932,
      54.9588888
    ]
  },
  {
    "name": "Armathwaite",
    "coords": [
      -2.7720801,
      54.809435
    ]
  },
  {
    "name": "Lazonby and Kirkoswald",
    "coords": [
      -2.7036908,
      54.7508153
    ]
  },
  {
    "name": "Langwathby",
    "coords": [
      -2.6635574,
      54.6943632
    ]
  },
  {
    "name": "Garsdale",
    "coords": [
      -2.3263682,
      54.3214617
    ]
  },
  {
    "name": "Dent",
    "coords": [
      -2.3636343,
      54.2825661
    ]
  },
  {
    "name": "Ribblehead",
    "coords": [
      -2.3603709,
      54.2054988
    ]
  },
  {
    "name": "Horton-in-Ribblesdale",
    "coords": [
      -2.3020982,
      54.149217
    ]
  },
  {
    "name": "Preston Park",
    "coords": [
      -0.1553443,
      50.8460091
    ]
  },
  {
    "name": "Baldock",
    "coords": [
      -0.1875624,
      51.9929714
    ]
  },
  {
    "name": "Hatton",
    "coords": [
      -1.6729068,
      52.2952126
    ]
  },
  {
    "name": "Lapworth",
    "coords": [
      -1.7257883,
      52.3417839
    ]
  },
  {
    "name": "Dorridge",
    "coords": [
      -1.7527829,
      52.3718817
    ]
  },
  {
    "name": "Widney Manor",
    "coords": [
      -1.7743426,
      52.3962802
    ]
  },
  {
    "name": "Solihull",
    "coords": [
      -1.7888672,
      52.4146286
    ]
  },
  {
    "name": "Bordesley",
    "coords": [
      -1.877661,
      52.4722127
    ]
  },
  {
    "name": "Birmingham Snow Hill",
    "coords": [
      -1.8992405,
      52.4834796
    ]
  },
  {
    "name": "Rugby",
    "coords": [
      -1.2502743,
      52.3790353
    ]
  },
  {
    "name": "Watford High Street",
    "coords": [
      -0.3924982,
      51.6522296
    ]
  },
  {
    "name": "Fenny Stratford",
    "coords": [
      -0.7179834,
      51.9999805
    ]
  },
  {
    "name": "Staveley",
    "coords": [
      -2.8190719,
      54.3756184
    ]
  },
  {
    "name": "Haddenham and Thame Parkway",
    "coords": [
      -0.9421714,
      51.771088
    ]
  },
  {
    "name": "Saunderton",
    "coords": [
      -0.8254447,
      51.6759885
    ]
  },
  {
    "name": "Gerrards Cross",
    "coords": [
      -0.5549256,
      51.5887853
    ]
  },
  {
    "name": "Denham Golf Club",
    "coords": [
      -0.5181943,
      51.5806166
    ]
  },
  {
    "name": "Denham",
    "coords": [
      -0.4975242,
      51.5787242
    ]
  },
  {
    "name": "Ruislip Gardens",
    "coords": [
      -0.4104614,
      51.5606573
    ]
  },
  {
    "name": "Tipton",
    "coords": [
      -2.0658025,
      52.530539
    ]
  },
  {
    "name": "Wendover",
    "coords": [
      -0.7476905,
      51.7618168
    ]
  },
  {
    "name": "Great Missenden",
    "coords": [
      -0.7092458,
      51.7033896
    ]
  },
  {
    "name": "Smethwick Rolfe Street",
    "coords": [
      -1.9701934,
      52.4964344
    ]
  },
  {
    "name": "South Kenton",
    "coords": [
      -0.3085107,
      51.5703076
    ]
  },
  {
    "name": "North Wembley",
    "coords": [
      -0.3038698,
      51.5624017
    ]
  },
  {
    "name": "Lichfield City",
    "coords": [
      -1.8251247,
      52.6802201
    ]
  },
  {
    "name": "Rugeley Town",
    "coords": [
      -1.9371251,
      52.7545973
    ]
  },
  {
    "name": "Minffordd",
    "coords": [
      -4.0849642,
      52.9260183
    ]
  },
  {
    "name": "Talsarnau",
    "coords": [
      -4.068266,
      52.9044005
    ]
  },
  {
    "name": "Pensarn",
    "coords": [
      -4.1111125,
      52.830309
    ]
  },
  {
    "name": "Dyffryn Ardudwy",
    "coords": [
      -4.1046518,
      52.7883162
    ]
  },
  {
    "name": "Morfa Mawddach",
    "coords": [
      -4.0316284,
      52.7077447
    ]
  },
  {
    "name": "Fairbourne",
    "coords": [
      -4.0490344,
      52.6959804
    ]
  },
  {
    "name": "Llwyngwril",
    "coords": [
      -4.0877711,
      52.6668265
    ]
  },
  {
    "name": "Aberdyfi",
    "coords": [
      -4.0563163,
      52.5443486
    ]
  },
  {
    "name": "Penhelyg",
    "coords": [
      -4.0352142,
      52.5456566
    ]
  },
  {
    "name": "Alsager",
    "coords": [
      -2.2988432,
      53.0930252
    ]
  },
  {
    "name": "Barnt Green",
    "coords": [
      -1.9924997,
      52.3609702
    ]
  },
  {
    "name": "Droitwich Spa",
    "coords": [
      -2.1583391,
      52.2683805
    ]
  },
  {
    "name": "Penkridge",
    "coords": [
      -2.1193938,
      52.7236965
    ]
  },
  {
    "name": "Bescot Stadium",
    "coords": [
      -1.9909844,
      52.5630075
    ]
  },
  {
    "name": "Tame Bridge Parkway",
    "coords": [
      -1.9759632,
      52.5522427
    ]
  },
  {
    "name": "Perry Barr",
    "coords": [
      -1.9023511,
      52.516406
    ]
  },
  {
    "name": "Arlesey",
    "coords": [
      -0.266464,
      52.0258212
    ]
  },
  {
    "name": "Doleham",
    "coords": [
      0.6100124,
      50.9186255
    ]
  },
  {
    "name": "Hastings",
    "coords": [
      0.5768255,
      50.8583028
    ]
  },
  {
    "name": "Weston Milton",
    "coords": [
      -2.9422803,
      51.3485177
    ]
  },
  {
    "name": "Yatton",
    "coords": [
      -2.8277046,
      51.3908826
    ]
  },
  {
    "name": "Weston-super-Mare",
    "coords": [
      -2.9718305,
      51.344496
    ]
  },
  {
    "name": "Polsloe Bridge",
    "coords": [
      -3.5021627,
      50.7313015
    ]
  },
  {
    "name": "Topsham",
    "coords": [
      -3.4637875,
      50.685645
    ]
  },
  {
    "name": "Exton",
    "coords": [
      -3.4440694,
      50.6680325
    ]
  },
  {
    "name": "Lympstone Commando",
    "coords": [
      -3.4409796,
      50.6625937
    ]
  },
  {
    "name": "Exmouth",
    "coords": [
      -3.4149723,
      50.6215885
    ]
  },
  {
    "name": "Malvern Link",
    "coords": [
      -2.3195676,
      52.1258094
    ]
  },
  {
    "name": "Shawford",
    "coords": [
      -1.3277225,
      51.0221625
    ]
  },
  {
    "name": "Blakedown",
    "coords": [
      -2.1767711,
      52.4064788
    ]
  },
  {
    "name": "Hagley",
    "coords": [
      -2.1465358,
      52.4224267
    ]
  },
  {
    "name": "Stourbridge Junction",
    "coords": [
      -2.1340314,
      52.4476157
    ]
  },
  {
    "name": "Stourbridge Town",
    "coords": [
      -2.1418921,
      52.4555918
    ]
  },
  {
    "name": "Lye",
    "coords": [
      -2.1160497,
      52.4599417
    ]
  },
  {
    "name": "Cradley Heath",
    "coords": [
      -2.0906252,
      52.4694408
    ]
  },
  {
    "name": "Rowley Regis",
    "coords": [
      -2.0308221,
      52.4774198
    ]
  },
  {
    "name": "Langley Green",
    "coords": [
      -2.0054314,
      52.4934857
    ]
  },
  {
    "name": "Meldreth",
    "coords": [
      0.0091415,
      52.0908316
    ]
  },
  {
    "name": "Bewdley",
    "coords": [
      -2.3066603,
      52.3757574
    ]
  },
  {
    "name": "Northwood Halt",
    "coords": [
      -2.3275672,
      52.3947134
    ]
  },
  {
    "name": "Arley",
    "coords": [
      -2.3489579,
      52.4172341
    ]
  },
  {
    "name": "Hampton Loade",
    "coords": [
      -2.3771557,
      52.4738852
    ]
  },
  {
    "name": "Highley",
    "coords": [
      -2.3705819,
      52.444908
    ]
  },
  {
    "name": "Leagrave",
    "coords": [
      -0.4585987,
      51.9054737
    ]
  },
  {
    "name": "Inverness",
    "coords": [
      -4.2227142,
      57.4802331
    ]
  },
  {
    "name": "Beauly",
    "coords": [
      -4.4698593,
      57.4782792
    ]
  },
  {
    "name": "Swanwick",
    "coords": [
      -1.2657803,
      50.8757233
    ]
  },
  {
    "name": "Kemble",
    "coords": [
      -2.0230749,
      51.6767954
    ]
  },
  {
    "name": "Sudbury Hill Harrow",
    "coords": [
      -0.3361942,
      51.558533
    ]
  },
  {
    "name": "Stroud",
    "coords": [
      -2.2191762,
      51.7444813
    ]
  },
  {
    "name": "Stonehouse",
    "coords": [
      -2.2794209,
      51.7459341
    ]
  },
  {
    "name": "Totton",
    "coords": [
      -1.4830687,
      50.9176659
    ]
  },
  {
    "name": "Church Fenton",
    "coords": [
      -1.2272134,
      53.8270101
    ]
  },
  {
    "name": "Cathays",
    "coords": [
      -3.1789269,
      51.4888964
    ]
  },
  {
    "name": "Llandaf",
    "coords": [
      -3.2287847,
      51.5084483
    ]
  },
  {
    "name": "Tooting Bec",
    "coords": [
      -0.1597188,
      51.4356228
    ]
  },
  {
    "name": "Burley Park",
    "coords": [
      -1.5779212,
      53.8121567
    ]
  },
  {
    "name": "Marske",
    "coords": [
      -1.0195165,
      54.5873806
    ]
  },
  {
    "name": "Dyce",
    "coords": [
      -2.1927081,
      57.205694
    ]
  },
  {
    "name": "Clapham North",
    "coords": [
      -0.1299205,
      51.4651241
    ]
  },
  {
    "name": "Oval",
    "coords": [
      -0.1123953,
      51.4818339
    ]
  },
  {
    "name": "Kennington",
    "coords": [
      -0.1058829,
      51.4882861
    ]
  },
  {
    "name": "Leuchars",
    "coords": [
      -2.8938545,
      56.374796
    ]
  },
  {
    "name": "Cupar",
    "coords": [
      -3.0089641,
      56.3172023
    ]
  },
  {
    "name": "Springfield",
    "coords": [
      -3.0523971,
      56.2951661
    ]
  },
  {
    "name": "Ladybank",
    "coords": [
      -3.1215949,
      56.2742464
    ]
  },
  {
    "name": "Inverurie",
    "coords": [
      -2.3734847,
      57.2864073
    ]
  },
  {
    "name": "Insch",
    "coords": [
      -2.6169182,
      57.3373738
    ]
  },
  {
    "name": "Huntly",
    "coords": [
      -2.7757846,
      57.4444916
    ]
  },
  {
    "name": "Keith",
    "coords": [
      -2.9540197,
      57.551499
    ]
  },
  {
    "name": "East Didsbury",
    "coords": [
      -2.2219984,
      53.4093155
    ]
  },
  {
    "name": "Edinburgh Park",
    "coords": [
      -3.307788,
      55.927551
    ]
  },
  {
    "name": "Newcraighall",
    "coords": [
      -3.0906951,
      55.9329756
    ]
  },
  {
    "name": "Deganwy",
    "coords": [
      -3.8331941,
      53.2945847
    ]
  },
  {
    "name": "Llandudno",
    "coords": [
      -3.8278226,
      53.3202833
    ]
  },
  {
    "name": "Dalston Junction",
    "coords": [
      -0.074968,
      51.5452841
    ]
  },
  {
    "name": "Hinckley",
    "coords": [
      -1.3711055,
      52.5351729
    ]
  },
  {
    "name": "Radley",
    "coords": [
      -1.2402569,
      51.6856231
    ]
  },
  {
    "name": "Lockwood",
    "coords": [
      -1.8007743,
      53.6348054
    ]
  },
  {
    "name": "Berry Brow",
    "coords": [
      -1.7935857,
      53.6210459
    ]
  },
  {
    "name": "Honley",
    "coords": [
      -1.780828,
      53.6082445
    ]
  },
  {
    "name": "Brockholes",
    "coords": [
      -1.7698266,
      53.5970261
    ]
  },
  {
    "name": "Denby Dale",
    "coords": [
      -1.663204,
      53.5728721
    ]
  },
  {
    "name": "Penistone",
    "coords": [
      -1.6223537,
      53.5253151
    ]
  },
  {
    "name": "Silkstone Common",
    "coords": [
      -1.5630289,
      53.5353509
    ]
  },
  {
    "name": "Crowle",
    "coords": [
      -0.8173514,
      53.5898215
    ]
  },
  {
    "name": "Althorpe",
    "coords": [
      -0.732955,
      53.5855457
    ]
  },
  {
    "name": "Barnetby",
    "coords": [
      -0.4097613,
      53.5750127
    ]
  },
  {
    "name": "Brigg",
    "coords": [
      -0.4857584,
      53.5490517
    ]
  },
  {
    "name": "Kirton Lindsey",
    "coords": [
      -0.5935507,
      53.4852618
    ]
  },
  {
    "name": "Haworth",
    "coords": [
      -1.9488416,
      53.8313183
    ]
  },
  {
    "name": "Oakworth",
    "coords": [
      -1.9419575,
      53.8413266
    ]
  },
  {
    "name": "Damems",
    "coords": [
      -1.924448,
      53.8459194
    ]
  },
  {
    "name": "Ingrow (West)",
    "coords": [
      -1.9151443,
      53.8536646
    ]
  },
  {
    "name": "Baildon",
    "coords": [
      -1.7536925,
      53.8501789
    ]
  },
  {
    "name": "Montpelier",
    "coords": [
      -2.5886798,
      51.4683479
    ]
  },
  {
    "name": "Long Preston",
    "coords": [
      -2.2551519,
      54.0166575
    ]
  },
  {
    "name": "Langho",
    "coords": [
      -2.4488239,
      53.8048112
    ]
  },
  {
    "name": "Darwen",
    "coords": [
      -2.4642693,
      53.6979355
    ]
  },
  {
    "name": "Entwistle",
    "coords": [
      -2.4139637,
      53.6556886
    ]
  },
  {
    "name": "Clifton",
    "coords": [
      -2.3141164,
      53.5223155
    ]
  },
  {
    "name": "North Dulwich",
    "coords": [
      -0.0883292,
      51.4541783
    ]
  },
  {
    "name": "Stapleton Road",
    "coords": [
      -2.5663184,
      51.467446
    ]
  },
  {
    "name": "Lawrence Hill",
    "coords": [
      -2.56417,
      51.45858
    ]
  },
  {
    "name": "Port Glasgow",
    "coords": [
      -4.6897401,
      55.9333809
    ]
  },
  {
    "name": "Branchton",
    "coords": [
      -4.8034053,
      55.9405305
    ]
  },
  {
    "name": "Paisley Gilmour Street",
    "coords": [
      -4.4242818,
      55.8473867
    ]
  },
  {
    "name": "Cardonald",
    "coords": [
      -4.3402568,
      55.852782
    ]
  },
  {
    "name": "Bishopton",
    "coords": [
      -4.5004927,
      55.902096
    ]
  },
  {
    "name": "Blackrod",
    "coords": [
      -2.5698672,
      53.5912146
    ]
  },
  {
    "name": "Moreton",
    "coords": [
      -2.3138473,
      50.701118
    ]
  },
  {
    "name": "Wool",
    "coords": [
      -2.2213123,
      50.681661
    ]
  },
  {
    "name": "Wavertree Technology Park",
    "coords": [
      -2.9228151,
      53.4052171
    ]
  },
  {
    "name": "Lea Green",
    "coords": [
      -2.7251202,
      53.4267142
    ]
  },
  {
    "name": "Thatto Heath",
    "coords": [
      -2.7594696,
      53.4366896
    ]
  },
  {
    "name": "Garswood",
    "coords": [
      -2.6719929,
      53.4880481
    ]
  },
  {
    "name": "Bryn",
    "coords": [
      -2.6476163,
      53.4997249
    ]
  },
  {
    "name": "Wick",
    "coords": [
      -3.098527,
      58.4417398
    ]
  },
  {
    "name": "Georgemas Junction",
    "coords": [
      -3.4518611,
      58.513451
    ]
  },
  {
    "name": "Thurso",
    "coords": [
      -3.5278692,
      58.5897358
    ]
  },
  {
    "name": "Altnabreac",
    "coords": [
      -3.7061485,
      58.3881251
    ]
  },
  {
    "name": "Gatley",
    "coords": [
      -2.2306618,
      53.3932392
    ]
  },
  {
    "name": "Walthamstow Queen's Road",
    "coords": [
      -0.0237594,
      51.5815237
    ]
  },
  {
    "name": "Aldrington",
    "coords": [
      -0.1817423,
      50.8363558
    ]
  },
  {
    "name": "Warrington Bank Quay",
    "coords": [
      -2.6031782,
      53.3859367
    ]
  },
  {
    "name": "Eccles",
    "coords": [
      -2.3340515,
      53.4855266
    ]
  },
  {
    "name": "Criccieth",
    "coords": [
      -4.2370677,
      52.9183691
    ]
  },
  {
    "name": "Stechford",
    "coords": [
      -1.8110345,
      52.4851563
    ]
  },
  {
    "name": "Lea Hall",
    "coords": [
      -1.786031,
      52.4805217
    ]
  },
  {
    "name": "St. James's Park",
    "coords": [
      -0.1345942,
      51.4992816
    ]
  },
  {
    "name": "Hampton-in-Arden",
    "coords": [
      -1.6997231,
      52.4286358
    ]
  },
  {
    "name": "Iver",
    "coords": [
      -0.5068108,
      51.5086086
    ]
  },
  {
    "name": "Westminster",
    "coords": [
      -0.1249302,
      51.5013562
    ]
  },
  {
    "name": "Derby Road",
    "coords": [
      1.1826954,
      52.0505184
    ]
  },
  {
    "name": "Felixstowe",
    "coords": [
      1.3498136,
      51.9670171
    ]
  },
  {
    "name": "Westerfield",
    "coords": [
      1.1659683,
      52.0810736
    ]
  },
  {
    "name": "Thames Ditton",
    "coords": [
      -0.339152,
      51.3890554
    ]
  },
  {
    "name": "Oldland Common",
    "coords": [
      -2.4668807,
      51.4439411
    ]
  },
  {
    "name": "Teignmouth",
    "coords": [
      -3.4946798,
      50.5481567
    ]
  },
  {
    "name": "Coulsdon Town",
    "coords": [
      -0.134245,
      51.3220643
    ]
  },
  {
    "name": "Woodmansterne",
    "coords": [
      -0.1538819,
      51.3190513
    ]
  },
  {
    "name": "Kingswood",
    "coords": [
      -0.2110128,
      51.2947257
    ]
  },
  {
    "name": "Reedham",
    "coords": [
      -0.1234118,
      51.3311273
    ]
  },
  {
    "name": "Brundall Gardens",
    "coords": [
      1.4181588,
      52.6233603
    ]
  },
  {
    "name": "Keynsham",
    "coords": [
      -2.4958797,
      51.418071
    ]
  },
  {
    "name": "Clifton Down",
    "coords": [
      -2.6114362,
      51.4644315
    ]
  },
  {
    "name": "Bedford St Johns",
    "coords": [
      -0.4676146,
      52.1293364
    ]
  },
  {
    "name": "Dalgety Bay",
    "coords": [
      -3.367249,
      56.0422731
    ]
  },
  {
    "name": "Aberdour",
    "coords": [
      -3.3009757,
      56.0547554
    ]
  },
  {
    "name": "Burntisland",
    "coords": [
      -3.2338286,
      56.0573493
    ]
  },
  {
    "name": "Kinghorn",
    "coords": [
      -3.1744897,
      56.069094
    ]
  },
  {
    "name": "Glenrothes with Thornton",
    "coords": [
      -3.1429347,
      56.162291
    ]
  },
  {
    "name": "Cardenden",
    "coords": [
      -3.2609812,
      56.141062
    ]
  },
  {
    "name": "Lochgelly",
    "coords": [
      -3.3134751,
      56.1348998
    ]
  },
  {
    "name": "Cowdenbeath",
    "coords": [
      -3.3432863,
      56.1116531
    ]
  },
  {
    "name": "Dunfermline Queen Margaret",
    "coords": [
      -3.4217706,
      56.0801657
    ]
  },
  {
    "name": "Dunfermline City",
    "coords": [
      -3.4523618,
      56.0681116
    ]
  },
  {
    "name": "Rosyth",
    "coords": [
      -3.4263289,
      56.0453763
    ]
  },
  {
    "name": "Exeter St Thomas",
    "coords": [
      -3.5388213,
      50.717201
    ]
  },
  {
    "name": "Ropley",
    "coords": [
      -1.1025399,
      51.0874683
    ]
  },
  {
    "name": "Muir of Ord",
    "coords": [
      -4.4601574,
      57.5175184
    ]
  },
  {
    "name": "Dingwall",
    "coords": [
      -4.4222663,
      57.5940372
    ]
  },
  {
    "name": "Alness",
    "coords": [
      -4.2499451,
      57.6944251
    ]
  },
  {
    "name": "Invergordon",
    "coords": [
      -4.1747504,
      57.6890372
    ]
  },
  {
    "name": "Fearn",
    "coords": [
      -3.9939483,
      57.7781428
    ]
  },
  {
    "name": "Tain",
    "coords": [
      -4.0521292,
      57.8144887
    ]
  },
  {
    "name": "Ardgay",
    "coords": [
      -4.362216,
      57.8815701
    ]
  },
  {
    "name": "Lairg",
    "coords": [
      -4.3998683,
      58.0018896
    ]
  },
  {
    "name": "Golspie",
    "coords": [
      -3.9871692,
      57.9715092
    ]
  },
  {
    "name": "Dunrobin Castle",
    "coords": [
      -3.9473688,
      57.9857817
    ]
  },
  {
    "name": "Brora",
    "coords": [
      -3.8523419,
      58.0131432
    ]
  },
  {
    "name": "Helmsdale",
    "coords": [
      -3.6591456,
      58.1177286
    ]
  },
  {
    "name": "Garve",
    "coords": [
      -4.6883753,
      57.6131055
    ]
  },
  {
    "name": "Achnasheen",
    "coords": [
      -5.0721994,
      57.5793199
    ]
  },
  {
    "name": "Stromeferry",
    "coords": [
      -5.5507696,
      57.3522003
    ]
  },
  {
    "name": "Plockton",
    "coords": [
      -5.6658916,
      57.3335912
    ]
  },
  {
    "name": "Kyle of Lochalsh",
    "coords": [
      -5.7138678,
      57.2802066
    ]
  },
  {
    "name": "Boat of Garten",
    "coords": [
      -3.7524586,
      57.2481303
    ]
  },
  {
    "name": "Broomhill",
    "coords": [
      -3.6670708,
      57.2833838
    ]
  },
  {
    "name": "Carrbridge",
    "coords": [
      -3.8281892,
      57.2794783
    ]
  },
  {
    "name": "Dufftown",
    "coords": [
      -3.1310294,
      57.4580974
    ]
  },
  {
    "name": "Towiemore",
    "coords": [
      -3.011442,
      57.4964077
    ]
  },
  {
    "name": "Keith Town",
    "coords": [
      -2.9557534,
      57.5435539
    ]
  },
  {
    "name": "Oldfield Park",
    "coords": [
      -2.3801536,
      51.379209
    ]
  },
  {
    "name": "Elgin",
    "coords": [
      -3.310943,
      57.6427835
    ]
  },
  {
    "name": "Polmont",
    "coords": [
      -3.7144735,
      55.9844795
    ]
  },
  {
    "name": "Linlithgow",
    "coords": [
      -3.5957662,
      55.9764096
    ]
  },
  {
    "name": "Brundall",
    "coords": [
      1.4386558,
      52.6196558
    ]
  },
  {
    "name": "Fort William",
    "coords": [
      -5.1053126,
      56.8205581
    ]
  },
  {
    "name": "Banavie",
    "coords": [
      -5.0958832,
      56.8438007
    ]
  },
  {
    "name": "Lochailort",
    "coords": [
      -5.6633405,
      56.8814441
    ]
  },
  {
    "name": "Locheilside",
    "coords": [
      -5.2903646,
      56.8559494
    ]
  },
  {
    "name": "Loch Eil Outward Bound",
    "coords": [
      -5.1928846,
      56.8553715
    ]
  },
  {
    "name": "Colchester Town",
    "coords": [
      0.9054279,
      51.8865086
    ]
  },
  {
    "name": "Milngavie",
    "coords": [
      -4.3144686,
      55.9411881
    ]
  },
  {
    "name": "Hillfoot",
    "coords": [
      -4.3198851,
      55.9203081
    ]
  },
  {
    "name": "Bearsden",
    "coords": [
      -4.3323696,
      55.917006
    ]
  },
  {
    "name": "Cardross",
    "coords": [
      -4.6532942,
      55.9603526
    ]
  },
  {
    "name": "Craigendoran",
    "coords": [
      -4.7119204,
      55.9948435
    ]
  },
  {
    "name": "Brixton",
    "coords": [
      -0.1147325,
      51.4626818
    ]
  },
  {
    "name": "Morley",
    "coords": [
      -1.589163,
      53.7505897
    ]
  },
  {
    "name": "Hope (Flintshire)",
    "coords": [
      -3.0372474,
      53.1168595
    ]
  },
  {
    "name": "Caergwrle",
    "coords": [
      -3.0332375,
      53.1080896
    ]
  },
  {
    "name": "Cefn-y-Bedd",
    "coords": [
      -3.0308499,
      53.0988378
    ]
  },
  {
    "name": "Gwersyllt",
    "coords": [
      -3.0176175,
      53.0727884
    ]
  },
  {
    "name": "Gretna Green",
    "coords": [
      -3.066305,
      55.0007556
    ]
  },
  {
    "name": "Annan",
    "coords": [
      -3.2628103,
      54.9835121
    ]
  },
  {
    "name": "Dumfries",
    "coords": [
      -3.6044458,
      55.0727039
    ]
  },
  {
    "name": "Kelvinhall",
    "coords": [
      -4.2997826,
      55.8710725
    ]
  },
  {
    "name": "Sanquhar",
    "coords": [
      -3.9245753,
      55.3708161
    ]
  },
  {
    "name": "Kirkconnel",
    "coords": [
      -3.9988105,
      55.3875092
    ]
  },
  {
    "name": "New Cumnock",
    "coords": [
      -4.1833546,
      55.4022358
    ]
  },
  {
    "name": "Auchinleck",
    "coords": [
      -4.2959612,
      55.4698739
    ]
  },
  {
    "name": "Troon",
    "coords": [
      -4.6555229,
      55.5427424
    ]
  },
  {
    "name": "Kilmarnock",
    "coords": [
      -4.498786,
      55.6123464
    ]
  },
  {
    "name": "Yarwell Junction (NVR)",
    "coords": [
      -0.4094509,
      52.5610781
    ]
  },
  {
    "name": "Cressington",
    "coords": [
      -2.912095,
      53.3586932
    ]
  },
  {
    "name": "Freshford",
    "coords": [
      -2.3005891,
      51.3417702
    ]
  },
  {
    "name": "Rothley",
    "coords": [
      -1.1598113,
      52.7042808
    ]
  },
  {
    "name": "Bowling",
    "coords": [
      -4.4931921,
      55.9310584
    ]
  },
  {
    "name": "Helensburgh Central",
    "coords": [
      -4.7319877,
      56.0038998
    ]
  },
  {
    "name": "Kelvinbridge",
    "coords": [
      -4.2798542,
      55.8742507
    ]
  },
  {
    "name": "Hillhead",
    "coords": [
      -4.293281,
      55.8752091
    ]
  },
  {
    "name": "Forsinard",
    "coords": [
      -3.8969589,
      58.3568564
    ]
  },
  {
    "name": "Lochwinnoch",
    "coords": [
      -4.6157219,
      55.7871745
    ]
  },
  {
    "name": "Irwell Vale",
    "coords": [
      -2.3157744,
      53.6768699
    ]
  },
  {
    "name": "Rawtenstall",
    "coords": [
      -2.2918033,
      53.698586
    ]
  },
  {
    "name": "Summerseat",
    "coords": [
      -2.3134126,
      53.6279534
    ]
  },
  {
    "name": "Burrs Country Park Halt",
    "coords": [
      -2.3032556,
      53.6113055
    ]
  },
  {
    "name": "Bury, Bolton Street",
    "coords": [
      -2.3003018,
      53.5929094
    ]
  },
  {
    "name": "St. Helier",
    "coords": [
      -0.1988601,
      51.389451
    ]
  },
  {
    "name": "Sutton Common",
    "coords": [
      -0.1961049,
      51.3754313
    ]
  },
  {
    "name": "Spean Bridge",
    "coords": [
      -4.9216232,
      56.8898718
    ]
  },
  {
    "name": "Ramsbottom",
    "coords": [
      -2.3146606,
      53.6473535
    ]
  },
  {
    "name": "Neston",
    "coords": [
      -3.062958,
      53.2917321
    ]
  },
  {
    "name": "Wylde Green",
    "coords": [
      -1.8314247,
      52.545628
    ]
  },
  {
    "name": "Aigburth",
    "coords": [
      -2.9266096,
      53.3645118
    ]
  },
  {
    "name": "Bedminster",
    "coords": [
      -2.5936286,
      51.4406058
    ]
  },
  {
    "name": "Parson Street",
    "coords": [
      -2.6085368,
      51.432994
    ]
  },
  {
    "name": "Penmaenmawr",
    "coords": [
      -3.9235064,
      53.2705474
    ]
  },
  {
    "name": "Llanfairfechan",
    "coords": [
      -3.983123,
      53.2569753
    ]
  },
  {
    "name": "Llanfairpwll",
    "coords": [
      -4.2093569,
      53.2208651
    ]
  },
  {
    "name": "Bodorgan",
    "coords": [
      -4.4162913,
      53.2041893
    ]
  },
  {
    "name": "Ty Croes",
    "coords": [
      -4.4739623,
      53.2225426
    ]
  },
  {
    "name": "Rhosneigr",
    "coords": [
      -4.5058449,
      53.2346794
    ]
  },
  {
    "name": "Valley",
    "coords": [
      -4.5634307,
      53.2815404
    ]
  },
  {
    "name": "Heckington",
    "coords": [
      -0.2938084,
      52.9772075
    ]
  },
  {
    "name": "Sleaford",
    "coords": [
      -0.4101594,
      52.9955161
    ]
  },
  {
    "name": "Rauceby",
    "coords": [
      -0.4559695,
      52.9852782
    ]
  },
  {
    "name": "Elton and Orston",
    "coords": [
      -0.8554051,
      52.9521534
    ]
  },
  {
    "name": "Cartsdyke",
    "coords": [
      -4.7323622,
      55.9422124
    ]
  },
  {
    "name": "Bogston",
    "coords": [
      -4.7122765,
      55.9371847
    ]
  },
  {
    "name": "Woodhall",
    "coords": [
      -4.6557539,
      55.9312843
    ]
  },
  {
    "name": "Langbank",
    "coords": [
      -4.5861277,
      55.9245747
    ]
  },
  {
    "name": "Paisley St James",
    "coords": [
      -4.4424438,
      55.8521362
    ]
  },
  {
    "name": "Hillington West",
    "coords": [
      -4.3710945,
      55.8558618
    ]
  },
  {
    "name": "Hillington East",
    "coords": [
      -4.3548565,
      55.8542549
    ]
  },
  {
    "name": "Bellgrove",
    "coords": [
      -4.2243365,
      55.8567027
    ]
  },
  {
    "name": "Duke Street",
    "coords": [
      -4.212665,
      55.8586363
    ]
  },
  {
    "name": "Shenton",
    "coords": [
      -1.415295,
      52.5996554
    ]
  },
  {
    "name": "Shackerstone",
    "coords": [
      -1.4412337,
      52.6556653
    ]
  },
  {
    "name": "South Gyle",
    "coords": [
      -3.2993662,
      55.936508
    ]
  },
  {
    "name": "Faversham",
    "coords": [
      0.8906635,
      51.3116525
    ]
  },
  {
    "name": "Aspley Guise",
    "coords": [
      -0.6326933,
      52.0212048
    ]
  },
  {
    "name": "Ridgmont",
    "coords": [
      -0.5948526,
      52.0263878
    ]
  },
  {
    "name": "Stewartby",
    "coords": [
      -0.5207575,
      52.0690354
    ]
  },
  {
    "name": "Paisley Canal",
    "coords": [
      -4.4237871,
      55.8400956
    ]
  },
  {
    "name": "Severn Beach",
    "coords": [
      -2.6645392,
      51.5596758
    ]
  },
  {
    "name": "Battersby",
    "coords": [
      -1.0933566,
      54.4575551
    ]
  },
  {
    "name": "Burnham",
    "coords": [
      -0.6470844,
      51.5233926
    ]
  },
  {
    "name": "Brunswick",
    "coords": [
      -2.9760156,
      53.3832177
    ]
  },
  {
    "name": "Greenock Central",
    "coords": [
      -4.7518756,
      55.9452099
    ]
  },
  {
    "name": "Whinhill",
    "coords": [
      -4.7466578,
      55.9384654
    ]
  },
  {
    "name": "Embsay",
    "coords": [
      -1.991213,
      53.9753772
    ]
  },
  {
    "name": "Holywell",
    "coords": [
      -1.960467,
      53.975988
    ]
  },
  {
    "name": "Southbourne",
    "coords": [
      -0.9071791,
      50.8481981
    ]
  },
  {
    "name": "Emsworth",
    "coords": [
      -0.9385075,
      50.8516544
    ]
  },
  {
    "name": "Argyle Street",
    "coords": [
      -4.2506187,
      55.8576091
    ]
  },
  {
    "name": "Anderston",
    "coords": [
      -4.2701138,
      55.8597478
    ]
  },
  {
    "name": "Crossmyloof",
    "coords": [
      -4.2841408,
      55.8339652
    ]
  },
  {
    "name": "Shawlands",
    "coords": [
      -4.2924269,
      55.8293953
    ]
  },
  {
    "name": "Thorntonhall",
    "coords": [
      -4.2509187,
      55.7684609
    ]
  },
  {
    "name": "Giffnock",
    "coords": [
      -4.2930578,
      55.8041667
    ]
  },
  {
    "name": "Thornliebank",
    "coords": [
      -4.3117213,
      55.8110635
    ]
  },
  {
    "name": "Bolton Abbey",
    "coords": [
      -1.9087257,
      53.9761778
    ]
  },
  {
    "name": "Hilsea",
    "coords": [
      -1.058643,
      50.8283898
    ]
  },
  {
    "name": "Hawarden Bridge",
    "coords": [
      -3.0323456,
      53.2181055
    ]
  },
  {
    "name": "Williamwood",
    "coords": [
      -4.2899143,
      55.7940058
    ]
  },
  {
    "name": "Cathcart",
    "coords": [
      -4.2603903,
      55.8177954
    ]
  },
  {
    "name": "Patterton",
    "coords": [
      -4.3352786,
      55.7905841
    ]
  },
  {
    "name": "Neilston",
    "coords": [
      -4.4268984,
      55.7828676
    ]
  },
  {
    "name": "Maxwell Park",
    "coords": [
      -4.288521,
      55.8376638
    ]
  },
  {
    "name": "Pollokshields West",
    "coords": [
      -4.2758405,
      55.8376663
    ]
  },
  {
    "name": "Llanwrtyd",
    "coords": [
      -3.6322246,
      52.1046083
    ]
  },
  {
    "name": "Crookston",
    "coords": [
      -4.3648377,
      55.8423325
    ]
  },
  {
    "name": "Ravensthorpe",
    "coords": [
      -1.6557662,
      53.6755716
    ]
  },
  {
    "name": "Penrhyndeudraeth",
    "coords": [
      -4.0644936,
      52.9287529
    ]
  },
  {
    "name": "Harlech",
    "coords": [
      -4.1092654,
      52.861755
    ]
  },
  {
    "name": "Hawkhead",
    "coords": [
      -4.3992195,
      55.8420944
    ]
  },
  {
    "name": "Mount Florida",
    "coords": [
      -4.2612813,
      55.8265299
    ]
  },
  {
    "name": "Ivybridge",
    "coords": [
      -3.9050319,
      50.393467
    ]
  },
  {
    "name": "Torquay",
    "coords": [
      -3.5430302,
      50.4610509
    ]
  },
  {
    "name": "Torre",
    "coords": [
      -3.5465008,
      50.4731928
    ]
  },
  {
    "name": "Walsall",
    "coords": [
      -1.9852679,
      52.5841365
    ]
  },
  {
    "name": "Croston",
    "coords": [
      -2.7779892,
      53.6674573
    ]
  },
  {
    "name": "Burscough Junction",
    "coords": [
      -2.8405323,
      53.5975512
    ]
  },
  {
    "name": "Salwick",
    "coords": [
      -2.8182384,
      53.7817543
    ]
  },
  {
    "name": "Kirkham and Wesham",
    "coords": [
      -2.8833796,
      53.7869046
    ]
  },
  {
    "name": "Moss Side",
    "coords": [
      -2.9429233,
      53.7648245
    ]
  },
  {
    "name": "Silverdale",
    "coords": [
      -2.8037555,
      54.169607
    ]
  },
  {
    "name": "Carnforth",
    "coords": [
      -2.7714886,
      54.1296244
    ]
  },
  {
    "name": "Layton",
    "coords": [
      -3.029934,
      53.8353586
    ]
  },
  {
    "name": "Pembroke Dock",
    "coords": [
      -4.9375963,
      51.6938827
    ]
  },
  {
    "name": "Euxton Balshaw Lane",
    "coords": [
      -2.6716808,
      53.6598241
    ]
  },
  {
    "name": "Ibrox",
    "coords": [
      -4.3048819,
      55.854705
    ]
  },
  {
    "name": "Govan",
    "coords": [
      -4.3106225,
      55.8622545
    ]
  },
  {
    "name": "Kingscote",
    "coords": [
      -0.0483841,
      51.1030758
    ]
  },
  {
    "name": "Horsted Keynes",
    "coords": [
      -0.0448579,
      51.046255
    ]
  },
  {
    "name": "Sheffield Park",
    "coords": [
      -0.0012346,
      50.9955844
    ]
  },
  {
    "name": "Groombridge",
    "coords": [
      0.1880755,
      51.1122821
    ]
  },
  {
    "name": "Tunbridge Wells West",
    "coords": [
      0.2526778,
      51.1235888
    ]
  },
  {
    "name": "Tenterden Town",
    "coords": [
      0.6852189,
      51.0703263
    ]
  },
  {
    "name": "Rolvenden",
    "coords": [
      0.6600068,
      51.0639927
    ]
  },
  {
    "name": "Wittersham Road",
    "coords": [
      0.6611109,
      51.0279011
    ]
  },
  {
    "name": "Northiam",
    "coords": [
      0.613833,
      51.0093928
    ]
  },
  {
    "name": "Bodiam",
    "coords": [
      0.5389926,
      50.9966492
    ]
  },
  {
    "name": "Hythe",
    "coords": [
      1.0719648,
      51.0712703
    ]
  },
  {
    "name": "New Romney",
    "coords": [
      0.954204,
      50.9859473
    ]
  },
  {
    "name": "Romney Sands",
    "coords": [
      0.963136,
      50.9587303
    ]
  },
  {
    "name": "Dungeness",
    "coords": [
      0.9705863,
      50.914493
    ]
  },
  {
    "name": "Bramhall",
    "coords": [
      -2.1623117,
      53.3601721
    ]
  },
  {
    "name": "Queenborough",
    "coords": [
      0.7497508,
      51.4159485
    ]
  },
  {
    "name": "Sheerness-on-Sea",
    "coords": [
      0.7583155,
      51.4407137
    ]
  },
  {
    "name": "Kemsley",
    "coords": [
      0.7349601,
      51.3617377
    ]
  },
  {
    "name": "Hockley",
    "coords": [
      0.6591006,
      51.6036509
    ]
  },
  {
    "name": "St Enoch",
    "coords": [
      -4.2551723,
      55.8575955
    ]
  },
  {
    "name": "Buchanan Street",
    "coords": [
      -4.2534299,
      55.8624235
    ]
  },
  {
    "name": "Bridge Street",
    "coords": [
      -4.2582198,
      55.8519813
    ]
  },
  {
    "name": "St George's Cross",
    "coords": [
      -4.2687116,
      55.8711685
    ]
  },
  {
    "name": "Burnley Central",
    "coords": [
      -2.2450874,
      53.7934673
    ]
  },
  {
    "name": "Burnley Barracks",
    "coords": [
      -2.2573183,
      53.791034
    ]
  },
  {
    "name": "Nelson",
    "coords": [
      -2.2142644,
      53.8347164
    ]
  },
  {
    "name": "Brierfield",
    "coords": [
      -2.236243,
      53.8243669
    ]
  },
  {
    "name": "Kinning Park",
    "coords": [
      -4.2881973,
      55.8504067
    ]
  },
  {
    "name": "Redcar East",
    "coords": [
      -1.0519248,
      54.609055
    ]
  },
  {
    "name": "Worthing",
    "coords": [
      -0.3761766,
      50.8186425
    ]
  },
  {
    "name": "Blackhorse Road",
    "coords": [
      -0.0416453,
      51.5867174
    ]
  },
  {
    "name": "Denton",
    "coords": [
      -2.1309424,
      53.4574018
    ]
  },
  {
    "name": "Reddish South",
    "coords": [
      -2.1586843,
      53.4359636
    ]
  },
  {
    "name": "Middlewood",
    "coords": [
      -2.0835284,
      53.3600557
    ]
  },
  {
    "name": "Southport",
    "coords": [
      -3.0028279,
      53.6468651
    ]
  },
  {
    "name": "West Street",
    "coords": [
      -4.2656724,
      55.8497133
    ]
  },
  {
    "name": "Shields Road",
    "coords": [
      -4.2752438,
      55.849824
    ]
  },
  {
    "name": "Mosspark",
    "coords": [
      -4.3474296,
      55.8406803
    ]
  },
  {
    "name": "Corkerhill",
    "coords": [
      -4.3344781,
      55.8375398
    ]
  },
  {
    "name": "Tygwyn",
    "coords": [
      -4.0785559,
      52.8937477
    ]
  },
  {
    "name": "Taplow",
    "coords": [
      -0.6818864,
      51.5233325
    ]
  },
  {
    "name": "Higham",
    "coords": [
      0.4660183,
      51.426953
    ]
  },
  {
    "name": "West Worthing",
    "coords": [
      -0.3933519,
      50.818373
    ]
  },
  {
    "name": "Trimley",
    "coords": [
      1.3194153,
      51.9766523
    ]
  },
  {
    "name": "St Andrews Road",
    "coords": [
      -2.6964411,
      51.5124477
    ]
  },
  {
    "name": "Shirehampton",
    "coords": [
      -2.6789317,
      51.4842773
    ]
  },
  {
    "name": "Pemberton",
    "coords": [
      -2.6695158,
      53.530526
    ]
  },
  {
    "name": "Wigan Wallgate",
    "coords": [
      -2.6342351,
      53.5450582
    ]
  },
  {
    "name": "Wishaw",
    "coords": [
      -3.9262143,
      55.7721766
    ]
  },
  {
    "name": "Uddingston",
    "coords": [
      -4.0867337,
      55.8235808
    ]
  },
  {
    "name": "Cambuslang",
    "coords": [
      -4.1726153,
      55.8193533
    ]
  },
  {
    "name": "Airbles",
    "coords": [
      -3.9944314,
      55.7823984
    ]
  },
  {
    "name": "Hamilton West",
    "coords": [
      -4.0552899,
      55.779188
    ]
  },
  {
    "name": "Blantyre",
    "coords": [
      -4.0868467,
      55.7972578
    ]
  },
  {
    "name": "Burnside",
    "coords": [
      -4.2031241,
      55.8169392
    ]
  },
  {
    "name": "Croftfoot",
    "coords": [
      -4.2283132,
      55.818309
    ]
  },
  {
    "name": "Kings Park",
    "coords": [
      -4.245882,
      55.819552
    ]
  },
  {
    "name": "Johnstone",
    "coords": [
      -4.5031136,
      55.8342897
    ]
  },
  {
    "name": "Howwood",
    "coords": [
      -4.5625091,
      55.8105718
    ]
  },
  {
    "name": "Glengarnock",
    "coords": [
      -4.6748068,
      55.7390497
    ]
  },
  {
    "name": "Dalry",
    "coords": [
      -4.7111544,
      55.7060234
    ]
  },
  {
    "name": "Rainhill",
    "coords": [
      -2.7662934,
      53.4172066
    ]
  },
  {
    "name": "Orrell",
    "coords": [
      -2.7091136,
      53.53016
    ]
  },
  {
    "name": "Upholland",
    "coords": [
      -2.7410475,
      53.5284097
    ]
  },
  {
    "name": "Rainford",
    "coords": [
      -2.7885785,
      53.5171092
    ]
  },
  {
    "name": "Irvine",
    "coords": [
      -4.674835,
      55.6112334
    ]
  },
  {
    "name": "Stevenston",
    "coords": [
      -4.7501074,
      55.6342495
    ]
  },
  {
    "name": "Ardrossan South Beach",
    "coords": [
      -4.8005743,
      55.6411682
    ]
  },
  {
    "name": "Ardrossan Town",
    "coords": [
      -4.8125364,
      55.6398834
    ]
  },
  {
    "name": "Ardrossan Harbour",
    "coords": [
      -4.8213544,
      55.6400139
    ]
  },
  {
    "name": "West Kilbride",
    "coords": [
      -4.8515256,
      55.6962333
    ]
  },
  {
    "name": "Fairlie",
    "coords": [
      -4.8531164,
      55.7519642
    ]
  },
  {
    "name": "Largs",
    "coords": [
      -4.8676241,
      55.7932511
    ]
  },
  {
    "name": "Maryhill",
    "coords": [
      -4.3011492,
      55.8975029
    ]
  },
  {
    "name": "Kennishead",
    "coords": [
      -4.3248655,
      55.8133809
    ]
  },
  {
    "name": "Nitshill",
    "coords": [
      -4.3598341,
      55.8119018
    ]
  },
  {
    "name": "Kirkby",
    "coords": [
      -2.9028054,
      53.4863899
    ]
  },
  {
    "name": "Aintree",
    "coords": [
      -2.9563311,
      53.4738148
    ]
  },
  {
    "name": "Waterloo",
    "coords": [
      -3.0251924,
      53.4746595
    ]
  },
  {
    "name": "Formby",
    "coords": [
      -3.0709185,
      53.5543155
    ]
  },
  {
    "name": "Ainsdale",
    "coords": [
      -3.04264,
      53.6018568
    ]
  },
  {
    "name": "Seaforth & Litherland",
    "coords": [
      -3.0047956,
      53.4655761
    ]
  },
  {
    "name": "Bootle New Strand",
    "coords": [
      -2.9946156,
      53.4527853
    ]
  },
  {
    "name": "Bootle Oriel Road",
    "coords": [
      -2.9956678,
      53.4467
    ]
  },
  {
    "name": "Pollokshaws East",
    "coords": [
      -4.2871464,
      55.8248032
    ]
  },
  {
    "name": "Langside",
    "coords": [
      -4.2763033,
      55.8209593
    ]
  },
  {
    "name": "Crosshill",
    "coords": [
      -4.2565978,
      55.8331586
    ]
  },
  {
    "name": "Queens Park",
    "coords": [
      -4.2669343,
      55.8354076
    ]
  },
  {
    "name": "Dunlop",
    "coords": [
      -4.5323997,
      55.7119142
    ]
  },
  {
    "name": "Stewarton",
    "coords": [
      -4.51818,
      55.6820232
    ]
  },
  {
    "name": "Kilmaurs",
    "coords": [
      -4.5304766,
      55.6373535
    ]
  },
  {
    "name": "Maybole",
    "coords": [
      -4.6858566,
      55.3545688
    ]
  },
  {
    "name": "Girvan",
    "coords": [
      -4.8480843,
      55.2462778
    ]
  },
  {
    "name": "Barrhill",
    "coords": [
      -4.782098,
      55.0973578
    ]
  },
  {
    "name": "Stranraer",
    "coords": [
      -5.024767,
      54.9092855
    ]
  },
  {
    "name": "Dumbreck",
    "coords": [
      -4.3010254,
      55.8448161
    ]
  },
  {
    "name": "Bare Lane",
    "coords": [
      -2.8349663,
      54.0746566
    ]
  },
  {
    "name": "Morecambe",
    "coords": [
      -2.8685482,
      54.0703282
    ]
  },
  {
    "name": "Heysham Port",
    "coords": [
      -2.912999,
      54.0333273
    ]
  },
  {
    "name": "Greenock West",
    "coords": [
      -4.767762,
      55.9472002
    ]
  },
  {
    "name": "Inverkip",
    "coords": [
      -4.8726993,
      55.9060342
    ]
  },
  {
    "name": "Wemyss Bay",
    "coords": [
      -4.8894855,
      55.8764602
    ]
  },
  {
    "name": "Mount Vernon",
    "coords": [
      -4.1326839,
      55.8404655
    ]
  },
  {
    "name": "Bargeddie",
    "coords": [
      -4.0737519,
      55.8512996
    ]
  },
  {
    "name": "Baillieston",
    "coords": [
      -4.1137169,
      55.8445129
    ]
  },
  {
    "name": "Falmouth Docks",
    "coords": [
      -5.0557922,
      50.1507822
    ]
  },
  {
    "name": "Falmouth Town",
    "coords": [
      -5.0649675,
      50.1483073
    ]
  },
  {
    "name": "Penmere",
    "coords": [
      -5.0832589,
      50.1503799
    ]
  },
  {
    "name": "Penryn",
    "coords": [
      -5.1116752,
      50.1707383
    ]
  },
  {
    "name": "Perranwell",
    "coords": [
      -5.1119791,
      50.2166335
    ]
  },
  {
    "name": "Menheniot",
    "coords": [
      -4.4095333,
      50.4266018
    ]
  },
  {
    "name": "St Germans",
    "coords": [
      -4.3084572,
      50.3942108
    ]
  },
  {
    "name": "Saltash",
    "coords": [
      -4.2091547,
      50.4072015
    ]
  },
  {
    "name": "Keyham",
    "coords": [
      -4.1798923,
      50.3899651
    ]
  },
  {
    "name": "Holytown",
    "coords": [
      -3.9736943,
      55.8126793
    ]
  },
  {
    "name": "Shotts",
    "coords": [
      -3.7990785,
      55.8185654
    ]
  },
  {
    "name": "Addiewell",
    "coords": [
      -3.6063049,
      55.8434492
    ]
  },
  {
    "name": "Fauldhouse",
    "coords": [
      -3.7192484,
      55.8224448
    ]
  },
  {
    "name": "Breich",
    "coords": [
      -3.6675876,
      55.8274751
    ]
  },
  {
    "name": "Warcop",
    "coords": [
      -2.3825907,
      54.5354896
    ]
  },
  {
    "name": "Kirkby Stephen East",
    "coords": [
      -2.357978,
      54.4625907
    ]
  },
  {
    "name": "Dingle Road",
    "coords": [
      -3.1799893,
      51.4399933
    ]
  },
  {
    "name": "Cogan",
    "coords": [
      -3.1893329,
      51.4458142
    ]
  },
  {
    "name": "Eastbrook",
    "coords": [
      -3.2062588,
      51.4378361
    ]
  },
  {
    "name": "Dinas Powys",
    "coords": [
      -3.219062,
      51.4312453
    ]
  },
  {
    "name": "Cardiff Bay",
    "coords": [
      -3.1666863,
      51.4673505
    ]
  },
  {
    "name": "Leasowe",
    "coords": [
      -3.0999836,
      53.4080707
    ]
  },
  {
    "name": "Moreton",
    "coords": [
      -3.1132099,
      53.407278
    ]
  },
  {
    "name": "Upton",
    "coords": [
      -3.0841027,
      53.3864458
    ]
  },
  {
    "name": "Romford",
    "coords": [
      0.1822306,
      51.5746268
    ]
  },
  {
    "name": "Angmering",
    "coords": [
      -0.4881271,
      50.8165151
    ]
  },
  {
    "name": "Taffs Well",
    "coords": [
      -3.2634336,
      51.5407887
    ]
  },
  {
    "name": "Treforest Estate",
    "coords": [
      -3.290288,
      51.5681376
    ]
  },
  {
    "name": "Trefforest",
    "coords": [
      -3.3249855,
      51.5918935
    ]
  },
  {
    "name": "Southwick",
    "coords": [
      -0.2371971,
      50.8324943
    ]
  },
  {
    "name": "Fort Matilda",
    "coords": [
      -4.7952091,
      55.9589194
    ]
  },
  {
    "name": "Wood End",
    "coords": [
      -1.8444546,
      52.3443845
    ]
  },
  {
    "name": "Stratford-upon-Avon",
    "coords": [
      -1.7163221,
      52.1944695
    ]
  },
  {
    "name": "Whitlocks End",
    "coords": [
      -1.8514322,
      52.3918816
    ]
  },
  {
    "name": "Wythall",
    "coords": [
      -1.8654572,
      52.3800791
    ]
  },
  {
    "name": "Henley-in-Arden",
    "coords": [
      -1.7839992,
      52.2914546
    ]
  },
  {
    "name": "Stratford-upon-Avon Parkway",
    "coords": [
      -1.7304498,
      52.2065538
    ]
  },
  {
    "name": "Radyr",
    "coords": [
      -3.249383,
      51.5167185
    ]
  },
  {
    "name": "Newton St Cyres",
    "coords": [
      -3.5890083,
      50.7787397
    ]
  },
  {
    "name": "Crediton",
    "coords": [
      -3.6467418,
      50.7833186
    ]
  },
  {
    "name": "Yeoford",
    "coords": [
      -3.7267107,
      50.7767481
    ]
  },
  {
    "name": "Copplestone",
    "coords": [
      -3.7513163,
      50.8143464
    ]
  },
  {
    "name": "Morchard Road",
    "coords": [
      -3.7761159,
      50.8317005
    ]
  },
  {
    "name": "Lapford",
    "coords": [
      -3.8107134,
      50.8570052
    ]
  },
  {
    "name": "Eggesford",
    "coords": [
      -3.8747359,
      50.8876037
    ]
  },
  {
    "name": "Kings Nympton",
    "coords": [
      -3.9054023,
      50.9359781
    ]
  },
  {
    "name": "Umberleigh",
    "coords": [
      -3.9827596,
      50.9966433
    ]
  },
  {
    "name": "Chapelton",
    "coords": [
      -4.0245509,
      51.016229
    ]
  },
  {
    "name": "Okehampton",
    "coords": [
      -3.9964221,
      50.7323333
    ]
  },
  {
    "name": "Bere Ferrers",
    "coords": [
      -4.1814548,
      50.4510874
    ]
  },
  {
    "name": "Bere Alston",
    "coords": [
      -4.2003187,
      50.4856076
    ]
  },
  {
    "name": "Calstock",
    "coords": [
      -4.208583,
      50.497994
    ]
  },
  {
    "name": "Coombe Junction Halt",
    "coords": [
      -4.4813527,
      50.4451584
    ]
  },
  {
    "name": "St Keyne Wishing Well Halt",
    "coords": [
      -4.4633482,
      50.4228214
    ]
  },
  {
    "name": "Causeland",
    "coords": [
      -4.4664151,
      50.4056895
    ]
  },
  {
    "name": "Looe",
    "coords": [
      -4.4563912,
      50.3595613
    ]
  },
  {
    "name": "Warblington",
    "coords": [
      -0.9671209,
      50.8535025
    ]
  },
  {
    "name": "Maesteg",
    "coords": [
      -3.6549668,
      51.609681
    ]
  },
  {
    "name": "Garth (Bridgend)",
    "coords": [
      -3.6426832,
      51.5966785
    ]
  },
  {
    "name": "Rushcliffe Halt",
    "coords": [
      -1.1822374,
      52.8438171
    ]
  },
  {
    "name": "Wansford (NVR)",
    "coords": [
      -0.3898649,
      52.5681509
    ]
  },
  {
    "name": "Orton Mere (NVR)",
    "coords": [
      -0.2800883,
      52.5600241
    ]
  },
  {
    "name": "Swanage",
    "coords": [
      -1.9602545,
      50.6099662
    ]
  },
  {
    "name": "Devonport",
    "coords": [
      -4.1701007,
      50.3785212
    ]
  },
  {
    "name": "Dockyard",
    "coords": [
      -4.1760432,
      50.3823684
    ]
  },
  {
    "name": "Stanhope",
    "coords": [
      -2.0030416,
      54.7431657
    ]
  },
  {
    "name": "Devil's Bridge / Pontarfynach",
    "coords": [
      -3.8545939,
      52.376061
    ]
  },
  {
    "name": "Rhiwfron",
    "coords": [
      -3.8695391,
      52.38375
    ]
  },
  {
    "name": "Aberffrwd",
    "coords": [
      -3.9311239,
      52.3907764
    ]
  },
  {
    "name": "Capel Bangor",
    "coords": [
      -3.9889123,
      52.3993745
    ]
  },
  {
    "name": "Llanbadarn",
    "coords": [
      -4.0618313,
      52.4059721
    ]
  },
  {
    "name": "Clapham South",
    "coords": [
      -0.1476057,
      51.4527671
    ]
  },
  {
    "name": "Balham",
    "coords": [
      -0.1528977,
      51.4433857
    ]
  },
  {
    "name": "Tooting Broadway",
    "coords": [
      -0.1682905,
      51.4277387
    ]
  },
  {
    "name": "Colliers Wood",
    "coords": [
      -0.1778626,
      51.4182747
    ]
  },
  {
    "name": "South Wimbledon",
    "coords": [
      -0.1926457,
      51.4151759
    ]
  },
  {
    "name": "Fishbourne",
    "coords": [
      -0.8155144,
      50.8391034
    ]
  },
  {
    "name": "Hunmanby",
    "coords": [
      -0.3142945,
      54.1745371
    ]
  },
  {
    "name": "Redbridge",
    "coords": [
      0.0454097,
      51.5763203
    ]
  },
  {
    "name": "St James' Park",
    "coords": [
      -3.5226051,
      50.7309872
    ]
  },
  {
    "name": "Glossop",
    "coords": [
      -1.950017,
      53.4448108
    ]
  },
  {
    "name": "Dinting",
    "coords": [
      -1.9705971,
      53.4493243
    ]
  },
  {
    "name": "Broadbottom",
    "coords": [
      -2.0163275,
      53.4408091
    ]
  },
  {
    "name": "Hattersley",
    "coords": [
      -2.0399051,
      53.445183
    ]
  },
  {
    "name": "Godley",
    "coords": [
      -2.0558149,
      53.4523506
    ]
  },
  {
    "name": "Woodley",
    "coords": [
      -2.0928676,
      53.4291998
    ]
  },
  {
    "name": "Rose Hill Marple",
    "coords": [
      -2.0765086,
      53.3960432
    ]
  },
  {
    "name": "Hyde Central",
    "coords": [
      -2.0850769,
      53.4513383
    ]
  },
  {
    "name": "Surbiton",
    "coords": [
      -0.3039992,
      51.3924111
    ]
  },
  {
    "name": "Aldermaston",
    "coords": [
      -1.1367025,
      51.4022099
    ]
  },
  {
    "name": "Midgham",
    "coords": [
      -1.1782912,
      51.3960664
    ]
  },
  {
    "name": "Newbury Racecourse",
    "coords": [
      -1.306971,
      51.398654
    ]
  },
  {
    "name": "Bruton",
    "coords": [
      -2.4471521,
      51.1116892
    ]
  },
  {
    "name": "Castle Cary",
    "coords": [
      -2.5224232,
      51.099857
    ]
  },
  {
    "name": "Melksham",
    "coords": [
      -2.144607,
      51.3801725
    ]
  },
  {
    "name": "Ptarmigan Station",
    "coords": [
      -3.6453886,
      57.1240153
    ]
  },
  {
    "name": "Worstead",
    "coords": [
      1.4040132,
      52.777345
    ]
  },
  {
    "name": "Llanrwst",
    "coords": [
      -3.7948023,
      53.1391885
    ]
  },
  {
    "name": "Gogledd Llanrwst / North Llanrwst",
    "coords": [
      -3.8026402,
      53.1440071
    ]
  },
  {
    "name": "Dolgarrog",
    "coords": [
      -3.8231367,
      53.1859355
    ]
  },
  {
    "name": "Tal-y-Cafn",
    "coords": [
      -3.8183737,
      53.2284216
    ]
  },
  {
    "name": "Lympstone Village",
    "coords": [
      -3.4310966,
      50.6484198
    ]
  },
  {
    "name": "Motspur Park",
    "coords": [
      -0.2396076,
      51.3948747
    ]
  },
  {
    "name": "Dudley Port",
    "coords": [
      -2.0492538,
      52.524461
    ]
  },
  {
    "name": "South Merton",
    "coords": [
      -0.2055176,
      51.4033264
    ]
  },
  {
    "name": "Redland",
    "coords": [
      -2.5987661,
      51.4684317
    ]
  },
  {
    "name": "Pilning",
    "coords": [
      -2.6267285,
      51.556377
    ]
  },
  {
    "name": "Woburn Sands",
    "coords": [
      -0.654557,
      52.0181089
    ]
  },
  {
    "name": "Bow Brickhill",
    "coords": [
      -0.6962178,
      52.0042693
    ]
  },
  {
    "name": "Lynmouth Bay",
    "coords": [
      -3.8323694,
      51.2316264
    ]
  },
  {
    "name": "Upwey",
    "coords": [
      -2.466093,
      50.6485094
    ]
  },
  {
    "name": "Maiden Newton",
    "coords": [
      -2.569663,
      50.7802255
    ]
  },
  {
    "name": "Chetnole",
    "coords": [
      -2.5729619,
      50.866344
    ]
  },
  {
    "name": "Yetminster",
    "coords": [
      -2.5738017,
      50.8957019
    ]
  },
  {
    "name": "Thornford",
    "coords": [
      -2.5791402,
      50.9106779
    ]
  },
  {
    "name": "Yeovil Pen Mill",
    "coords": [
      -2.61304,
      50.9446866
    ]
  },
  {
    "name": "Manea",
    "coords": [
      0.1778063,
      52.4978134
    ]
  },
  {
    "name": "Hendon",
    "coords": [
      -0.2388805,
      51.5802174
    ]
  },
  {
    "name": "Furze Platt",
    "coords": [
      -0.7284148,
      51.5331544
    ]
  },
  {
    "name": "Radlett",
    "coords": [
      -0.3170888,
      51.6853254
    ]
  },
  {
    "name": "Grateley",
    "coords": [
      -1.6204438,
      51.1701959
    ]
  },
  {
    "name": "Christchurch",
    "coords": [
      -1.7847306,
      50.7383709
    ]
  },
  {
    "name": "Durrington-on-Sea",
    "coords": [
      -0.4114787,
      50.8174419
    ]
  },
  {
    "name": "Plas-y-nant",
    "coords": [
      -4.1697854,
      53.0829482
    ]
  },
  {
    "name": "Waunfawr",
    "coords": [
      -4.201675,
      53.1062641
    ]
  },
  {
    "name": "Widdrington",
    "coords": [
      -1.6162192,
      55.2411444
    ]
  },
  {
    "name": "Medstead and Four Marks",
    "coords": [
      -1.0457926,
      51.1134108
    ]
  },
  {
    "name": "Bitton",
    "coords": [
      -2.4764729,
      51.4308406
    ]
  },
  {
    "name": "Gunnislake",
    "coords": [
      -4.2195227,
      50.5166278
    ]
  },
  {
    "name": "Cark and Cartmel",
    "coords": [
      -2.9740018,
      54.1779678
    ]
  },
  {
    "name": "Dalton",
    "coords": [
      -3.1788365,
      54.154226
    ]
  },
  {
    "name": "Foxfield",
    "coords": [
      -3.2159351,
      54.2585965
    ]
  },
  {
    "name": "Silecroft",
    "coords": [
      -3.3346818,
      54.2260891
    ]
  },
  {
    "name": "Seascale",
    "coords": [
      -3.4851711,
      54.3962884
    ]
  },
  {
    "name": "Nethertown",
    "coords": [
      -3.5656239,
      54.4562273
    ]
  },
  {
    "name": "Harrington",
    "coords": [
      -3.5655496,
      54.6135197
    ]
  },
  {
    "name": "Flimby",
    "coords": [
      -3.5205306,
      54.6899875
    ]
  },
  {
    "name": "Dalston",
    "coords": [
      -2.9885758,
      54.846165
    ]
  },
  {
    "name": "Newstead",
    "coords": [
      -1.2218222,
      53.069977
    ]
  },
  {
    "name": "Lakenheath",
    "coords": [
      0.5343584,
      52.4474224
    ]
  },
  {
    "name": "Abererch",
    "coords": [
      -4.3749053,
      52.8983791
    ]
  },
  {
    "name": "Penychain",
    "coords": [
      -4.338351,
      52.9028961
    ]
  },
  {
    "name": "Maghull",
    "coords": [
      -2.9310252,
      53.5064699
    ]
  },
  {
    "name": "Llanaber",
    "coords": [
      -4.0771655,
      52.7413979
    ]
  },
  {
    "name": "Talybont",
    "coords": [
      -4.0970877,
      52.7729002
    ]
  },
  {
    "name": "Llanbedr",
    "coords": [
      -4.109581,
      52.8203328
    ]
  },
  {
    "name": "North Fambridge",
    "coords": [
      0.6817622,
      51.6486316
    ]
  },
  {
    "name": "Goring-by-Sea",
    "coords": [
      -0.4331815,
      50.8176931
    ]
  },
  {
    "name": "Lytham",
    "coords": [
      -2.9641884,
      53.7393224
    ]
  },
  {
    "name": "Ansdell & Fairhaven",
    "coords": [
      -2.993513,
      53.741637
    ]
  },
  {
    "name": "Squires Gate",
    "coords": [
      -3.0501715,
      53.7769901
    ]
  },
  {
    "name": "East Worthing",
    "coords": [
      -0.3551084,
      50.821592
    ]
  },
  {
    "name": "Lancing",
    "coords": [
      -0.3232037,
      50.8270176
    ]
  },
  {
    "name": "Shoreham-by-Sea",
    "coords": [
      -0.2714448,
      50.8343756
    ]
  },
  {
    "name": "Fishersgate",
    "coords": [
      -0.2195601,
      50.8343013
    ]
  },
  {
    "name": "Newby Bridge Halt",
    "coords": [
      -2.9739215,
      54.2696333
    ]
  },
  {
    "name": "Haverthwaite",
    "coords": [
      -3.0000168,
      54.2497682
    ]
  },
  {
    "name": "Hadfield",
    "coords": [
      -1.9653832,
      53.4608456
    ]
  },
  {
    "name": "White Notley",
    "coords": [
      0.595265,
      51.8392682
    ]
  },
  {
    "name": "Cressing",
    "coords": [
      0.578324,
      51.8519489
    ]
  },
  {
    "name": "Braintree Freeport",
    "coords": [
      0.5681965,
      51.8692939
    ]
  },
  {
    "name": "Rayleigh",
    "coords": [
      0.6002479,
      51.5894866
    ]
  },
  {
    "name": "Rochford",
    "coords": [
      0.7021425,
      51.5816749
    ]
  },
  {
    "name": "Uttoxeter",
    "coords": [
      -1.856515,
      52.89681
    ]
  },
  {
    "name": "Blythe Bridge",
    "coords": [
      -2.066925,
      52.9678303
    ]
  },
  {
    "name": "Longton",
    "coords": [
      -2.1372966,
      52.9900417
    ]
  },
  {
    "name": "Bearley",
    "coords": [
      -1.7498157,
      52.2449168
    ]
  },
  {
    "name": "Claverdon",
    "coords": [
      -1.6963369,
      52.2772189
    ]
  },
  {
    "name": "Dunblane",
    "coords": [
      -3.9657077,
      56.1858372
    ]
  },
  {
    "name": "Station 59970430",
    "coords": [
      -1.4186178,
      55.0009858
    ]
  },
  {
    "name": "Penyffordd",
    "coords": [
      -3.0548121,
      53.1427065
    ]
  },
  {
    "name": "Cwmbran",
    "coords": [
      -3.0159856,
      51.6570903
    ]
  },
  {
    "name": "Pontypool and New Inn",
    "coords": [
      -3.0134091,
      51.6973726
    ]
  },
  {
    "name": "Old Street",
    "coords": [
      -0.0876094,
      51.5256284
    ]
  },
  {
    "name": "Snowdon Ranger",
    "coords": [
      -4.1434263,
      53.073789
    ]
  },
  {
    "name": "Downham Market",
    "coords": [
      0.3656086,
      52.6041596
    ]
  },
  {
    "name": "Scarborough",
    "coords": [
      -0.4056223,
      54.2799474
    ]
  },
  {
    "name": "Wareham",
    "coords": [
      -2.1149086,
      50.6930546
    ]
  },
  {
    "name": "Kempston Hardwick",
    "coords": [
      -0.5041757,
      52.0917922
    ]
  },
  {
    "name": "Millbrook",
    "coords": [
      -0.5323915,
      52.0542365
    ]
  },
  {
    "name": "Heswall",
    "coords": [
      -3.0733389,
      53.3296559
    ]
  },
  {
    "name": "Sheringham",
    "coords": [
      1.2107897,
      52.9413671
    ]
  },
  {
    "name": "West Runton",
    "coords": [
      1.2458181,
      52.9355238
    ]
  },
  {
    "name": "Cromer",
    "coords": [
      1.2916476,
      52.9300536
    ]
  },
  {
    "name": "Bromley North",
    "coords": [
      0.0177978,
      51.409198
    ]
  },
  {
    "name": "Sherburn-in-Elmet",
    "coords": [
      -1.2329024,
      53.7975092
    ]
  },
  {
    "name": "Roche",
    "coords": [
      -4.8307554,
      50.4186675
    ]
  },
  {
    "name": "Bugle",
    "coords": [
      -4.7919145,
      50.4002418
    ]
  },
  {
    "name": "Luxulyan",
    "coords": [
      -4.7484178,
      50.3903538
    ]
  },
  {
    "name": "St. Columb Road",
    "coords": [
      -4.941332,
      50.3987461
    ]
  },
  {
    "name": "Aquarium",
    "coords": [
      -0.1328775,
      50.8189413
    ]
  },
  {
    "name": "Black Rock",
    "coords": [
      -0.1111537,
      50.8145411
    ]
  },
  {
    "name": "Kenton",
    "coords": [
      -0.3166378,
      51.5815255
    ]
  },
  {
    "name": "Kemsley Down",
    "coords": [
      0.7567947,
      51.3618635
    ]
  },
  {
    "name": "Heath High Level",
    "coords": [
      -3.181568,
      51.5168194
    ]
  },
  {
    "name": "Aber",
    "coords": [
      -3.2298096,
      51.5748662
    ]
  },
  {
    "name": "Llanbradach",
    "coords": [
      -3.2330809,
      51.6041104
    ]
  },
  {
    "name": "Burnage",
    "coords": [
      -2.2151579,
      53.4221262
    ]
  },
  {
    "name": "Redmire",
    "coords": [
      -1.9284688,
      54.3191529
    ]
  },
  {
    "name": "Wargrave",
    "coords": [
      -0.8766558,
      51.4985546
    ]
  },
  {
    "name": "Whittlesea",
    "coords": [
      -0.1180869,
      52.5495767
    ]
  },
  {
    "name": "Monument",
    "coords": [
      -1.6131717,
      54.9740058
    ]
  },
  {
    "name": "Shenstone",
    "coords": [
      -1.8443329,
      52.6392159
    ]
  },
  {
    "name": "Tutbury and Hatton",
    "coords": [
      -1.6823404,
      52.864141
    ]
  },
  {
    "name": "Bishop Auckland",
    "coords": [
      -1.6779534,
      54.6572212
    ]
  },
  {
    "name": "Shildon",
    "coords": [
      -1.6367101,
      54.6261932
    ]
  },
  {
    "name": "Dinsdale",
    "coords": [
      -1.467126,
      54.5149831
    ]
  },
  {
    "name": "Wymondham Abbey",
    "coords": [
      1.1038974,
      52.5703742
    ]
  },
  {
    "name": "Kimberley Park",
    "coords": [
      1.0518284,
      52.5910486
    ]
  },
  {
    "name": "Hardingham",
    "coords": [
      1.0246114,
      52.610697
    ]
  },
  {
    "name": "Thuxton",
    "coords": [
      1.0006859,
      52.6249314
    ]
  },
  {
    "name": "Yaxham",
    "coords": [
      0.9596864,
      52.6523643
    ]
  },
  {
    "name": "Dereham",
    "coords": [
      0.9476376,
      52.6789805
    ]
  },
  {
    "name": "Prestatyn",
    "coords": [
      -3.4073552,
      53.3362293
    ]
  },
  {
    "name": "Glanyrafon",
    "coords": [
      -4.0372952,
      52.4044648
    ]
  },
  {
    "name": "Birkenhead Central",
    "coords": [
      -3.020883,
      53.3881969
    ]
  },
  {
    "name": "Green Lane",
    "coords": [
      -3.0162757,
      53.3833042
    ]
  },
  {
    "name": "Ruskington",
    "coords": [
      -0.3804741,
      53.0413872
    ]
  },
  {
    "name": "Stonegate",
    "coords": [
      0.363387,
      51.0201404
    ]
  },
  {
    "name": "Bosham",
    "coords": [
      -0.8471677,
      50.8428556
    ]
  },
  {
    "name": "Nutbourne",
    "coords": [
      -0.8839188,
      50.8461502
    ]
  },
  {
    "name": "Micheldever",
    "coords": [
      -1.2603854,
      51.1825114
    ]
  },
  {
    "name": "Overton",
    "coords": [
      -1.2599752,
      51.2541369
    ]
  },
  {
    "name": "Baglan",
    "coords": [
      -3.8093646,
      51.6143157
    ]
  },
  {
    "name": "Monks Brook Halt",
    "coords": [
      -1.3690152,
      50.9587312
    ]
  },
  {
    "name": "Trehafod",
    "coords": [
      -3.3806119,
      51.6100466
    ]
  },
  {
    "name": "Porth",
    "coords": [
      -3.4076599,
      51.6124563
    ]
  },
  {
    "name": "Dinas Rhondda",
    "coords": [
      -3.4371,
      51.6173914
    ]
  },
  {
    "name": "Tonypandy",
    "coords": [
      -3.4490713,
      51.6198222
    ]
  },
  {
    "name": "Llwynypia",
    "coords": [
      -3.4533291,
      51.6340794
    ]
  },
  {
    "name": "Ystrad Rhondda",
    "coords": [
      -3.4665885,
      51.6434881
    ]
  },
  {
    "name": "Ton Pentre",
    "coords": [
      -3.4861594,
      51.647702
    ]
  },
  {
    "name": "Treorchy",
    "coords": [
      -3.5060614,
      51.6574072
    ]
  },
  {
    "name": "Treherbert",
    "coords": [
      -3.5350926,
      51.671619
    ]
  },
  {
    "name": "North Walsham",
    "coords": [
      1.3845702,
      52.8168645
    ]
  },
  {
    "name": "King's Cross St Pancras",
    "coords": [
      -0.1239491,
      51.530609
    ]
  },
  {
    "name": "Pentre-bach",
    "coords": [
      -3.3623399,
      51.7248294
    ]
  },
  {
    "name": "Troed-y-rhiw",
    "coords": [
      -3.3463983,
      51.7120426
    ]
  },
  {
    "name": "Merthyr Vale",
    "coords": [
      -3.3371036,
      51.6869084
    ]
  },
  {
    "name": "Quakers Yard",
    "coords": [
      -3.3228105,
      51.6603466
    ]
  },
  {
    "name": "Abercynon",
    "coords": [
      -3.3296312,
      51.6430833
    ]
  },
  {
    "name": "Penrhiwceiber",
    "coords": [
      -3.3597793,
      51.6699873
    ]
  },
  {
    "name": "Fernhill",
    "coords": [
      -3.3958825,
      51.6866141
    ]
  },
  {
    "name": "Cwmbach",
    "coords": [
      -3.4147941,
      51.701481
    ]
  },
  {
    "name": "Aberdare",
    "coords": [
      -3.4418333,
      51.7145226
    ]
  },
  {
    "name": "Rogerstone",
    "coords": [
      -3.0662702,
      51.5954576
    ]
  },
  {
    "name": "Birkhill",
    "coords": [
      -3.6606053,
      55.9932981
    ]
  },
  {
    "name": "Hucknall",
    "coords": [
      -1.1959496,
      53.0384983
    ]
  },
  {
    "name": "Caerphilly",
    "coords": [
      -3.2188217,
      51.5715441
    ]
  },
  {
    "name": "Mansfield Woodhouse",
    "coords": [
      -1.2017516,
      53.1634635
    ]
  },
  {
    "name": "Kirkwood",
    "coords": [
      -4.0482987,
      55.8541741
    ]
  },
  {
    "name": "SS Great Britain",
    "coords": [
      -2.605539,
      51.4480613
    ]
  },
  {
    "name": "Dalegarth",
    "coords": [
      -3.2747086,
      54.3954701
    ]
  },
  {
    "name": "Fisherground Halt",
    "coords": [
      -3.3034231,
      54.3923259
    ]
  },
  {
    "name": "Eskdale Green",
    "coords": [
      -3.3177092,
      54.386818
    ]
  },
  {
    "name": "Irton Road",
    "coords": [
      -3.3300669,
      54.3879142
    ]
  },
  {
    "name": "Ravenglass (R&ER)",
    "coords": [
      -3.4081846,
      54.3558349
    ]
  },
  {
    "name": "Broad Green",
    "coords": [
      -2.8933889,
      53.4065083
    ]
  },
  {
    "name": "Metheringham",
    "coords": [
      -0.3910625,
      53.1389295
    ]
  },
  {
    "name": "Bottesford",
    "coords": [
      -0.7951793,
      52.9447732
    ]
  },
  {
    "name": "Hubberts Bridge",
    "coords": [
      -0.1098555,
      52.975325
    ]
  },
  {
    "name": "Waddon",
    "coords": [
      -0.1174351,
      51.3673338
    ]
  },
  {
    "name": "Hensall",
    "coords": [
      -1.1146617,
      53.6984869
    ]
  },
  {
    "name": "Rawcliffe",
    "coords": [
      -0.9612713,
      53.6889426
    ]
  },
  {
    "name": "Pontefract Tanshelf",
    "coords": [
      -1.3189035,
      53.6940034
    ]
  },
  {
    "name": "South Elmsall",
    "coords": [
      -1.2853506,
      53.5948464
    ]
  },
  {
    "name": "Dovercourt",
    "coords": [
      1.2804944,
      51.9388367
    ]
  },
  {
    "name": "Priesthill & Darnley",
    "coords": [
      -4.3426047,
      55.8120434
    ]
  },
  {
    "name": "Summerston",
    "coords": [
      -4.2921881,
      55.8988407
    ]
  },
  {
    "name": "Ebbw Vale Parkway",
    "coords": [
      -3.1960549,
      51.7565058
    ]
  },
  {
    "name": "Llanhilleth",
    "coords": [
      -3.1349507,
      51.700126
    ]
  },
  {
    "name": "Newbridge",
    "coords": [
      -3.1431855,
      51.6653896
    ]
  },
  {
    "name": "Whitecraigs",
    "coords": [
      -4.3103056,
      55.7902764
    ]
  },
  {
    "name": "St Budeaux Victoria Road",
    "coords": [
      -4.1877512,
      50.402196
    ]
  },
  {
    "name": "Ynyswen",
    "coords": [
      -3.521481,
      51.6649577
    ]
  },
  {
    "name": "Ystrad Mynach",
    "coords": [
      -3.2418174,
      51.6405449
    ]
  },
  {
    "name": "Hengoed",
    "coords": [
      -3.2256551,
      51.6469338
    ]
  },
  {
    "name": "Pengam",
    "coords": [
      -3.2301201,
      51.67009
    ]
  },
  {
    "name": "Gilfach Fargoed",
    "coords": [
      -3.2274233,
      51.6841393
    ]
  },
  {
    "name": "Bargoed",
    "coords": [
      -3.2300431,
      51.6929046
    ]
  },
  {
    "name": "Brithdir",
    "coords": [
      -3.2282991,
      51.7102669
    ]
  },
  {
    "name": "Tir-Phil",
    "coords": [
      -3.245999,
      51.7210308
    ]
  },
  {
    "name": "Pontlottyn",
    "coords": [
      -3.2793246,
      51.7465332
    ]
  },
  {
    "name": "Rhymney",
    "coords": [
      -3.2895642,
      51.7588286
    ]
  },
  {
    "name": "Chappel and Wakes Colne",
    "coords": [
      0.7586045,
      51.9258987
    ]
  },
  {
    "name": "Bures",
    "coords": [
      0.7691188,
      51.9712007
    ]
  },
  {
    "name": "Sudbury",
    "coords": [
      0.7355732,
      52.0362647
    ]
  },
  {
    "name": "Stockwell",
    "coords": [
      -0.1225014,
      51.472211
    ]
  },
  {
    "name": "St Budeaux Ferry Road",
    "coords": [
      -4.1871029,
      50.4015816
    ]
  },
  {
    "name": "Arsenal",
    "coords": [
      -0.1074866,
      51.5583839
    ]
  },
  {
    "name": "Newcastle",
    "coords": [
      -1.616046,
      54.9683364
    ]
  },
  {
    "name": "Thorpe Culvert",
    "coords": [
      0.1995165,
      53.1230326
    ]
  },
  {
    "name": "Salhouse",
    "coords": [
      1.3913667,
      52.6755817
    ]
  },
  {
    "name": "Hoveton and Wroxham",
    "coords": [
      1.4080243,
      52.7154885
    ]
  },
  {
    "name": "Abergele and Pensarn",
    "coords": [
      -3.5826531,
      53.2945866
    ]
  },
  {
    "name": "Conwy",
    "coords": [
      -3.8306652,
      53.280096
    ]
  },
  {
    "name": "Buckley",
    "coords": [
      -3.0551852,
      53.1625354
    ]
  },
  {
    "name": "Cottingley",
    "coords": [
      -1.5877727,
      53.7680337
    ]
  },
  {
    "name": "Park Lane",
    "coords": [
      -1.3846154,
      54.902301
    ]
  },
  {
    "name": "Glan Conwy",
    "coords": [
      -3.7976377,
      53.268621
    ]
  },
  {
    "name": "Chatelherault",
    "coords": [
      -4.0046108,
      55.7653766
    ]
  },
  {
    "name": "Larkhall",
    "coords": [
      -3.9750227,
      55.7386059
    ]
  },
  {
    "name": "Newmarket",
    "coords": [
      0.4073491,
      52.238341
    ]
  },
  {
    "name": "Llanishen",
    "coords": [
      -3.181843,
      51.5329957
    ]
  },
  {
    "name": "Livingston South",
    "coords": [
      -3.5015189,
      55.8716089
    ]
  },
  {
    "name": "Barry",
    "coords": [
      -3.2848689,
      51.3969039
    ]
  },
  {
    "name": "Cadoxton",
    "coords": [
      -3.2486814,
      51.4122147
    ]
  },
  {
    "name": "Llantwit Major",
    "coords": [
      -3.4814284,
      51.4096499
    ]
  },
  {
    "name": "Buckfastleigh",
    "coords": [
      -3.7686403,
      50.4828098
    ]
  },
  {
    "name": "Totnes Riverside",
    "coords": [
      -3.6856839,
      50.4394733
    ]
  },
  {
    "name": "Staverton",
    "coords": [
      -3.7149082,
      50.4609185
    ]
  },
  {
    "name": "Fairwater",
    "coords": [
      -3.2338039,
      51.4938863
    ]
  },
  {
    "name": "Ninian Park",
    "coords": [
      -3.2013886,
      51.4765408
    ]
  },
  {
    "name": "Paignton",
    "coords": [
      -3.5649134,
      50.434598
    ]
  },
  {
    "name": "Barry Island",
    "coords": [
      -3.2742115,
      51.3923125
    ]
  },
  {
    "name": "Chapeltown",
    "coords": [
      -1.4664375,
      53.4625006
    ]
  },
  {
    "name": "Goodrington Sands",
    "coords": [
      -3.5615812,
      50.4246083
    ]
  },
  {
    "name": "Merryfield Lane",
    "coords": [
      -2.4983835,
      51.1807671
    ]
  },
  {
    "name": "Churston",
    "coords": [
      -3.5569587,
      50.3961487
    ]
  },
  {
    "name": "Heathrow Terminal 4",
    "coords": [
      -0.4459987,
      51.4590893
    ]
  },
  {
    "name": "Clayton West",
    "coords": [
      -1.6112886,
      53.5971192
    ]
  },
  {
    "name": "Skelmanthorpe",
    "coords": [
      -1.6527683,
      53.5954353
    ]
  },
  {
    "name": "Shelley",
    "coords": [
      -1.6854558,
      53.5872715
    ]
  },
  {
    "name": "Idridgehay",
    "coords": [
      -1.5691356,
      53.0356487
    ]
  },
  {
    "name": "Gunton",
    "coords": [
      1.349369,
      52.866075
    ]
  },
  {
    "name": "Roughton Road",
    "coords": [
      1.2997514,
      52.9179454
    ]
  },
  {
    "name": "Jewellery Quarter",
    "coords": [
      -1.913704,
      52.4896794
    ]
  },
  {
    "name": "Sheringham (NNR)",
    "coords": [
      1.2080451,
      52.9417019
    ]
  },
  {
    "name": "Shottle",
    "coords": [
      -1.547398,
      53.0182899
    ]
  },
  {
    "name": "Wirksworth",
    "coords": [
      -1.5687991,
      53.0827559
    ]
  },
  {
    "name": "St Michaels",
    "coords": [
      -2.9535298,
      53.3759381
    ]
  },
  {
    "name": "Eastleigh",
    "coords": [
      -1.3499611,
      50.9687923
    ]
  },
  {
    "name": "Blackpool Pleasure Beach",
    "coords": [
      -3.0538832,
      53.787882
    ]
  },
  {
    "name": "Ashey",
    "coords": [
      -1.183063,
      50.6964692
    ]
  },
  {
    "name": "Oulton Broad North",
    "coords": [
      1.7161761,
      52.4777293
    ]
  },
  {
    "name": "Beccles",
    "coords": [
      1.5696314,
      52.4588262
    ]
  },
  {
    "name": "Lowestoft",
    "coords": [
      1.7499873,
      52.47424
    ]
  },
  {
    "name": "Darsham",
    "coords": [
      1.5235994,
      52.2732073
    ]
  },
  {
    "name": "Mirfield",
    "coords": [
      -1.6928647,
      53.6714301
    ]
  },
  {
    "name": "Peartree",
    "coords": [
      -1.4722913,
      52.8976023
    ]
  },
  {
    "name": "Waterfront",
    "coords": [
      -3.2801207,
      51.398763
    ]
  },
  {
    "name": "Plymouth Road",
    "coords": [
      -3.2709871,
      51.3932678
    ]
  },
  {
    "name": "Tonfanau",
    "coords": [
      -4.1234912,
      52.6136247
    ]
  },
  {
    "name": "Coryton",
    "coords": [
      -3.2314774,
      51.5204441
    ]
  },
  {
    "name": "Whitchurch",
    "coords": [
      -3.2221576,
      51.5208061
    ]
  },
  {
    "name": "Rhiwbina",
    "coords": [
      -3.2144829,
      51.521084
    ]
  },
  {
    "name": "Birchgrove",
    "coords": [
      -3.2024702,
      51.5215153
    ]
  },
  {
    "name": "Heath Low Level",
    "coords": [
      -3.1822414,
      51.5157601
    ]
  },
  {
    "name": "Ludlow",
    "coords": [
      -2.71598,
      52.3711007
    ]
  },
  {
    "name": "Wilnecote",
    "coords": [
      -1.6797073,
      52.6105794
    ]
  },
  {
    "name": "Acle",
    "coords": [
      1.5439772,
      52.6346757
    ]
  },
  {
    "name": "Berney Arms",
    "coords": [
      1.6310707,
      52.5902585
    ]
  },
  {
    "name": "Buckenham",
    "coords": [
      1.4702099,
      52.597696
    ]
  },
  {
    "name": "Haddiscoe",
    "coords": [
      1.6229897,
      52.5290248
    ]
  },
  {
    "name": "Lingwood",
    "coords": [
      1.4896908,
      52.6220505
    ]
  },
  {
    "name": "Hatfield Peverel",
    "coords": [
      0.5918178,
      51.7798721
    ]
  },
  {
    "name": "Mistley",
    "coords": [
      1.081649,
      51.9435862
    ]
  },
  {
    "name": "Stockton",
    "coords": [
      -1.3181754,
      54.5698756
    ]
  },
  {
    "name": "Danescourt",
    "coords": [
      -3.2339459,
      51.5004014
    ]
  },
  {
    "name": "Lisvane and Thornhill",
    "coords": [
      -3.1855685,
      51.5444152
    ]
  },
  {
    "name": "Cam and Dursley",
    "coords": [
      -2.3591702,
      51.7176405
    ]
  },
  {
    "name": "Hyde North",
    "coords": [
      -2.0850338,
      53.4644638
    ]
  },
  {
    "name": "Worle",
    "coords": [
      -2.9093225,
      51.3578502
    ]
  },
  {
    "name": "Exhibition Centre",
    "coords": [
      -4.2831967,
      55.8613947
    ]
  },
  {
    "name": "Gleneagles",
    "coords": [
      -3.7309953,
      56.2749283
    ]
  },
  {
    "name": "Invergowrie",
    "coords": [
      -3.0578286,
      56.4562504
    ]
  },
  {
    "name": "Rutherglen",
    "coords": [
      -4.2133384,
      55.8308472
    ]
  },
  {
    "name": "Deighton",
    "coords": [
      -1.7524631,
      53.6682922
    ]
  },
  {
    "name": "Base Station",
    "coords": [
      -3.6700967,
      57.1337091
    ]
  },
  {
    "name": "Sheiling / Middle",
    "coords": [
      -3.6609169,
      57.1276775
    ]
  },
  {
    "name": "Hatfield & Stainforth",
    "coords": [
      -1.0232631,
      53.5888703
    ]
  },
  {
    "name": "Kirk Sandall",
    "coords": [
      -1.0745371,
      53.5636066
    ]
  },
  {
    "name": "Thorne South",
    "coords": [
      -0.9552556,
      53.6033448
    ]
  },
  {
    "name": "Barnsley Interchange",
    "coords": [
      -1.4772984,
      53.5544108
    ]
  },
  {
    "name": "Fitzwilliam",
    "coords": [
      -1.374636,
      53.6326086
    ]
  },
  {
    "name": "Roman Bridge",
    "coords": [
      -3.9214861,
      53.0444116
    ]
  },
  {
    "name": "Dolwyddelan",
    "coords": [
      -3.8846719,
      53.0515194
    ]
  },
  {
    "name": "Pont-y-Pant",
    "coords": [
      -3.8628141,
      53.0651056
    ]
  },
  {
    "name": "Huyton",
    "coords": [
      -2.8432195,
      53.409627
    ]
  },
  {
    "name": "Whiston",
    "coords": [
      -2.7965205,
      53.413914
    ]
  },
  {
    "name": "Kirkdale",
    "coords": [
      -2.9811665,
      53.4407853
    ]
  },
  {
    "name": "Bank Hall",
    "coords": [
      -2.9878045,
      53.4378965
    ]
  },
  {
    "name": "Penarth",
    "coords": [
      -3.1746781,
      51.4358489
    ]
  },
  {
    "name": "Brechin",
    "coords": [
      -2.6520711,
      56.7316163
    ]
  },
  {
    "name": "Bridge of Dun",
    "coords": [
      -2.5507472,
      56.7185174
    ]
  },
  {
    "name": "Bromley Cross",
    "coords": [
      -2.4108352,
      53.6139542
    ]
  },
  {
    "name": "Hall i' th' Wood",
    "coords": [
      -2.4130759,
      53.5974456
    ]
  },
  {
    "name": "Plas Halt",
    "coords": [
      -4.0030837,
      52.9481537
    ]
  },
  {
    "name": "Campbell's Platform",
    "coords": [
      -3.976517,
      52.9578739
    ]
  },
  {
    "name": "Sarn",
    "coords": [
      -3.5895171,
      51.5385274
    ]
  },
  {
    "name": "Maesteg (Ewenny Road)",
    "coords": [
      -3.6482526,
      51.6052667
    ]
  },
  {
    "name": "Blaenau Ffestiniog",
    "coords": [
      -3.9385096,
      52.9947059
    ]
  },
  {
    "name": "Risca and Pontymister",
    "coords": [
      -3.0917171,
      51.6056986
    ]
  },
  {
    "name": "Ty Glas",
    "coords": [
      -3.1972083,
      51.5217075
    ]
  },
  {
    "name": "Brampton",
    "coords": [
      1.5438215,
      52.3955079
    ]
  },
  {
    "name": "Melton",
    "coords": [
      1.3381527,
      52.1043512
    ]
  },
  {
    "name": "Porthmadog (WHHR)",
    "coords": [
      -4.131979,
      52.9309118
    ]
  },
  {
    "name": "Pen-y-Mount",
    "coords": [
      -4.1239372,
      52.9341596
    ]
  },
  {
    "name": "Chinnor",
    "coords": [
      -0.9060291,
      51.6981184
    ]
  },
  {
    "name": "Greenway Halt",
    "coords": [
      -3.5730892,
      50.3863638
    ]
  },
  {
    "name": "Station 258134259",
    "coords": [
      -1.5121653,
      53.6763613
    ]
  },
  {
    "name": "Audley End Miniature Railway",
    "coords": [
      0.217517,
      52.0192173
    ]
  },
  {
    "name": "Tywyn Wharf",
    "coords": [
      -4.0888228,
      52.583617
    ]
  },
  {
    "name": "Pendre",
    "coords": [
      -4.081217,
      52.5872348
    ]
  },
  {
    "name": "Rhydyronen",
    "coords": [
      -4.0463751,
      52.5998319
    ]
  },
  {
    "name": "Brynglas",
    "coords": [
      -4.0271075,
      52.6083911
    ]
  },
  {
    "name": "Abergynolwyn",
    "coords": [
      -3.9659472,
      52.6386287
    ]
  },
  {
    "name": "Fairbourne (FR)",
    "coords": [
      -4.050288,
      52.695685
    ]
  },
  {
    "name": "Pont Croesor Halt",
    "coords": [
      -4.0980002,
      52.9501133
    ]
  },
  {
    "name": "Welshpool Raven Square",
    "coords": [
      -3.1601795,
      52.6597471
    ]
  },
  {
    "name": "Sylfaen",
    "coords": [
      -3.2194162,
      52.6497276
    ]
  },
  {
    "name": "Castle Caereinion",
    "coords": [
      -3.2411329,
      52.6445941
    ]
  },
  {
    "name": "Cyfronydd",
    "coords": [
      -3.2754268,
      52.6604776
    ]
  },
  {
    "name": "Heniarth",
    "coords": [
      -3.2978325,
      52.6636715
    ]
  },
  {
    "name": "Pant",
    "coords": [
      -3.3644454,
      51.77786
    ]
  },
  {
    "name": "Pontsticill",
    "coords": [
      -3.3606768,
      51.7999527
    ]
  },
  {
    "name": "Dol-y-gaer",
    "coords": [
      -3.3682696,
      51.8209203
    ]
  },
  {
    "name": "Chasewater Heaths",
    "coords": [
      -1.9469988,
      52.6761138
    ]
  },
  {
    "name": "Thorpe-le-Soken",
    "coords": [
      1.1604018,
      51.8478614
    ]
  },
  {
    "name": "Kirby Cross",
    "coords": [
      1.2137971,
      51.8415069
    ]
  },
  {
    "name": "Frinton-on-Sea",
    "coords": [
      1.2433218,
      51.8377612
    ]
  },
  {
    "name": "Carbis Bay",
    "coords": [
      -5.4637047,
      50.1970953
    ]
  },
  {
    "name": "Lelant",
    "coords": [
      -5.4365104,
      50.1839692
    ]
  },
  {
    "name": "Lelant Saltings",
    "coords": [
      -5.441159,
      50.1785858
    ]
  },
  {
    "name": "Norchard",
    "coords": [
      -2.5395674,
      51.7357697
    ]
  },
  {
    "name": "Lydney Town",
    "coords": [
      -2.5319837,
      51.725442
    ]
  },
  {
    "name": "Lydney Junction",
    "coords": [
      -2.5311242,
      51.7156961
    ]
  },
  {
    "name": "Quintrell Downs",
    "coords": [
      -5.0288475,
      50.4041228
    ]
  },
  {
    "name": "Llangollen",
    "coords": [
      -3.1714237,
      52.9713051
    ]
  },
  {
    "name": "Oulton Broad South",
    "coords": [
      1.7074886,
      52.4695869
    ]
  },
  {
    "name": "Tondu",
    "coords": [
      -3.5951442,
      51.5474663
    ]
  },
  {
    "name": "Bala (Penybont)",
    "coords": [
      -3.5932353,
      52.9014233
    ]
  },
  {
    "name": "Llanuwchllyn",
    "coords": [
      -3.6640137,
      52.8560106
    ]
  },
  {
    "name": "Llangower",
    "coords": [
      -3.6322971,
      52.87501
    ]
  },
  {
    "name": "Walton-on-the-Naze",
    "coords": [
      1.2678629,
      51.8462158
    ]
  },
  {
    "name": "Bentley (South Yorkshire)",
    "coords": [
      -1.1507819,
      53.5438085
    ]
  },
  {
    "name": "Wolsingham",
    "coords": [
      -1.8843965,
      54.7262237
    ]
  },
  {
    "name": "Frosterley",
    "coords": [
      -1.9640609,
      54.7269224
    ]
  },
  {
    "name": "Crowcombe Heathfield",
    "coords": [
      -3.2333506,
      51.1007791
    ]
  },
  {
    "name": "Stogumber",
    "coords": [
      -3.27338,
      51.1277404
    ]
  },
  {
    "name": "Doniford Halt",
    "coords": [
      -3.3115629,
      51.1783525
    ]
  },
  {
    "name": "Williton",
    "coords": [
      -3.3094908,
      51.1664654
    ]
  },
  {
    "name": "Washford",
    "coords": [
      -3.3688908,
      51.1615078
    ]
  },
  {
    "name": "Watchet",
    "coords": [
      -3.3297097,
      51.180634
    ]
  },
  {
    "name": "Blue Anchor",
    "coords": [
      -3.4009333,
      51.1816647
    ]
  },
  {
    "name": "Dunster",
    "coords": [
      -3.4384228,
      51.1931186
    ]
  },
  {
    "name": "Minehead",
    "coords": [
      -3.4678346,
      51.2062859
    ]
  },
  {
    "name": "West Croydon",
    "coords": [
      -0.1020387,
      51.378808
    ]
  },
  {
    "name": "Castlerock",
    "coords": [
      -6.7873526,
      55.165303
    ]
  },
  {
    "name": "Ballymoney",
    "coords": [
      -6.5140212,
      55.0664809
    ]
  },
  {
    "name": "Ballymena",
    "coords": [
      -6.2846354,
      54.8640702
    ]
  },
  {
    "name": "Antrim",
    "coords": [
      -6.2114876,
      54.7180881
    ]
  },
  {
    "name": "Pimlico",
    "coords": [
      -0.1334879,
      51.4892267
    ]
  },
  {
    "name": "Marsh Mills",
    "coords": [
      -4.0824299,
      50.3949594
    ]
  },
  {
    "name": "Prestwick International Airport",
    "coords": [
      -4.6141614,
      55.5090011
    ]
  },
  {
    "name": "Filton Abbey Wood",
    "coords": [
      -2.563826,
      51.503393
    ]
  },
  {
    "name": "Page's Park",
    "coords": [
      -0.6509031,
      51.9088183
    ]
  },
  {
    "name": "Colesloggett Halt",
    "coords": [
      -4.6746399,
      50.4598754
    ]
  },
  {
    "name": "Bodmin General",
    "coords": [
      -4.7166011,
      50.4658792
    ]
  },
  {
    "name": "Launceston",
    "coords": [
      -4.3649403,
      50.6403814
    ]
  },
  {
    "name": "Cantley",
    "coords": [
      1.5136275,
      52.5787207
    ]
  },
  {
    "name": "Shotton High Level",
    "coords": [
      -3.0383059,
      53.2125372
    ]
  },
  {
    "name": "Sandwell and Dudley",
    "coords": [
      -2.01168,
      52.5085779
    ]
  },
  {
    "name": "Holt",
    "coords": [
      1.1134842,
      52.9143627
    ]
  },
  {
    "name": "Beckton Park",
    "coords": [
      0.0549426,
      51.5087601
    ]
  },
  {
    "name": "Holycombe Junction",
    "coords": [
      -0.7820793,
      51.057239
    ]
  },
  {
    "name": "Navigation Road",
    "coords": [
      -2.3432686,
      53.3957446
    ]
  },
  {
    "name": "Station 293523247",
    "coords": [
      -0.6489387,
      51.4639151
    ]
  },
  {
    "name": "Sky Rider",
    "coords": [
      -0.6531323,
      51.4646093
    ]
  },
  {
    "name": "The Hawthorns",
    "coords": [
      -1.964545,
      52.5055248
    ]
  },
  {
    "name": "Knucklas",
    "coords": [
      -3.0965228,
      52.3597573
    ]
  },
  {
    "name": "East Croydon",
    "coords": [
      -0.0927317,
      51.3758448
    ]
  },
  {
    "name": "The Midden",
    "coords": [
      0.8683605,
      52.9471474
    ]
  },
  {
    "name": "Warham",
    "coords": [
      0.8777375,
      52.9363888
    ]
  },
  {
    "name": "Wighton Halt",
    "coords": [
      0.8790464,
      52.918577
    ]
  },
  {
    "name": "Wroxham BVR",
    "coords": [
      1.4085335,
      52.7168488
    ]
  },
  {
    "name": "Coltishall",
    "coords": [
      1.3603255,
      52.7344055
    ]
  },
  {
    "name": "Buxton",
    "coords": [
      1.3070895,
      52.7575759
    ]
  },
  {
    "name": "Brampton",
    "coords": [
      1.2913607,
      52.766942
    ]
  },
  {
    "name": "Aylsham",
    "coords": [
      1.255403,
      52.7910457
    ]
  },
  {
    "name": "Wells-on-Sea",
    "coords": [
      0.8653789,
      52.9492023
    ]
  },
  {
    "name": "Walsingham",
    "coords": [
      0.8719869,
      52.8961239
    ]
  },
  {
    "name": "Overton for Ferry Meadows",
    "coords": [
      -0.3025918,
      52.5589076
    ]
  },
  {
    "name": "Peterborough (NVR)",
    "coords": [
      -0.2479461,
      52.5677599
    ]
  },
  {
    "name": "Castle Hedingham",
    "coords": [
      0.5817712,
      51.9957579
    ]
  },
  {
    "name": "Colwyn Bay",
    "coords": [
      -3.7258927,
      53.2968237
    ]
  },
  {
    "name": "Saxmundham",
    "coords": [
      1.4902723,
      52.2152245
    ]
  },
  {
    "name": "Prittlewell",
    "coords": [
      0.7106494,
      51.5505931
    ]
  },
  {
    "name": "Shore",
    "coords": [
      0.7158518,
      51.5326972
    ]
  },
  {
    "name": "Digby and Sowton",
    "coords": [
      -3.4739411,
      50.7142155
    ]
  },
  {
    "name": "Beckfoot",
    "coords": [
      -3.2824194,
      54.392606
    ]
  },
  {
    "name": "Shepherdswell (EKR)",
    "coords": [
      1.230519,
      51.1896657
    ]
  },
  {
    "name": "Ruddington Fields",
    "coords": [
      -1.1479442,
      52.8845732
    ]
  },
  {
    "name": "Nottingham",
    "coords": [
      -1.1449555,
      52.9473037
    ]
  },
  {
    "name": "Redditch",
    "coords": [
      -1.9456089,
      52.3063807
    ]
  },
  {
    "name": "Bloxwich North",
    "coords": [
      -2.0175675,
      52.6253158
    ]
  },
  {
    "name": "Miniature Train",
    "coords": [
      -0.7222357,
      52.0480742
    ]
  },
  {
    "name": "Avon Riverside",
    "coords": [
      -2.4577535,
      51.4155504
    ]
  },
  {
    "name": "Basingstoke",
    "coords": [
      -1.0885594,
      51.2684238
    ]
  },
  {
    "name": "St Neots",
    "coords": [
      -0.2470646,
      52.2316268
    ]
  },
  {
    "name": "Market Bosworth",
    "coords": [
      -1.420975,
      52.624726
    ]
  },
  {
    "name": "Lintley Halt",
    "coords": [
      -2.4859345,
      54.8522284
    ]
  },
  {
    "name": "Pontgoch",
    "coords": [
      -4.4299734,
      52.0415523
    ]
  },
  {
    "name": "Causey Arch",
    "coords": [
      -1.686687,
      54.8973288
    ]
  },
  {
    "name": "Andrews House",
    "coords": [
      -1.6757241,
      54.9084492
    ]
  },
  {
    "name": "Horsehay & Dawley",
    "coords": [
      -2.4816699,
      52.6629789
    ]
  },
  {
    "name": "Dronfield",
    "coords": [
      -1.4692529,
      53.3014
    ]
  },
  {
    "name": "Dawlish Warren",
    "coords": [
      -3.4437159,
      50.5986475
    ]
  },
  {
    "name": "Park Halt",
    "coords": [
      -1.5363956,
      53.7614562
    ]
  },
  {
    "name": "Midsomer Norton",
    "coords": [
      -2.483138,
      51.2809511
    ]
  },
  {
    "name": "Grosvenor Park Miniature Railway",
    "coords": [
      -2.8810028,
      53.1908811
    ]
  },
  {
    "name": "Isfield",
    "coords": [
      0.065492,
      50.9354781
    ]
  },
  {
    "name": "Whitecroft",
    "coords": [
      -2.5521311,
      51.7531306
    ]
  },
  {
    "name": "Dolgoch",
    "coords": [
      -3.9939962,
      52.622034
    ]
  },
  {
    "name": "Nant Gwernol",
    "coords": [
      -3.9508519,
      52.6418784
    ]
  },
  {
    "name": "Avoncliff",
    "coords": [
      -2.2818436,
      51.33956
    ]
  },
  {
    "name": "Sunniside",
    "coords": [
      -1.6753699,
      54.920206
    ]
  },
  {
    "name": "Victoria",
    "coords": [
      -0.1431522,
      51.4963688
    ]
  },
  {
    "name": "Country Park Halt",
    "coords": [
      -2.3759192,
      52.4549663
    ]
  },
  {
    "name": "Upminster",
    "coords": [
      0.2516815,
      51.5589708
    ]
  },
  {
    "name": "Streethouse",
    "coords": [
      -1.3994742,
      53.6761886
    ]
  },
  {
    "name": "Wilmslow",
    "coords": [
      -2.2260089,
      53.3270993
    ]
  },
  {
    "name": "Cheadle Hulme",
    "coords": [
      -2.1883499,
      53.3760261
    ]
  },
  {
    "name": "Pitsford and Brampton",
    "coords": [
      -0.9238379,
      52.2937192
    ]
  },
  {
    "name": "Rudyard",
    "coords": [
      -2.0676425,
      53.1180013
    ]
  },
  {
    "name": "The Dam",
    "coords": [
      -2.0723755,
      53.1222913
    ]
  },
  {
    "name": "Hunthouse Wood",
    "coords": [
      -2.0820086,
      53.1348078
    ]
  },
  {
    "name": "Swinton (Manchester)",
    "coords": [
      -2.336998,
      53.5148082
    ]
  },
  {
    "name": "Station 466525444",
    "coords": [
      -4.2384783,
      57.4606137
    ]
  },
  {
    "name": "Wembley Park",
    "coords": [
      -0.2800532,
      51.5636297
    ]
  },
  {
    "name": "Beddgelert",
    "coords": [
      -4.1078052,
      53.0117659
    ]
  },
  {
    "name": "Highbridge and Burnham",
    "coords": [
      -2.9720037,
      51.2183132
    ]
  },
  {
    "name": "Cheddleton",
    "coords": [
      -2.0272735,
      53.0654214
    ]
  },
  {
    "name": "Alton Towers Car Park",
    "coords": [
      -1.877458,
      52.9856818
    ]
  },
  {
    "name": "Willow Lawn",
    "coords": [
      -0.4318151,
      51.5930135
    ]
  },
  {
    "name": "Woody Bay",
    "coords": [
      -0.4290932,
      51.588726
    ]
  },
  {
    "name": "Wigton",
    "coords": [
      -3.1643538,
      54.829095
    ]
  },
  {
    "name": "Exbury Central",
    "coords": [
      -1.399376,
      50.8035469
    ]
  },
  {
    "name": "Exbury North",
    "coords": [
      -1.4040902,
      50.8056806
    ]
  },
  {
    "name": "Nailsea and Backwell",
    "coords": [
      -2.7496898,
      51.4196718
    ]
  },
  {
    "name": "Dunston",
    "coords": [
      -1.6414408,
      54.9499976
    ]
  },
  {
    "name": "Norton Lakeside Halt",
    "coords": [
      -1.9568567,
      52.6748556
    ]
  },
  {
    "name": "Gelert's Farm",
    "coords": [
      -4.128303,
      52.9312725
    ]
  },
  {
    "name": "Pollokshields East",
    "coords": [
      -4.2690794,
      55.8407606
    ]
  },
  {
    "name": "Frodsham",
    "coords": [
      -2.7235659,
      53.2958317
    ]
  },
  {
    "name": "Palace Station",
    "coords": [
      -1.3581865,
      51.8429869
    ]
  },
  {
    "name": "Walled Garden Station",
    "coords": [
      -1.3505501,
      51.8388678
    ]
  },
  {
    "name": "Chapel Road Station",
    "coords": [
      -1.3409694,
      50.8672425
    ]
  },
  {
    "name": "Piccadilly",
    "coords": [
      -1.3407083,
      50.8672955
    ]
  },
  {
    "name": "Drumfrochar",
    "coords": [
      -4.7721639,
      55.9411705
    ]
  },
  {
    "name": "Mountain Ash",
    "coords": [
      -3.376667,
      51.6817619
    ]
  },
  {
    "name": "Shipley",
    "coords": [
      -1.7736115,
      53.8335128
    ]
  },
  {
    "name": "Whifflet",
    "coords": [
      -4.0187094,
      55.8539056
    ]
  },
  {
    "name": "Garforth",
    "coords": [
      -1.382282,
      53.7965742
    ]
  },
  {
    "name": "Finsbury Park",
    "coords": [
      -0.1064144,
      51.5648345
    ]
  },
  {
    "name": "Bedale",
    "coords": [
      -1.5880507,
      54.2891975
    ]
  },
  {
    "name": "Cambridge",
    "coords": [
      0.1375027,
      52.194144
    ]
  },
  {
    "name": "Longleat",
    "coords": [
      -2.2762606,
      51.1873942
    ]
  },
  {
    "name": "Kinneil Halt",
    "coords": [
      -3.6256241,
      56.0148224
    ]
  },
  {
    "name": "Bo'ness",
    "coords": [
      -3.6004981,
      56.0179562
    ]
  },
  {
    "name": "East Tanfield",
    "coords": [
      -1.6992903,
      54.8885497
    ]
  },
  {
    "name": "Scruton",
    "coords": [
      -1.5338604,
      54.3195817
    ]
  },
  {
    "name": "Whistle Inn halt",
    "coords": [
      -3.1185638,
      51.7840036
    ]
  },
  {
    "name": "Furnace Sidings",
    "coords": [
      -3.1113576,
      51.7785502
    ]
  },
  {
    "name": "Blaenavon High Level",
    "coords": [
      -3.0852529,
      51.7684836
    ]
  },
  {
    "name": "Big Pit halt",
    "coords": [
      -3.1049045,
      51.7739838
    ]
  },
  {
    "name": "Prestwick Town",
    "coords": [
      -4.6143864,
      55.5017394
    ]
  },
  {
    "name": "Lewes",
    "coords": [
      0.0113494,
      50.8705975
    ]
  },
  {
    "name": "Martins Heron",
    "coords": [
      -0.7242433,
      51.4074442
    ]
  },
  {
    "name": "Southampton Central",
    "coords": [
      -1.4142289,
      50.9074977
    ]
  },
  {
    "name": "Kingsley & Froghall",
    "coords": [
      -1.9644668,
      53.0215657
    ]
  },
  {
    "name": "Nantmor Halt",
    "coords": [
      -4.0891687,
      52.9935536
    ]
  },
  {
    "name": "Bontnewydd",
    "coords": [
      -4.2759103,
      53.1167689
    ]
  },
  {
    "name": "Lidlington",
    "coords": [
      -0.5588064,
      52.0416894
    ]
  },
  {
    "name": "Clacton-on-Sea",
    "coords": [
      1.1543273,
      51.7945324
    ]
  },
  {
    "name": "St Ives",
    "coords": [
      -5.4777671,
      50.2088461
    ]
  },
  {
    "name": "Portrush",
    "coords": [
      -6.6533861,
      55.2031155
    ]
  },
  {
    "name": "Dhu Varren",
    "coords": [
      -6.6611895,
      55.1962242
    ]
  },
  {
    "name": "University",
    "coords": [
      -6.6684074,
      55.1503894
    ]
  },
  {
    "name": "Newton Aycliffe",
    "coords": [
      -1.5897097,
      54.613739
    ]
  },
  {
    "name": "Estuary Halt",
    "coords": [
      -4.0518658,
      52.7122942
    ]
  },
  {
    "name": "Barmouth Ferry",
    "coords": [
      -4.0485009,
      52.7151503
    ]
  },
  {
    "name": "Golf Halt",
    "coords": [
      -4.0575144,
      52.7016742
    ]
  },
  {
    "name": "Frimley Lodge Miniature Railway",
    "coords": [
      -0.7217326,
      51.2962035
    ]
  },
  {
    "name": "Danycoed",
    "coords": [
      -4.3304149,
      51.9072359
    ]
  },
  {
    "name": "Llwyfan Cerrig",
    "coords": [
      -4.318223,
      51.9081128
    ]
  },
  {
    "name": "Bronwydd Arms",
    "coords": [
      -4.3007353,
      51.8921567
    ]
  },
  {
    "name": "Newton-on-Ayr",
    "coords": [
      -4.625979,
      55.4739658
    ]
  },
  {
    "name": "Lynton Village",
    "coords": [
      -3.8354722,
      51.2313042
    ]
  },
  {
    "name": "Sandplace",
    "coords": [
      -4.464799,
      50.3875961
    ]
  },
  {
    "name": "Museum Halt",
    "coords": [
      -1.5495933,
      55.1897525
    ]
  },
  {
    "name": "Lakeside Halt",
    "coords": [
      -1.5513922,
      55.1960868
    ]
  },
  {
    "name": "Forest Halt",
    "coords": [
      -0.9705382,
      54.5793885
    ]
  },
  {
    "name": "Drummuir",
    "coords": [
      -3.0390296,
      57.4842317
    ]
  },
  {
    "name": "Meillionen",
    "coords": [
      -4.1235359,
      53.0194027
    ]
  },
  {
    "name": "Dinas",
    "coords": [
      -4.2769864,
      53.1035053
    ]
  },
  {
    "name": "Tryfan Junction",
    "coords": [
      -4.2398315,
      53.1079727
    ]
  },
  {
    "name": "Penrhyn",
    "coords": [
      -4.064842,
      52.9351708
    ]
  },
  {
    "name": "Rheidol Falls",
    "coords": [
      -3.8996918,
      52.3911035
    ]
  },
  {
    "name": "Nantyronen",
    "coords": [
      -3.9487287,
      52.3853282
    ]
  },
  {
    "name": "Station 745279619",
    "coords": [
      0.5870103,
      50.8570022
    ]
  },
  {
    "name": "Bridgnorth Cliff Railway Bottom Station",
    "coords": [
      -2.4176529,
      52.5341676
    ]
  },
  {
    "name": "Llanfair Caereinion",
    "coords": [
      -3.3222845,
      52.6519213
    ]
  },
  {
    "name": "Eaglescliffe",
    "coords": [
      -1.3497203,
      54.5300894
    ]
  },
  {
    "name": "Station 762028841",
    "coords": [
      0.5947674,
      50.8563763
    ]
  },
  {
    "name": "Featherstone",
    "coords": [
      -1.358285,
      53.6790992
    ]
  },
  {
    "name": "Blunsdon",
    "coords": [
      -1.843859,
      51.6073804
    ]
  },
  {
    "name": "Hayes Knoll",
    "coords": [
      -1.8471715,
      51.61365
    ]
  },
  {
    "name": "Rocky Valley Halt",
    "coords": [
      -4.0841392,
      53.0893021
    ]
  },
  {
    "name": "Spring Village",
    "coords": [
      -2.4825389,
      52.6628632
    ]
  },
  {
    "name": "Tees Small Gauge Railway",
    "coords": [
      -1.3383531,
      54.5379232
    ]
  },
  {
    "name": "Swale",
    "coords": [
      0.7468492,
      51.3889653
    ]
  },
  {
    "name": "Oakwood Park Station",
    "coords": [
      -4.8028585,
      51.7789542
    ]
  },
  {
    "name": "Central Station",
    "coords": [
      -0.7998436,
      52.756564
    ]
  },
  {
    "name": "East Links Family Park",
    "coords": [
      -2.5640811,
      55.9995089
    ]
  },
  {
    "name": "Delph",
    "coords": [
      -2.8382042,
      53.7013043
    ]
  },
  {
    "name": "Willow Tree Halt",
    "coords": [
      -2.8386748,
      53.7006551
    ]
  },
  {
    "name": "Becconsall Station",
    "coords": [
      -2.8381166,
      53.6995958
    ]
  },
  {
    "name": "Bridgnorth Cliff Railway Top Station",
    "coords": [
      -2.4182678,
      52.5344063
    ]
  },
  {
    "name": "Station 966924198",
    "coords": [
      -1.9348538,
      52.1141441
    ]
  },
  {
    "name": "Station 967684967",
    "coords": [
      0.5887033,
      50.8551212
    ]
  },
  {
    "name": "Station 967685302",
    "coords": [
      0.595146,
      50.8558522
    ]
  },
  {
    "name": "Princes Wharf",
    "coords": [
      -2.59749,
      51.4480951
    ]
  },
  {
    "name": "Southend Cliff Lift",
    "coords": [
      0.7109239,
      51.5335104
    ]
  },
  {
    "name": "Southend Cliff Lift",
    "coords": [
      0.711004,
      51.5340164
    ]
  },
  {
    "name": "Kelling Heath Park",
    "coords": [
      1.1377639,
      52.9320084
    ]
  },
  {
    "name": "Bishop Auckland West",
    "coords": [
      -1.6816499,
      54.657132
    ]
  },
  {
    "name": "Biggleswade",
    "coords": [
      -0.260819,
      52.0850343
    ]
  },
  {
    "name": "Cassiobury Park Station",
    "coords": [
      -0.423798,
      51.6622838
    ]
  },
  {
    "name": "Haste Hill",
    "coords": [
      -0.4274432,
      51.5970382
    ]
  },
  {
    "name": "Blackridge",
    "coords": [
      -3.7502961,
      55.8843985
    ]
  },
  {
    "name": "Severn Tunnel Junction",
    "coords": [
      -2.7772968,
      51.584253
    ]
  },
  {
    "name": "Ham Lane (FMR)",
    "coords": [
      -0.3073283,
      52.5627863
    ]
  },
  {
    "name": "Gunwade (FMR)",
    "coords": [
      -0.3125963,
      52.5667473
    ]
  },
  {
    "name": "Consall",
    "coords": [
      -2.001219,
      53.0379472
    ]
  },
  {
    "name": "Wem",
    "coords": [
      -2.7182651,
      52.8561108
    ]
  },
  {
    "name": "Whitchurch",
    "coords": [
      -2.6716574,
      52.9682221
    ]
  },
  {
    "name": "Nantwich",
    "coords": [
      -2.5187309,
      53.0635485
    ]
  },
  {
    "name": "Prees",
    "coords": [
      -2.6895572,
      52.8994613
    ]
  },
  {
    "name": "Wrenbury",
    "coords": [
      -2.5956111,
      53.0195948
    ]
  },
  {
    "name": "Halesworth",
    "coords": [
      1.5057452,
      52.3469592
    ]
  },
  {
    "name": "Longport",
    "coords": [
      -2.216635,
      53.0419934
    ]
  },
  {
    "name": "Butterfly Junction",
    "coords": [
      -2.6199792,
      51.4465304
    ]
  },
  {
    "name": "Bushey",
    "coords": [
      -0.3849194,
      51.6454831
    ]
  },
  {
    "name": "Penllyn",
    "coords": [
      -4.149559,
      53.1370988
    ]
  },
  {
    "name": "Fort Apache",
    "coords": [
      0.5661533,
      51.3947559
    ]
  },
  {
    "name": "Stone",
    "coords": [
      -2.1554718,
      52.9084696
    ]
  },
  {
    "name": "Buxton Miniature Railway",
    "coords": [
      -1.9185882,
      53.2566395
    ]
  },
  {
    "name": "Chasetown (Church Street)",
    "coords": [
      -1.942884,
      52.6726252
    ]
  },
  {
    "name": "Corris",
    "coords": [
      -3.8415802,
      52.6533675
    ]
  },
  {
    "name": "Whitchurch",
    "coords": [
      -1.3387418,
      51.2376461
    ]
  },
  {
    "name": "Leicester North",
    "coords": [
      -1.1331984,
      52.6678271
    ]
  },
  {
    "name": "Maespoeth",
    "coords": [
      -3.8444972,
      52.6446445
    ]
  },
  {
    "name": "High Rocks",
    "coords": [
      0.2245186,
      51.1224788
    ]
  },
  {
    "name": "Eythorne",
    "coords": [
      1.2638353,
      51.1991459
    ]
  },
  {
    "name": "Glaisdale",
    "coords": [
      -0.793929,
      54.4395064
    ]
  },
  {
    "name": "Commondale",
    "coords": [
      -0.9749222,
      54.4812297
    ]
  },
  {
    "name": "Newquay",
    "coords": [
      -5.0751373,
      50.4143924
    ]
  },
  {
    "name": "Gorebridge",
    "coords": [
      -3.0467408,
      55.8402696
    ]
  },
  {
    "name": "Egton",
    "coords": [
      -0.7617497,
      54.4375309
    ]
  },
  {
    "name": "Sleights",
    "coords": [
      -0.6627591,
      54.4611128
    ]
  },
  {
    "name": "Hythe Town",
    "coords": [
      -1.3990848,
      50.8707819
    ]
  },
  {
    "name": "Hythe Pier",
    "coords": [
      -1.3936001,
      50.8745854
    ]
  },
  {
    "name": "Ashurst New Forest",
    "coords": [
      -1.5264572,
      50.8898464
    ]
  },
  {
    "name": "Castleton Moor",
    "coords": [
      -0.9467256,
      54.4671478
    ]
  },
  {
    "name": "Coalyard Miniature Railway",
    "coords": [
      -2.2401282,
      52.3839758
    ]
  },
  {
    "name": "Windy Ridge",
    "coords": [
      0.2874059,
      50.7882891
    ]
  },
  {
    "name": "Hillers Halt",
    "coords": [
      -1.9035605,
      52.1834767
    ]
  },
  {
    "name": "Siloth Miniature Railway",
    "coords": [
      -3.3768816,
      54.8811186
    ]
  },
  {
    "name": "Brockford",
    "coords": [
      1.1172861,
      52.250367
    ]
  },
  {
    "name": "Harringay",
    "coords": [
      -0.1052701,
      51.5775578
    ]
  },
  {
    "name": "Baker Street",
    "coords": [
      -0.1567349,
      51.5225862
    ]
  },
  {
    "name": "Paddington (Bakerloo, Circle and District lines)",
    "coords": [
      -0.175365,
      51.5154795
    ]
  },
  {
    "name": "Boscarne Junction",
    "coords": [
      -4.7613243,
      50.4739305
    ]
  },
  {
    "name": "Llanberis (LLR)",
    "coords": [
      -4.119049,
      53.1177297
    ]
  },
  {
    "name": "Gilfach Ddu",
    "coords": [
      -4.1154697,
      53.1226641
    ]
  },
  {
    "name": "Cei Llydan",
    "coords": [
      -4.1320984,
      53.1307266
    ]
  },
  {
    "name": "Abergwili Junction",
    "coords": [
      -4.2807205,
      51.8686673
    ]
  },
  {
    "name": "Gourock",
    "coords": [
      -4.8156676,
      55.9616159
    ]
  },
  {
    "name": "Wigan North Western",
    "coords": [
      -2.632996,
      53.5433996
    ]
  },
  {
    "name": "Lake",
    "coords": [
      -1.1664698,
      50.6461826
    ]
  },
  {
    "name": "Billingham",
    "coords": [
      -1.2795366,
      54.6057149
    ]
  },
  {
    "name": "Hove",
    "coords": [
      -0.17018,
      50.8352056
    ]
  },
  {
    "name": "Waun-gron Park",
    "coords": [
      -3.22969,
      51.488302
    ]
  },
  {
    "name": "Station 1330875862",
    "coords": [
      -0.0055878,
      53.54102
    ]
  },
  {
    "name": "Leadhills",
    "coords": [
      -3.7608117,
      55.4113187
    ]
  },
  {
    "name": "Wicksteed Park",
    "coords": [
      -0.7076312,
      52.3846758
    ]
  },
  {
    "name": "Station 1373860498",
    "coords": [
      0.7852812,
      51.4378653
    ]
  },
  {
    "name": "Appleby",
    "coords": [
      -2.486536,
      54.58041
    ]
  },
  {
    "name": "Archway",
    "coords": [
      -0.1349977,
      51.5654371
    ]
  },
  {
    "name": "Cranmore",
    "coords": [
      -2.4774061,
      51.1851655
    ]
  },
  {
    "name": "Mendip Vale",
    "coords": [
      -2.5174746,
      51.1801021
    ]
  },
  {
    "name": "East Wheal Rose",
    "coords": [
      -5.0414902,
      50.3622943
    ]
  },
  {
    "name": "Newlyn Halt",
    "coords": [
      -5.0459681,
      50.3576682
    ]
  },
  {
    "name": "Groggly Halt",
    "coords": [
      -5.0410512,
      50.3620901
    ]
  },
  {
    "name": "Benny Halt",
    "coords": [
      -5.041115,
      50.3757717
    ]
  },
  {
    "name": "Hendy",
    "coords": [
      -4.0710941,
      52.5908171
    ]
  },
  {
    "name": "Cynfal",
    "coords": [
      -4.0528875,
      52.5982271
    ]
  },
  {
    "name": "Fach Goch",
    "coords": [
      -4.0609213,
      52.5947526
    ]
  },
  {
    "name": "Danby",
    "coords": [
      -0.910998,
      54.4661746
    ]
  },
  {
    "name": "Lealholm",
    "coords": [
      -0.8255112,
      54.4604593
    ]
  },
  {
    "name": "Station 1409772364",
    "coords": [
      0.266985,
      53.3384086
    ]
  },
  {
    "name": "Kildale",
    "coords": [
      -1.0683268,
      54.4777507
    ]
  },
  {
    "name": "Cameron Bridge",
    "coords": [
      -3.0453208,
      56.190207
    ]
  },
  {
    "name": "Caverswall Road",
    "coords": [
      -2.0645127,
      52.9756579
    ]
  },
  {
    "name": "Dilhorne Park",
    "coords": [
      -2.0466557,
      53.000399
    ]
  },
  {
    "name": "Rockingham",
    "coords": [
      -1.4192072,
      53.4937958
    ]
  },
  {
    "name": "Heyford",
    "coords": [
      -1.2994468,
      51.9185846
    ]
  },
  {
    "name": "Rhyd Ddu",
    "coords": [
      -4.1330404,
      53.05109
    ]
  },
  {
    "name": "Tynllwyn Hen",
    "coords": [
      -4.0411374,
      52.6029088
    ]
  },
  {
    "name": "Rio Grande Train Station",
    "coords": [
      -1.5504551,
      50.9493579
    ]
  },
  {
    "name": "Bridgwater",
    "coords": [
      -2.9902484,
      51.1278436
    ]
  },
  {
    "name": "Bromsgrove",
    "coords": [
      -2.0499793,
      52.3201581
    ]
  },
  {
    "name": "East Acton",
    "coords": [
      -0.248137,
      51.5173451
    ]
  },
  {
    "name": "Cullybackey",
    "coords": [
      -6.3445252,
      54.8881287
    ]
  },
  {
    "name": "Winchcombe",
    "coords": [
      -1.9630872,
      51.9663467
    ]
  },
  {
    "name": "Toddington",
    "coords": [
      -1.9284569,
      51.989334
    ]
  },
  {
    "name": "Great Ayton",
    "coords": [
      -1.1152354,
      54.4894968
    ]
  },
  {
    "name": "Giggleswick",
    "coords": [
      -2.3028455,
      54.0617706
    ]
  },
  {
    "name": "Saltburn",
    "coords": [
      -0.9752233,
      54.5834185
    ]
  },
  {
    "name": "Longbeck",
    "coords": [
      -1.0309929,
      54.5893375
    ]
  },
  {
    "name": "Streatham Hill",
    "coords": [
      -0.1277852,
      51.4383281
    ]
  },
  {
    "name": "Bishops Lydeard",
    "coords": [
      -3.1941161,
      51.0541419
    ]
  },
  {
    "name": "Snaresbrook",
    "coords": [
      0.0215864,
      51.5808033
    ]
  },
  {
    "name": "Long Eaton",
    "coords": [
      -1.2872899,
      52.8849595
    ]
  },
  {
    "name": "Main Entrance Station",
    "coords": [
      -4.8001387,
      51.7775924
    ]
  },
  {
    "name": "Strawberry Hill",
    "coords": [
      -0.3393309,
      51.4391919
    ]
  },
  {
    "name": "Gotherington",
    "coords": [
      -2.0380294,
      51.9672114
    ]
  },
  {
    "name": "Littleport",
    "coords": [
      0.3163815,
      52.4623343
    ]
  },
  {
    "name": "Grangetown",
    "coords": [
      -3.1895595,
      51.4672525
    ]
  },
  {
    "name": "Recreation Ground Halt",
    "coords": [
      -1.574777,
      53.0964641
    ]
  },
  {
    "name": "Steeple Grange",
    "coords": [
      -1.5707391,
      53.0957073
    ]
  },
  {
    "name": "Crowthorne",
    "coords": [
      -0.8192585,
      51.3664877
    ]
  },
  {
    "name": "Sandhurst",
    "coords": [
      -0.8038071,
      51.3465435
    ]
  },
  {
    "name": "Bedworth",
    "coords": [
      -1.4674675,
      52.4793285
    ]
  },
  {
    "name": "Bank",
    "coords": [
      -0.0893749,
      51.5131048
    ]
  },
  {
    "name": "Watton-at-Stone",
    "coords": [
      -0.1194539,
      51.856458
    ]
  },
  {
    "name": "Hatfield",
    "coords": [
      -0.2158,
      51.7651554
    ]
  },
  {
    "name": "Hythe (Colchester)",
    "coords": [
      0.9275278,
      51.8858134
    ]
  },
  {
    "name": "Huntingdon",
    "coords": [
      -0.1924714,
      52.3288086
    ]
  },
  {
    "name": "Heathrow Terminal 4",
    "coords": [
      -0.4454717,
      51.4588093
    ]
  },
  {
    "name": "Barons Court",
    "coords": [
      -0.2144055,
      51.4903477
    ]
  },
  {
    "name": "Arnos Grove",
    "coords": [
      -0.1332873,
      51.6164024
    ]
  },
  {
    "name": "Ash",
    "coords": [
      -0.7129145,
      51.2497298
    ]
  },
  {
    "name": "Wanborough",
    "coords": [
      -0.6676084,
      51.244622
    ]
  },
  {
    "name": "Starcross",
    "coords": [
      -3.4476371,
      50.6275884
    ]
  },
  {
    "name": "Coleraine",
    "coords": [
      -6.6626658,
      55.1339557
    ]
  },
  {
    "name": "Lymington Pier",
    "coords": [
      -1.5293235,
      50.7576921
    ]
  },
  {
    "name": "Lymington Town",
    "coords": [
      -1.5371052,
      50.7610799
    ]
  },
  {
    "name": "Dalmarnock",
    "coords": [
      -4.2174709,
      55.8421847
    ]
  },
  {
    "name": "Boughton",
    "coords": [
      -0.9213052,
      52.2815415
    ]
  },
  {
    "name": "New Brighton",
    "coords": [
      -3.0480464,
      53.4373879
    ]
  },
  {
    "name": "Angel",
    "coords": [
      -0.1060356,
      51.5324874
    ]
  },
  {
    "name": "Camden Town",
    "coords": [
      -0.1426957,
      51.5394397
    ]
  },
  {
    "name": "East Finchley",
    "coords": [
      -0.1648137,
      51.5871881
    ]
  },
  {
    "name": "Highgate",
    "coords": [
      -0.1458316,
      51.5776825
    ]
  },
  {
    "name": "Tufnell Park",
    "coords": [
      -0.138457,
      51.5568005
    ]
  },
  {
    "name": "Hendon Central",
    "coords": [
      -0.2265541,
      51.5834006
    ]
  },
  {
    "name": "Farnborough North",
    "coords": [
      -0.7429378,
      51.3021991
    ]
  },
  {
    "name": "High Barnet",
    "coords": [
      -0.1938826,
      51.650399
    ]
  },
  {
    "name": "Brent Cross",
    "coords": [
      -0.2139731,
      51.5768177
    ]
  },
  {
    "name": "Town Station",
    "coords": [
      -0.9709902,
      54.5856932
    ]
  },
  {
    "name": "Great Yarmouth",
    "coords": [
      1.7206879,
      52.6119213
    ]
  },
  {
    "name": "Alton Towers Main Entrance",
    "coords": [
      -1.8920424,
      52.9915807
    ]
  },
  {
    "name": "Roundhouse Halt",
    "coords": [
      -1.3813376,
      53.2746594
    ]
  },
  {
    "name": "Goring & Streatley",
    "coords": [
      -1.1331195,
      51.5211885
    ]
  },
  {
    "name": "Dymchurch",
    "coords": [
      0.9904977,
      51.0251985
    ]
  },
  {
    "name": "Romney Warren Halt",
    "coords": [
      0.9603685,
      50.9972166
    ]
  },
  {
    "name": "St Mary's Bay",
    "coords": [
      0.9745763,
      51.011562
    ]
  },
  {
    "name": "Stony Shaw",
    "coords": [
      0.6846999,
      51.2927025
    ]
  },
  {
    "name": "Downpatrick",
    "coords": [
      -5.7222662,
      54.325686
    ]
  },
  {
    "name": "Greenford",
    "coords": [
      -0.3447996,
      51.5421177
    ]
  },
  {
    "name": "Wanstead Park",
    "coords": [
      0.0260733,
      51.5517605
    ]
  },
  {
    "name": "Leytonstone High Road",
    "coords": [
      0.0085412,
      51.5635285
    ]
  },
  {
    "name": "Hill Train Bottom",
    "coords": [
      -0.6502646,
      51.4637657
    ]
  },
  {
    "name": "Hill Train Top",
    "coords": [
      -0.6536388,
      51.4641989
    ]
  },
  {
    "name": "Station 1743499655",
    "coords": [
      -3.0296866,
      53.7460224
    ]
  },
  {
    "name": "Barshaw Central",
    "coords": [
      -4.3963559,
      55.8487724
    ]
  },
  {
    "name": "Fishguard and Goodwick",
    "coords": [
      -4.9950733,
      52.0039692
    ]
  },
  {
    "name": "Station 1756322306",
    "coords": [
      -1.5674423,
      54.173908
    ]
  },
  {
    "name": "Station 1756322610",
    "coords": [
      -1.5637519,
      54.1760006
    ]
  },
  {
    "name": "Station 1756322825",
    "coords": [
      -1.5659855,
      54.1777455
    ]
  },
  {
    "name": "Alston",
    "coords": [
      -2.4420114,
      54.8146005
    ]
  },
  {
    "name": "Heywood",
    "coords": [
      -2.2070104,
      53.589009
    ]
  },
  {
    "name": "King's Sutton",
    "coords": [
      -1.2809729,
      52.0210915
    ]
  },
  {
    "name": "Virginia Water",
    "coords": [
      -0.5620827,
      51.4015235
    ]
  },
  {
    "name": "Saltcoats",
    "coords": [
      -4.7845808,
      55.6338921
    ]
  },
  {
    "name": "Pangbourne",
    "coords": [
      -1.0904319,
      51.4853553
    ]
  },
  {
    "name": "Fellgate",
    "coords": [
      -1.4852346,
      54.957505
    ]
  },
  {
    "name": "Mill Hill East",
    "coords": [
      -0.2101451,
      51.6082746
    ]
  },
  {
    "name": "West Finchley",
    "coords": [
      -0.1883313,
      51.6094298
    ]
  },
  {
    "name": "Woodside Park",
    "coords": [
      -0.185523,
      51.617938
    ]
  },
  {
    "name": "Blaenau Ffestiniog",
    "coords": [
      -3.9379224,
      52.9945942
    ]
  },
  {
    "name": "Tanygrisiau",
    "coords": [
      -3.9627332,
      52.9857047
    ]
  },
  {
    "name": "Tan y Bwlch",
    "coords": [
      -4.0112267,
      52.9544727
    ]
  },
  {
    "name": "Porthmadog Harbour",
    "coords": [
      -4.1266708,
      52.9240121
    ]
  },
  {
    "name": "Dduallt",
    "coords": [
      -3.9686999,
      52.9602369
    ]
  },
  {
    "name": "Boston Lodge Halt",
    "coords": [
      -4.10461,
      52.9208722
    ]
  },
  {
    "name": "Minffordd",
    "coords": [
      -4.0832022,
      52.9262402
    ]
  },
  {
    "name": "Porthmadog",
    "coords": [
      -4.1353065,
      52.930988
    ]
  },
  {
    "name": "Mills Hill",
    "coords": [
      -2.1714727,
      53.5508557
    ]
  },
  {
    "name": "Llandecwyn",
    "coords": [
      -4.0565564,
      52.9210189
    ]
  },
  {
    "name": "Beach Halt",
    "coords": [
      -4.056555,
      52.6977163
    ]
  },
  {
    "name": "Loop Halt",
    "coords": [
      -4.0580132,
      52.704433
    ]
  },
  {
    "name": "Amberley",
    "coords": [
      -0.539083,
      50.8986123
    ]
  },
  {
    "name": "Cragside",
    "coords": [
      -0.5345047,
      50.900274
    ]
  },
  {
    "name": "Worth Halt",
    "coords": [
      0.0732256,
      50.946582
    ]
  },
  {
    "name": "East Grinstead (Bluebell)",
    "coords": [
      -0.0204336,
      51.1246
    ]
  },
  {
    "name": "Oswestry",
    "coords": [
      -3.0498562,
      52.8613742
    ]
  },
  {
    "name": "Epping",
    "coords": [
      0.1139888,
      51.6936318
    ]
  },
  {
    "name": "Portsmouth Arms",
    "coords": [
      -3.951232,
      50.9570164
    ]
  },
  {
    "name": "Pencoed",
    "coords": [
      -3.501372,
      51.5239041
    ]
  },
  {
    "name": "Shawfair",
    "coords": [
      -3.0902235,
      55.9176966
    ]
  },
  {
    "name": "Eskbank",
    "coords": [
      -3.0828437,
      55.8812887
    ]
  },
  {
    "name": "Newmills",
    "coords": [
      -4.4060469,
      50.6404994
    ]
  },
  {
    "name": "Station 1979907862",
    "coords": [
      0.5953367,
      50.8568166
    ]
  },
  {
    "name": "Shenfield",
    "coords": [
      0.3300193,
      51.6306401
    ]
  },
  {
    "name": "Ilford",
    "coords": [
      0.0689113,
      51.5589375
    ]
  },
  {
    "name": "Seven Kings",
    "coords": [
      0.0968706,
      51.56394
    ]
  },
  {
    "name": "Llanberis (SMR)",
    "coords": [
      -4.1196771,
      53.1162854
    ]
  },
  {
    "name": "Newtongrange",
    "coords": [
      -3.068938,
      55.8648238
    ]
  },
  {
    "name": "Stow",
    "coords": [
      -2.8668207,
      55.6918571
    ]
  },
  {
    "name": "Cambridge North",
    "coords": [
      0.1587703,
      52.2246512
    ]
  },
  {
    "name": "Etal Railway Station",
    "coords": [
      -2.1226374,
      55.646411
    ]
  },
  {
    "name": "Braintree",
    "coords": [
      0.5567303,
      51.8753105
    ]
  },
  {
    "name": "Soham",
    "coords": [
      0.3280963,
      52.3349535
    ]
  },
  {
    "name": "Coventry Arena",
    "coords": [
      -1.4947986,
      52.4469559
    ]
  },
  {
    "name": "Somersham",
    "coords": [
      -0.9114939,
      51.5668724
    ]
  },
  {
    "name": "Bourne Again Junction",
    "coords": [
      -0.907229,
      51.5679824
    ]
  },
  {
    "name": "Manningtree",
    "coords": [
      1.0449277,
      51.9491435
    ]
  },
  {
    "name": "Basildon",
    "coords": [
      0.4567961,
      51.5681417
    ]
  },
  {
    "name": "West Horndon",
    "coords": [
      0.3406801,
      51.5678537
    ]
  },
  {
    "name": "Marks Tey",
    "coords": [
      0.782551,
      51.8808094
    ]
  },
  {
    "name": "Horley",
    "coords": [
      -0.1609516,
      51.1687913
    ]
  },
  {
    "name": "Nappers Halt",
    "coords": [
      -3.7025233,
      50.4612092
    ]
  },
  {
    "name": "Conon Bridge",
    "coords": [
      -4.4403838,
      57.5616288
    ]
  },
  {
    "name": "Nunckley Hill",
    "coords": [
      -1.157396,
      52.7223746
    ]
  },
  {
    "name": "Letchworth Garden City",
    "coords": [
      -0.2289056,
      51.9803536
    ]
  },
  {
    "name": "Plym Bridge",
    "coords": [
      -4.079354,
      50.4087718
    ]
  },
  {
    "name": "Maryport",
    "coords": [
      -3.4940868,
      54.7112989
    ]
  },
  {
    "name": "Ambergate",
    "coords": [
      -1.4808654,
      53.0604187
    ]
  },
  {
    "name": "Spondon",
    "coords": [
      -1.4108169,
      52.9120948
    ]
  },
  {
    "name": "East Midlands Parkway",
    "coords": [
      -1.262883,
      52.862275
    ]
  },
  {
    "name": "South Wigston",
    "coords": [
      -1.13403,
      52.5823924
    ]
  },
  {
    "name": "Welwyn Garden City",
    "coords": [
      -0.2038429,
      51.8008507
    ]
  },
  {
    "name": "South Harrow",
    "coords": [
      -0.3522211,
      51.5646517
    ]
  },
  {
    "name": "Sudbury Town",
    "coords": [
      -0.3156202,
      51.550751
    ]
  },
  {
    "name": "Ramsgreave and Wilpshire",
    "coords": [
      -2.4780606,
      53.7799943
    ]
  },
  {
    "name": "Energlyn & Churchill Park",
    "coords": [
      -3.2290773,
      51.584548
    ]
  },
  {
    "name": "Acton Central",
    "coords": [
      -0.2628073,
      51.5087164
    ]
  },
  {
    "name": "Leeming Bar",
    "coords": [
      -1.5612476,
      54.3051216
    ]
  },
  {
    "name": "Sudbury Hill",
    "coords": [
      -0.3362525,
      51.5568815
    ]
  },
  {
    "name": "Hamworthy",
    "coords": [
      -2.0190513,
      50.7253686
    ]
  },
  {
    "name": "Edgware Road (Circle, District and Hammersmith & City lines)",
    "coords": [
      -0.1667636,
      51.5201935
    ]
  },
  {
    "name": "Sittingbourne Viaduct",
    "coords": [
      0.7336864,
      51.3452352
    ]
  },
  {
    "name": "Taw Valley Halt",
    "coords": [
      -1.8289729,
      51.5916289
    ]
  },
  {
    "name": "Battersea Park",
    "coords": [
      -0.1475846,
      51.47761
    ]
  },
  {
    "name": "Parkend",
    "coords": [
      -2.5560948,
      51.7680018
    ]
  },
  {
    "name": "Station 2365472748",
    "coords": [
      1.1041577,
      52.1184196
    ]
  },
  {
    "name": "Penygarreg Lane Halt",
    "coords": [
      -3.069585,
      52.7987314
    ]
  },
  {
    "name": "Ipswich",
    "coords": [
      1.1447878,
      52.0504188
    ]
  },
  {
    "name": "Ongar",
    "coords": [
      0.2436146,
      51.708733
    ]
  },
  {
    "name": "North Weald",
    "coords": [
      0.1641554,
      51.7114262
    ]
  },
  {
    "name": "Wrabness",
    "coords": [
      1.1716892,
      51.9395281
    ]
  },
  {
    "name": "Harwich International",
    "coords": [
      1.2560388,
      51.9472249
    ]
  },
  {
    "name": "Llynclys South",
    "coords": [
      -3.063948,
      52.807809
    ]
  },
  {
    "name": "Kidbrooke",
    "coords": [
      0.0279002,
      51.4620317
    ]
  },
  {
    "name": "Ravenstor",
    "coords": [
      -1.57288,
      53.0901924
    ]
  },
  {
    "name": "Bolton",
    "coords": [
      -2.4251259,
      53.5735158
    ]
  },
  {
    "name": "Llandanwg",
    "coords": [
      -4.123585,
      52.8362492
    ]
  },
  {
    "name": "Norden",
    "coords": [
      -2.0625676,
      50.6448236
    ]
  },
  {
    "name": "Whitechapel",
    "coords": [
      -0.0606907,
      51.5195786
    ]
  },
  {
    "name": "Haggerston",
    "coords": [
      -0.0755835,
      51.5386574
    ]
  },
  {
    "name": "Rotherhithe",
    "coords": [
      -0.0519666,
      51.5008237
    ]
  },
  {
    "name": "Surrey Quays",
    "coords": [
      -0.0478319,
      51.4934207
    ]
  },
  {
    "name": "Wapping",
    "coords": [
      -0.0560206,
      51.5044344
    ]
  },
  {
    "name": "Denmark Hill",
    "coords": [
      -0.0896031,
      51.468043
    ]
  },
  {
    "name": "Wandsworth Road",
    "coords": [
      -0.1384355,
      51.4699602
    ]
  },
  {
    "name": "Clapham High Street",
    "coords": [
      -0.1323141,
      51.4654853
    ]
  },
  {
    "name": "Southport Princes Park",
    "coords": [
      -3.014695,
      53.6485824
    ]
  },
  {
    "name": "Southport Marine Parade",
    "coords": [
      -3.0121469,
      53.6523279
    ]
  },
  {
    "name": "Hoxton",
    "coords": [
      -0.0756539,
      51.5315917
    ]
  },
  {
    "name": "Queens Road Peckham",
    "coords": [
      -0.0573427,
      51.4736737
    ]
  },
  {
    "name": "Bentley",
    "coords": [
      -0.8681985,
      51.1812254
    ]
  },
  {
    "name": "Edmonton Green",
    "coords": [
      -0.0614266,
      51.624503
    ]
  },
  {
    "name": "Mungo's Central Station",
    "coords": [
      0.1635615,
      50.8231964
    ]
  },
  {
    "name": "Beaconsfield",
    "coords": [
      -0.6435932,
      51.6114109
    ]
  },
  {
    "name": "Robertsbridge Junction",
    "coords": [
      0.4695395,
      50.9856094
    ]
  },
  {
    "name": "Ryde Esplanade",
    "coords": [
      -1.1596024,
      50.7330498
    ]
  },
  {
    "name": "Ryde Pier Head",
    "coords": [
      -1.1604721,
      50.7390318
    ]
  },
  {
    "name": "Wootton",
    "coords": [
      -1.2405289,
      50.718146
    ]
  },
  {
    "name": "Bempton",
    "coords": [
      -0.180715,
      54.1277914
    ]
  },
  {
    "name": "Y Copa",
    "coords": [
      -4.0770318,
      53.0684439
    ]
  },
  {
    "name": "Salfords",
    "coords": [
      -0.1622843,
      51.2017863
    ]
  },
  {
    "name": "Earlswood",
    "coords": [
      -0.1709022,
      51.2274606
    ]
  },
  {
    "name": "Waterbeach",
    "coords": [
      0.1967655,
      52.2622818
    ]
  },
  {
    "name": "Wallingford",
    "coords": [
      -1.1354611,
      51.5974066
    ]
  },
  {
    "name": "Polesworth",
    "coords": [
      -1.6107049,
      52.6258348
    ]
  },
  {
    "name": "Walker Gardens",
    "coords": [
      -2.6032062,
      53.5712017
    ]
  },
  {
    "name": "Peterborough",
    "coords": [
      -0.2503162,
      52.5746038
    ]
  },
  {
    "name": "Manuel",
    "coords": [
      -3.6575248,
      55.9776784
    ]
  },
  {
    "name": "Bridgnorth",
    "coords": [
      -2.4207754,
      52.5305171
    ]
  },
  {
    "name": "Kidderminster Town",
    "coords": [
      -2.2399754,
      52.3835966
    ]
  },
  {
    "name": "Alton",
    "coords": [
      -0.9671299,
      51.1518972
    ]
  },
  {
    "name": "Eastoke Corner",
    "coords": [
      -0.9669511,
      50.7815104
    ]
  },
  {
    "name": "Mengham Road",
    "coords": [
      -0.9786105,
      50.7839205
    ]
  },
  {
    "name": "Beachlands",
    "coords": [
      -0.9866592,
      50.7841811
    ]
  },
  {
    "name": "Ebbw Vale Town",
    "coords": [
      -3.2024664,
      51.7766167
    ]
  },
  {
    "name": "Woodham Halt",
    "coords": [
      -3.2803333,
      51.4003495
    ]
  },
  {
    "name": "Gladstone Bridge",
    "coords": [
      -3.2735209,
      51.4023166
    ]
  },
  {
    "name": "Scalby Mills",
    "coords": [
      -0.410949,
      54.3009398
    ]
  },
  {
    "name": "Peasholm",
    "coords": [
      -0.4113865,
      54.2929426
    ]
  },
  {
    "name": "Barry Docks",
    "coords": [
      -3.261156,
      51.4026036
    ]
  },
  {
    "name": "Cat Nab",
    "coords": [
      -0.9667675,
      54.5841702
    ]
  },
  {
    "name": "Mossley",
    "coords": [
      -2.041538,
      53.5150389
    ]
  },
  {
    "name": "Billericay",
    "coords": [
      0.4181268,
      51.6288429
    ]
  },
  {
    "name": "Wickford",
    "coords": [
      0.519396,
      51.6148039
    ]
  },
  {
    "name": "Reedham",
    "coords": [
      1.559524,
      52.564446
    ]
  },
  {
    "name": "Kelvedon",
    "coords": [
      0.7026932,
      51.8409896
    ]
  },
  {
    "name": "Atherstone",
    "coords": [
      -1.5522587,
      52.5784071
    ]
  },
  {
    "name": "Station 2957209972",
    "coords": [
      -2.9951856,
      55.8566642
    ]
  },
  {
    "name": "Curriehill",
    "coords": [
      -3.3184177,
      55.9006276
    ]
  },
  {
    "name": "West Calder",
    "coords": [
      -3.566816,
      55.8537711
    ]
  },
  {
    "name": "Cleland",
    "coords": [
      -3.9107781,
      55.8044179
    ]
  },
  {
    "name": "Bellshill",
    "coords": [
      -4.0244393,
      55.8170309
    ]
  },
  {
    "name": "Brixton",
    "coords": [
      -0.1133473,
      51.4628953
    ]
  },
  {
    "name": "Merryton",
    "coords": [
      -3.9774372,
      55.7489261
    ]
  },
  {
    "name": "Muncaster Mill",
    "coords": [
      -3.3940413,
      54.3667401
    ]
  },
  {
    "name": "Carmyle",
    "coords": [
      -4.1580726,
      55.8342637
    ]
  },
  {
    "name": "Milliken Park",
    "coords": [
      -4.5342076,
      55.8248309
    ]
  },
  {
    "name": "Kilwinning",
    "coords": [
      -4.7095388,
      55.6561839
    ]
  },
  {
    "name": "Weymouth",
    "coords": [
      -2.4549096,
      50.6159266
    ]
  },
  {
    "name": "Neath",
    "coords": [
      -3.8070189,
      51.6621839
    ]
  },
  {
    "name": "Skewen",
    "coords": [
      -3.8467749,
      51.6614691
    ]
  },
  {
    "name": "Bishopbriggs",
    "coords": [
      -4.2244495,
      55.9039659
    ]
  },
  {
    "name": "Shippea Hill",
    "coords": [
      0.4127561,
      52.4302535
    ]
  },
  {
    "name": "Easterhouse",
    "coords": [
      -4.1068764,
      55.8598389
    ]
  },
  {
    "name": "Station 3069843270",
    "coords": [
      -1.1304869,
      52.6554684
    ]
  },
  {
    "name": "Station 3069878190",
    "coords": [
      -1.1380655,
      52.6444735
    ]
  },
  {
    "name": "Woodlesford",
    "coords": [
      -1.4435652,
      53.757064
    ]
  },
  {
    "name": "Bramley",
    "coords": [
      -1.6372217,
      53.8053522
    ]
  },
  {
    "name": "Barbican",
    "coords": [
      -0.0986832,
      51.5201501
    ]
  },
  {
    "name": "Barkingside",
    "coords": [
      0.0886245,
      51.5858181
    ]
  },
  {
    "name": "Bond Street",
    "coords": [
      -0.1491929,
      51.5145318
    ]
  },
  {
    "name": "Buckhurst Hill",
    "coords": [
      0.0468161,
      51.6259439
    ]
  },
  {
    "name": "Chancery Lane",
    "coords": [
      -0.1123604,
      51.5181074
    ]
  },
  {
    "name": "Chigwell",
    "coords": [
      0.0757204,
      51.6176444
    ]
  },
  {
    "name": "Debden",
    "coords": [
      0.083583,
      51.6452814
    ]
  },
  {
    "name": "Fairlop",
    "coords": [
      0.0911302,
      51.5959477
    ]
  },
  {
    "name": "Gants Hill",
    "coords": [
      0.0648799,
      51.576525
    ]
  },
  {
    "name": "Grange Hill",
    "coords": [
      0.0925025,
      51.613134
    ]
  },
  {
    "name": "Hainault",
    "coords": [
      0.0933827,
      51.6033138
    ]
  },
  {
    "name": "Mile End",
    "coords": [
      -0.033435,
      51.5253378
    ]
  },
  {
    "name": "Monument",
    "coords": [
      -0.0861271,
      51.5106328
    ]
  },
  {
    "name": "Roding Valley",
    "coords": [
      0.0437553,
      51.6170812
    ]
  },
  {
    "name": "Moor Road",
    "coords": [
      -1.5389272,
      53.7738227
    ]
  },
  {
    "name": "Station 3090763410",
    "coords": [
      -0.9225262,
      50.8844396
    ]
  },
  {
    "name": "Giant's Causeway",
    "coords": [
      -6.518169,
      55.2311741
    ]
  },
  {
    "name": "Bushmills",
    "coords": [
      -6.5298478,
      55.2075906
    ]
  },
  {
    "name": "Ulceby",
    "coords": [
      -0.3008051,
      53.6193448
    ]
  },
  {
    "name": "Barton-on-Humber",
    "coords": [
      -0.4430513,
      53.6889938
    ]
  },
  {
    "name": "Watford Junction",
    "coords": [
      -0.3961114,
      51.6639446
    ]
  },
  {
    "name": "Gainsborough Central",
    "coords": [
      -0.7695068,
      53.3989869
    ]
  },
  {
    "name": "Barrow Haven",
    "coords": [
      -0.392889,
      53.6974548
    ]
  },
  {
    "name": "Goxhill",
    "coords": [
      -0.3374071,
      53.6766712
    ]
  },
  {
    "name": "Great Coates",
    "coords": [
      -0.1298327,
      53.5757224
    ]
  },
  {
    "name": "Grimsby Docks",
    "coords": [
      -0.0758325,
      53.5741416
    ]
  },
  {
    "name": "Habrough",
    "coords": [
      -0.2693542,
      53.6061
    ]
  },
  {
    "name": "Healing",
    "coords": [
      -0.1606176,
      53.5818378
    ]
  },
  {
    "name": "New Clee",
    "coords": [
      -0.0604648,
      53.5743075
    ]
  },
  {
    "name": "New Holland",
    "coords": [
      -0.3601529,
      53.701985
    ]
  },
  {
    "name": "Stallingborough",
    "coords": [
      -0.1834359,
      53.5871667
    ]
  },
  {
    "name": "Thornton Abbey",
    "coords": [
      -0.3230242,
      53.6543161
    ]
  },
  {
    "name": "Collingham",
    "coords": [
      -0.750266,
      53.1439832
    ]
  },
  {
    "name": "Hykeham",
    "coords": [
      -0.6000753,
      53.1950652
    ]
  },
  {
    "name": "Swinderby",
    "coords": [
      -0.7026611,
      53.1693479
    ]
  },
  {
    "name": "Gainsborough Lea Road",
    "coords": [
      -0.7693785,
      53.3860875
    ]
  },
  {
    "name": "Retford Low Level",
    "coords": [
      -0.9443313,
      53.3139351
    ]
  },
  {
    "name": "Worksop",
    "coords": [
      -1.1228579,
      53.3115968
    ]
  },
  {
    "name": "Shireoaks",
    "coords": [
      -1.1683224,
      53.3248638
    ]
  },
  {
    "name": "Kiveton Bridge",
    "coords": [
      -1.2670815,
      53.3409362
    ]
  },
  {
    "name": "Woodhouse",
    "coords": [
      -1.3573689,
      53.3637962
    ]
  },
  {
    "name": "Darnall",
    "coords": [
      -1.4123572,
      53.3845451
    ]
  },
  {
    "name": "Battle",
    "coords": [
      0.4949233,
      50.9128867
    ]
  },
  {
    "name": "Crowhurst",
    "coords": [
      0.5014804,
      50.8886625
    ]
  },
  {
    "name": "West St Leonards",
    "coords": [
      0.5399644,
      50.8532059
    ]
  },
  {
    "name": "Etchingham",
    "coords": [
      0.4423838,
      51.0106562
    ]
  },
  {
    "name": "Robertsbridge",
    "coords": [
      0.4686815,
      50.9855542
    ]
  },
  {
    "name": "Tunbridge Wells",
    "coords": [
      0.2630275,
      51.1300963
    ]
  },
  {
    "name": "Chipstead",
    "coords": [
      -0.1693688,
      51.3093522
    ]
  },
  {
    "name": "Bloxwich",
    "coords": [
      -2.0116594,
      52.6184313
    ]
  },
  {
    "name": "Aslockton",
    "coords": [
      -0.8984194,
      52.9515525
    ]
  },
  {
    "name": "Bingham",
    "coords": [
      -0.9512851,
      52.9542194
    ]
  },
  {
    "name": "Creswell",
    "coords": [
      -1.2164106,
      53.263919
    ]
  },
  {
    "name": "Kirkby-in-Ashfield",
    "coords": [
      -1.2532679,
      53.1000196
    ]
  },
  {
    "name": "Langwith-Whaley Thorns",
    "coords": [
      -1.2092803,
      53.2327375
    ]
  },
  {
    "name": "Shirebrook",
    "coords": [
      -1.2025927,
      53.2041213
    ]
  },
  {
    "name": "Sutton Parkway",
    "coords": [
      -1.2455485,
      53.1141408
    ]
  },
  {
    "name": "Dalmeny",
    "coords": [
      -3.3815031,
      55.9862498
    ]
  },
  {
    "name": "Markinch",
    "coords": [
      -3.1308024,
      56.2004129
    ]
  },
  {
    "name": "North Queensferry",
    "coords": [
      -3.3946556,
      56.0124476
    ]
  },
  {
    "name": "Bradford-on-Avon",
    "coords": [
      -2.2527549,
      51.344789
    ]
  },
  {
    "name": "Falkirk High",
    "coords": [
      -3.7925193,
      55.9917417
    ]
  },
  {
    "name": "Balmossie",
    "coords": [
      -2.8383825,
      56.474707
    ]
  },
  {
    "name": "Barry Links",
    "coords": [
      -2.7459964,
      56.4931546
    ]
  },
  {
    "name": "Broughty Ferry",
    "coords": [
      -2.8739864,
      56.4676434
    ]
  },
  {
    "name": "Monifieth",
    "coords": [
      -2.8184021,
      56.479745
    ]
  },
  {
    "name": "Laurencekirk",
    "coords": [
      -2.4653121,
      56.8368537
    ]
  },
  {
    "name": "Portlethen",
    "coords": [
      -2.1277464,
      57.0617528
    ]
  },
  {
    "name": "Conisbrough",
    "coords": [
      -1.23461,
      53.4895257
    ]
  },
  {
    "name": "Mexborough",
    "coords": [
      -1.2885249,
      53.4908309
    ]
  },
  {
    "name": "Swinton (South Yorkshire)",
    "coords": [
      -1.3056214,
      53.4855977
    ]
  },
  {
    "name": "Rotherham Central",
    "coords": [
      -1.3610462,
      53.4316986
    ]
  },
  {
    "name": "Northallerton West",
    "coords": [
      -1.4502486,
      54.3387164
    ]
  },
  {
    "name": "Finghall Lane",
    "coords": [
      -1.7181864,
      54.3058821
    ]
  },
  {
    "name": "Chessington South",
    "coords": [
      -0.308097,
      51.35675
    ]
  },
  {
    "name": "Kirkby-in-Furness",
    "coords": [
      -3.1872166,
      54.2329033
    ]
  },
  {
    "name": "Quorn & Woodhouse",
    "coords": [
      -1.1877284,
      52.7400619
    ]
  },
  {
    "name": "Loughborough",
    "coords": [
      -1.1965133,
      52.7795757
    ]
  },
  {
    "name": "Fimber Halt",
    "coords": [
      -0.6098115,
      54.0348323
    ]
  },
  {
    "name": "Dalmally",
    "coords": [
      -4.9833045,
      56.4010104
    ]
  },
  {
    "name": "Farringdon",
    "coords": [
      -0.1048397,
      51.5201871
    ]
  },
  {
    "name": "Wivenhoe",
    "coords": [
      0.9562415,
      51.8565976
    ]
  },
  {
    "name": "Alresford",
    "coords": [
      0.9970365,
      51.8539985
    ]
  },
  {
    "name": "Great Bentley",
    "coords": [
      1.0654611,
      51.8517991
    ]
  },
  {
    "name": "Weeley",
    "coords": [
      1.1151948,
      51.8529678
    ]
  },
  {
    "name": "Paignton Queens Park",
    "coords": [
      -3.5646874,
      50.433981
    ]
  },
  {
    "name": "Leicester Square",
    "coords": [
      -0.1282641,
      51.5114642
    ]
  },
  {
    "name": "Fulwell",
    "coords": [
      -0.3496851,
      51.4337598
    ]
  },
  {
    "name": "Hampton",
    "coords": [
      -0.3721547,
      51.4159079
    ]
  },
  {
    "name": "Kempton Park",
    "coords": [
      -0.4094874,
      51.4210039
    ]
  },
  {
    "name": "Sunbury",
    "coords": [
      -0.4173517,
      51.418324
    ]
  },
  {
    "name": "Upper Halliford",
    "coords": [
      -0.4307971,
      51.4132081
    ]
  },
  {
    "name": "Shepperton",
    "coords": [
      -0.4469133,
      51.3968972
    ]
  },
  {
    "name": "Milton of Crathes",
    "coords": [
      -2.4298868,
      57.0563229
    ]
  },
  {
    "name": "Riverside Halt",
    "coords": [
      -2.4563457,
      57.0582227
    ]
  },
  {
    "name": "Sevenoaks",
    "coords": [
      0.1819438,
      51.2764117
    ]
  },
  {
    "name": "Grange-over-Sands",
    "coords": [
      -2.9028039,
      54.195693
    ]
  },
  {
    "name": "Queenstown Road",
    "coords": [
      -0.1462935,
      51.4752161
    ]
  },
  {
    "name": "Vauxhall",
    "coords": [
      -0.1227502,
      51.4858478
    ]
  },
  {
    "name": "Canterbury West",
    "coords": [
      1.0753092,
      51.2842245
    ]
  },
  {
    "name": "Dipwood Halt",
    "coords": [
      -1.6645975,
      54.8862872
    ]
  },
  {
    "name": "Aylesbury Vale Parkway",
    "coords": [
      -0.859831,
      51.8312778
    ]
  },
  {
    "name": "Mountsorrel",
    "coords": [
      -1.1540785,
      52.7268895
    ]
  },
  {
    "name": "Newcourt",
    "coords": [
      -3.4725586,
      50.7027216
    ]
  },
  {
    "name": "Hinchley Wood",
    "coords": [
      -0.3406341,
      51.3750646
    ]
  },
  {
    "name": "Toddington",
    "coords": [
      -1.9297207,
      51.9887603
    ]
  },
  {
    "name": "Amersham",
    "coords": [
      -0.6073643,
      51.6740875
    ]
  },
  {
    "name": "Farnborough (Main)",
    "coords": [
      -0.7555158,
      51.2968188
    ]
  },
  {
    "name": "Betws-y-Coed",
    "coords": [
      -3.800542,
      53.092687
    ]
  },
  {
    "name": "Chalfont & Latimer",
    "coords": [
      -0.5611671,
      51.6681019
    ]
  },
  {
    "name": "Wye",
    "coords": [
      0.9296702,
      51.1855902
    ]
  },
  {
    "name": "Brockham",
    "coords": [
      -0.5356577,
      50.900947
    ]
  },
  {
    "name": "Penge West",
    "coords": [
      -0.0607007,
      51.4175147
    ]
  },
  {
    "name": "Glengonnar",
    "coords": [
      -3.7694255,
      55.4021592
    ]
  },
  {
    "name": "Tweedbank",
    "coords": [
      -2.7589963,
      55.6058578
    ]
  },
  {
    "name": "Dorking West",
    "coords": [
      -0.3398503,
      51.2363548
    ]
  },
  {
    "name": "Galashiels",
    "coords": [
      -2.8055459,
      55.617816
    ]
  },
  {
    "name": "Welling",
    "coords": [
      0.1016292,
      51.4648215
    ]
  },
  {
    "name": "Barnehurst",
    "coords": [
      0.1596467,
      51.4650212
    ]
  },
  {
    "name": "Eltham",
    "coords": [
      0.0522692,
      51.4555936
    ]
  },
  {
    "name": "Erith",
    "coords": [
      0.1751948,
      51.4815782
    ]
  },
  {
    "name": "Wandsworth Town",
    "coords": [
      -0.1882512,
      51.4609627
    ]
  },
  {
    "name": "Merstham",
    "coords": [
      -0.150065,
      51.2641687
    ]
  },
  {
    "name": "Berrylands",
    "coords": [
      -0.2809105,
      51.3990081
    ]
  },
  {
    "name": "New Malden",
    "coords": [
      -0.2557593,
      51.4039615
    ]
  },
  {
    "name": "Station 3635490747",
    "coords": [
      0.5454292,
      51.270386
    ]
  },
  {
    "name": "City Thameslink",
    "coords": [
      -0.1035311,
      51.5153401
    ]
  },
  {
    "name": "London Liverpool Street",
    "coords": [
      -0.0817735,
      51.518043
    ]
  },
  {
    "name": "Cannon Street",
    "coords": [
      -0.0903632,
      51.5113812
    ]
  },
  {
    "name": "London Cannon Street",
    "coords": [
      -0.0906046,
      51.5106685
    ]
  },
  {
    "name": "Piccadilly Circus",
    "coords": [
      -0.1345484,
      51.5098192
    ]
  },
  {
    "name": "London Waterloo",
    "coords": [
      -0.112801,
      51.5028379
    ]
  },
  {
    "name": "Waterloo",
    "coords": [
      -0.1139812,
      51.5030015
    ]
  },
  {
    "name": "Dundee",
    "coords": [
      -2.9697488,
      56.4571485
    ]
  },
  {
    "name": "St Bees",
    "coords": [
      -3.5912401,
      54.4923531
    ]
  },
  {
    "name": "Malden Manor",
    "coords": [
      -0.2612451,
      51.3847246
    ]
  },
  {
    "name": "Tolworth",
    "coords": [
      -0.2794424,
      51.3768746
    ]
  },
  {
    "name": "Chessington North",
    "coords": [
      -0.3007319,
      51.363982
    ]
  },
  {
    "name": "Streatham",
    "coords": [
      -0.1313131,
      51.4259609
    ]
  },
  {
    "name": "Billingshurst",
    "coords": [
      -0.4495061,
      51.0151333
    ]
  },
  {
    "name": "Charing Cross",
    "coords": [
      -0.1263945,
      51.5079664
    ]
  },
  {
    "name": "Elephant & Castle",
    "coords": [
      -0.0987169,
      51.4940431
    ]
  },
  {
    "name": "Elephant & Castle",
    "coords": [
      -0.1005731,
      51.4948884
    ]
  },
  {
    "name": "Sutton",
    "coords": [
      -0.1908861,
      51.3596769
    ]
  },
  {
    "name": "London St. Pancras International",
    "coords": [
      -0.1268506,
      51.5318912
    ]
  },
  {
    "name": "London Euston",
    "coords": [
      -0.1342549,
      51.528808
    ]
  },
  {
    "name": "Euston",
    "coords": [
      -0.1338745,
      51.5282865
    ]
  },
  {
    "name": "Stonehenge Works",
    "coords": [
      -0.6326945,
      51.9375995
    ]
  },
  {
    "name": "West Shore Halt",
    "coords": [
      -3.8417328,
      53.3156622
    ]
  },
  {
    "name": "Barnes",
    "coords": [
      -0.2411817,
      51.466783
    ]
  },
  {
    "name": "Chilworth",
    "coords": [
      -0.5250129,
      51.2151195
    ]
  },
  {
    "name": "Shalford",
    "coords": [
      -0.566879,
      51.2143603
    ]
  },
  {
    "name": "Esher",
    "coords": [
      -0.3532042,
      51.3800529
    ]
  },
  {
    "name": "Roby",
    "coords": [
      -2.8555038,
      53.4100591
    ]
  },
  {
    "name": "St Helens Junction",
    "coords": [
      -2.7000869,
      53.4337834
    ]
  },
  {
    "name": "Darton",
    "coords": [
      -1.5307942,
      53.5880035
    ]
  },
  {
    "name": "Hampton Wick",
    "coords": [
      -0.3123501,
      51.4145582
    ]
  },
  {
    "name": "Farnham",
    "coords": [
      -0.7924218,
      51.2118094
    ]
  },
  {
    "name": "Cheam",
    "coords": [
      -0.2145128,
      51.3556609
    ]
  },
  {
    "name": "Holborn",
    "coords": [
      -0.1200657,
      51.5171149
    ]
  },
  {
    "name": "Seer Green and Jordans",
    "coords": [
      -0.6080105,
      51.6098754
    ]
  },
  {
    "name": "Ince and Elton",
    "coords": [
      -2.8166827,
      53.2766012
    ]
  },
  {
    "name": "Stanlow and Thornton",
    "coords": [
      -2.8411357,
      53.2783095
    ]
  },
  {
    "name": "Cuckoos Nest",
    "coords": [
      -1.6342665,
      53.5949343
    ]
  },
  {
    "name": "Heighington",
    "coords": [
      -1.5817711,
      54.5971316
    ]
  },
  {
    "name": "Seaham",
    "coords": [
      -1.346378,
      54.839091
    ]
  },
  {
    "name": "Seaton Carew",
    "coords": [
      -1.2005633,
      54.6580139
    ]
  },
  {
    "name": "Flowery Field",
    "coords": [
      -2.0803672,
      53.4615184
    ]
  },
  {
    "name": "Bermuda Park",
    "coords": [
      -1.4725898,
      52.5033421
    ]
  },
  {
    "name": "Wellington",
    "coords": [
      -2.5167193,
      52.7014362
    ]
  },
  {
    "name": "Ben Rhydding",
    "coords": [
      -1.7974707,
      53.9257438
    ]
  },
  {
    "name": "Burley-in-Wharfedale",
    "coords": [
      -1.7531866,
      53.9079756
    ]
  },
  {
    "name": "Guiseley",
    "coords": [
      -1.7151179,
      53.8760658
    ]
  },
  {
    "name": "Menston",
    "coords": [
      -1.7354513,
      53.8923633
    ]
  },
  {
    "name": "Frizinghall",
    "coords": [
      -1.7689584,
      53.8203108
    ]
  },
  {
    "name": "Brighouse",
    "coords": [
      -1.7793363,
      53.6981649
    ]
  },
  {
    "name": "Shepley",
    "coords": [
      -1.7048254,
      53.5887533
    ]
  },
  {
    "name": "Stocksmoor",
    "coords": [
      -1.7232658,
      53.5941495
    ]
  },
  {
    "name": "Bamber Bridge",
    "coords": [
      -2.6614198,
      53.7269093
    ]
  },
  {
    "name": "Pleasington",
    "coords": [
      -2.5440104,
      53.7310487
    ]
  },
  {
    "name": "Bracknell",
    "coords": [
      -0.7522572,
      51.4130054
    ]
  },
  {
    "name": "Runcorn East",
    "coords": [
      -2.6654958,
      53.3279397
    ]
  },
  {
    "name": "Redcar Central",
    "coords": [
      -1.0703222,
      54.6159857
    ]
  },
  {
    "name": "South Bank",
    "coords": [
      -1.1762715,
      54.5840107
    ]
  },
  {
    "name": "Yarm",
    "coords": [
      -1.3514668,
      54.4937626
    ]
  },
  {
    "name": "Longcross",
    "coords": [
      -0.5950836,
      51.385277
    ]
  },
  {
    "name": "Arram",
    "coords": [
      -0.4263681,
      53.8841174
    ]
  },
  {
    "name": "Beverley",
    "coords": [
      -0.4228986,
      53.8421612
    ]
  },
  {
    "name": "Bridlington",
    "coords": [
      -0.2003693,
      54.0840651
    ]
  },
  {
    "name": "Cottingham",
    "coords": [
      -0.406219,
      53.781315
    ]
  },
  {
    "name": "Driffield",
    "coords": [
      -0.4345405,
      54.0014428
    ]
  },
  {
    "name": "Filey",
    "coords": [
      -0.2938604,
      54.2098083
    ]
  },
  {
    "name": "Hutton Cranswick",
    "coords": [
      -0.4338384,
      53.9561848
    ]
  },
  {
    "name": "Nafferton",
    "coords": [
      -0.3856241,
      54.0113429
    ]
  },
  {
    "name": "Seamer",
    "coords": [
      -0.4169939,
      54.2406582
    ]
  },
  {
    "name": "Gilberdyke",
    "coords": [
      -0.7316099,
      53.7480234
    ]
  },
  {
    "name": "Saltmarshe",
    "coords": [
      -0.8091658,
      53.7220658
    ]
  },
  {
    "name": "Albrighton",
    "coords": [
      -2.2692137,
      52.6382346
    ]
  },
  {
    "name": "Bilbrook",
    "coords": [
      -2.1873052,
      52.6239645
    ]
  },
  {
    "name": "Codsall",
    "coords": [
      -2.2016755,
      52.6274199
    ]
  },
  {
    "name": "Cosford",
    "coords": [
      -2.3006927,
      52.6448458
    ]
  },
  {
    "name": "Oakengates",
    "coords": [
      -2.450188,
      52.6930906
    ]
  },
  {
    "name": "Shifnal",
    "coords": [
      -2.3716887,
      52.6660075
    ]
  },
  {
    "name": "Telford Central",
    "coords": [
      -2.441178,
      52.6811135
    ]
  },
  {
    "name": "Church Stretton",
    "coords": [
      -2.8036843,
      52.5373034
    ]
  },
  {
    "name": "Gobowen",
    "coords": [
      -3.0368846,
      52.8933219
    ]
  },
  {
    "name": "Knighton",
    "coords": [
      -3.0423373,
      52.3450164
    ]
  },
  {
    "name": "Littleborough",
    "coords": [
      -2.0950109,
      53.6427541
    ]
  },
  {
    "name": "Moston",
    "coords": [
      -2.1710273,
      53.5232522
    ]
  },
  {
    "name": "Smithy Bridge",
    "coords": [
      -2.1140606,
      53.6328465
    ]
  },
  {
    "name": "Walsden",
    "coords": [
      -2.1047674,
      53.6965305
    ]
  },
  {
    "name": "Bescar Lane",
    "coords": [
      -2.9145518,
      53.6238457
    ]
  },
  {
    "name": "Burscough Bridge",
    "coords": [
      -2.8416523,
      53.6054245
    ]
  },
  {
    "name": "New Lane",
    "coords": [
      -2.8677436,
      53.6116884
    ]
  },
  {
    "name": "Parbold",
    "coords": [
      -2.7711373,
      53.5908551
    ]
  },
  {
    "name": "Hoscar",
    "coords": [
      -2.8046076,
      53.5977688
    ]
  },
  {
    "name": "Gathurst",
    "coords": [
      -2.6938146,
      53.5593822
    ]
  },
  {
    "name": "Appley Bridge",
    "coords": [
      -2.7195791,
      53.578708
    ]
  },
  {
    "name": "Bingley",
    "coords": [
      -1.837164,
      53.8487153
    ]
  },
  {
    "name": "Crossflatts",
    "coords": [
      -1.844476,
      53.858299
    ]
  },
  {
    "name": "Keighley",
    "coords": [
      -1.9013628,
      53.867932
    ]
  },
  {
    "name": "Accrington",
    "coords": [
      -2.3701201,
      53.7527983
    ]
  },
  {
    "name": "Bardon Mill",
    "coords": [
      -2.3450711,
      54.9745437
    ]
  },
  {
    "name": "Brinnington",
    "coords": [
      -2.1341235,
      53.4319627
    ]
  },
  {
    "name": "Burnley Manchester Road",
    "coords": [
      -2.2493172,
      53.7851712
    ]
  },
  {
    "name": "Cattal",
    "coords": [
      -1.3201962,
      53.9974183
    ]
  },
  {
    "name": "Church and Oswaldtwistle",
    "coords": [
      -2.3908916,
      53.7505427
    ]
  },
  {
    "name": "Corbridge",
    "coords": [
      -2.0190286,
      54.9662648
    ]
  },
  {
    "name": "Haltwhistle",
    "coords": [
      -2.4627642,
      54.9679903
    ]
  },
  {
    "name": "Hammerton",
    "coords": [
      -1.2840693,
      53.996331
    ]
  },
  {
    "name": "Hapton",
    "coords": [
      -2.31732,
      53.7815747
    ]
  },
  {
    "name": "Haydon Bridge",
    "coords": [
      -2.2472059,
      54.9752903
    ]
  },
  {
    "name": "Headingley",
    "coords": [
      -1.5944828,
      53.8180372
    ]
  },
  {
    "name": "Hebden Bridge",
    "coords": [
      -2.0088814,
      53.7376399
    ]
  },
  {
    "name": "Hornbeam Park",
    "coords": [
      -1.5276765,
      53.9803587
    ]
  },
  {
    "name": "Horsforth",
    "coords": [
      -1.6302169,
      53.8477524
    ]
  },
  {
    "name": "Huncoat",
    "coords": [
      -2.3470472,
      53.7722434
    ]
  },
  {
    "name": "Knaresborough",
    "coords": [
      -1.4703169,
      54.0090258
    ]
  },
  {
    "name": "Mytholmroyd",
    "coords": [
      -1.9818234,
      53.7290839
    ]
  },
  {
    "name": "Pannal",
    "coords": [
      -1.5326585,
      53.9584446
    ]
  },
  {
    "name": "Poppleton",
    "coords": [
      -1.1484069,
      53.9759597
    ]
  },
  {
    "name": "Prudhoe",
    "coords": [
      -1.8647367,
      54.9658707
    ]
  },
  {
    "name": "Reddish North",
    "coords": [
      -2.1567562,
      53.4497429
    ]
  },
  {
    "name": "Riding Mill",
    "coords": [
      -1.9719541,
      54.9489331
    ]
  },
  {
    "name": "Rishton",
    "coords": [
      -2.4201859,
      53.7638289
    ]
  },
  {
    "name": "Saltaire",
    "coords": [
      -1.7907973,
      53.8385598
    ]
  },
  {
    "name": "Sowerby Bridge",
    "coords": [
      -1.9072266,
      53.7078483
    ]
  },
  {
    "name": "Starbeck",
    "coords": [
      -1.5004755,
      53.998881
    ]
  },
  {
    "name": "Steeton and Silsden",
    "coords": [
      -1.9448075,
      53.9000518
    ]
  },
  {
    "name": "Stocksfield",
    "coords": [
      -1.9171893,
      54.946811
    ]
  },
  {
    "name": "Weeton",
    "coords": [
      -1.5812986,
      53.923285
    ]
  },
  {
    "name": "Wennington",
    "coords": [
      -2.5874211,
      54.1236926
    ]
  },
  {
    "name": "Wetheral",
    "coords": [
      -2.8319642,
      54.8837307
    ]
  },
  {
    "name": "Wylam",
    "coords": [
      -1.8143684,
      54.9748735
    ]
  },
  {
    "name": "Motherwell",
    "coords": [
      -3.9941418,
      55.7915212
    ]
  },
  {
    "name": "Whitby",
    "coords": [
      -0.6145349,
      54.4843244
    ]
  },
  {
    "name": "Ruswarp",
    "coords": [
      -0.6277753,
      54.4699399
    ]
  },
  {
    "name": "Station 3722827237",
    "coords": [
      -1.1317432,
      53.0630002
    ]
  },
  {
    "name": "Kennett",
    "coords": [
      0.4900933,
      52.2772508
    ]
  },
  {
    "name": "Lostock Gralam",
    "coords": [
      -2.4647767,
      53.2677491
    ]
  },
  {
    "name": "Stoke Mandeville",
    "coords": [
      -0.7843417,
      51.7878849
    ]
  },
  {
    "name": "Sittingbourne",
    "coords": [
      0.7351464,
      51.342078
    ]
  },
  {
    "name": "Great Chesterford",
    "coords": [
      0.1931746,
      52.0599083
    ]
  },
  {
    "name": "Kingussie",
    "coords": [
      -4.0532894,
      57.0777785
    ]
  },
  {
    "name": "Whitstable",
    "coords": [
      1.0343648,
      51.3576861
    ]
  },
  {
    "name": "Chestfield & Swalecliffe",
    "coords": [
      1.0674411,
      51.3602828
    ]
  },
  {
    "name": "Hednesford",
    "coords": [
      -2.0019759,
      52.7099433
    ]
  },
  {
    "name": "Kirknewton",
    "coords": [
      -3.4335165,
      55.8889332
    ]
  },
  {
    "name": "Landywood",
    "coords": [
      -2.0207336,
      52.656769
    ]
  },
  {
    "name": "Lingfield",
    "coords": [
      -0.0068029,
      51.1761001
    ]
  },
  {
    "name": "Otford",
    "coords": [
      0.1971759,
      51.3129318
    ]
  },
  {
    "name": "Walmer",
    "coords": [
      1.3825478,
      51.2032233
    ]
  },
  {
    "name": "Effingham Junction",
    "coords": [
      -0.4200621,
      51.2912974
    ]
  },
  {
    "name": "Langley Mill",
    "coords": [
      -1.3311974,
      53.018474
    ]
  },
  {
    "name": "Harling Road",
    "coords": [
      0.9093112,
      52.4538578
    ]
  },
  {
    "name": "Spooner Row",
    "coords": [
      1.0859995,
      52.5349209
    ]
  },
  {
    "name": "Alexandra Parade",
    "coords": [
      -4.2106057,
      55.8633135
    ]
  },
  {
    "name": "Blairhill",
    "coords": [
      -4.0427186,
      55.8665156
    ]
  },
  {
    "name": "Carfin",
    "coords": [
      -3.9557056,
      55.8076345
    ]
  },
  {
    "name": "Coatbridge Sunnyside",
    "coords": [
      -4.0279569,
      55.8669052
    ]
  },
  {
    "name": "Cumbernauld",
    "coords": [
      -3.9803047,
      55.941902
    ]
  },
  {
    "name": "Hamilton Central",
    "coords": [
      -4.0388235,
      55.7731462
    ]
  },
  {
    "name": "Hartwood",
    "coords": [
      -3.8389855,
      55.8111759
    ]
  },
  {
    "name": "Pollokshaws West",
    "coords": [
      -4.3014144,
      55.8238539
    ]
  },
  {
    "name": "Shadwell",
    "coords": [
      -0.0569241,
      51.51125
    ]
  },
  {
    "name": "Thanet Parkway",
    "coords": [
      1.3614558,
      51.3307843
    ]
  },
  {
    "name": "Wimbledon Chase",
    "coords": [
      -0.2147881,
      51.410247
    ]
  },
  {
    "name": "Rhoose Cardiff International Airport",
    "coords": [
      -3.3494457,
      51.3871547
    ]
  },
  {
    "name": "High Street",
    "coords": [
      -4.2399263,
      55.8593458
    ]
  },
  {
    "name": "Saundersfoot",
    "coords": [
      -4.7180532,
      51.7220045
    ]
  },
  {
    "name": "Shieldmuir",
    "coords": [
      -3.9574771,
      55.7772838
    ]
  },
  {
    "name": "North Sheen",
    "coords": [
      -0.2865821,
      51.4653247
    ]
  },
  {
    "name": "Coatbridge Central",
    "coords": [
      -4.0320785,
      55.8626694
    ]
  },
  {
    "name": "Croy",
    "coords": [
      -4.0361896,
      55.9556386
    ]
  },
  {
    "name": "Lenzie",
    "coords": [
      -4.1539264,
      55.9213422
    ]
  },
  {
    "name": "Alloa",
    "coords": [
      -3.78886,
      56.1179073
    ]
  },
  {
    "name": "Wimbledon Park",
    "coords": [
      -0.1990432,
      51.4340563
    ]
  },
  {
    "name": "Ravenscourt Park",
    "coords": [
      -0.2357932,
      51.4941293
    ]
  },
  {
    "name": "Imperial Wharf",
    "coords": [
      -0.1829268,
      51.475103
    ]
  },
  {
    "name": "Earlsfield",
    "coords": [
      -0.1876937,
      51.4424033
    ]
  },
  {
    "name": "Carstairs",
    "coords": [
      -3.6693685,
      55.6913659
    ]
  },
  {
    "name": "Cheshunt",
    "coords": [
      -0.0238695,
      51.7027036
    ]
  },
  {
    "name": "Hildenborough",
    "coords": [
      0.2278823,
      51.2145812
    ]
  },
  {
    "name": "Betchworth",
    "coords": [
      -0.2674721,
      51.247941
    ]
  },
  {
    "name": "Woking",
    "coords": [
      -0.5573085,
      51.3184492
    ]
  },
  {
    "name": "West Byfleet",
    "coords": [
      -0.505218,
      51.3396192
    ]
  },
  {
    "name": "Newark Northgate",
    "coords": [
      -0.7994939,
      53.0813745
    ]
  },
  {
    "name": "Tooting",
    "coords": [
      -0.1613148,
      51.4198567
    ]
  },
  {
    "name": "Haydons Road",
    "coords": [
      -0.1883425,
      51.4253627
    ]
  },
  {
    "name": "Peatlands Park Railway",
    "coords": [
      -6.6177992,
      54.4861847
    ]
  },
  {
    "name": "Alderley Edge",
    "coords": [
      -2.2366228,
      53.3038625
    ]
  },
  {
    "name": "Bentham",
    "coords": [
      -2.5106193,
      54.1154922
    ]
  },
  {
    "name": "Clapham",
    "coords": [
      -2.4104509,
      54.105416
    ]
  },
  {
    "name": "Cononley",
    "coords": [
      -2.0118034,
      53.9171608
    ]
  },
  {
    "name": "Gargrave",
    "coords": [
      -2.1050692,
      53.9782539
    ]
  },
  {
    "name": "Goostrey",
    "coords": [
      -2.3263394,
      53.2225699
    ]
  },
  {
    "name": "Ryder Brow",
    "coords": [
      -2.1739555,
      53.4569538
    ]
  },
  {
    "name": "Wandsworth Common",
    "coords": [
      -0.1635168,
      51.4461242
    ]
  },
  {
    "name": "Blackfriars",
    "coords": [
      -0.1037671,
      51.5115854
    ]
  },
  {
    "name": "London Victoria",
    "coords": [
      -0.1445802,
      51.4947328
    ]
  },
  {
    "name": "Halfway Station",
    "coords": [
      -0.1210879,
      50.8165473
    ]
  },
  {
    "name": "Harrogate",
    "coords": [
      -1.5374305,
      53.9934045
    ]
  },
  {
    "name": "Bromborough Rake",
    "coords": [
      -2.9902234,
      53.3302771
    ]
  },
  {
    "name": "Aughton Park",
    "coords": [
      -2.8953003,
      53.5541643
    ]
  },
  {
    "name": "Old Roan",
    "coords": [
      -2.9506754,
      53.4868988
    ]
  },
  {
    "name": "Orrell Park",
    "coords": [
      -2.9627081,
      53.4619763
    ]
  },
  {
    "name": "Town Green",
    "coords": [
      -2.9044304,
      53.5430207
    ]
  },
  {
    "name": "Walton",
    "coords": [
      -2.9660572,
      53.4563903
    ]
  },
  {
    "name": "Lambeth North",
    "coords": [
      -0.1120142,
      51.4989328
    ]
  },
  {
    "name": "Rice Lane",
    "coords": [
      -2.9630946,
      53.4575059
    ]
  },
  {
    "name": "Birkdale",
    "coords": [
      -3.0146159,
      53.6338886
    ]
  },
  {
    "name": "Freshfield",
    "coords": [
      -3.0718907,
      53.5662108
    ]
  },
  {
    "name": "Hall Road",
    "coords": [
      -3.0497373,
      53.4976204
    ]
  },
  {
    "name": "Hightown",
    "coords": [
      -3.057184,
      53.5253852
    ]
  },
  {
    "name": "Hillside",
    "coords": [
      -3.0254312,
      53.6215448
    ]
  },
  {
    "name": "Eccleston Park",
    "coords": [
      -2.7803346,
      53.4307355
    ]
  },
  {
    "name": "Prescot",
    "coords": [
      -2.7989869,
      53.4235274
    ]
  },
  {
    "name": "Fazakerley",
    "coords": [
      -2.9369705,
      53.468984
    ]
  },
  {
    "name": "Taunton",
    "coords": [
      -3.102674,
      51.0232945
    ]
  },
  {
    "name": "Dorking",
    "coords": [
      -0.3241359,
      51.2411653
    ]
  },
  {
    "name": "Pugneys Central",
    "coords": [
      -1.5091855,
      53.6536471
    ]
  },
  {
    "name": "Pugneys Lakeside",
    "coords": [
      -1.5116661,
      53.6564954
    ]
  },
  {
    "name": "Aldgate",
    "coords": [
      -0.0757186,
      51.5142477
    ]
  },
  {
    "name": "Bury St Edmunds",
    "coords": [
      0.7125888,
      52.2536353
    ]
  },
  {
    "name": "Elmswell",
    "coords": [
      0.9125333,
      52.2381588
    ]
  },
  {
    "name": "Thurston",
    "coords": [
      0.8086544,
      52.2499275
    ]
  },
  {
    "name": "Needham Market",
    "coords": [
      1.0555379,
      52.1526149
    ]
  },
  {
    "name": "Stowmarket",
    "coords": [
      1.000257,
      52.1897991
    ]
  },
  {
    "name": "Seven Sisters",
    "coords": [
      -0.0749325,
      51.5824738
    ]
  },
  {
    "name": "Bishop's Stortford",
    "coords": [
      0.1654105,
      51.866427
    ]
  },
  {
    "name": "Gates A1-A23",
    "coords": [
      -0.4859786,
      51.4709832
    ]
  },
  {
    "name": "Gates B32-B48",
    "coords": [
      -0.4812712,
      51.4709999
    ]
  },
  {
    "name": "Gates C52-C66",
    "coords": [
      -0.476074,
      51.470982
    ]
  },
  {
    "name": "Southfields",
    "coords": [
      -0.2066142,
      51.4457751
    ]
  },
  {
    "name": "Manors",
    "coords": [
      -1.6043794,
      54.9739092
    ]
  },
  {
    "name": "Fawdon",
    "coords": [
      -1.6443016,
      55.0135968
    ]
  },
  {
    "name": "Wansbeck Road",
    "coords": [
      -1.6356886,
      55.0142915
    ]
  },
  {
    "name": "Ashtead",
    "coords": [
      -0.3073912,
      51.3179225
    ]
  },
  {
    "name": "Vauxhall",
    "coords": [
      -0.1248604,
      51.4860091
    ]
  },
  {
    "name": "Manor Station",
    "coords": [
      -1.9402265,
      53.4472118
    ]
  },
  {
    "name": "Drumawhey Junction",
    "coords": [
      -5.6065795,
      54.6092346
    ]
  },
  {
    "name": "Oxford Parkway",
    "coords": [
      -1.275093,
      51.8037471
    ]
  },
  {
    "name": "Orpington",
    "coords": [
      0.0887195,
      51.3736037
    ]
  },
  {
    "name": "Damhead Miniature Railway",
    "coords": [
      -6.5975599,
      55.1115126
    ]
  },
  {
    "name": "Herne Hill",
    "coords": [
      -0.1022835,
      51.4534691
    ]
  },
  {
    "name": "Carnfunnock Family Fun Zone Miniature Railway",
    "coords": [
      -5.8436285,
      54.8889179
    ]
  },
  {
    "name": "Partick",
    "coords": [
      -4.3087568,
      55.8697504
    ]
  },
  {
    "name": "Cobham & Stoke d'Abernon",
    "coords": [
      -0.3894128,
      51.3179185
    ]
  },
  {
    "name": "Dorking Deepdene",
    "coords": [
      -0.3239805,
      51.2388155
    ]
  },
  {
    "name": "Redhill",
    "coords": [
      -0.165577,
      51.2400546
    ]
  },
  {
    "name": "Epsom Downs",
    "coords": [
      -0.2384351,
      51.3242508
    ]
  },
  {
    "name": "Oxford Road",
    "coords": [
      -1.2453816,
      51.6175522
    ]
  },
  {
    "name": "Byfleet and New Haw",
    "coords": [
      -0.48122,
      51.3496809
    ]
  },
  {
    "name": "Bexley",
    "coords": [
      0.1479494,
      51.4402375
    ]
  },
  {
    "name": "Weybridge",
    "coords": [
      -0.4580837,
      51.3614381
    ]
  },
  {
    "name": "Apperley Bridge",
    "coords": [
      -1.7070712,
      53.8420442
    ]
  },
  {
    "name": "Stopham Road",
    "coords": [
      -0.5303248,
      50.9547688
    ]
  },
  {
    "name": "Chelmsford",
    "coords": [
      0.4686521,
      51.736512
    ]
  },
  {
    "name": "Balham",
    "coords": [
      -0.1514426,
      51.4428285
    ]
  },
  {
    "name": "Mortlake",
    "coords": [
      -0.2673708,
      51.4680644
    ]
  },
  {
    "name": "Cheddington",
    "coords": [
      -0.6619813,
      51.8582898
    ]
  },
  {
    "name": "Berkhamsted",
    "coords": [
      -0.5626636,
      51.7635571
    ]
  },
  {
    "name": "Brookmans Park",
    "coords": [
      -0.2048356,
      51.7211572
    ]
  },
  {
    "name": "Flitwick",
    "coords": [
      -0.4949825,
      52.0037912
    ]
  },
  {
    "name": "Harlington",
    "coords": [
      -0.4953396,
      51.9614072
    ]
  },
  {
    "name": "Hitchin",
    "coords": [
      -0.263035,
      51.9531709
    ]
  },
  {
    "name": "South Ealing",
    "coords": [
      -0.3076815,
      51.5008623
    ]
  },
  {
    "name": "Knebworth",
    "coords": [
      -0.187051,
      51.8670421
    ]
  },
  {
    "name": "East Kilbride",
    "coords": [
      -4.1809174,
      55.7659902
    ]
  },
  {
    "name": "Hairmyres",
    "coords": [
      -4.2205481,
      55.7619088
    ]
  },
  {
    "name": "Mossley West",
    "coords": [
      -5.9507715,
      54.6967604
    ]
  },
  {
    "name": "Busby",
    "coords": [
      -4.2622278,
      55.7803927
    ]
  },
  {
    "name": "York Street",
    "coords": [
      -5.9221917,
      54.6104419
    ]
  },
  {
    "name": "Belfast Lanyon Place",
    "coords": [
      -5.9172896,
      54.5951512
    ]
  },
  {
    "name": "Torpantau",
    "coords": [
      -3.3807981,
      51.8403136
    ]
  },
  {
    "name": "Bangor",
    "coords": [
      -5.6718411,
      54.6586507
    ]
  },
  {
    "name": "Carnalea",
    "coords": [
      -5.7056262,
      54.6660686
    ]
  },
  {
    "name": "Helen's Bay",
    "coords": [
      -5.740313,
      54.6661883
    ]
  },
  {
    "name": "Bangor West",
    "coords": [
      -5.692785,
      54.659372
    ]
  },
  {
    "name": "Seahill",
    "coords": [
      -5.7680899,
      54.6608438
    ]
  },
  {
    "name": "Cultra",
    "coords": [
      -5.8049808,
      54.6523133
    ]
  },
  {
    "name": "Marino",
    "coords": [
      -5.8173462,
      54.6469655
    ]
  },
  {
    "name": "Holywood",
    "coords": [
      -5.8398138,
      54.6409881
    ]
  },
  {
    "name": "Sydenham",
    "coords": [
      -5.8773106,
      54.6093151
    ]
  },
  {
    "name": "Titanic Quarter",
    "coords": [
      -5.9064967,
      54.6018934
    ]
  },
  {
    "name": "City Hospital",
    "coords": [
      -5.9397733,
      54.5886032
    ]
  },
  {
    "name": "Whiteabbey",
    "coords": [
      -5.9045207,
      54.6721546
    ]
  },
  {
    "name": "Jordanstown",
    "coords": [
      -5.8951026,
      54.6871277
    ]
  },
  {
    "name": "Greenisland",
    "coords": [
      -5.8729341,
      54.7002778
    ]
  },
  {
    "name": "Trooperslane",
    "coords": [
      -5.8490732,
      54.7102751
    ]
  },
  {
    "name": "Clipperstown",
    "coords": [
      -5.8183914,
      54.7175372
    ]
  },
  {
    "name": "Carrickfergus",
    "coords": [
      -5.8096045,
      54.7174566
    ]
  },
  {
    "name": "Downshire",
    "coords": [
      -5.7906547,
      54.7209454
    ]
  },
  {
    "name": "Whitehead",
    "coords": [
      -5.7094669,
      54.752181
    ]
  },
  {
    "name": "Magheramorne",
    "coords": [
      -5.7667883,
      54.8153673
    ]
  },
  {
    "name": "Glynn",
    "coords": [
      -5.8070885,
      54.827144
    ]
  },
  {
    "name": "Larne Town",
    "coords": [
      -5.8138046,
      54.8499886
    ]
  },
  {
    "name": "Larne Harbour",
    "coords": [
      -5.7986555,
      54.8478421
    ]
  },
  {
    "name": "Ballycarry",
    "coords": [
      -5.7256699,
      54.7772868
    ]
  },
  {
    "name": "Lisburn",
    "coords": [
      -6.0453218,
      54.5139104
    ]
  },
  {
    "name": "Newry",
    "coords": [
      -6.3625277,
      54.1886138
    ]
  },
  {
    "name": "Poyntzpass",
    "coords": [
      -6.3719819,
      54.2930466
    ]
  },
  {
    "name": "Scarva",
    "coords": [
      -6.3665732,
      54.3316375
    ]
  },
  {
    "name": "Portadown",
    "coords": [
      -6.4454404,
      54.4250835
    ]
  },
  {
    "name": "Moira",
    "coords": [
      -6.2146629,
      54.4920421
    ]
  },
  {
    "name": "Hilden",
    "coords": [
      -6.0293849,
      54.5222969
    ]
  },
  {
    "name": "Derriaghy",
    "coords": [
      -6.017688,
      54.5423922
    ]
  },
  {
    "name": "Dunmurry",
    "coords": [
      -6.0032597,
      54.5529975
    ]
  },
  {
    "name": "Finaghy",
    "coords": [
      -5.9866704,
      54.5638412
    ]
  },
  {
    "name": "Balmoral",
    "coords": [
      -5.9685874,
      54.5686302
    ]
  },
  {
    "name": "Adelaide",
    "coords": [
      -5.9550081,
      54.5784014
    ]
  },
  {
    "name": "Lambeg",
    "coords": [
      -6.0296261,
      54.5296586
    ]
  },
  {
    "name": "Bellarena",
    "coords": [
      -6.9510654,
      55.1270333
    ]
  },
  {
    "name": "Tilbury Town",
    "coords": [
      0.3538289,
      51.4624598
    ]
  },
  {
    "name": "Truro",
    "coords": [
      -5.0642026,
      50.2639862
    ]
  },
  {
    "name": "Plymouth",
    "coords": [
      -4.1433925,
      50.3780967
    ]
  },
  {
    "name": "Hammersmith",
    "coords": [
      -1.4090029,
      53.0629839
    ]
  },
  {
    "name": "Inch Abbey",
    "coords": [
      -5.7360851,
      54.3375225
    ]
  },
  {
    "name": "King Magnus' Halt",
    "coords": [
      -5.7309638,
      54.3194818
    ]
  },
  {
    "name": "Downpatrick Loop Platform",
    "coords": [
      -5.7300584,
      54.3240056
    ]
  },
  {
    "name": "Dore and Totley",
    "coords": [
      -1.5153161,
      53.3275706
    ]
  },
  {
    "name": "Brough",
    "coords": [
      -0.5781491,
      53.7269328
    ]
  },
  {
    "name": "Halifax",
    "coords": [
      -1.8536277,
      53.7208399
    ]
  },
  {
    "name": "Stirling",
    "coords": [
      -3.9342962,
      56.1196512
    ]
  },
  {
    "name": "Dalmuir",
    "coords": [
      -4.4268526,
      55.9120066
    ]
  },
  {
    "name": "London Bridge",
    "coords": [
      -0.0851473,
      51.5048764
    ]
  },
  {
    "name": "Leicester",
    "coords": [
      -1.1238912,
      52.6318214
    ]
  },
  {
    "name": "Bedford",
    "coords": [
      -0.4797291,
      52.1361826
    ]
  },
  {
    "name": "Beeston",
    "coords": [
      -1.2075065,
      52.9207938
    ]
  },
  {
    "name": "Kilpatrick",
    "coords": [
      -4.452836,
      55.9241104
    ]
  },
  {
    "name": "Westerton",
    "coords": [
      -4.3351335,
      55.9048265
    ]
  },
  {
    "name": "Drumchapel",
    "coords": [
      -4.363032,
      55.9047342
    ]
  },
  {
    "name": "Dumbarton Central",
    "coords": [
      -4.5676104,
      55.9465247
    ]
  },
  {
    "name": "Dalreoch",
    "coords": [
      -4.577251,
      55.9472801
    ]
  },
  {
    "name": "Airdrie",
    "coords": [
      -3.9822547,
      55.8640839
    ]
  },
  {
    "name": "Hyndland",
    "coords": [
      -4.3144853,
      55.8796122
    ]
  },
  {
    "name": "Jordanhill",
    "coords": [
      -4.3249413,
      55.8826725
    ]
  },
  {
    "name": "Anniesland",
    "coords": [
      -4.3215698,
      55.8899452
    ]
  },
  {
    "name": "Garscadden",
    "coords": [
      -4.3644049,
      55.8875152
    ]
  },
  {
    "name": "Yoker",
    "coords": [
      -4.3863668,
      55.8925796
    ]
  },
  {
    "name": "Clydebank",
    "coords": [
      -4.4041552,
      55.9005667
    ]
  },
  {
    "name": "Scotstounhill",
    "coords": [
      -4.3529637,
      55.8850022
    ]
  },
  {
    "name": "Springburn",
    "coords": [
      -4.2301653,
      55.8818527
    ]
  },
  {
    "name": "Greenfaulds",
    "coords": [
      -3.993509,
      55.9348862
    ]
  },
  {
    "name": "Lawley Village",
    "coords": [
      -2.4799836,
      52.6714844
    ]
  },
  {
    "name": "Helensburgh Upper",
    "coords": [
      -4.7307717,
      56.0124414
    ]
  },
  {
    "name": "Cookham",
    "coords": [
      -0.7222499,
      51.5573685
    ]
  },
  {
    "name": "Tulloch",
    "coords": [
      -4.701135,
      56.8840987
    ]
  },
  {
    "name": "Kingsknowe",
    "coords": [
      -3.2648569,
      55.9189091
    ]
  },
  {
    "name": "Slateford",
    "coords": [
      -3.243746,
      55.9266156
    ]
  },
  {
    "name": "Wester Hailes",
    "coords": [
      -3.2838201,
      55.9143713
    ]
  },
  {
    "name": "West Sutton",
    "coords": [
      -0.2044835,
      51.3662613
    ]
  },
  {
    "name": "Bat & Ball",
    "coords": [
      0.1941812,
      51.2901134
    ]
  },
  {
    "name": "Eynsford",
    "coords": [
      0.2042149,
      51.3623288
    ]
  },
  {
    "name": "Ashley",
    "coords": [
      -2.341439,
      53.3557218
    ]
  },
  {
    "name": "Station 4349045912",
    "coords": [
      -2.8394344,
      56.3171256
    ]
  },
  {
    "name": "High Brooms",
    "coords": [
      0.2779622,
      51.1497792
    ]
  },
  {
    "name": "Warren Wood",
    "coords": [
      0.6864234,
      51.2951754
    ]
  },
  {
    "name": "Tring",
    "coords": [
      -0.6224578,
      51.800672
    ]
  },
  {
    "name": "Chinley",
    "coords": [
      -1.9445158,
      53.3401158
    ]
  },
  {
    "name": "Woolwich",
    "coords": [
      0.0705576,
      51.4918947
    ]
  },
  {
    "name": "Upton Park",
    "coords": [
      0.0339842,
      51.5351062
    ]
  },
  {
    "name": "Bangor",
    "coords": [
      -4.135518,
      53.2226448
    ]
  },
  {
    "name": "Tackley",
    "coords": [
      -1.297508,
      51.8814551
    ]
  },
  {
    "name": "Chillingham Road",
    "coords": [
      -1.5720557,
      54.9829136
    ]
  },
  {
    "name": "Felling",
    "coords": [
      -1.571771,
      54.9531464
    ]
  },
  {
    "name": "Gateshead Stadium",
    "coords": [
      -1.5881587,
      54.9576691
    ]
  },
  {
    "name": "Haymarket",
    "coords": [
      -1.6139281,
      54.9775027
    ]
  },
  {
    "name": "Heworth",
    "coords": [
      -1.5562892,
      54.9515142
    ]
  },
  {
    "name": "Heworth",
    "coords": [
      -1.5571558,
      54.9516098
    ]
  },
  {
    "name": "Ilford Road",
    "coords": [
      -1.6108627,
      55.0000112
    ]
  },
  {
    "name": "Jesmond",
    "coords": [
      -1.6055777,
      54.9830644
    ]
  },
  {
    "name": "Millfield",
    "coords": [
      -1.4010132,
      54.9064665
    ]
  },
  {
    "name": "Central Station",
    "coords": [
      -1.6167186,
      54.9693665
    ]
  },
  {
    "name": "Pallion",
    "coords": [
      -1.4178547,
      54.9127413
    ]
  },
  {
    "name": "Regent Centre",
    "coords": [
      -1.6216284,
      55.0119539
    ]
  },
  {
    "name": "South Gosforth",
    "coords": [
      -1.6083021,
      55.0057849
    ]
  },
  {
    "name": "South Hylton",
    "coords": [
      -1.4476867,
      54.9042829
    ]
  },
  {
    "name": "St Peter's",
    "coords": [
      -1.3837588,
      54.9110683
    ]
  },
  {
    "name": "Stadium of Light",
    "coords": [
      -1.3829516,
      54.9181372
    ]
  },
  {
    "name": "Sunderland",
    "coords": [
      -1.3824404,
      54.9061115
    ]
  },
  {
    "name": "West Jesmond",
    "coords": [
      -1.6098034,
      54.993435
    ]
  },
  {
    "name": "Clapham Common",
    "coords": [
      -0.1373589,
      51.4620748
    ]
  },
  {
    "name": "White City",
    "coords": [
      -0.2242361,
      51.5119347
    ]
  },
  {
    "name": "Pelaw",
    "coords": [
      -1.542051,
      54.9526638
    ]
  },
  {
    "name": "Gateshead",
    "coords": [
      -1.6044065,
      54.9617219
    ]
  },
  {
    "name": "Bank Foot",
    "coords": [
      -1.6780732,
      55.0139176
    ]
  },
  {
    "name": "Callerton Parkway",
    "coords": [
      -1.7034114,
      55.0277062
    ]
  },
  {
    "name": "Airport",
    "coords": [
      -1.7110967,
      55.0356373
    ]
  },
  {
    "name": "Benton",
    "coords": [
      -1.5676297,
      55.0139029
    ]
  },
  {
    "name": "East Boldon",
    "coords": [
      -1.4201545,
      54.946345
    ]
  },
  {
    "name": "Four Lane Ends",
    "coords": [
      -1.5785049,
      55.010164
    ]
  },
  {
    "name": "Bede",
    "coords": [
      -1.4656764,
      54.9742849
    ]
  },
  {
    "name": "Jarrow",
    "coords": [
      -1.493592,
      54.9795929
    ]
  },
  {
    "name": "Hebburn",
    "coords": [
      -1.5212236,
      54.9752922
    ]
  },
  {
    "name": "Brockley Whins",
    "coords": [
      -1.460684,
      54.9595193
    ]
  },
  {
    "name": "Seaburn",
    "coords": [
      -1.3865039,
      54.9295618
    ]
  },
  {
    "name": "University",
    "coords": [
      -1.392096,
      54.9027916
    ]
  },
  {
    "name": "St James",
    "coords": [
      -1.6210905,
      54.974347
    ]
  },
  {
    "name": "Manors",
    "coords": [
      -1.6056318,
      54.972671
    ]
  },
  {
    "name": "Walkergate",
    "coords": [
      -1.5594732,
      54.9853512
    ]
  },
  {
    "name": "Byker",
    "coords": [
      -1.580344,
      54.9760388
    ]
  },
  {
    "name": "Wallsend",
    "coords": [
      -1.5327361,
      54.9895984
    ]
  },
  {
    "name": "Hadrian Road",
    "coords": [
      -1.5159676,
      54.9922694
    ]
  },
  {
    "name": "Howdon",
    "coords": [
      -1.4941598,
      54.9959066
    ]
  },
  {
    "name": "Percy Main",
    "coords": [
      -1.4746255,
      54.9995678
    ]
  },
  {
    "name": "Meadow Well",
    "coords": [
      -1.4656759,
      55.001562
    ]
  },
  {
    "name": "Shiremoor",
    "coords": [
      -1.5054224,
      55.0369588
    ]
  },
  {
    "name": "Northumberland Park",
    "coords": [
      -1.5195618,
      55.0332093
    ]
  },
  {
    "name": "Longbenton",
    "coords": [
      -1.5916006,
      55.0089239
    ]
  },
  {
    "name": "Palmersville",
    "coords": [
      -1.5411852,
      55.0236937
    ]
  },
  {
    "name": "Kingston Park",
    "coords": [
      -1.6658823,
      55.0144242
    ]
  },
  {
    "name": "Allens West",
    "coords": [
      -1.3616516,
      54.524557
    ]
  },
  {
    "name": "Tilehurst",
    "coords": [
      -1.0296647,
      51.4716513
    ]
  },
  {
    "name": "Lewisham DLR",
    "coords": [
      -0.0130109,
      51.4649887
    ]
  },
  {
    "name": "Norton Fitzwarren",
    "coords": [
      -3.1570253,
      51.0246094
    ]
  },
  {
    "name": "Paddington (Circle and Hammersmith & City lines)",
    "coords": [
      -0.1787546,
      51.5185075
    ]
  },
  {
    "name": "Beech Hurst Miniature Railway Station",
    "coords": [
      -0.11547,
      50.9981184
    ]
  },
  {
    "name": "Seaford",
    "coords": [
      0.1000064,
      50.7729203
    ]
  },
  {
    "name": "Low Moor",
    "coords": [
      -1.7523839,
      53.7501367
    ]
  },
  {
    "name": "Hunts Cross",
    "coords": [
      -2.8554087,
      53.3607333
    ]
  },
  {
    "name": "Farncombe",
    "coords": [
      -0.6043738,
      51.1971446
    ]
  },
  {
    "name": "Godalming",
    "coords": [
      -0.6189563,
      51.1865224
    ]
  },
  {
    "name": "Feltham",
    "coords": [
      -0.4102826,
      51.4478377
    ]
  },
  {
    "name": "St Margarets",
    "coords": [
      -0.3202187,
      51.4551535
    ]
  },
  {
    "name": "Blundellsands & Crosby",
    "coords": [
      -3.0404348,
      53.4877265
    ]
  },
  {
    "name": "Frodingham",
    "coords": [
      -0.6309736,
      53.5864278
    ]
  },
  {
    "name": "Forest Halt",
    "coords": [
      -4.4034981,
      52.0405985
    ]
  },
  {
    "name": "Newbury",
    "coords": [
      -1.322751,
      51.3975325
    ]
  },
  {
    "name": "Oxshott",
    "coords": [
      -0.3625418,
      51.3361004
    ]
  },
  {
    "name": "Claygate",
    "coords": [
      -0.3484109,
      51.3610578
    ]
  },
  {
    "name": "Chesham",
    "coords": [
      -0.611116,
      51.7052231
    ]
  },
  {
    "name": "Wadhurst",
    "coords": [
      0.3130406,
      51.0733883
    ]
  },
  {
    "name": "Frant",
    "coords": [
      0.2943374,
      51.1040897
    ]
  },
  {
    "name": "South Woodford",
    "coords": [
      0.0274276,
      51.5917798
    ]
  },
  {
    "name": "West Ruislip",
    "coords": [
      -0.4370447,
      51.5695047
    ]
  },
  {
    "name": "Box Hill & Westhumble",
    "coords": [
      -0.3286723,
      51.2539871
    ]
  },
  {
    "name": "Hampton Court",
    "coords": [
      -0.3425203,
      51.4020159
    ]
  },
  {
    "name": "Hayles Abbey Halt",
    "coords": [
      -1.9330953,
      51.9753255
    ]
  },
  {
    "name": "Station 4901466089",
    "coords": [
      -0.0053134,
      53.538884
    ]
  },
  {
    "name": "Bognor Regis",
    "coords": [
      -0.6757482,
      50.7876895
    ]
  },
  {
    "name": "Royden Park Minature Railway",
    "coords": [
      -3.1330833,
      53.3630039
    ]
  },
  {
    "name": "Tadworth",
    "coords": [
      -0.2358629,
      51.2914245
    ]
  },
  {
    "name": "Polegate Oaks",
    "coords": [
      0.2520124,
      50.8184187
    ]
  },
  {
    "name": "Rannoch",
    "coords": [
      -4.5769511,
      56.6861502
    ]
  },
  {
    "name": "Lincoln Central",
    "coords": [
      -0.5398447,
      53.2261066
    ]
  },
  {
    "name": "Todmorden",
    "coords": [
      -2.0997573,
      53.713858
    ]
  },
  {
    "name": "Blackburn",
    "coords": [
      -2.4788573,
      53.7465347
    ]
  },
  {
    "name": "Rose Grove",
    "coords": [
      -2.2823158,
      53.7862655
    ]
  },
  {
    "name": "Lostock Hall",
    "coords": [
      -2.6870008,
      53.7243497
    ]
  },
  {
    "name": "Cherry Tree",
    "coords": [
      -2.5186399,
      53.7331819
    ]
  },
  {
    "name": "Mill Hill",
    "coords": [
      -2.5019404,
      53.735339
    ]
  },
  {
    "name": "Castleton",
    "coords": [
      -2.1777231,
      53.5927444
    ]
  },
  {
    "name": "Aldgate East",
    "coords": [
      -0.070839,
      51.5156185
    ]
  },
  {
    "name": "Littlehampton",
    "coords": [
      -0.5462574,
      50.8101746
    ]
  },
  {
    "name": "Dovebrook",
    "coords": [
      1.1228264,
      52.2502347
    ]
  },
  {
    "name": "Wildmill",
    "coords": [
      -3.5802725,
      51.5198051
    ]
  },
  {
    "name": "Station 5011575299",
    "coords": [
      -1.0980757,
      53.9597833
    ]
  },
  {
    "name": "Blaydon",
    "coords": [
      -1.7128813,
      54.9659633
    ]
  },
  {
    "name": "Chester",
    "coords": [
      -2.8795296,
      53.1967494
    ]
  },
  {
    "name": "Buxton",
    "coords": [
      -1.9131016,
      53.2607853
    ]
  },
  {
    "name": "Skipton",
    "coords": [
      -2.0260314,
      53.9584308
    ]
  },
  {
    "name": "Kirkstall Forge",
    "coords": [
      -1.627075,
      53.8253007
    ]
  },
  {
    "name": "Ilkley",
    "coords": [
      -1.8212877,
      53.9247929
    ]
  },
  {
    "name": "Bradford Forster Square",
    "coords": [
      -1.7531842,
      53.7974386
    ]
  },
  {
    "name": "Colne",
    "coords": [
      -2.181886,
      53.8549144
    ]
  },
  {
    "name": "Clitheroe",
    "coords": [
      -2.3944323,
      53.8735624
    ]
  },
  {
    "name": "Whalley",
    "coords": [
      -2.4118943,
      53.8244874
    ]
  },
  {
    "name": "Manchester Piccadilly",
    "coords": [
      -2.2301402,
      53.4772197
    ]
  },
  {
    "name": "Manchester Oxford Road",
    "coords": [
      -2.2422762,
      53.4737777
    ]
  },
  {
    "name": "Deansgate",
    "coords": [
      -2.251063,
      53.4740961
    ]
  },
  {
    "name": "Salford Central",
    "coords": [
      -2.2555159,
      53.4828774
    ]
  },
  {
    "name": "Manchester Victoria",
    "coords": [
      -2.2424846,
      53.4879748
    ]
  },
  {
    "name": "Barrow-in-Furness",
    "coords": [
      -3.2260261,
      54.1191205
    ]
  },
  {
    "name": "Chorley",
    "coords": [
      -2.626934,
      53.6529842
    ]
  },
  {
    "name": "Ravenglass",
    "coords": [
      -3.4088794,
      54.3556605
    ]
  },
  {
    "name": "Whitehaven",
    "coords": [
      -3.5871793,
      54.5532204
    ]
  },
  {
    "name": "Shrewsbury",
    "coords": [
      -2.7494043,
      52.7118509
    ]
  },
  {
    "name": "Nunthorpe",
    "coords": [
      -1.1697897,
      54.5280386
    ]
  },
  {
    "name": "Tywyn",
    "coords": [
      -4.0933648,
      52.5853794
    ]
  },
  {
    "name": "Pwllheli",
    "coords": [
      -4.4161558,
      52.8881946
    ]
  },
  {
    "name": "Barmouth",
    "coords": [
      -4.0567929,
      52.7224212
    ]
  },
  {
    "name": "Muggles Meet",
    "coords": [
      -3.6483346,
      56.4349395
    ]
  },
  {
    "name": "Geoff's Halt",
    "coords": [
      -3.6490029,
      56.4353156
    ]
  },
  {
    "name": "Parsons Green",
    "coords": [
      -0.201549,
      51.4750837
    ]
  },
  {
    "name": "London Fenchurch Street",
    "coords": [
      -0.0774191,
      51.5113281
    ]
  },
  {
    "name": "Amnerfield Miniature Railway",
    "coords": [
      -1.0218192,
      51.4191905
    ]
  },
  {
    "name": "Fulham Broadway",
    "coords": [
      -0.1943493,
      51.4808834
    ]
  },
  {
    "name": "Clarkston",
    "coords": [
      -4.2757187,
      55.7895219
    ]
  },
  {
    "name": "Hayle",
    "coords": [
      -5.4199282,
      50.1855434
    ]
  },
  {
    "name": "Forres",
    "coords": [
      -3.6242475,
      57.6111217
    ]
  },
  {
    "name": "Matlock Riverside",
    "coords": [
      -1.5668186,
      53.1411575
    ]
  },
  {
    "name": "Plaistow",
    "coords": [
      0.0166833,
      51.5311544
    ]
  },
  {
    "name": "Bow Road",
    "coords": [
      -0.024789,
      51.5268535
    ]
  },
  {
    "name": "Stepney Green",
    "coords": [
      -0.0467147,
      51.5217026
    ]
  },
  {
    "name": "Oakwood",
    "coords": [
      -0.1312548,
      51.6473302
    ]
  },
  {
    "name": "West Kensington",
    "coords": [
      -0.2059442,
      51.4907023
    ]
  },
  {
    "name": "West Brompton",
    "coords": [
      -0.1951854,
      51.4869765
    ]
  },
  {
    "name": "Boston Manor",
    "coords": [
      -0.3254399,
      51.4953386
    ]
  },
  {
    "name": "Heathrow Terminals 2 & 3",
    "coords": [
      -0.452483,
      51.4713416
    ]
  },
  {
    "name": "Heathrow Terminal 5",
    "coords": [
      -0.4877331,
      51.472515
    ]
  },
  {
    "name": "Knightsbridge",
    "coords": [
      -0.160937,
      51.5015961
    ]
  },
  {
    "name": "Hounslow West",
    "coords": [
      -0.3858181,
      51.4735822
    ]
  },
  {
    "name": "Mornington Crescent",
    "coords": [
      -0.1380918,
      51.5340608
    ]
  },
  {
    "name": "Hounslow East",
    "coords": [
      -0.3558944,
      51.4734727
    ]
  },
  {
    "name": "Hounslow Central",
    "coords": [
      -0.3662332,
      51.471307
    ]
  },
  {
    "name": "Southgate",
    "coords": [
      -0.1277858,
      51.6323183
    ]
  },
  {
    "name": "Cockfosters",
    "coords": [
      -0.1485149,
      51.651366
    ]
  },
  {
    "name": "Burnt Oak",
    "coords": [
      -0.2640125,
      51.6028082
    ]
  },
  {
    "name": "Putney Bridge",
    "coords": [
      -0.2087947,
      51.4682995
    ]
  },
  {
    "name": "Northfields",
    "coords": [
      -0.312979,
      51.4996647
    ]
  },
  {
    "name": "Chorleywood",
    "coords": [
      -0.5183558,
      51.6541757
    ]
  },
  {
    "name": "Hyde Park Corner",
    "coords": [
      -0.1543249,
      51.5027264
    ]
  },
  {
    "name": "Lancaster Gate",
    "coords": [
      -0.175108,
      51.5118458
    ]
  },
  {
    "name": "Newbury Park",
    "coords": [
      0.0899693,
      51.5754985
    ]
  },
  {
    "name": "Moor Park",
    "coords": [
      -0.4321576,
      51.6297793
    ]
  },
  {
    "name": "Rickmansworth",
    "coords": [
      -0.4734045,
      51.6401841
    ]
  },
  {
    "name": "Ealing Common",
    "coords": [
      -0.2881658,
      51.5097107
    ]
  },
  {
    "name": "Kingsbury",
    "coords": [
      -0.2787137,
      51.5843174
    ]
  },
  {
    "name": "Queensbury",
    "coords": [
      -0.286181,
      51.5941903
    ]
  },
  {
    "name": "Northwick Park",
    "coords": [
      -0.3176997,
      51.578491
    ]
  },
  {
    "name": "Preston Road",
    "coords": [
      -0.2958081,
      51.5722732
    ]
  },
  {
    "name": "Finchley Road",
    "coords": [
      -0.1806964,
      51.5472307
    ]
  },
  {
    "name": "West Harrow",
    "coords": [
      -0.3531364,
      51.5795991
    ]
  },
  {
    "name": "Eastcote",
    "coords": [
      -0.3965092,
      51.5766614
    ]
  },
  {
    "name": "Ickenham",
    "coords": [
      -0.4423513,
      51.5615698
    ]
  },
  {
    "name": "Pinner",
    "coords": [
      -0.380635,
      51.5926589
    ]
  },
  {
    "name": "Northwood Hills",
    "coords": [
      -0.4084575,
      51.6001534
    ]
  },
  {
    "name": "Northwood",
    "coords": [
      -0.4237072,
      51.6107965
    ]
  },
  {
    "name": "Croxley",
    "coords": [
      -0.4410785,
      51.6475825
    ]
  },
  {
    "name": "Watford",
    "coords": [
      -0.4183683,
      51.6570048
    ]
  },
  {
    "name": "Leytonstone",
    "coords": [
      0.0086166,
      51.5688027
    ]
  },
  {
    "name": "Harrow-on-the-Hill",
    "coords": [
      -0.3366561,
      51.5792702
    ]
  },
  {
    "name": "Acton Town",
    "coords": [
      -0.2799643,
      51.5027051
    ]
  },
  {
    "name": "South Kensington",
    "coords": [
      -0.1730439,
      51.4940494
    ]
  },
  {
    "name": "Derbyshire Dales Narrow Gauge Railway",
    "coords": [
      -1.610193,
      53.1758282
    ]
  },
  {
    "name": "Edgware Road (Bakerloo line)",
    "coords": [
      -0.1702993,
      51.5204575
    ]
  },
  {
    "name": "Marylebone",
    "coords": [
      -0.1635046,
      51.5222363
    ]
  },
  {
    "name": "Embankment",
    "coords": [
      -0.1222409,
      51.5072143
    ]
  },
  {
    "name": "Notting Hill Gate",
    "coords": [
      -0.1961978,
      51.5089252
    ]
  },
  {
    "name": "Dilton Marsh",
    "coords": [
      -2.2078188,
      51.2488801
    ]
  },
  {
    "name": "Caterham",
    "coords": [
      -0.0783882,
      51.2822065
    ]
  },
  {
    "name": "Brunstane",
    "coords": [
      -3.1008498,
      55.9420651
    ]
  },
  {
    "name": "West Ham",
    "coords": [
      0.0045685,
      51.5280966
    ]
  },
  {
    "name": "Stratford",
    "coords": [
      -0.0035472,
      51.541289
    ]
  },
  {
    "name": "Kenley",
    "coords": [
      -0.100844,
      51.3247757
    ]
  },
  {
    "name": "Purley",
    "coords": [
      -0.1139278,
      51.3374869
    ]
  },
  {
    "name": "Whyteleafe South",
    "coords": [
      -0.0772314,
      51.3037508
    ]
  },
  {
    "name": "Whyteleafe",
    "coords": [
      -0.0810163,
      51.3099209
    ]
  },
  {
    "name": "Upper Warlingham",
    "coords": [
      -0.0778344,
      51.3085512
    ]
  },
  {
    "name": "Woldingham",
    "coords": [
      -0.0516667,
      51.2896975
    ]
  },
  {
    "name": "Truthall Halt",
    "coords": [
      -5.2841108,
      50.1211053
    ]
  },
  {
    "name": "Prospidnick Halt",
    "coords": [
      -5.296425,
      50.1321831
    ]
  },
  {
    "name": "Trevarno",
    "coords": [
      -5.2928074,
      50.1278773
    ]
  },
  {
    "name": "Langley",
    "coords": [
      -0.5409049,
      51.507818
    ]
  },
  {
    "name": "Mudchute",
    "coords": [
      -0.0149135,
      51.4915188
    ]
  },
  {
    "name": "South Milford",
    "coords": [
      -1.2511292,
      53.7823824
    ]
  },
  {
    "name": "Mobberley",
    "coords": [
      -2.3336005,
      53.3295673
    ]
  },
  {
    "name": "Widnes",
    "coords": [
      -2.7341997,
      53.3786146
    ]
  },
  {
    "name": "Rochdale",
    "coords": [
      -2.1528351,
      53.6105726
    ]
  },
  {
    "name": "Southwark",
    "coords": [
      -0.1049663,
      51.503925
    ]
  },
  {
    "name": "Edinburgh Gateway",
    "coords": [
      -3.3201335,
      55.9409388
    ]
  },
  {
    "name": "Edgware",
    "coords": [
      -0.2749555,
      51.6136623
    ]
  },
  {
    "name": "Stockport",
    "coords": [
      -2.1630435,
      53.4054501
    ]
  },
  {
    "name": "Wakefield Kirkgate",
    "coords": [
      -1.4886398,
      53.6786558
    ]
  },
  {
    "name": "Kentish Town",
    "coords": [
      -0.1388654,
      51.5501727
    ]
  },
  {
    "name": "Discovery Station",
    "coords": [
      -1.5432771,
      52.7409495
    ]
  },
  {
    "name": "Guide Bridge",
    "coords": [
      -2.1135802,
      53.4745495
    ]
  },
  {
    "name": "Newton for Hyde",
    "coords": [
      -2.067531,
      53.4567001
    ]
  },
  {
    "name": "New Pudsey",
    "coords": [
      -1.6805365,
      53.8046713
    ]
  },
  {
    "name": "Pontefract Baghill",
    "coords": [
      -1.3034033,
      53.6917363
    ]
  },
  {
    "name": "Broadway",
    "coords": [
      -1.8720529,
      52.043006
    ]
  },
  {
    "name": "James Cook",
    "coords": [
      -1.2085253,
      54.5519996
    ]
  },
  {
    "name": "Miteside Halt",
    "coords": [
      -3.3840418,
      54.3711279
    ]
  },
  {
    "name": "Lostock",
    "coords": [
      -2.494764,
      53.5727921
    ]
  },
  {
    "name": "Adlington",
    "coords": [
      -2.6028597,
      53.6130719
    ]
  },
  {
    "name": "Lakeside",
    "coords": [
      -2.9554994,
      54.2777237
    ]
  },
  {
    "name": "Burneside",
    "coords": [
      -2.767351,
      54.3555182
    ]
  },
  {
    "name": "Hope",
    "coords": [
      -1.7296279,
      53.3459832
    ]
  },
  {
    "name": "Goose Glen Halt",
    "coords": [
      -3.6624367,
      50.5556975
    ]
  },
  {
    "name": "Kents Bank",
    "coords": [
      -2.9252051,
      54.1728754
    ]
  },
  {
    "name": "Burlescombe",
    "coords": [
      -1.2459129,
      51.6174907
    ]
  },
  {
    "name": "Ulverston",
    "coords": [
      -3.0979329,
      54.1917155
    ]
  },
  {
    "name": "Warwick Avenue",
    "coords": [
      -0.1833083,
      51.5229834
    ]
  },
  {
    "name": "Brampton",
    "coords": [
      -2.7038502,
      54.9321536
    ]
  },
  {
    "name": "Tottenham Court Road",
    "coords": [
      -0.1305125,
      51.5159715
    ]
  },
  {
    "name": "Canary Wharf (DLR)",
    "coords": [
      -0.0209849,
      51.5051073
    ]
  },
  {
    "name": "Greenwich",
    "coords": [
      -0.0154152,
      51.4781086
    ]
  },
  {
    "name": "West India Quay",
    "coords": [
      -0.0204833,
      51.5067417
    ]
  },
  {
    "name": "All Saints",
    "coords": [
      -0.0130782,
      51.5108392
    ]
  },
  {
    "name": "Abbey Road",
    "coords": [
      0.0036092,
      51.5325414
    ]
  },
  {
    "name": "Stratford High Street",
    "coords": [
      -0.0001288,
      51.5376469
    ]
  },
  {
    "name": "Bow Church",
    "coords": [
      -0.0206424,
      51.5274411
    ]
  },
  {
    "name": "Limehouse DLR",
    "coords": [
      -0.0394662,
      51.5123504
    ]
  },
  {
    "name": "Limehouse",
    "coords": [
      -0.0390456,
      51.5128705
    ]
  },
  {
    "name": "Bounds Green",
    "coords": [
      -0.1249047,
      51.607376
    ]
  },
  {
    "name": "Hammersmith (Circle and Hammersmith & City lines)",
    "coords": [
      -0.2250607,
      51.494109
    ]
  },
  {
    "name": "St. Paul's",
    "coords": [
      -0.0987321,
      51.5154195
    ]
  },
  {
    "name": "Knockholt",
    "coords": [
      0.1308295,
      51.3457689
    ]
  },
  {
    "name": "Hampstead",
    "coords": [
      -0.1784251,
      51.5565973
    ]
  },
  {
    "name": "Belsize Park",
    "coords": [
      -0.1646146,
      51.5503088
    ]
  },
  {
    "name": "Holloway Road",
    "coords": [
      -0.1130095,
      51.5528674
    ]
  },
  {
    "name": "Stratford International DLR",
    "coords": [
      -0.009359,
      51.5457077
    ]
  },
  {
    "name": "Swiss Cottage",
    "coords": [
      -0.174982,
      51.543722
    ]
  },
  {
    "name": "Park Royal",
    "coords": [
      -0.2839348,
      51.5264341
    ]
  },
  {
    "name": "Chichester",
    "coords": [
      -0.781845,
      50.8318805
    ]
  },
  {
    "name": "Wood Lane",
    "coords": [
      -0.2237557,
      51.5101068
    ]
  },
  {
    "name": "Turnpike Lane",
    "coords": [
      -0.1027442,
      51.5901482
    ]
  },
  {
    "name": "Acklington",
    "coords": [
      -1.6517687,
      55.3072171
    ]
  },
  {
    "name": "Ancaster",
    "coords": [
      -0.5353535,
      52.987708
    ]
  },
  {
    "name": "Apsley",
    "coords": [
      -0.4629888,
      51.732365
    ]
  },
  {
    "name": "Ashchurch for Tewkesbury",
    "coords": [
      -2.1087299,
      51.9990255
    ]
  },
  {
    "name": "Hadley Wood",
    "coords": [
      -0.1761376,
      51.6686291
    ]
  },
  {
    "name": "Micklefield",
    "coords": [
      -1.3261163,
      53.7887921
    ]
  },
  {
    "name": "Welham Green",
    "coords": [
      -0.2105454,
      51.736419
    ]
  },
  {
    "name": "Derry~Londonderry Train Station",
    "coords": [
      -7.3127401,
      54.9930177
    ]
  },
  {
    "name": "Thirsk",
    "coords": [
      -1.3732622,
      54.2286468
    ]
  },
  {
    "name": "Shiplake",
    "coords": [
      -0.8824136,
      51.5111653
    ]
  },
  {
    "name": "Twyford",
    "coords": [
      -0.8631386,
      51.47539
    ]
  },
  {
    "name": "Cholsey",
    "coords": [
      -1.1586983,
      51.5704082
    ]
  },
  {
    "name": "Mitcham Eastfields",
    "coords": [
      -0.154872,
      51.4073954
    ]
  },
  {
    "name": "Slaggyford",
    "coords": [
      -2.5064919,
      54.8653223
    ]
  },
  {
    "name": "Kirkhaugh",
    "coords": [
      -2.4746432,
      54.8398986
    ]
  },
  {
    "name": "Morden",
    "coords": [
      -0.1947552,
      51.4027615
    ]
  },
  {
    "name": "Morden South",
    "coords": [
      -0.1992399,
      51.395678
    ]
  },
  {
    "name": "Blackheath",
    "coords": [
      0.0089218,
      51.4657989
    ]
  },
  {
    "name": "Deptford",
    "coords": [
      -0.0266353,
      51.4789824
    ]
  },
  {
    "name": "Canning Town",
    "coords": [
      0.0082987,
      51.5139887
    ]
  },
  {
    "name": "Ealing Broadway",
    "coords": [
      -0.3004067,
      51.5149803
    ]
  },
  {
    "name": "Russell Square",
    "coords": [
      -0.1242529,
      51.5230529
    ]
  },
  {
    "name": "Caledonian Road",
    "coords": [
      -0.1183585,
      51.548482
    ]
  },
  {
    "name": "Totteridge & Whetstone",
    "coords": [
      -0.1791837,
      51.6307163
    ]
  },
  {
    "name": "Chalk Farm",
    "coords": [
      -0.1534811,
      51.5441141
    ]
  },
  {
    "name": "Melton Mowbray",
    "coords": [
      -0.8857875,
      52.7610228
    ]
  },
  {
    "name": "Whitwell",
    "coords": [
      -1.2002363,
      53.2799663
    ]
  },
  {
    "name": "Hathersage",
    "coords": [
      -1.6521354,
      53.3259212
    ]
  },
  {
    "name": "Balcombe",
    "coords": [
      -0.137032,
      51.0555957
    ]
  },
  {
    "name": "Oxford Circus",
    "coords": [
      -0.1410118,
      51.5151808
    ]
  },
  {
    "name": "Westonzoyland",
    "coords": [
      -2.943542,
      51.0909357
    ]
  },
  {
    "name": "Heatherslaw Railway Station",
    "coords": [
      -2.1067584,
      55.6391023
    ]
  },
  {
    "name": "North Station",
    "coords": [
      -1.4540783,
      50.8238061
    ]
  },
  {
    "name": "Brogdale Central Station",
    "coords": [
      0.8770041,
      51.2998497
    ]
  },
  {
    "name": "Hexham",
    "coords": [
      -2.0947934,
      54.9735335
    ]
  },
  {
    "name": "North Greenwich",
    "coords": [
      0.0043201,
      51.500574
    ]
  },
  {
    "name": "Canada Water",
    "coords": [
      -0.0498405,
      51.4979299
    ]
  },
  {
    "name": "Maghull North",
    "coords": [
      -2.9212339,
      53.5167407
    ]
  },
  {
    "name": "Moorgate",
    "coords": [
      -0.0890625,
      51.5182516
    ]
  },
  {
    "name": "Kintore",
    "coords": [
      -2.3502092,
      57.2433565
    ]
  },
  {
    "name": "Cultra",
    "coords": [
      -5.8042082,
      54.6561663
    ]
  },
  {
    "name": "Long Buckby",
    "coords": [
      -1.0860534,
      52.2944171
    ]
  },
  {
    "name": "Clapham Junction",
    "coords": [
      -0.1705184,
      51.4644589
    ]
  },
  {
    "name": "York",
    "coords": [
      -1.0937301,
      53.9577037
    ]
  },
  {
    "name": "Reeds Road",
    "coords": [
      -0.77289,
      51.1822944
    ]
  },
  {
    "name": "Old Kiln Halt",
    "coords": [
      -0.7746116,
      51.1836582
    ]
  },
  {
    "name": "Oatlands",
    "coords": [
      -0.7739411,
      51.1843885
    ]
  },
  {
    "name": "London Marylebone",
    "coords": [
      -0.1634083,
      51.52427
    ]
  },
  {
    "name": "Main Line Platform",
    "coords": [
      -1.2419808,
      51.6118363
    ]
  },
  {
    "name": "Didcot Halt",
    "coords": [
      -1.2458686,
      51.6143946
    ]
  },
  {
    "name": "Kidderminster",
    "coords": [
      -2.2384792,
      52.3843587
    ]
  },
  {
    "name": "Sheffield",
    "coords": [
      -1.4621381,
      53.3783713
    ]
  },
  {
    "name": "Crystal Palace",
    "coords": [
      -0.0712666,
      51.4176595
    ]
  },
  {
    "name": "Walls Lane",
    "coords": [
      0.335097,
      53.178399
    ]
  },
  {
    "name": "North Road",
    "coords": [
      -1.5539294,
      54.5357302
    ]
  },
  {
    "name": "Bookham",
    "coords": [
      -0.3838753,
      51.2888353
    ]
  },
  {
    "name": "Hook",
    "coords": [
      -0.9614163,
      51.2798793
    ]
  },
  {
    "name": "Winchfield",
    "coords": [
      -0.9070163,
      51.2847339
    ]
  },
  {
    "name": "Fleet",
    "coords": [
      -0.8313789,
      51.2906158
    ]
  },
  {
    "name": "Brookwood",
    "coords": [
      -0.6359925,
      51.3035819
    ]
  },
  {
    "name": "Hersham",
    "coords": [
      -0.3895797,
      51.3769063
    ]
  },
  {
    "name": "Raynes Park",
    "coords": [
      -0.23054,
      51.408966
    ]
  },
  {
    "name": "Worcester Park",
    "coords": [
      -0.244985,
      51.3814192
    ]
  },
  {
    "name": "Stoneleigh",
    "coords": [
      -0.2479641,
      51.3638988
    ]
  },
  {
    "name": "Leatherhead",
    "coords": [
      -0.3330413,
      51.2991137
    ]
  },
  {
    "name": "Horsley",
    "coords": [
      -0.4352969,
      51.2795154
    ]
  },
  {
    "name": "Clandon",
    "coords": [
      -0.5028629,
      51.2640346
    ]
  },
  {
    "name": "London Road (Guildford)",
    "coords": [
      -0.565161,
      51.2407385
    ]
  },
  {
    "name": "Guildford",
    "coords": [
      -0.5811391,
      51.2372003
    ]
  },
  {
    "name": "Carshalton",
    "coords": [
      -0.1663814,
      51.3685771
    ]
  },
  {
    "name": "Ewell East",
    "coords": [
      -0.2412882,
      51.3452926
    ]
  },
  {
    "name": "Holmwood",
    "coords": [
      -0.320874,
      51.1811282
    ]
  },
  {
    "name": "Ockley",
    "coords": [
      -0.3361686,
      51.1515691
    ]
  },
  {
    "name": "Warnham",
    "coords": [
      -0.3296073,
      51.0930387
    ]
  },
  {
    "name": "Horsham",
    "coords": [
      -0.318921,
      51.0659838
    ]
  },
  {
    "name": "Arundel",
    "coords": [
      -0.5462656,
      50.8480121
    ]
  },
  {
    "name": "Amberley",
    "coords": [
      -0.5419326,
      50.8966534
    ]
  },
  {
    "name": "Pulborough",
    "coords": [
      -0.5164713,
      50.9575905
    ]
  },
  {
    "name": "Christ's Hospital",
    "coords": [
      -0.3638616,
      51.0508094
    ]
  },
  {
    "name": "Ford",
    "coords": [
      -0.578301,
      50.8293642
    ]
  },
  {
    "name": "Barnham",
    "coords": [
      -0.6402044,
      50.8307449
    ]
  },
  {
    "name": "Three Bridges",
    "coords": [
      -0.1610653,
      51.1174709
    ]
  },
  {
    "name": "Crawley",
    "coords": [
      -0.1865249,
      51.1120247
    ]
  },
  {
    "name": "Sydenham",
    "coords": [
      -0.0542215,
      51.427742
    ]
  },
  {
    "name": "Forest Hill",
    "coords": [
      -0.0530903,
      51.4392419
    ]
  },
  {
    "name": "Honor Oak Park",
    "coords": [
      -0.0450199,
      51.4504605
    ]
  },
  {
    "name": "New Cross Gate",
    "coords": [
      -0.0404289,
      51.4752983
    ]
  },
  {
    "name": "New Cross",
    "coords": [
      -0.0326237,
      51.4763706
    ]
  },
  {
    "name": "St Johns",
    "coords": [
      -0.0221846,
      51.4690905
    ]
  },
  {
    "name": "Westcombe Park",
    "coords": [
      0.0186204,
      51.4842403
    ]
  },
  {
    "name": "Woolwich Dockyard",
    "coords": [
      0.0548824,
      51.4910924
    ]
  },
  {
    "name": "Woolwich Arsenal",
    "coords": [
      0.0703782,
      51.4896184
    ]
  },
  {
    "name": "Plumstead",
    "coords": [
      0.0840176,
      51.4897681
    ]
  },
  {
    "name": "Abbey Wood",
    "coords": [
      0.1202208,
      51.4909519
    ]
  },
  {
    "name": "Slade Green",
    "coords": [
      0.1903098,
      51.4676731
    ]
  },
  {
    "name": "Dartford",
    "coords": [
      0.2191164,
      51.4474203
    ]
  },
  {
    "name": "Derby",
    "coords": [
      -1.462612,
      52.9165243
    ]
  },
  {
    "name": "Grove Park",
    "coords": [
      0.0220245,
      51.4307645
    ]
  },
  {
    "name": "Hither Green",
    "coords": [
      -0.0006473,
      51.4515872
    ]
  },
  {
    "name": "Elmstead Woods",
    "coords": [
      0.0446574,
      51.4167981
    ]
  },
  {
    "name": "Chislehurst",
    "coords": [
      0.0578673,
      51.4051626
    ]
  },
  {
    "name": "Petts Wood",
    "coords": [
      0.0745614,
      51.388626
    ]
  },
  {
    "name": "Chelsfield",
    "coords": [
      0.1083284,
      51.3566115
    ]
  },
  {
    "name": "Dunton Green",
    "coords": [
      0.171318,
      51.296617
    ]
  },
  {
    "name": "Uckfield",
    "coords": [
      0.0966299,
      50.9687382
    ]
  },
  {
    "name": "Eridge",
    "coords": [
      0.2009551,
      51.0892394
    ]
  },
  {
    "name": "Hurst Green",
    "coords": [
      0.0042319,
      51.2442817
    ]
  },
  {
    "name": "Edenbridge Town",
    "coords": [
      0.067215,
      51.2001369
    ]
  },
  {
    "name": "Hever",
    "coords": [
      0.0948105,
      51.1813846
    ]
  },
  {
    "name": "Cowden",
    "coords": [
      0.1098981,
      51.1556295
    ]
  },
  {
    "name": "Crowborough",
    "coords": [
      0.1880389,
      51.0462372
    ]
  },
  {
    "name": "Buxted",
    "coords": [
      0.1313783,
      50.9901183
    ]
  },
  {
    "name": "Oxted",
    "coords": [
      -0.0045745,
      51.2578327
    ]
  },
  {
    "name": "Norwood Junction",
    "coords": [
      -0.0746988,
      51.3971695
    ]
  },
  {
    "name": "Dormans",
    "coords": [
      -0.0042265,
      51.1558675
    ]
  },
  {
    "name": "East Grinstead",
    "coords": [
      -0.0178578,
      51.1264031
    ]
  },
  {
    "name": "South Croydon",
    "coords": [
      -0.0933556,
      51.3629173
    ]
  },
  {
    "name": "Sanderstead",
    "coords": [
      -0.0934589,
      51.348394
    ]
  },
  {
    "name": "Riddlesdown",
    "coords": [
      -0.0997037,
      51.3329352
    ]
  },
  {
    "name": "Ladywell",
    "coords": [
      -0.0191917,
      51.4560257
    ]
  },
  {
    "name": "Catford Bridge",
    "coords": [
      -0.0249226,
      51.4445909
    ]
  },
  {
    "name": "Lower Sydenham",
    "coords": [
      -0.0332998,
      51.4247446
    ]
  },
  {
    "name": "New Beckenham",
    "coords": [
      -0.0352069,
      51.4169395
    ]
  },
  {
    "name": "Clock House",
    "coords": [
      -0.0403022,
      51.4087604
    ]
  },
  {
    "name": "West Wickham",
    "coords": [
      -0.0144819,
      51.3813785
    ]
  },
  {
    "name": "Eden Park",
    "coords": [
      -0.0263691,
      51.3901801
    ]
  },
  {
    "name": "Elmers End",
    "coords": [
      -0.0497025,
      51.398012
    ]
  },
  {
    "name": "Chepstow",
    "coords": [
      -2.6710867,
      51.6399688
    ]
  },
  {
    "name": "Main Terminal Building (Departures)",
    "coords": [
      0.2601274,
      51.8902434
    ]
  },
  {
    "name": "Terminal C",
    "coords": [
      0.2541483,
      51.8892206
    ]
  },
  {
    "name": "Terminal B",
    "coords": [
      0.2569959,
      51.8911228
    ]
  },
  {
    "name": "Aston",
    "coords": [
      -1.8720459,
      52.5044169
    ]
  },
  {
    "name": "Darley Dale",
    "coords": [
      -1.594606,
      53.1606459
    ]
  },
  {
    "name": "Aldershot",
    "coords": [
      -0.7599088,
      51.2462832
    ]
  },
  {
    "name": "Ash Vale",
    "coords": [
      -0.7214571,
      51.2725337
    ]
  },
  {
    "name": "Camberley",
    "coords": [
      -0.7438865,
      51.3363364
    ]
  },
  {
    "name": "Bagshot",
    "coords": [
      -0.6885039,
      51.3643336
    ]
  },
  {
    "name": "Percy Main",
    "coords": [
      -1.4780506,
      54.9977941
    ]
  },
  {
    "name": "Newton-le-Willows",
    "coords": [
      -2.6128853,
      53.4531451
    ]
  },
  {
    "name": "Earlestown",
    "coords": [
      -2.6376153,
      53.4512184
    ]
  },
  {
    "name": "Runcorn",
    "coords": [
      -2.7393871,
      53.3385599
    ]
  },
  {
    "name": "Crewe",
    "coords": [
      -2.4326364,
      53.0889629
    ]
  },
  {
    "name": "Portsmouth Harbour",
    "coords": [
      -1.1087807,
      50.7967035
    ]
  },
  {
    "name": "Milford",
    "coords": [
      -0.6368939,
      51.163179
    ]
  },
  {
    "name": "Witley",
    "coords": [
      -0.6459792,
      51.1331013
    ]
  },
  {
    "name": "Haslemere",
    "coords": [
      -0.7194871,
      51.0887757
    ]
  },
  {
    "name": "Liphook",
    "coords": [
      -0.8001257,
      51.0712216
    ]
  },
  {
    "name": "Liss",
    "coords": [
      -0.8926226,
      51.0439274
    ]
  },
  {
    "name": "Worplesdon",
    "coords": [
      -0.5824209,
      51.2878849
    ]
  },
  {
    "name": "Petersfield",
    "coords": [
      -0.9417209,
      51.0065237
    ]
  },
  {
    "name": "Rowlands Castle",
    "coords": [
      -0.9572878,
      50.8924725
    ]
  },
  {
    "name": "Bedhampton",
    "coords": [
      -0.9962717,
      50.8539846
    ]
  },
  {
    "name": "Havant",
    "coords": [
      -0.9815624,
      50.8544413
    ]
  },
  {
    "name": "Portsmouth and Southsea",
    "coords": [
      -1.0906787,
      50.7982014
    ]
  },
  {
    "name": "Tisbury",
    "coords": [
      -2.0787884,
      51.061005
    ]
  },
  {
    "name": "Andover",
    "coords": [
      -1.4927767,
      51.211559
    ]
  },
  {
    "name": "Templecombe",
    "coords": [
      -2.4172852,
      51.001594
    ]
  },
  {
    "name": "Salisbury",
    "coords": [
      -1.8064141,
      51.0705706
    ]
  },
  {
    "name": "Gillingham",
    "coords": [
      -2.2720765,
      51.0340876
    ]
  },
  {
    "name": "East Garforth",
    "coords": [
      -1.3715945,
      53.7922376
    ]
  },
  {
    "name": "Selby",
    "coords": [
      -1.0634228,
      53.7829146
    ]
  },
  {
    "name": "Wressle",
    "coords": [
      -0.9236723,
      53.7728263
    ]
  },
  {
    "name": "Howden",
    "coords": [
      -0.8606411,
      53.7647567
    ]
  },
  {
    "name": "Broomfleet",
    "coords": [
      -0.6730092,
      53.7403673
    ]
  },
  {
    "name": "Ferriby",
    "coords": [
      -0.5077294,
      53.7170509
    ]
  },
  {
    "name": "Hessle",
    "coords": [
      -0.4421011,
      53.7173688
    ]
  },
  {
    "name": "Cross Gates",
    "coords": [
      -1.450353,
      53.8050605
    ]
  },
  {
    "name": "Eastrington",
    "coords": [
      -0.7870775,
      53.755235
    ]
  },
  {
    "name": "Hull Paragon Interchange",
    "coords": [
      -0.3475977,
      53.7438351
    ]
  },
  {
    "name": "Stalybridge",
    "coords": [
      -2.0642227,
      53.4841386
    ]
  },
  {
    "name": "Slaithwaite",
    "coords": [
      -1.8806027,
      53.6241585
    ]
  },
  {
    "name": "Huddersfield",
    "coords": [
      -1.7847509,
      53.64849
    ]
  },
  {
    "name": "Dewsbury",
    "coords": [
      -1.6332735,
      53.692016
    ]
  },
  {
    "name": "Batley",
    "coords": [
      -1.6230114,
      53.7102081
    ]
  },
  {
    "name": "Exeter St Davids",
    "coords": [
      -3.5435703,
      50.7292155
    ]
  },
  {
    "name": "Exeter Central",
    "coords": [
      -3.5321297,
      50.7270161
    ]
  },
  {
    "name": "Pinhoe",
    "coords": [
      -3.4700849,
      50.7377934
    ]
  },
  {
    "name": "Cranbrook",
    "coords": [
      -3.4209803,
      50.7500196
    ]
  },
  {
    "name": "Whimple",
    "coords": [
      -3.3542794,
      50.7679282
    ]
  },
  {
    "name": "Feniton",
    "coords": [
      -3.285205,
      50.7865525
    ]
  },
  {
    "name": "Honiton",
    "coords": [
      -3.1868994,
      50.7967239
    ]
  },
  {
    "name": "Axminster",
    "coords": [
      -3.0049453,
      50.7790074
    ]
  },
  {
    "name": "Sherborne",
    "coords": [
      -2.5129696,
      50.943979
    ]
  },
  {
    "name": "Yeovil Junction",
    "coords": [
      -2.6122447,
      50.9248143
    ]
  },
  {
    "name": "Crewkerne",
    "coords": [
      -2.7784344,
      50.8735853
    ]
  },
  {
    "name": "Sunningdale",
    "coords": [
      -0.6332427,
      51.3921459
    ]
  },
  {
    "name": "Winnersh Triangle",
    "coords": [
      -0.8918298,
      51.4367674
    ]
  },
  {
    "name": "Winnersh",
    "coords": [
      -0.8779199,
      51.4307527
    ]
  },
  {
    "name": "Egham",
    "coords": [
      -0.5465778,
      51.4294065
    ]
  },
  {
    "name": "Staines",
    "coords": [
      -0.5029086,
      51.432328
    ]
  },
  {
    "name": "Twickenham",
    "coords": [
      -0.3288402,
      51.4505786
    ]
  },
  {
    "name": "Datchet",
    "coords": [
      -0.5793863,
      51.4828971
    ]
  },
  {
    "name": "Sunnymeads",
    "coords": [
      -0.558857,
      51.4699493
    ]
  },
  {
    "name": "Wraysbury",
    "coords": [
      -0.541994,
      51.4579278
    ]
  },
  {
    "name": "Whitton",
    "coords": [
      -0.3577822,
      51.4494981
    ]
  },
  {
    "name": "Barnes Bridge",
    "coords": [
      -0.2526332,
      51.4720123
    ]
  },
  {
    "name": "Chiswick",
    "coords": [
      -0.2681753,
      51.4811465
    ]
  },
  {
    "name": "Kew Bridge",
    "coords": [
      -0.287225,
      51.4895024
    ]
  },
  {
    "name": "Brentford",
    "coords": [
      -0.3096825,
      51.4876569
    ]
  },
  {
    "name": "Syon Lane",
    "coords": [
      -0.32478,
      51.4818147
    ]
  },
  {
    "name": "Isleworth",
    "coords": [
      -0.3368946,
      51.4748823
    ]
  },
  {
    "name": "Hounslow",
    "coords": [
      -0.3617294,
      51.4620974
    ]
  },
  {
    "name": "Chertsey",
    "coords": [
      -0.5094641,
      51.3871309
    ]
  },
  {
    "name": "Addlestone",
    "coords": [
      -0.4845082,
      51.3731128
    ]
  },
  {
    "name": "Norbiton",
    "coords": [
      -0.2840976,
      51.4123032
    ]
  },
  {
    "name": "Teddington",
    "coords": [
      -0.3325731,
      51.4244662
    ]
  },
  {
    "name": "Narberth",
    "coords": [
      -4.7270443,
      51.7994674
    ]
  },
  {
    "name": "Dawlish",
    "coords": [
      -3.4644482,
      50.5806101
    ]
  },
  {
    "name": "Fareham",
    "coords": [
      -1.1923427,
      50.8534057
    ]
  },
  {
    "name": "St Denys",
    "coords": [
      -1.3878591,
      50.9222702
    ]
  },
  {
    "name": "Millbrook",
    "coords": [
      -1.4336981,
      50.9114285
    ]
  },
  {
    "name": "Brockenhurst",
    "coords": [
      -1.5734094,
      50.816746
    ]
  },
  {
    "name": "Burgess Hill",
    "coords": [
      -0.1274304,
      50.9536081
    ]
  },
  {
    "name": "Askam",
    "coords": [
      -3.2045609,
      54.1891252
    ]
  },
  {
    "name": "Green Road",
    "coords": [
      -3.2453885,
      54.2444234
    ]
  },
  {
    "name": "Millom",
    "coords": [
      -3.2706093,
      54.2110036
    ]
  },
  {
    "name": "Bootle",
    "coords": [
      -3.3938356,
      54.2911815
    ]
  },
  {
    "name": "Sellafield",
    "coords": [
      -3.5104538,
      54.4166451
    ]
  },
  {
    "name": "Drigg",
    "coords": [
      -3.4435811,
      54.3768581
    ]
  },
  {
    "name": "Braystones",
    "coords": [
      -3.5419705,
      54.4395084
    ]
  },
  {
    "name": "Nairn",
    "coords": [
      -3.8718304,
      57.5802452
    ]
  },
  {
    "name": "Titley Junction",
    "coords": [
      -2.9854823,
      52.2172391
    ]
  },
  {
    "name": "Lichfield Trent Valley",
    "coords": [
      -1.8001308,
      52.6869627
    ]
  },
  {
    "name": "Kenilworth",
    "coords": [
      -1.5724185,
      52.3428168
    ]
  },
  {
    "name": "Southend Airport",
    "coords": [
      0.7052992,
      51.569686
    ]
  },
  {
    "name": "Minster",
    "coords": [
      1.3171057,
      51.3291668
    ]
  },
  {
    "name": "Westgate-on-Sea",
    "coords": [
      1.3382306,
      51.3812842
    ]
  },
  {
    "name": "Blackpool North",
    "coords": [
      -3.048373,
      53.8229372
    ]
  },
  {
    "name": "Hackbridge",
    "coords": [
      -0.1537197,
      51.3780278
    ]
  },
  {
    "name": "Kensington (Olympia)",
    "coords": [
      -0.2094954,
      51.497437
    ]
  },
  {
    "name": "South Ruislip",
    "coords": [
      -0.3990635,
      51.5569909
    ]
  },
  {
    "name": "Pier Head",
    "coords": [
      0.7213426,
      51.5164752
    ]
  },
  {
    "name": "Glasgow Central",
    "coords": [
      -4.257852,
      55.8594071
    ]
  },
  {
    "name": "Glasgow Central Low Level",
    "coords": [
      -4.2597531,
      55.8586458
    ]
  },
  {
    "name": "Glasgow Queen Street",
    "coords": [
      -4.2511585,
      55.8628003
    ]
  },
  {
    "name": "Glasgow Queen Street Low Level",
    "coords": [
      -4.2506796,
      55.8623946
    ]
  },
  {
    "name": "Lichfield Trent Valley High Level",
    "coords": [
      -1.7997104,
      52.6865803
    ]
  },
  {
    "name": "Retford",
    "coords": [
      -0.9481044,
      53.3151982
    ]
  },
  {
    "name": "Warwick Parkway",
    "coords": [
      -1.6122733,
      52.2860143
    ]
  },
  {
    "name": "Brownhills West",
    "coords": [
      -1.9529961,
      52.66269
    ]
  },
  {
    "name": "Kings Norton",
    "coords": [
      -1.932615,
      52.4142407
    ]
  },
  {
    "name": "White Hart Lane",
    "coords": [
      -0.0707508,
      51.6045787
    ]
  },
  {
    "name": "Turkey Street",
    "coords": [
      -0.0471452,
      51.6727314
    ]
  },
  {
    "name": "Theobalds Grove",
    "coords": [
      -0.0356103,
      51.6919835
    ]
  },
  {
    "name": "Stamford Hill",
    "coords": [
      -0.0762903,
      51.5748867
    ]
  },
  {
    "name": "Stoke Newington",
    "coords": [
      -0.0727844,
      51.5651868
    ]
  },
  {
    "name": "Bruce Grove",
    "coords": [
      -0.070011,
      51.5937122
    ]
  },
  {
    "name": "Rectory Road",
    "coords": [
      -0.0686408,
      51.5591049
    ]
  },
  {
    "name": "Northumberland Park",
    "coords": [
      -0.0538985,
      51.6019134
    ]
  },
  {
    "name": "Clapton",
    "coords": [
      -0.0568709,
      51.5616555
    ]
  },
  {
    "name": "Brimsdown",
    "coords": [
      -0.0308093,
      51.6555713
    ]
  },
  {
    "name": "Enfield Lock",
    "coords": [
      -0.0286058,
      51.6706124
    ]
  },
  {
    "name": "Waltham Cross",
    "coords": [
      -0.0264841,
      51.6847637
    ]
  },
  {
    "name": "Broxbourne",
    "coords": [
      -0.0106626,
      51.7468426
    ]
  },
  {
    "name": "Roydon",
    "coords": [
      0.0355326,
      51.775456
    ]
  },
  {
    "name": "Harlow Town",
    "coords": [
      0.0950305,
      51.781287
    ]
  },
  {
    "name": "Harlow Mill",
    "coords": [
      0.1321036,
      51.7904439
    ]
  },
  {
    "name": "Sawbridgeworth",
    "coords": [
      0.16054,
      51.8146205
    ]
  },
  {
    "name": "Stansted Mountfitchet",
    "coords": [
      0.1992411,
      51.9012727
    ]
  },
  {
    "name": "Elsenham",
    "coords": [
      0.227718,
      51.9207191
    ]
  },
  {
    "name": "Newport",
    "coords": [
      0.2153128,
      51.9796918
    ]
  },
  {
    "name": "Audley End",
    "coords": [
      0.2070947,
      52.0044805
    ]
  },
  {
    "name": "Whittlesford Parkway",
    "coords": [
      0.1656879,
      52.1035456
    ]
  },
  {
    "name": "Shelford",
    "coords": [
      0.1398403,
      52.1492887
    ]
  },
  {
    "name": "Stansted Airport",
    "coords": [
      0.2621537,
      51.8892596
    ]
  },
  {
    "name": "Hertford East",
    "coords": [
      -0.0717552,
      51.799402
    ]
  },
  {
    "name": "Ware",
    "coords": [
      -0.0295377,
      51.8080948
    ]
  },
  {
    "name": "St Margarets",
    "coords": [
      0.0010843,
      51.7879595
    ]
  },
  {
    "name": "Rye House",
    "coords": [
      0.0055296,
      51.7693606
    ]
  },
  {
    "name": "Elverson Road",
    "coords": [
      -0.0162072,
      51.4685232
    ]
  },
  {
    "name": "Deptford Bridge",
    "coords": [
      -0.0223933,
      51.4741638
    ]
  },
  {
    "name": "Crossharbour",
    "coords": [
      -0.0144418,
      51.4959022
    ]
  },
  {
    "name": "South Quay",
    "coords": [
      -0.0162525,
      51.5000357
    ]
  },
  {
    "name": "King George V",
    "coords": [
      0.0623526,
      51.502006
    ]
  },
  {
    "name": "Royal Victoria",
    "coords": [
      0.0175953,
      51.5091026
    ]
  },
  {
    "name": "Custom House for ExCeL",
    "coords": [
      0.0259614,
      51.5096341
    ]
  },
  {
    "name": "Prince Regent",
    "coords": [
      0.0331521,
      51.5094778
    ]
  },
  {
    "name": "Royal Albert",
    "coords": [
      0.0458839,
      51.5083952
    ]
  },
  {
    "name": "Gallions Reach",
    "coords": [
      0.0717937,
      51.5089622
    ]
  },
  {
    "name": "Beckton",
    "coords": [
      0.061373,
      51.5143713
    ]
  },
  {
    "name": "Blackwall",
    "coords": [
      -0.0071843,
      51.5079378
    ]
  },
  {
    "name": "East India",
    "coords": [
      -0.0021873,
      51.5093835
    ]
  },
  {
    "name": "London City Airport",
    "coords": [
      0.048542,
      51.5035322
    ]
  },
  {
    "name": "West Silvertown",
    "coords": [
      0.0223323,
      51.5028811
    ]
  },
  {
    "name": "Pontoon Dock",
    "coords": [
      0.0332232,
      51.5022501
    ]
  },
  {
    "name": "North Acton",
    "coords": [
      -0.2597818,
      51.5235769
    ]
  },
  {
    "name": "Westhoughton",
    "coords": [
      -2.523221,
      53.5558849
    ]
  },
  {
    "name": "Hammersmith (District and Piccadilly lines)",
    "coords": [
      -0.2233005,
      51.4921398
    ]
  },
  {
    "name": "Mitcham Junction",
    "coords": [
      -0.1577774,
      51.392945
    ]
  },
  {
    "name": "Horwich Parkway",
    "coords": [
      -2.5397317,
      53.5779831
    ]
  },
  {
    "name": "Tower Hill",
    "coords": [
      -0.0766986,
      51.5098481
    ]
  },
  {
    "name": "Witton-le-Wear",
    "coords": [
      -1.766657,
      54.6763739
    ]
  },
  {
    "name": "Moses Gate",
    "coords": [
      -2.4015572,
      53.5562667
    ]
  },
  {
    "name": "Farnworth",
    "coords": [
      -2.3885326,
      53.5504599
    ]
  },
  {
    "name": "Bayford",
    "coords": [
      -0.0957274,
      51.7579011
    ]
  },
  {
    "name": "Cuffley",
    "coords": [
      -0.1097981,
      51.7091464
    ]
  },
  {
    "name": "Crews Hill",
    "coords": [
      -0.1072562,
      51.6847476
    ]
  },
  {
    "name": "Gordon Hill",
    "coords": [
      -0.0946375,
      51.663247
    ]
  },
  {
    "name": "Grange Park",
    "coords": [
      -0.0969391,
      51.6433292
    ]
  },
  {
    "name": "Palmers Green",
    "coords": [
      -0.1101687,
      51.6186609
    ]
  },
  {
    "name": "Hornsey",
    "coords": [
      -0.1116832,
      51.5863215
    ]
  },
  {
    "name": "Hertford North",
    "coords": [
      -0.0922384,
      51.7986797
    ]
  },
  {
    "name": "Bowes Park",
    "coords": [
      -0.1204848,
      51.6071861
    ]
  },
  {
    "name": "Colindale",
    "coords": [
      -0.2499296,
      51.5954091
    ]
  },
  {
    "name": "Golders Green",
    "coords": [
      -0.194027,
      51.5723003
    ]
  },
  {
    "name": "Ruislip",
    "coords": [
      -0.4213375,
      51.5714026
    ]
  },
  {
    "name": "Rayners Lane",
    "coords": [
      -0.3714658,
      51.5752109
    ]
  },
  {
    "name": "Neasden",
    "coords": [
      -0.250749,
      51.5543358
    ]
  },
  {
    "name": "The Valley Railway Adventure",
    "coords": [
      -1.9372088,
      52.1172969
    ]
  },
  {
    "name": "Hatton Cross",
    "coords": [
      -0.4239942,
      51.4665357
    ]
  },
  {
    "name": "Osterley",
    "coords": [
      -0.3518348,
      51.4815507
    ]
  },
  {
    "name": "Stamford Brook",
    "coords": [
      -0.2458881,
      51.4949692
    ]
  },
  {
    "name": "Turnham Green",
    "coords": [
      -0.2546948,
      51.4951314
    ]
  },
  {
    "name": "Chiswick Park",
    "coords": [
      -0.2678739,
      51.4945622
    ]
  },
  {
    "name": "Romiley",
    "coords": [
      -2.0893199,
      53.4140086
    ]
  },
  {
    "name": "Bredbury",
    "coords": [
      -2.1104918,
      53.4230377
    ]
  },
  {
    "name": "Ashburys",
    "coords": [
      -2.1952305,
      53.4718438
    ]
  },
  {
    "name": "Belle Vue",
    "coords": [
      -2.1800733,
      53.4614732
    ]
  },
  {
    "name": "Grindleford",
    "coords": [
      -1.6260289,
      53.3055623
    ]
  },
  {
    "name": "Bamford",
    "coords": [
      -1.6894024,
      53.3391287
    ]
  },
  {
    "name": "Edale",
    "coords": [
      -1.8172462,
      53.3648176
    ]
  },
  {
    "name": "New Mills Central",
    "coords": [
      -2.0055693,
      53.3648638
    ]
  },
  {
    "name": "Strines",
    "coords": [
      -2.0333062,
      53.374569
    ]
  },
  {
    "name": "Marple",
    "coords": [
      -2.0572003,
      53.4006474
    ]
  },
  {
    "name": "Mouldsworth",
    "coords": [
      -2.7322101,
      53.2318152
    ]
  },
  {
    "name": "Delamere",
    "coords": [
      -2.6665302,
      53.2288345
    ]
  },
  {
    "name": "Cuddington",
    "coords": [
      -2.5995386,
      53.2399223
    ]
  },
  {
    "name": "Greenbank",
    "coords": [
      -2.5344589,
      53.2514201
    ]
  },
  {
    "name": "Northwich",
    "coords": [
      -2.4968484,
      53.2613648
    ]
  },
  {
    "name": "Plumley",
    "coords": [
      -2.4196724,
      53.2748823
    ]
  },
  {
    "name": "Knutsford",
    "coords": [
      -2.3721765,
      53.3015965
    ]
  },
  {
    "name": "Altrincham",
    "coords": [
      -2.3470824,
      53.3876561
    ]
  },
  {
    "name": "Hale",
    "coords": [
      -2.3474975,
      53.3785218
    ]
  },
  {
    "name": "Earl's Court",
    "coords": [
      -0.193903,
      51.4916123
    ]
  },
  {
    "name": "Becontree",
    "coords": [
      0.1265241,
      51.5403111
    ]
  },
  {
    "name": "Ruislip Manor",
    "coords": [
      -0.4117997,
      51.5733973
    ]
  },
  {
    "name": "Northolt",
    "coords": [
      -0.3695247,
      51.5484582
    ]
  },
  {
    "name": "Perivale",
    "coords": [
      -0.3225887,
      51.5364952
    ]
  },
  {
    "name": "Theydon Bois",
    "coords": [
      0.1033213,
      51.6717759
    ]
  },
  {
    "name": "Loughton",
    "coords": [
      0.0553002,
      51.6412212
    ]
  },
  {
    "name": "Woodford",
    "coords": [
      0.0340272,
      51.6068063
    ]
  },
  {
    "name": "Hanger Lane",
    "coords": [
      -0.2936453,
      51.5303098
    ]
  },
  {
    "name": "Upminster Bridge",
    "coords": [
      0.2347689,
      51.5582655
    ]
  },
  {
    "name": "Hornchurch",
    "coords": [
      0.2181092,
      51.5538747
    ]
  },
  {
    "name": "Dagenham East",
    "coords": [
      0.1649496,
      51.544018
    ]
  },
  {
    "name": "Dagenham Heathway",
    "coords": [
      0.1456377,
      51.5415534
    ]
  },
  {
    "name": "Stanmore",
    "coords": [
      -0.3026271,
      51.6188526
    ]
  },
  {
    "name": "Canons Park",
    "coords": [
      -0.2947453,
      51.6080065
    ]
  },
  {
    "name": "Elm Park",
    "coords": [
      0.1974303,
      51.549579
    ]
  },
  {
    "name": "Leyton",
    "coords": [
      -0.0051322,
      51.5568183
    ]
  },
  {
    "name": "East Putney",
    "coords": [
      -0.2112429,
      51.4586138
    ]
  },
  {
    "name": "Marsden",
    "coords": [
      -1.9302115,
      53.6032403
    ]
  },
  {
    "name": "Gorton",
    "coords": [
      -2.1677485,
      53.4689321
    ]
  },
  {
    "name": "Fairfield",
    "coords": [
      -2.1449235,
      53.4713232
    ]
  },
  {
    "name": "Greenfield",
    "coords": [
      -2.0142364,
      53.5387491
    ]
  },
  {
    "name": "Temple",
    "coords": [
      -0.1143345,
      51.5109659
    ]
  },
  {
    "name": "Walthamstow Central",
    "coords": [
      -0.0199941,
      51.582893
    ]
  },
  {
    "name": "Anerley",
    "coords": [
      -0.0655796,
      51.4125891
    ]
  },
  {
    "name": "Chartley Halt",
    "coords": [
      -2.0041243,
      52.8486248
    ]
  },
  {
    "name": "Amerton Station",
    "coords": [
      -2.0104669,
      52.8478506
    ]
  },
  {
    "name": "Alperton",
    "coords": [
      -0.3000963,
      51.5408036
    ]
  },
  {
    "name": "Covent Garden",
    "coords": [
      -0.1242695,
      51.5130942
    ]
  },
  {
    "name": "St. John's Wood",
    "coords": [
      -0.1742097,
      51.5353523
    ]
  },
  {
    "name": "East Ham",
    "coords": [
      0.0526042,
      51.5394005
    ]
  },
  {
    "name": "Bromley-by-Bow",
    "coords": [
      -0.0123189,
      51.5246287
    ]
  },
  {
    "name": "Canary Wharf (Jubilee line)",
    "coords": [
      -0.0186272,
      51.5035036
    ]
  },
  {
    "name": "Kensal Green",
    "coords": [
      -0.2244449,
      51.5306063
    ]
  },
  {
    "name": "Harlesden",
    "coords": [
      -0.257833,
      51.5363567
    ]
  },
  {
    "name": "West Hampstead",
    "coords": [
      -0.1899646,
      51.5468194
    ]
  },
  {
    "name": "Bermondsey",
    "coords": [
      -0.0643453,
      51.4977004
    ]
  },
  {
    "name": "Green Park",
    "coords": [
      -0.1429113,
      51.5066192
    ]
  },
  {
    "name": "Heaton Chapel",
    "coords": [
      -2.1792895,
      53.4259927
    ]
  },
  {
    "name": "Congleton",
    "coords": [
      -2.1924594,
      53.1577982
    ]
  },
  {
    "name": "Prestbury",
    "coords": [
      -2.1453161,
      53.2931107
    ]
  },
  {
    "name": "Adlington (Cheshire)",
    "coords": [
      -2.1336443,
      53.3197238
    ]
  },
  {
    "name": "Uxbridge",
    "coords": [
      -0.4775114,
      51.546655
    ]
  },
  {
    "name": "Hillingdon",
    "coords": [
      -0.4504637,
      51.5536028
    ]
  },
  {
    "name": "Goldhawk Road",
    "coords": [
      -0.2265662,
      51.5017564
    ]
  },
  {
    "name": "Shepherd's Bush",
    "coords": [
      -0.2183251,
      51.5043576
    ]
  },
  {
    "name": "Latimer Road",
    "coords": [
      -0.2177873,
      51.5134749
    ]
  },
  {
    "name": "Kilburn Park",
    "coords": [
      -0.1943721,
      51.5350704
    ]
  },
  {
    "name": "Royal Oak",
    "coords": [
      -0.1874439,
      51.5190222
    ]
  },
  {
    "name": "Bayswater",
    "coords": [
      -0.1883854,
      51.5122764
    ]
  },
  {
    "name": "High Street Kensington",
    "coords": [
      -0.1921096,
      51.5002995
    ]
  },
  {
    "name": "Gloucester Road",
    "coords": [
      -0.1837696,
      51.4945266
    ]
  },
  {
    "name": "Marble Arch",
    "coords": [
      -0.1582531,
      51.513435
    ]
  },
  {
    "name": "Great Portland Street",
    "coords": [
      -0.1437048,
      51.5238146
    ]
  },
  {
    "name": "Warren Street",
    "coords": [
      -0.1385303,
      51.5247178
    ]
  },
  {
    "name": "Goodge Street",
    "coords": [
      -0.1343573,
      51.5205978
    ]
  },
  {
    "name": "Highbury & Islington",
    "coords": [
      -0.1036544,
      51.5463679
    ]
  },
  {
    "name": "Edge Hill",
    "coords": [
      -2.9466548,
      53.4024926
    ]
  },
  {
    "name": "Mossley Hill",
    "coords": [
      -2.914829,
      53.3785566
    ]
  },
  {
    "name": "West Allerton",
    "coords": [
      -2.9071937,
      53.3693253
    ]
  },
  {
    "name": "Halewood",
    "coords": [
      -2.830106,
      53.364495
    ]
  },
  {
    "name": "Hough Green",
    "coords": [
      -2.7752696,
      53.3725786
    ]
  },
  {
    "name": "Warrington West",
    "coords": [
      -2.6369293,
      53.3937436
    ]
  },
  {
    "name": "Sankey for Penketh",
    "coords": [
      -2.6505871,
      53.3923448
    ]
  },
  {
    "name": "Trafford Park",
    "coords": [
      -2.3116958,
      53.4547767
    ]
  },
  {
    "name": "Humphrey Park",
    "coords": [
      -2.3272609,
      53.4523337
    ]
  },
  {
    "name": "Flixton",
    "coords": [
      -2.3839554,
      53.4437085
    ]
  },
  {
    "name": "Chassen Road",
    "coords": [
      -2.3678327,
      53.4461647
    ]
  },
  {
    "name": "Urmston",
    "coords": [
      -2.3536565,
      53.4483208
    ]
  },
  {
    "name": "Irlam",
    "coords": [
      -2.4328454,
      53.4342044
    ]
  },
  {
    "name": "Birchwood",
    "coords": [
      -2.5251395,
      53.4127822
    ]
  },
  {
    "name": "Padgate",
    "coords": [
      -2.5569297,
      53.4056193
    ]
  },
  {
    "name": "Warrington Central",
    "coords": [
      -2.5924167,
      53.3919402
    ]
  },
  {
    "name": "Grantham",
    "coords": [
      -0.6430066,
      52.9065217
    ]
  },
  {
    "name": "Netherfield",
    "coords": [
      -1.0793598,
      52.9614057
    ]
  },
  {
    "name": "Ely",
    "coords": [
      0.2664989,
      52.3906885
    ]
  },
  {
    "name": "Barrow-upon-Soar",
    "coords": [
      -1.1454909,
      52.7494311
    ]
  },
  {
    "name": "Syston",
    "coords": [
      -1.0825247,
      52.6940888
    ]
  },
  {
    "name": "Rolleston",
    "coords": [
      -0.9001231,
      53.0651443
    ]
  },
  {
    "name": "Newark Castle",
    "coords": [
      -0.8131753,
      53.0802549
    ]
  },
  {
    "name": "Fiskerton",
    "coords": [
      -0.9118374,
      53.0606002
    ]
  },
  {
    "name": "Bleasby",
    "coords": [
      -0.9435609,
      53.0414796
    ]
  },
  {
    "name": "Thurgarton",
    "coords": [
      -0.9622591,
      53.0289716
    ]
  },
  {
    "name": "Lowdham",
    "coords": [
      -0.9982248,
      53.0064332
    ]
  },
  {
    "name": "Carlton",
    "coords": [
      -1.0787671,
      52.9650524
    ]
  },
  {
    "name": "Burton Joyce",
    "coords": [
      -1.0412134,
      52.9832944
    ]
  },
  {
    "name": "Attenborough",
    "coords": [
      -1.2311523,
      52.9064132
    ]
  },
  {
    "name": "Duffield",
    "coords": [
      -1.4858584,
      52.9882284
    ]
  },
  {
    "name": "Belper",
    "coords": [
      -1.4825631,
      53.0242729
    ]
  },
  {
    "name": "Whatstandwell",
    "coords": [
      -1.5042939,
      53.0834695
    ]
  },
  {
    "name": "Cromford",
    "coords": [
      -1.5490661,
      53.1129115
    ]
  },
  {
    "name": "Matlock",
    "coords": [
      -1.5585511,
      53.1381136
    ]
  },
  {
    "name": "Matlock Bath",
    "coords": [
      -1.5568716,
      53.1225529
    ]
  },
  {
    "name": "Levenshulme",
    "coords": [
      -2.1929575,
      53.4449044
    ]
  },
  {
    "name": "Handforth",
    "coords": [
      -2.2136737,
      53.346446
    ]
  },
  {
    "name": "Chelford",
    "coords": [
      -2.2804386,
      53.2704221
    ]
  },
  {
    "name": "Holmes Chapel",
    "coords": [
      -2.3511004,
      53.1992752
    ]
  },
  {
    "name": "Sandbach",
    "coords": [
      -2.3937143,
      53.1502448
    ]
  },
  {
    "name": "Drayton Park",
    "coords": [
      -0.1057696,
      51.5531063
    ]
  },
  {
    "name": "Main Terminal Building (Arrivals)",
    "coords": [
      0.2615497,
      51.8911955
    ]
  },
  {
    "name": "Willesden Green",
    "coords": [
      -0.222223,
      51.5493524
    ]
  },
  {
    "name": "Kilburn",
    "coords": [
      -0.2053385,
      51.5469889
    ]
  },
  {
    "name": "West Acton",
    "coords": [
      -0.280413,
      51.5183524
    ]
  },
  {
    "name": "Richmond",
    "coords": [
      -0.3004127,
      51.4632072
    ]
  },
  {
    "name": "Gunnersbury",
    "coords": [
      -0.2755244,
      51.4913757
    ]
  },
  {
    "name": "Stonebridge Park",
    "coords": [
      -0.2762285,
      51.5441099
    ]
  },
  {
    "name": "Willesden Junction",
    "coords": [
      -0.2435041,
      51.5321956
    ]
  },
  {
    "name": "Davenport",
    "coords": [
      -2.1521585,
      53.390734
    ]
  },
  {
    "name": "Woodsmoor",
    "coords": [
      -2.1412433,
      53.3861409
    ]
  },
  {
    "name": "Hazel Grove",
    "coords": [
      -2.1221506,
      53.3774667
    ]
  },
  {
    "name": "Disley",
    "coords": [
      -2.0426188,
      53.3582435
    ]
  },
  {
    "name": "New Mills Newtown",
    "coords": [
      -2.0082028,
      53.3594641
    ]
  },
  {
    "name": "Furness Vale",
    "coords": [
      -1.9888665,
      53.348808
    ]
  },
  {
    "name": "Chapel-en-le-Frith",
    "coords": [
      -1.9183726,
      53.3120572
    ]
  },
  {
    "name": "Dove Holes",
    "coords": [
      -1.8897118,
      53.3001375
    ]
  },
  {
    "name": "Dollis Hill",
    "coords": [
      -0.2390214,
      51.5519625
    ]
  },
  {
    "name": "Westbourne Park",
    "coords": [
      -0.2014098,
      51.5209265
    ]
  },
  {
    "name": "South Acton",
    "coords": [
      -0.2698979,
      51.4997225
    ]
  },
  {
    "name": "Kew Gardens",
    "coords": [
      -0.284962,
      51.4771341
    ]
  },
  {
    "name": "Leyland",
    "coords": [
      -2.686555,
      53.6985644
    ]
  },
  {
    "name": "Haymarket",
    "coords": [
      -3.2193738,
      55.9451838
    ]
  },
  {
    "name": "Penrith North Lakes",
    "coords": [
      -2.7586794,
      54.661886
    ]
  },
  {
    "name": "Lockerbie",
    "coords": [
      -3.3537892,
      55.1224062
    ]
  },
  {
    "name": "Barking",
    "coords": [
      0.0793235,
      51.5402677
    ]
  },
  {
    "name": "Ladbroke Grove",
    "coords": [
      -0.2111019,
      51.5172639
    ]
  },
  {
    "name": "Upney",
    "coords": [
      0.099626,
      51.538266
    ]
  },
  {
    "name": "Cessnock",
    "coords": [
      -4.2949612,
      55.8523711
    ]
  },
  {
    "name": "Queen's Park",
    "coords": [
      -0.2054958,
      51.533873
    ]
  },
  {
    "name": "Tottenham Hale",
    "coords": [
      -0.0599366,
      51.5881223
    ]
  },
  {
    "name": "Holland Park",
    "coords": [
      -0.2055243,
      51.5071908
    ]
  },
  {
    "name": "Euston Square",
    "coords": [
      -0.1355703,
      51.5256866
    ]
  },
  {
    "name": "Camden Road",
    "coords": [
      -0.1395276,
      51.5419498
    ]
  },
  {
    "name": "Meridian Water",
    "coords": [
      -0.0501962,
      51.6100345
    ]
  },
  {
    "name": "South Bermondsey",
    "coords": [
      -0.0544564,
      51.4879512
    ]
  },
  {
    "name": "Oxford",
    "coords": [
      -1.2699542,
      51.7534512
    ]
  },
  {
    "name": "Wanstead",
    "coords": [
      0.0286373,
      51.575646
    ]
  },
  {
    "name": "Queensway",
    "coords": [
      -0.1872329,
      51.5104729
    ]
  },
  {
    "name": "Cutty Sark for Maritime Greenwich",
    "coords": [
      -0.0106896,
      51.481775
    ]
  },
  {
    "name": "Witham",
    "coords": [
      0.6394272,
      51.8059244
    ]
  },
  {
    "name": "Shoeburyness",
    "coords": [
      0.7945675,
      51.531446
    ]
  },
  {
    "name": "Maryland",
    "coords": [
      0.0059223,
      51.5460532
    ]
  },
  {
    "name": "West Hampstead",
    "coords": [
      -0.1920126,
      51.5473011
    ]
  },
  {
    "name": "Tower Gateway",
    "coords": [
      -0.0739505,
      51.5106288
    ]
  },
  {
    "name": "Lewisham",
    "coords": [
      -0.0139562,
      51.4656437
    ]
  },
  {
    "name": "West Hampstead Thameslink",
    "coords": [
      -0.192322,
      51.5484242
    ]
  },
  {
    "name": "Selhurst",
    "coords": [
      -0.0886537,
      51.3922136
    ]
  },
  {
    "name": "Heathrow Terminal 5",
    "coords": [
      -0.4877251,
      51.4722216
    ]
  },
  {
    "name": "Wood Street",
    "coords": [
      -0.0016791,
      51.587041
    ]
  },
  {
    "name": "Headstone Lane",
    "coords": [
      -0.3569524,
      51.6025533
    ]
  },
  {
    "name": "Hatch End",
    "coords": [
      -0.3687836,
      51.6095781
    ]
  },
  {
    "name": "Daisy Hill",
    "coords": [
      -2.5151778,
      53.539359
    ]
  },
  {
    "name": "Moorside",
    "coords": [
      -2.3527491,
      53.5163626
    ]
  },
  {
    "name": "Walkden",
    "coords": [
      -2.395748,
      53.5197861
    ]
  },
  {
    "name": "Atherton",
    "coords": [
      -2.4778339,
      53.5290757
    ]
  },
  {
    "name": "Brockley",
    "coords": [
      -0.0375523,
      51.4646211
    ]
  },
  {
    "name": "Manor Park",
    "coords": [
      0.0450354,
      51.5521996
    ]
  },
  {
    "name": "Forest Gate",
    "coords": [
      0.0232808,
      51.549251
    ]
  },
  {
    "name": "Didcot Parkway",
    "coords": [
      -1.2425171,
      51.6112197
    ]
  },
  {
    "name": "Reading",
    "coords": [
      -0.9723236,
      51.4591971
    ]
  },
  {
    "name": "Newport",
    "coords": [
      -3.000425,
      51.5887675
    ]
  },
  {
    "name": "Cardiff Central",
    "coords": [
      -3.1797057,
      51.4755495
    ]
  },
  {
    "name": "Bristol Parkway",
    "coords": [
      -2.542979,
      51.5138815
    ]
  },
  {
    "name": "Bath Spa",
    "coords": [
      -2.3567189,
      51.3776019
    ]
  },
  {
    "name": "Theale",
    "coords": [
      -1.074364,
      51.4333628
    ]
  },
  {
    "name": "Hungerford",
    "coords": [
      -1.5114295,
      51.4147137
    ]
  },
  {
    "name": "Bedwyn",
    "coords": [
      -1.5988756,
      51.3795602
    ]
  },
  {
    "name": "St Erth",
    "coords": [
      -5.4439212,
      50.1705718
    ]
  },
  {
    "name": "Camborne",
    "coords": [
      -5.2977246,
      50.2102433
    ]
  },
  {
    "name": "Redruth",
    "coords": [
      -5.2258998,
      50.2331289
    ]
  },
  {
    "name": "St Austell",
    "coords": [
      -4.7893307,
      50.3395984
    ]
  },
  {
    "name": "Par",
    "coords": [
      -4.7046126,
      50.3557151
    ]
  },
  {
    "name": "Lostwithiel",
    "coords": [
      -4.6660608,
      50.4071311
    ]
  },
  {
    "name": "Bodmin Parkway",
    "coords": [
      -4.6627595,
      50.4460054
    ]
  },
  {
    "name": "Liskeard",
    "coords": [
      -4.4695293,
      50.4468194
    ]
  },
  {
    "name": "Totnes",
    "coords": [
      -3.6887478,
      50.4359143
    ]
  },
  {
    "name": "Newton Abbot",
    "coords": [
      -3.5992265,
      50.5301513
    ]
  },
  {
    "name": "Tiverton Parkway",
    "coords": [
      -3.3597427,
      50.9170751
    ]
  },
  {
    "name": "Frome",
    "coords": [
      -2.3099995,
      51.2274459
    ]
  },
  {
    "name": "Pewsey",
    "coords": [
      -1.7706911,
      51.3422347
    ]
  },
  {
    "name": "Westbury",
    "coords": [
      -2.1997296,
      51.2663283
    ]
  },
  {
    "name": "Reading West",
    "coords": [
      -0.9907169,
      51.4546483
    ]
  },
  {
    "name": "Thatcham",
    "coords": [
      -1.2427417,
      51.3938591
    ]
  },
  {
    "name": "Kintbury",
    "coords": [
      -1.4459175,
      51.4026136
    ]
  },
  {
    "name": "Colwall",
    "coords": [
      -2.3567991,
      52.0798427
    ]
  },
  {
    "name": "Ledbury",
    "coords": [
      -2.4256108,
      52.0452528
    ]
  },
  {
    "name": "Pershore",
    "coords": [
      -2.0723991,
      52.1307399
    ]
  },
  {
    "name": "Charlbury",
    "coords": [
      -1.4897686,
      51.8723271
    ]
  },
  {
    "name": "Great Malvern",
    "coords": [
      -2.3181313,
      52.1093038
    ]
  },
  {
    "name": "Worcester Shrub Hill",
    "coords": [
      -2.2093282,
      52.1950309
    ]
  },
  {
    "name": "Moreton-in-Marsh",
    "coords": [
      -1.7002657,
      51.9921819
    ]
  },
  {
    "name": "Evesham",
    "coords": [
      -1.9472858,
      52.0984969
    ]
  },
  {
    "name": "Honeybourne",
    "coords": [
      -1.8336821,
      52.1016406
    ]
  },
  {
    "name": "Kingham",
    "coords": [
      -1.628532,
      51.9024116
    ]
  },
  {
    "name": "Hanborough",
    "coords": [
      -1.3726319,
      51.8247081
    ]
  },
  {
    "name": "Epsom",
    "coords": [
      -0.2695495,
      51.3343527
    ]
  },
  {
    "name": "Banbury",
    "coords": [
      -1.3277563,
      52.0605712
    ]
  },
  {
    "name": "Leamington Spa",
    "coords": [
      -1.5358026,
      52.28461
    ]
  },
  {
    "name": "Winchester",
    "coords": [
      -1.3200089,
      51.0672545
    ]
  },
  {
    "name": "Southampton Airport Parkway",
    "coords": [
      -1.3629471,
      50.9506997
    ]
  },
  {
    "name": "Bournemouth",
    "coords": [
      -1.8641943,
      50.7272094
    ]
  },
  {
    "name": "Wolverhampton",
    "coords": [
      -2.120242,
      52.5879884
    ]
  },
  {
    "name": "Coleshill Parkway",
    "coords": [
      -1.7077717,
      52.5165155
    ]
  },
  {
    "name": "Oakham",
    "coords": [
      -0.7343447,
      52.6722903
    ]
  },
  {
    "name": "Willington",
    "coords": [
      -1.5641036,
      52.8533792
    ]
  },
  {
    "name": "University",
    "coords": [
      -1.9362273,
      52.4515924
    ]
  },
  {
    "name": "Gloucester",
    "coords": [
      -2.2382438,
      51.8655109
    ]
  },
  {
    "name": "Burton-on-Trent",
    "coords": [
      -1.6424988,
      52.8058728
    ]
  },
  {
    "name": "Heathrow Terminals 2 & 3",
    "coords": [
      -0.4543118,
      51.4719282
    ]
  },
  {
    "name": "Tattenham Corner",
    "coords": [
      -0.2421857,
      51.308624
    ]
  },
  {
    "name": "Ewell West",
    "coords": [
      -0.257131,
      51.3501115
    ]
  },
  {
    "name": "Middlesbrough",
    "coords": [
      -1.2345092,
      54.5791464
    ]
  },
  {
    "name": "Hartlepool",
    "coords": [
      -1.207832,
      54.6868261
    ]
  },
  {
    "name": "Manchester Airport",
    "coords": [
      -2.2720385,
      53.365183
    ]
  },
  {
    "name": "Carpenders Park",
    "coords": [
      -0.3855109,
      51.6279135
    ]
  },
  {
    "name": "Leighton Buzzard",
    "coords": [
      -0.6773449,
      51.9161989
    ]
  },
  {
    "name": "Northfield",
    "coords": [
      -1.9651246,
      52.4082951
    ]
  },
  {
    "name": "Coventry",
    "coords": [
      -1.5135474,
      52.400739
    ]
  },
  {
    "name": "Chandler's Ford",
    "coords": [
      -1.3848946,
      50.9834549
    ]
  },
  {
    "name": "Ebbsfleet International",
    "coords": [
      0.321223,
      51.4423531
    ]
  },
  {
    "name": "Preston",
    "coords": [
      -2.7071573,
      53.7552898
    ]
  },
  {
    "name": "Gillingham",
    "coords": [
      0.5498339,
      51.3865507
    ]
  },
  {
    "name": "Hartford",
    "coords": [
      -2.553519,
      53.241569
    ]
  },
  {
    "name": "Shortlands",
    "coords": [
      0.0021679,
      51.4059051
    ]
  },
  {
    "name": "Vale of Rheidol",
    "coords": [
      -4.0786681,
      52.4114736
    ]
  },
  {
    "name": "Beltring",
    "coords": [
      0.4033747,
      51.2045463
    ]
  },
  {
    "name": "Yalding",
    "coords": [
      0.4121616,
      51.2266654
    ]
  },
  {
    "name": "Wateringbury",
    "coords": [
      0.4222989,
      51.2496596
    ]
  },
  {
    "name": "East Farleigh",
    "coords": [
      0.4844783,
      51.2552513
    ]
  },
  {
    "name": "Maidstone West",
    "coords": [
      0.5157564,
      51.2703088
    ]
  },
  {
    "name": "Maidstone Barracks",
    "coords": [
      0.5141731,
      51.2770433
    ]
  },
  {
    "name": "Aylesford",
    "coords": [
      0.4657666,
      51.3015328
    ]
  },
  {
    "name": "New Hythe",
    "coords": [
      0.4551387,
      51.3128389
    ]
  },
  {
    "name": "Snodland",
    "coords": [
      0.4484399,
      51.3302228
    ]
  },
  {
    "name": "Halling",
    "coords": [
      0.4451218,
      51.3523741
    ]
  },
  {
    "name": "Cuxton",
    "coords": [
      0.461982,
      51.373911
    ]
  },
  {
    "name": "Strood",
    "coords": [
      0.5002689,
      51.3965972
    ]
  },
  {
    "name": "Dover Priory",
    "coords": [
      1.3048692,
      51.1259357
    ]
  },
  {
    "name": "Sturry",
    "coords": [
      1.1222644,
      51.300986
    ]
  },
  {
    "name": "Chartham",
    "coords": [
      1.0179051,
      51.2571747
    ]
  },
  {
    "name": "Chilham",
    "coords": [
      0.9760562,
      51.2444245
    ]
  },
  {
    "name": "Westenhanger",
    "coords": [
      1.0382037,
      51.0949221
    ]
  },
  {
    "name": "Sandling",
    "coords": [
      1.0660027,
      51.0904998
    ]
  },
  {
    "name": "Folkestone Central",
    "coords": [
      1.1683853,
      51.0828121
    ]
  },
  {
    "name": "Folkestone West",
    "coords": [
      1.1537821,
      51.0847184
    ]
  },
  {
    "name": "Paddock Wood",
    "coords": [
      0.3894941,
      51.1823581
    ]
  },
  {
    "name": "Pluckley",
    "coords": [
      0.7465822,
      51.1564849
    ]
  },
  {
    "name": "Headcorn",
    "coords": [
      0.6273669,
      51.1656292
    ]
  },
  {
    "name": "Staplehurst",
    "coords": [
      0.5504987,
      51.1715258
    ]
  },
  {
    "name": "Marden",
    "coords": [
      0.4929884,
      51.1754411
    ]
  },
  {
    "name": "Tonbridge",
    "coords": [
      0.2707171,
      51.1914337
    ]
  },
  {
    "name": "Swanley",
    "coords": [
      0.1678721,
      51.3930961
    ]
  },
  {
    "name": "Adisham",
    "coords": [
      1.1987288,
      51.2413424
    ]
  },
  {
    "name": "Bekesbourne",
    "coords": [
      1.1372301,
      51.2614031
    ]
  },
  {
    "name": "Canterbury East",
    "coords": [
      1.07582,
      51.274185
    ]
  },
  {
    "name": "Sole Street",
    "coords": [
      0.3781687,
      51.383247
    ]
  },
  {
    "name": "Meopham",
    "coords": [
      0.3566218,
      51.3864534
    ]
  },
  {
    "name": "Longfield",
    "coords": [
      0.300103,
      51.3962097
    ]
  },
  {
    "name": "West Dulwich",
    "coords": [
      -0.0908906,
      51.4402849
    ]
  },
  {
    "name": "Sydenham Hill",
    "coords": [
      -0.0801504,
      51.4326101
    ]
  },
  {
    "name": "Penge East",
    "coords": [
      -0.0541364,
      51.4193151
    ]
  },
  {
    "name": "Kent House",
    "coords": [
      -0.045213,
      51.4122745
    ]
  },
  {
    "name": "Beckenham Junction",
    "coords": [
      -0.0259866,
      51.4110623
    ]
  },
  {
    "name": "Bickley",
    "coords": [
      0.0443369,
      51.4000641
    ]
  },
  {
    "name": "Bromley South",
    "coords": [
      0.0182769,
      51.4000405
    ]
  },
  {
    "name": "Selling",
    "coords": [
      0.9411453,
      51.2772848
    ]
  },
  {
    "name": "Teynham",
    "coords": [
      0.8070514,
      51.3336038
    ]
  },
  {
    "name": "Newington",
    "coords": [
      0.6667851,
      51.3535668
    ]
  },
  {
    "name": "Rainham",
    "coords": [
      0.6110362,
      51.3666656
    ]
  },
  {
    "name": "Chatham",
    "coords": [
      0.5212081,
      51.3803092
    ]
  },
  {
    "name": "Rochester",
    "coords": [
      0.5072941,
      51.3892066
    ]
  },
  {
    "name": "Martin Mill",
    "coords": [
      1.3479881,
      51.1706421
    ]
  },
  {
    "name": "Deal",
    "coords": [
      1.3986457,
      51.2231068
    ]
  },
  {
    "name": "Sandwich",
    "coords": [
      1.3422666,
      51.2699629
    ]
  },
  {
    "name": "Ebbsfleet International (domestic)",
    "coords": [
      0.3226384,
      51.4432708
    ]
  },
  {
    "name": "Gravesend",
    "coords": [
      0.3668306,
      51.4413627
    ]
  },
  {
    "name": "Bearsted",
    "coords": [
      0.577672,
      51.2759153
    ]
  },
  {
    "name": "Hollingbourne",
    "coords": [
      0.6278176,
      51.2653803
    ]
  },
  {
    "name": "Harrietsham",
    "coords": [
      0.6726551,
      51.2449353
    ]
  },
  {
    "name": "Lenham",
    "coords": [
      0.7072408,
      51.2344619
    ]
  },
  {
    "name": "Charing",
    "coords": [
      0.7898686,
      51.2082021
    ]
  },
  {
    "name": "Shoreham",
    "coords": [
      0.1887766,
      51.3321241
    ]
  },
  {
    "name": "Kemsing",
    "coords": [
      0.2474224,
      51.2972539
    ]
  },
  {
    "name": "Borough Green & Wrotham",
    "coords": [
      0.3061936,
      51.2931422
    ]
  },
  {
    "name": "East Malling",
    "coords": [
      0.4403595,
      51.2856713
    ]
  },
  {
    "name": "Barming",
    "coords": [
      0.4792926,
      51.2848536
    ]
  },
  {
    "name": "Maidstone East",
    "coords": [
      0.5199007,
      51.2776262
    ]
  },
  {
    "name": "Farningham Road",
    "coords": [
      0.235341,
      51.4016801
    ]
  },
  {
    "name": "Nunhead",
    "coords": [
      -0.0523755,
      51.4668348
    ]
  },
  {
    "name": "Crofton Park",
    "coords": [
      -0.0366299,
      51.4552149
    ]
  },
  {
    "name": "Bellingham",
    "coords": [
      -0.0195194,
      51.4328307
    ]
  },
  {
    "name": "Beckenham Hill",
    "coords": [
      -0.0159101,
      51.4245222
    ]
  },
  {
    "name": "Hereford",
    "coords": [
      -2.7081221,
      52.0611986
    ]
  },
  {
    "name": "Ravensbourne",
    "coords": [
      -0.0076295,
      51.4143132
    ]
  },
  {
    "name": "Loughborough Junction",
    "coords": [
      -0.1021612,
      51.4662551
    ]
  },
  {
    "name": "Kirkby Stephen",
    "coords": [
      -2.368703,
      54.4549076
    ]
  },
  {
    "name": "Mansion House Station",
    "coords": [
      -4.4381346,
      50.6381388
    ]
  },
  {
    "name": "East Wheal Rose",
    "coords": [
      -5.040696,
      50.3615947
    ]
  },
  {
    "name": "Birmingham International",
    "coords": [
      -1.7253357,
      52.4508239
    ]
  },
  {
    "name": "Brandon",
    "coords": [
      0.624439,
      52.4538785
    ]
  },
  {
    "name": "Thetford",
    "coords": [
      0.7452832,
      52.4191556
    ]
  },
  {
    "name": "Eccles Road",
    "coords": [
      0.9699936,
      52.4712952
    ]
  },
  {
    "name": "Attleborough",
    "coords": [
      1.0222088,
      52.5144202
    ]
  },
  {
    "name": "Wymondham",
    "coords": [
      1.1181355,
      52.5653515
    ]
  },
  {
    "name": "Upper Holloway",
    "coords": [
      -0.1296473,
      51.563474
    ]
  },
  {
    "name": "Crouch Hill",
    "coords": [
      -0.1168739,
      51.571431
    ]
  },
  {
    "name": "Laindon",
    "coords": [
      0.4237157,
      51.5675954
    ]
  },
  {
    "name": "Benfleet",
    "coords": [
      0.5616239,
      51.5441005
    ]
  },
  {
    "name": "Southend East",
    "coords": [
      0.73149,
      51.5389057
    ]
  },
  {
    "name": "Thorpe Bay",
    "coords": [
      0.7619363,
      51.5376596
    ]
  },
  {
    "name": "Southend Central",
    "coords": [
      0.7116503,
      51.5373587
    ]
  },
  {
    "name": "Chalkwell",
    "coords": [
      0.6698419,
      51.5386117
    ]
  },
  {
    "name": "Leigh-on-Sea",
    "coords": [
      0.6394573,
      51.5412111
    ]
  },
  {
    "name": "Pitsea",
    "coords": [
      0.5079761,
      51.5602396
    ]
  },
  {
    "name": "Grays",
    "coords": [
      0.3219051,
      51.4763786
    ]
  },
  {
    "name": "Stanford-le-Hope",
    "coords": [
      0.4229093,
      51.5141935
    ]
  },
  {
    "name": "East Tilbury",
    "coords": [
      0.4127175,
      51.4845202
    ]
  },
  {
    "name": "Dagenham Dock",
    "coords": [
      0.1464225,
      51.5261414
    ]
  },
  {
    "name": "Rainham",
    "coords": [
      0.1906219,
      51.5167202
    ]
  },
  {
    "name": "Chafford Hundred Lakeside",
    "coords": [
      0.2874684,
      51.4855963
    ]
  },
  {
    "name": "Ockendon",
    "coords": [
      0.2902103,
      51.5216626
    ]
  },
  {
    "name": "Enfield Chase",
    "coords": [
      -0.0908639,
      51.6526384
    ]
  },
  {
    "name": "Pegswood",
    "coords": [
      -1.6437205,
      55.1783232
    ]
  },
  {
    "name": "Dumpton Park",
    "coords": [
      1.4252755,
      51.3458538
    ]
  },
  {
    "name": "Broadstairs",
    "coords": [
      1.4334122,
      51.360737
    ]
  },
  {
    "name": "Birchington-on-Sea",
    "coords": [
      1.3009038,
      51.3775024
    ]
  },
  {
    "name": "Herne Bay",
    "coords": [
      1.1183071,
      51.3644375
    ]
  },
  {
    "name": "Aylesham",
    "coords": [
      1.2095904,
      51.2274229
    ]
  },
  {
    "name": "Snowdown",
    "coords": [
      1.2137143,
      51.2151407
    ]
  },
  {
    "name": "Shepherdswell",
    "coords": [
      1.2297861,
      51.1880383
    ]
  },
  {
    "name": "Kearsney",
    "coords": [
      1.2724936,
      51.1489301
    ]
  },
  {
    "name": "Appledore",
    "coords": [
      0.8165763,
      51.0332869
    ]
  },
  {
    "name": "Winchelsea",
    "coords": [
      0.7025193,
      50.9339128
    ]
  },
  {
    "name": "Three Oaks",
    "coords": [
      0.6133315,
      50.9009344
    ]
  },
  {
    "name": "Ore",
    "coords": [
      0.5916327,
      50.8668638
    ]
  },
  {
    "name": "St Leonards Warrior Square",
    "coords": [
      0.5605979,
      50.8557579
    ]
  },
  {
    "name": "Bexhill",
    "coords": [
      0.4757302,
      50.840942
    ]
  },
  {
    "name": "Collington",
    "coords": [
      0.4571842,
      50.8392876
    ]
  },
  {
    "name": "Cooden Beach",
    "coords": [
      0.4267026,
      50.8333713
    ]
  },
  {
    "name": "Normans Bay",
    "coords": [
      0.3895764,
      50.8260497
    ]
  },
  {
    "name": "Pevensey Bay",
    "coords": [
      0.3431985,
      50.8176698
    ]
  },
  {
    "name": "Pevensey and Westham",
    "coords": [
      0.3253781,
      50.8157704
    ]
  },
  {
    "name": "Southease",
    "coords": [
      0.0306729,
      50.83111
    ]
  },
  {
    "name": "Bishopstone",
    "coords": [
      0.0826201,
      50.7799859
    ]
  },
  {
    "name": "Newhaven Harbour",
    "coords": [
      0.0551622,
      50.7898002
    ]
  },
  {
    "name": "Newhaven Town",
    "coords": [
      0.0551243,
      50.7949162
    ]
  },
  {
    "name": "London Road (Brighton)",
    "coords": [
      -0.1362631,
      50.83681
    ]
  },
  {
    "name": "Moulsecoomb",
    "coords": [
      -0.1190654,
      50.8465383
    ]
  },
  {
    "name": "Falmer",
    "coords": [
      -0.0872899,
      50.8619409
    ]
  },
  {
    "name": "Glynde",
    "coords": [
      0.0703481,
      50.8591176
    ]
  },
  {
    "name": "Berwick",
    "coords": [
      0.1657244,
      50.8404862
    ]
  },
  {
    "name": "Polegate",
    "coords": [
      0.2467483,
      50.8211277
    ]
  },
  {
    "name": "Eastbourne",
    "coords": [
      0.2815355,
      50.7696435
    ]
  },
  {
    "name": "Hampden Park",
    "coords": [
      0.2796796,
      50.7959254
    ]
  },
  {
    "name": "Plumpton",
    "coords": [
      -0.0598099,
      50.9284626
    ]
  },
  {
    "name": "Cooksbridge",
    "coords": [
      -0.0093086,
      50.9037132
    ]
  },
  {
    "name": "Wivelsfield",
    "coords": [
      -0.1207209,
      50.9643606
    ]
  },
  {
    "name": "Haywards Heath",
    "coords": [
      -0.1053994,
      51.0049043
    ]
  },
  {
    "name": "Glenfinnan",
    "coords": [
      -5.4493089,
      56.872438
    ]
  },
  {
    "name": "Crianlarich",
    "coords": [
      -4.6184447,
      56.3903333
    ]
  },
  {
    "name": "Taynuilt",
    "coords": [
      -5.2398162,
      56.4308516
    ]
  },
  {
    "name": "Oban",
    "coords": [
      -5.4745782,
      56.4122069
    ]
  },
  {
    "name": "Upper Tyndrum",
    "coords": [
      -4.7039393,
      56.4348066
    ]
  },
  {
    "name": "Corrour",
    "coords": [
      -4.6907121,
      56.7602369
    ]
  },
  {
    "name": "Bridge of Orchy",
    "coords": [
      -4.7643193,
      56.5163947
    ]
  },
  {
    "name": "Luton Airport Parkway",
    "coords": [
      -0.3961244,
      51.872845
    ]
  },
  {
    "name": "St Albans City",
    "coords": [
      -0.3276687,
      51.7504966
    ]
  },
  {
    "name": "Welwyn North",
    "coords": [
      -0.192134,
      51.8237723
    ]
  },
  {
    "name": "Ardlui",
    "coords": [
      -4.7216053,
      56.3018438
    ]
  },
  {
    "name": "Garelochhead",
    "coords": [
      -4.8253592,
      56.0802337
    ]
  },
  {
    "name": "Arrochar and Tarbet",
    "coords": [
      -4.7231172,
      56.2033029
    ]
  },
  {
    "name": "Gospel Oak",
    "coords": [
      -0.151577,
      51.5554865
    ]
  },
  {
    "name": "Woodgrange Park",
    "coords": [
      0.0447283,
      51.549168
    ]
  },
  {
    "name": "Regent's Park",
    "coords": [
      -0.1466357,
      51.5236277
    ]
  },
  {
    "name": "Maida Vale",
    "coords": [
      -0.1857906,
      51.5297928
    ]
  },
  {
    "name": "Rugeley Trent Valley",
    "coords": [
      -1.9299278,
      52.7696788
    ]
  },
  {
    "name": "Nuneaton",
    "coords": [
      -1.4641837,
      52.5267605
    ]
  },
  {
    "name": "Stratford International",
    "coords": [
      -0.0087494,
      51.5447954
    ]
  },
  {
    "name": "Northallerton",
    "coords": [
      -1.441378,
      54.3324731
    ]
  },
  {
    "name": "Wood Green",
    "coords": [
      -0.1097795,
      51.597416
    ]
  },
  {
    "name": "Manor House",
    "coords": [
      -0.0963971,
      51.5703208
    ]
  },
  {
    "name": "Birmingham New Street",
    "coords": [
      -1.898694,
      52.4776459
    ]
  },
  {
    "name": "Blair Atholl",
    "coords": [
      -3.8497055,
      56.7652712
    ]
  },
  {
    "name": "Dunkeld and Birnam",
    "coords": [
      -3.5775146,
      56.5565771
    ]
  },
  {
    "name": "Dalwhinnie",
    "coords": [
      -4.2462331,
      56.9351529
    ]
  },
  {
    "name": "Pitlochry",
    "coords": [
      -3.73564,
      56.7023642
    ]
  },
  {
    "name": "Aviemore",
    "coords": [
      -3.8288803,
      57.188278
    ]
  },
  {
    "name": "Carshalton Beeches",
    "coords": [
      -0.1693507,
      51.3571959
    ]
  },
  {
    "name": "Wallington",
    "coords": [
      -0.1505899,
      51.3602348
    ]
  },
  {
    "name": "Purley Oaks",
    "coords": [
      -0.0987108,
      51.3470347
    ]
  },
  {
    "name": "Leigh",
    "coords": [
      0.2112588,
      51.1939929
    ]
  },
  {
    "name": "Edenbridge",
    "coords": [
      0.0598637,
      51.2083661
    ]
  },
  {
    "name": "Godstone",
    "coords": [
      -0.0514363,
      51.2181855
    ]
  },
  {
    "name": "Nutfield",
    "coords": [
      -0.1322636,
      51.2267445
    ]
  },
  {
    "name": "Belmont",
    "coords": [
      -0.1987852,
      51.3438964
    ]
  },
  {
    "name": "Streatham Common",
    "coords": [
      -0.1359263,
      51.4185662
    ]
  },
  {
    "name": "Norbury",
    "coords": [
      -0.1218018,
      51.4113697
    ]
  },
  {
    "name": "Thornton Heath",
    "coords": [
      -0.1005158,
      51.3989438
    ]
  },
  {
    "name": "Lee",
    "coords": [
      0.0146411,
      51.4496733
    ]
  },
  {
    "name": "Mottingham",
    "coords": [
      0.0499618,
      51.4402515
    ]
  },
  {
    "name": "New Eltham",
    "coords": [
      0.0709469,
      51.4380136
    ]
  },
  {
    "name": "Sidcup",
    "coords": [
      0.1034297,
      51.4340208
    ]
  },
  {
    "name": "Crayford",
    "coords": [
      0.1783894,
      51.448177
    ]
  },
  {
    "name": "Albany Park",
    "coords": [
      0.1259653,
      51.4353837
    ]
  },
  {
    "name": "Northfleet",
    "coords": [
      0.3239669,
      51.4459453
    ]
  },
  {
    "name": "Swanscombe",
    "coords": [
      0.311584,
      51.4489829
    ]
  },
  {
    "name": "Greenhithe",
    "coords": [
      0.2798724,
      51.4504764
    ]
  },
  {
    "name": "Stone Crossing",
    "coords": [
      0.2634425,
      51.4514164
    ]
  },
  {
    "name": "Caernarfon",
    "coords": [
      -4.2719629,
      53.1375302
    ]
  },
  {
    "name": "Borough",
    "coords": [
      -0.0935834,
      51.5012094
    ]
  },
  {
    "name": "Murton Park",
    "coords": [
      -1.0097159,
      53.9629636
    ]
  },
  {
    "name": "Harpenden",
    "coords": [
      -0.3515572,
      51.8148177
    ]
  },
  {
    "name": "Bethnal Green",
    "coords": [
      -0.059592,
      51.5238872
    ]
  },
  {
    "name": "Enfield Town",
    "coords": [
      -0.0786839,
      51.6517156
    ]
  },
  {
    "name": "West Malling",
    "coords": [
      0.4186871,
      51.2920962
    ]
  },
  {
    "name": "Finchley Road & Frognal",
    "coords": [
      -0.1835754,
      51.5501046
    ]
  },
  {
    "name": "March",
    "coords": [
      0.0913188,
      52.5600848
    ]
  },
  {
    "name": "Penzance",
    "coords": [
      -5.5320276,
      50.1224396
    ]
  },
  {
    "name": "Swansea",
    "coords": [
      -3.9403729,
      51.6256789
    ]
  },
  {
    "name": "Merthyr Tydfil",
    "coords": [
      -3.3773565,
      51.7444793
    ]
  },
  {
    "name": "Barnstaple",
    "coords": [
      -4.0630236,
      51.0736094
    ]
  },
  {
    "name": "Pontypridd",
    "coords": [
      -3.3418374,
      51.5992956
    ]
  },
  {
    "name": "Gidea Park",
    "coords": [
      0.2057283,
      51.581785
    ]
  },
  {
    "name": "Emerson Park",
    "coords": [
      0.2202375,
      51.5686007
    ]
  },
  {
    "name": "Purfleet",
    "coords": [
      0.2369945,
      51.4810858
    ]
  },
  {
    "name": "Pudding Mill Lane",
    "coords": [
      -0.0135365,
      51.5338301
    ]
  },
  {
    "name": "Ffairfach",
    "coords": [
      -3.9927793,
      51.8730081
    ]
  },
  {
    "name": "Llandybie",
    "coords": [
      -4.0037378,
      51.8209328
    ]
  },
  {
    "name": "Llandeilo",
    "coords": [
      -3.9868387,
      51.8851723
    ]
  },
  {
    "name": "Llanwrda",
    "coords": [
      -3.8721201,
      51.9626513
    ]
  },
  {
    "name": "Ammanford",
    "coords": [
      -3.996828,
      51.7955509
    ]
  },
  {
    "name": "Pantyffynnon",
    "coords": [
      -3.997538,
      51.7786637
    ]
  },
  {
    "name": "Pontarddulais",
    "coords": [
      -4.045435,
      51.7170446
    ]
  },
  {
    "name": "Bynea",
    "coords": [
      -4.0987158,
      51.6722799
    ]
  },
  {
    "name": "Llangammarch",
    "coords": [
      -3.5551178,
      52.1142069
    ]
  },
  {
    "name": "Cilmeri",
    "coords": [
      -3.4567317,
      52.1504164
    ]
  },
  {
    "name": "Llandrindod",
    "coords": [
      -3.3794358,
      52.242258
    ]
  },
  {
    "name": "Dolau",
    "coords": [
      -3.2633324,
      52.2949972
    ]
  },
  {
    "name": "Gowerton",
    "coords": [
      -4.0356664,
      51.6489264
    ]
  },
  {
    "name": "Broome",
    "coords": [
      -2.8844821,
      52.4231523
    ]
  },
  {
    "name": "Llangadog",
    "coords": [
      -3.8931979,
      51.9402678
    ]
  },
  {
    "name": "Garth",
    "coords": [
      -3.5301867,
      52.1333876
    ]
  },
  {
    "name": "Builth Road",
    "coords": [
      -3.4271436,
      52.1691098
    ]
  },
  {
    "name": "Pen-y-Bont",
    "coords": [
      -3.3215797,
      52.2743417
    ]
  },
  {
    "name": "Llangynllo",
    "coords": [
      -3.1615439,
      52.3501452
    ]
  },
  {
    "name": "Hopton Heath",
    "coords": [
      -2.9120277,
      52.391361
    ]
  },
  {
    "name": "Llandovery",
    "coords": [
      -3.8029237,
      51.9953596
    ]
  },
  {
    "name": "Llanbister Road",
    "coords": [
      -3.2131872,
      52.3363191
    ]
  },
  {
    "name": "Bucknell",
    "coords": [
      -2.947694,
      52.3572768
    ]
  },
  {
    "name": "Craven Arms",
    "coords": [
      -2.8375532,
      52.442192
    ]
  },
  {
    "name": "Sugar Loaf",
    "coords": [
      -3.685776,
      52.0820713
    ]
  },
  {
    "name": "Llangennech",
    "coords": [
      -4.07874,
      51.6913467
    ]
  },
  {
    "name": "Bethnal Green",
    "coords": [
      -0.054752,
      51.5272449
    ]
  },
  {
    "name": "Woodside Halt",
    "coords": [
      -1.2888881,
      50.8842986
    ]
  },
  {
    "name": "Kiln Halt",
    "coords": [
      -1.2899192,
      50.8854559
    ]
  },
  {
    "name": "Liverpool Lime Street",
    "coords": [
      -2.9775854,
      53.4076085
    ]
  },
  {
    "name": "Perth",
    "coords": [
      -3.4383963,
      56.3914751
    ]
  },
  {
    "name": "Watlington",
    "coords": [
      0.3831294,
      52.6728741
    ]
  },
  {
    "name": "King's Lynn",
    "coords": [
      0.4040158,
      52.7538147
    ]
  },
  {
    "name": "Hampstead Heath",
    "coords": [
      -0.1653912,
      51.5552396
    ]
  },
  {
    "name": "Dalston Kingsland",
    "coords": [
      -0.0760535,
      51.5481908
    ]
  },
  {
    "name": "Peckham Rye",
    "coords": [
      -0.0694125,
      51.4700059
    ]
  },
  {
    "name": "Shepherd's Bush",
    "coords": [
      -0.2179221,
      51.5057781
    ]
  },
  {
    "name": "Shoreditch High Street",
    "coords": [
      -0.0744674,
      51.5232534
    ]
  },
  {
    "name": "Kilburn High Road",
    "coords": [
      -0.1913533,
      51.5377475
    ]
  },
  {
    "name": "Harringay Green Lanes",
    "coords": [
      -0.097888,
      51.5772398
    ]
  },
  {
    "name": "Kentish Town West",
    "coords": [
      -0.1467554,
      51.5469937
    ]
  },
  {
    "name": "Silver Street",
    "coords": [
      -0.0668979,
      51.6152771
    ]
  },
  {
    "name": "Caledonian Road & Barnsbury",
    "coords": [
      -0.1148864,
      51.5435462
    ]
  },
  {
    "name": "Leyton Midland Road",
    "coords": [
      -0.0070762,
      51.5694492
    ]
  },
  {
    "name": "Chingford",
    "coords": [
      0.009471,
      51.6325345
    ]
  },
  {
    "name": "Highams Park",
    "coords": [
      -0.0001301,
      51.6088927
    ]
  },
  {
    "name": "Cambridge Heath",
    "coords": [
      -0.0574215,
      51.5319544
    ]
  },
  {
    "name": "Hackney Central",
    "coords": [
      -0.0568749,
      51.5470605
    ]
  },
  {
    "name": "Radcliffe",
    "coords": [
      -1.0369716,
      52.9487898
    ]
  },
  {
    "name": "Robroyston",
    "coords": [
      -4.1743912,
      55.886885
    ]
  },
  {
    "name": "Slough",
    "coords": [
      -0.591276,
      51.512103
    ]
  },
  {
    "name": "Outwood",
    "coords": [
      -1.5104273,
      53.7152957
    ]
  },
  {
    "name": "Brentwood",
    "coords": [
      0.3006105,
      51.6135231
    ]
  },
  {
    "name": "Heron Quays",
    "coords": [
      -0.0214699,
      51.5030491
    ]
  },
  {
    "name": "Harold Wood",
    "coords": [
      0.2341995,
      51.5932171
    ]
  },
  {
    "name": "Woolwich Arsenal DLR",
    "coords": [
      0.0695827,
      51.4901052
    ]
  },
  {
    "name": "Westferry",
    "coords": [
      -0.026644,
      51.5094025
    ]
  },
  {
    "name": "Island Gardens",
    "coords": [
      -0.0105052,
      51.4880683
    ]
  },
  {
    "name": "London Paddington",
    "coords": [
      -0.1775422,
      51.5170856
    ]
  },
  {
    "name": "Yorton",
    "coords": [
      -2.7363694,
      52.8090881
    ]
  },
  {
    "name": "Bletchley",
    "coords": [
      -0.7363,
      51.9954534
    ]
  },
  {
    "name": "Charing Cross",
    "coords": [
      -0.1236888,
      51.5074975
    ]
  },
  {
    "name": "Stevenage",
    "coords": [
      -0.207144,
      51.9018356
    ]
  },
  {
    "name": "Shanklin",
    "coords": [
      -1.1799202,
      50.6338793
    ]
  },
  {
    "name": "Liverpool South Parkway",
    "coords": [
      -2.8892004,
      53.3576179
    ]
  },
  {
    "name": "Sandown",
    "coords": [
      -1.1622454,
      50.6571102
    ]
  },
  {
    "name": "Chippenham",
    "coords": [
      -2.116144,
      51.4622697
    ]
  },
  {
    "name": "Stafford",
    "coords": [
      -2.1226262,
      52.8035815
    ]
  },
  {
    "name": "Potters Bar",
    "coords": [
      -0.193118,
      51.6975545
    ]
  },
  {
    "name": "Southend Victoria",
    "coords": [
      0.7114814,
      51.5429361
    ]
  },
  {
    "name": "Westcliff",
    "coords": [
      0.6915156,
      51.5374449
    ]
  },
  {
    "name": "Muirend",
    "coords": [
      -4.2736906,
      55.8102774
    ]
  },
  {
    "name": "Liverpool James Street",
    "coords": [
      -2.9922097,
      53.4050028
    ]
  },
  {
    "name": "Mansfield",
    "coords": [
      -1.1985012,
      53.142079
    ]
  },
  {
    "name": "Alfreton",
    "coords": [
      -1.3698401,
      53.1010582
    ]
  },
  {
    "name": "Winchmore Hill",
    "coords": [
      -0.1009414,
      51.6340675
    ]
  },
  {
    "name": "Chadwell Heath",
    "coords": [
      0.127994,
      51.5679857
    ]
  },
  {
    "name": "West Ealing",
    "coords": [
      -0.3206893,
      51.5135365
    ]
  },
  {
    "name": "Hayes and Harlington",
    "coords": [
      -0.4191564,
      51.5029246
    ]
  },
  {
    "name": "Southall",
    "coords": [
      -0.3775015,
      51.5060205
    ]
  },
  {
    "name": "Hanwell",
    "coords": [
      -0.3386659,
      51.5117871
    ]
  },
  {
    "name": "Goodmayes",
    "coords": [
      0.1119305,
      51.565803
    ]
  },
  {
    "name": "Acton Main Line",
    "coords": [
      -0.2679825,
      51.5169789
    ]
  },
  {
    "name": "Brondesbury",
    "coords": [
      -0.2025961,
      51.5450493
    ]
  },
  {
    "name": "Star Lane",
    "coords": [
      0.0043357,
      51.5205083
    ]
  },
  {
    "name": "Shadwell DLR",
    "coords": [
      -0.0554867,
      51.5117593
    ]
  },
  {
    "name": "Kensal Rise",
    "coords": [
      -0.2200978,
      51.5344634
    ]
  },
  {
    "name": "Hackney Downs",
    "coords": [
      -0.060686,
      51.5486455
    ]
  },
  {
    "name": "Homerton",
    "coords": [
      -0.043121,
      51.5470789
    ]
  },
  {
    "name": "Canonbury",
    "coords": [
      -0.0930239,
      51.5485632
    ]
  },
  {
    "name": "Southbury",
    "coords": [
      -0.0526302,
      51.6480314
    ]
  },
  {
    "name": "Brondesbury Park",
    "coords": [
      -0.2103359,
      51.5405138
    ]
  },
  {
    "name": "South Tottenham",
    "coords": [
      -0.0717169,
      51.5804433
    ]
  },
  {
    "name": "St James Street",
    "coords": [
      -0.0322047,
      51.5811716
    ]
  },
  {
    "name": "Hackney Wick",
    "coords": [
      -0.0241542,
      51.5434383
    ]
  },
  {
    "name": "Bush Hill Park",
    "coords": [
      -0.0694005,
      51.6417042
    ]
  },
  {
    "name": "London Fields",
    "coords": [
      -0.0577737,
      51.5410518
    ]
  },
  {
    "name": "South Hampstead",
    "coords": [
      -0.1788007,
      51.5414337
    ]
  },
  {
    "name": "Devons Road",
    "coords": [
      -0.0172729,
      51.5222078
    ]
  },
  {
    "name": "Poplar",
    "coords": [
      -0.0172859,
      51.5077131
    ]
  },
  {
    "name": "Langdon Park",
    "coords": [
      -0.0141164,
      51.5152051
    ]
  },
  {
    "name": "Morar",
    "coords": [
      -5.8220885,
      56.9689555
    ]
  },
  {
    "name": "Singer",
    "coords": [
      -4.4054997,
      55.9074847
    ]
  },
  {
    "name": "Mallaig",
    "coords": [
      -5.8302296,
      57.0055416
    ]
  },
  {
    "name": "Charing Cross",
    "coords": [
      -4.2695777,
      55.8646397
    ]
  },
  {
    "name": "Bridgeton",
    "coords": [
      -4.2248178,
      55.8483262
    ]
  },
  {
    "name": "Aberdeen",
    "coords": [
      -2.0976346,
      57.1426487
    ]
  },
  {
    "name": "Drumry",
    "coords": [
      -4.3854827,
      55.904597
    ]
  },
  {
    "name": "Darlington",
    "coords": [
      -1.5466911,
      54.5206617
    ]
  },
  {
    "name": "Meadowhall Interchange",
    "coords": [
      -1.4138361,
      53.4168529
    ]
  },
  {
    "name": "Ormskirk",
    "coords": [
      -2.8810819,
      53.5694489
    ]
  },
  {
    "name": "Edinburgh Waverley",
    "coords": [
      -3.1904199,
      55.9519018
    ]
  },
  {
    "name": "Moorfields",
    "coords": [
      -2.9892356,
      53.4085494
    ]
  },
  {
    "name": "Market Harborough",
    "coords": [
      -0.9091337,
      52.4802412
    ]
  },
  {
    "name": "Earley",
    "coords": [
      -0.9177114,
      51.4410298
    ]
  },
  {
    "name": "Kidsgrove",
    "coords": [
      -2.244923,
      53.0864206
    ]
  },
  {
    "name": "Tamworth",
    "coords": [
      -1.6870818,
      52.6375245
    ]
  },
  {
    "name": "Princes Risborough",
    "coords": [
      -0.8440858,
      51.7180454
    ]
  },
  {
    "name": "Aylesbury",
    "coords": [
      -0.8143149,
      51.8134286
    ]
  },
  {
    "name": "Poynton",
    "coords": [
      -2.134793,
      53.3505513
    ]
  },
  {
    "name": "Holyhead",
    "coords": [
      -4.6312147,
      53.3073739
    ]
  },
  {
    "name": "Stoke-on-Trent",
    "coords": [
      -2.1810781,
      53.0079887
    ]
  },
  {
    "name": "Abergavenny",
    "coords": [
      -3.0090126,
      51.8174352
    ]
  },
  {
    "name": "Macclesfield",
    "coords": [
      -2.1219368,
      53.2593665
    ]
  },
  {
    "name": "Warminster",
    "coords": [
      -2.1769016,
      51.2069721
    ]
  },
  {
    "name": "Cheltenham Spa",
    "coords": [
      -2.1001222,
      51.8969882
    ]
  },
  {
    "name": "Leominster",
    "coords": [
      -2.7304447,
      52.2258095
    ]
  },
  {
    "name": "Wolverton",
    "coords": [
      -0.8047602,
      52.065978
    ]
  },
  {
    "name": "Port Sunlight",
    "coords": [
      -2.9982505,
      53.3484812
    ]
  },
  {
    "name": "Chesterfield",
    "coords": [
      -1.4197283,
      53.2382236
    ]
  },
  {
    "name": "Glazebrook",
    "coords": [
      -2.4599923,
      53.4282913
    ]
  },
  {
    "name": "Henley-on-Thames",
    "coords": [
      -0.899422,
      51.5338451
    ]
  },
  {
    "name": "Wrexham Central",
    "coords": [
      -2.9996254,
      53.0463361
    ]
  },
  {
    "name": "Whaley Bridge",
    "coords": [
      -1.9847378,
      53.3302649
    ]
  },
  {
    "name": "Liverpool Central",
    "coords": [
      -2.9795092,
      53.4042207
    ]
  },
  {
    "name": "Sandhills",
    "coords": [
      -2.9920015,
      53.4295369
    ]
  },
  {
    "name": "Corby",
    "coords": [
      -0.6883829,
      52.4888488
    ]
  },
  {
    "name": "Windermere",
    "coords": [
      -2.9033054,
      54.3794896
    ]
  },
  {
    "name": "Swineshead",
    "coords": [
      -0.1867064,
      52.9697297
    ]
  },
  {
    "name": "Cleethorpes",
    "coords": [
      -0.0300969,
      53.562825
    ]
  },
  {
    "name": "Doncaster",
    "coords": [
      -1.1399149,
      53.5219538
    ]
  },
  {
    "name": "Grimsby Town",
    "coords": [
      -0.0868507,
      53.5634567
    ]
  },
  {
    "name": "Workington",
    "coords": [
      -3.558903,
      54.6449643
    ]
  },
  {
    "name": "Spalding",
    "coords": [
      -0.1571731,
      52.7887647
    ]
  },
  {
    "name": "Market Rasen",
    "coords": [
      -0.3368448,
      53.3840114
    ]
  },
  {
    "name": "Saxilby",
    "coords": [
      -0.6645836,
      53.267314
    ]
  },
  {
    "name": "Salford Crescent",
    "coords": [
      -2.275711,
      53.4862309
    ]
  },
  {
    "name": "Leeds",
    "coords": [
      -1.548621,
      53.794414
    ]
  },
  {
    "name": "Scunthorpe",
    "coords": [
      -0.6515681,
      53.5861008
    ]
  },
  {
    "name": "Wakefield Westgate",
    "coords": [
      -1.5055805,
      53.6822118
    ]
  },
  {
    "name": "Norwich",
    "coords": [
      1.3076876,
      52.626307
    ]
  },
  {
    "name": "High Wycombe",
    "coords": [
      -0.7445773,
      51.6293727
    ]
  },
  {
    "name": "Frimley",
    "coords": [
      -0.7470853,
      51.311784
    ]
  },
  {
    "name": "Putney",
    "coords": [
      -0.2153478,
      51.4609339
    ]
  },
  {
    "name": "Essex Road",
    "coords": [
      -0.0961859,
      51.5407328
    ]
  },
  {
    "name": "Rye",
    "coords": [
      0.7310208,
      50.952632
    ]
  },
  {
    "name": "Ascot",
    "coords": [
      -0.6767778,
      51.4062463
    ]
  },
  {
    "name": "Windsor and Eton Riverside",
    "coords": [
      -0.6053949,
      51.4866279
    ]
  },
  {
    "name": "Ham Street",
    "coords": [
      0.8545851,
      51.0681986
    ]
  },
  {
    "name": "Ingatestone",
    "coords": [
      0.3842646,
      51.6670001
    ]
  },
  {
    "name": "Cricklewood",
    "coords": [
      -0.2129746,
      51.5587554
    ]
  },
  {
    "name": "Hemel Hempstead",
    "coords": [
      -0.4911208,
      51.7422715
    ]
  },
  {
    "name": "Margate",
    "coords": [
      1.3719521,
      51.3851637
    ]
  },
  {
    "name": "North Camp",
    "coords": [
      -0.7307328,
      51.2753951
    ]
  },
  {
    "name": "Waterloo East",
    "coords": [
      -0.1082027,
      51.5042171
    ]
  },
  {
    "name": "London King's Cross",
    "coords": [
      -0.1230224,
      51.5323954
    ]
  },
  {
    "name": "Hayes",
    "coords": [
      0.0095073,
      51.3765959
    ]
  },
  {
    "name": "Maze Hill",
    "coords": [
      0.00375,
      51.4826479
    ]
  },
  {
    "name": "Bexleyheath",
    "coords": [
      0.1329448,
      51.4635649
    ]
  },
  {
    "name": "Belvedere",
    "coords": [
      0.1533667,
      51.4922273
    ]
  },
  {
    "name": "Coulsdon South",
    "coords": [
      -0.137974,
      51.315543
    ]
  },
  {
    "name": "Ashford",
    "coords": [
      -0.4683126,
      51.436496
    ]
  },
  {
    "name": "Falconwood",
    "coords": [
      0.0793044,
      51.4592305
    ]
  },
  {
    "name": "Marlow",
    "coords": [
      -0.7664026,
      51.571086
    ]
  },
  {
    "name": "Charlton",
    "coords": [
      0.030809,
      51.4867602
    ]
  },
  {
    "name": "Milton Keynes Central",
    "coords": [
      -0.7748261,
      52.0342006
    ]
  },
  {
    "name": "London Blackfriars",
    "coords": [
      -0.1032417,
      51.5104871
    ]
  },
  {
    "name": "Avonmouth",
    "coords": [
      -2.6988623,
      51.4997221
    ]
  },
  {
    "name": "Sea Mills",
    "coords": [
      -2.6496514,
      51.4795006
    ]
  },
  {
    "name": "Ponders End",
    "coords": [
      -0.0347837,
      51.6428463
    ]
  },
  {
    "name": "Lea Bridge",
    "coords": [
      -0.0371218,
      51.5667512
    ]
  },
  {
    "name": "Bristol Temple Meads",
    "coords": [
      -2.5804029,
      51.4490991
    ]
  },
  {
    "name": "Chester-le-Street",
    "coords": [
      -1.5782541,
      54.8545355
    ]
  },
  {
    "name": "Durham",
    "coords": [
      -1.5815122,
      54.7797488
    ]
  },
  {
    "name": "Kendal",
    "coords": [
      -2.7401448,
      54.3322466
    ]
  },
  {
    "name": "Lancaster",
    "coords": [
      -2.807799,
      54.0488361
    ]
  },
  {
    "name": "St Annes-on-the-Sea",
    "coords": [
      -3.02895,
      53.7531813
    ]
  },
  {
    "name": "Elstree & Borehamwood",
    "coords": [
      -0.2798815,
      51.652819
    ]
  },
  {
    "name": "Kiveton Park",
    "coords": [
      -1.2395678,
      53.3367636
    ]
  },
  {
    "name": "Kingston",
    "coords": [
      -0.3018577,
      51.4129277
    ]
  },
  {
    "name": "Redbridge",
    "coords": [
      -1.469603,
      50.9195374
    ]
  },
  {
    "name": "Sileby",
    "coords": [
      -1.1094383,
      52.7311264
    ]
  },
  {
    "name": "Dorchester West",
    "coords": [
      -2.4426484,
      50.7109324
    ]
  },
  {
    "name": "Thornaby",
    "coords": [
      -1.3016958,
      54.5591886
    ]
  },
  {
    "name": "Winsford",
    "coords": [
      -2.4943089,
      53.1904159
    ]
  },
  {
    "name": "Banstead",
    "coords": [
      -0.2137196,
      51.3294324
    ]
  },
  {
    "name": "Dorchester South",
    "coords": [
      -2.4374501,
      50.7091366
    ]
  },
  {
    "name": "Oxenholme Lake District",
    "coords": [
      -2.7217774,
      54.3050597
    ]
  },
  {
    "name": "Berkswell",
    "coords": [
      -1.6417904,
      52.3960838
    ]
  },
  {
    "name": "Wembley Stadium",
    "coords": [
      -0.2847664,
      51.5542489
    ]
  },
  {
    "name": "Sudbury & Harrow Road",
    "coords": [
      -0.3160599,
      51.5543352
    ]
  },
  {
    "name": "Ilkeston",
    "coords": [
      -1.2950397,
      52.9790983
    ]
  },
  {
    "name": "Longbridge",
    "coords": [
      -1.9807611,
      52.3970107
    ]
  },
  {
    "name": "Arnside",
    "coords": [
      -2.8280672,
      54.202601
    ]
  },
  {
    "name": "Sholing",
    "coords": [
      -1.364194,
      50.8964487
    ]
  },
  {
    "name": "Llansamlet",
    "coords": [
      -3.8854619,
      51.6615072
    ]
  },
  {
    "name": "Ramsgate",
    "coords": [
      1.4052264,
      51.3410764
    ]
  },
  {
    "name": "Woolston",
    "coords": [
      -1.3766466,
      50.8990424
    ]
  },
  {
    "name": "Swaythling",
    "coords": [
      -1.3764672,
      50.9411238
    ]
  },
  {
    "name": "Bitterne",
    "coords": [
      -1.3769392,
      50.9181488
    ]
  },
  {
    "name": "Lanark",
    "coords": [
      -3.7724229,
      55.6735029
    ]
  },
  {
    "name": "Bulwell",
    "coords": [
      -1.1953957,
      52.9993437
    ]
  },
  {
    "name": "Hellifield",
    "coords": [
      -2.2269493,
      54.0104821
    ]
  },
  {
    "name": "Wembley Central",
    "coords": [
      -0.2966751,
      51.5523278
    ]
  },
  {
    "name": "Carnoustie",
    "coords": [
      -2.7053474,
      56.5006776
    ]
  },
  {
    "name": "Kirkcaldy",
    "coords": [
      -3.1670545,
      56.1119986
    ]
  },
  {
    "name": "Kinbrace",
    "coords": [
      -3.9411518,
      58.2585833
    ]
  },
  {
    "name": "Duncraig",
    "coords": [
      -5.6371138,
      57.3369369
    ]
  },
  {
    "name": "Attadale",
    "coords": [
      -5.455396,
      57.3944792
    ]
  },
  {
    "name": "Invershin",
    "coords": [
      -4.3995831,
      57.9248518
    ]
  },
  {
    "name": "Kildonan",
    "coords": [
      -3.8690934,
      58.1707751
    ]
  },
  {
    "name": "Lochluichart",
    "coords": [
      -4.8089907,
      57.6218024
    ]
  },
  {
    "name": "Culrain",
    "coords": [
      -4.404528,
      57.9195944
    ]
  },
  {
    "name": "Scotscalder",
    "coords": [
      -3.55207,
      58.4828499
    ]
  },
  {
    "name": "Achnashellach",
    "coords": [
      -5.3333634,
      57.4820352
    ]
  },
  {
    "name": "Rogart",
    "coords": [
      -4.158287,
      57.9886311
    ]
  },
  {
    "name": "Achanalt",
    "coords": [
      -4.9138447,
      57.6096032
    ]
  },
  {
    "name": "Duirinish",
    "coords": [
      -5.6916167,
      57.3198325
    ]
  },
  {
    "name": "Tyndrum Lower",
    "coords": [
      -4.7134443,
      56.4336045
    ]
  },
  {
    "name": "Corpach",
    "coords": [
      -5.1221182,
      56.8427664
    ]
  },
  {
    "name": "Connel Ferry",
    "coords": [
      -5.3833657,
      56.4524639
    ]
  },
  {
    "name": "Alexandria",
    "coords": [
      -4.5773243,
      55.9852719
    ]
  },
  {
    "name": "Montrose",
    "coords": [
      -2.4722165,
      56.7128296
    ]
  },
  {
    "name": "Loch Awe",
    "coords": [
      -5.0416851,
      56.4018224
    ]
  },
  {
    "name": "Arisaig",
    "coords": [
      -5.8396337,
      56.9129624
    ]
  },
  {
    "name": "Falls of Cruachan",
    "coords": [
      -5.1127256,
      56.3940171
    ]
  },
  {
    "name": "Renton",
    "coords": [
      -4.5863543,
      55.9703118
    ]
  },
  {
    "name": "Balloch",
    "coords": [
      -4.5832835,
      56.0023629
    ]
  },
  {
    "name": "Barnhill",
    "coords": [
      -4.2233317,
      55.8777405
    ]
  },
  {
    "name": "Roy Bridge",
    "coords": [
      -4.8371115,
      56.8883373
    ]
  },
  {
    "name": "Ashwell & Morden",
    "coords": [
      -0.1099212,
      52.0306258
    ]
  },
  {
    "name": "Marton",
    "coords": [
      -1.1983615,
      54.544225
    ]
  },
  {
    "name": "Carntyne",
    "coords": [
      -4.1791751,
      55.8548998
    ]
  },
  {
    "name": "Garrowhill",
    "coords": [
      -4.129839,
      55.855046
    ]
  },
  {
    "name": "Larbert",
    "coords": [
      -3.8297927,
      56.0221353
    ]
  },
  {
    "name": "Prestonpans",
    "coords": [
      -2.9754522,
      55.9527764
    ]
  },
  {
    "name": "Poulton-le-Fylde",
    "coords": [
      -2.9896795,
      53.8482922
    ]
  },
  {
    "name": "Drumgelloch",
    "coords": [
      -3.9483149,
      55.8676763
    ]
  },
  {
    "name": "Shettleston",
    "coords": [
      -4.1595853,
      55.8536445
    ]
  },
  {
    "name": "Malton",
    "coords": [
      -0.7977286,
      54.1318572
    ]
  },
  {
    "name": "Foxton",
    "coords": [
      0.0569774,
      52.1193575
    ]
  },
  {
    "name": "Gartcosh",
    "coords": [
      -4.0793828,
      55.8856215
    ]
  },
  {
    "name": "Livingston North",
    "coords": [
      -3.5436081,
      55.9015081
    ]
  },
  {
    "name": "Harwich Town",
    "coords": [
      1.2866273,
      51.9441577
    ]
  },
  {
    "name": "Coatdyke",
    "coords": [
      -4.0049999,
      55.864404
    ]
  },
  {
    "name": "Burnham-on-Crouch",
    "coords": [
      0.8136583,
      51.6336033
    ]
  },
  {
    "name": "Stepps",
    "coords": [
      -4.140434,
      55.8901155
    ]
  },
  {
    "name": "Warwick",
    "coords": [
      -1.5817112,
      52.28662
    ]
  },
  {
    "name": "Southminster",
    "coords": [
      0.8353716,
      51.6606424
    ]
  },
  {
    "name": "Shepreth",
    "coords": [
      0.0316482,
      52.114457
    ]
  },
  {
    "name": "Uphall",
    "coords": [
      -3.5019033,
      55.9190379
    ]
  },
  {
    "name": "Musselburgh",
    "coords": [
      -3.0724927,
      55.9334479
    ]
  },
  {
    "name": "Kelvindale",
    "coords": [
      -4.31008,
      55.8934819
    ]
  },
  {
    "name": "Battlesbridge",
    "coords": [
      0.5656286,
      51.6249307
    ]
  },
  {
    "name": "Bridge of Allan",
    "coords": [
      -3.9572856,
      56.1567462
    ]
  },
  {
    "name": "Newtonmore",
    "coords": [
      -4.1189471,
      57.0591332
    ]
  },
  {
    "name": "Tile Hill",
    "coords": [
      -1.5972825,
      52.3951906
    ]
  },
  {
    "name": "Beasdale",
    "coords": [
      -5.7639221,
      56.9000736
    ]
  },
  {
    "name": "Althorne",
    "coords": [
      0.7517966,
      51.6477849
    ]
  },
  {
    "name": "Buckshaw Parkway",
    "coords": [
      -2.6589846,
      53.6729554
    ]
  },
  {
    "name": "Gypsy Lane",
    "coords": [
      -1.1803117,
      54.5333293
    ]
  },
  {
    "name": "Bathgate",
    "coords": [
      -3.6362736,
      55.8971052
    ]
  },
  {
    "name": "Camelon",
    "coords": [
      -3.8183922,
      56.0062328
    ]
  },
  {
    "name": "North Berwick",
    "coords": [
      -2.7310042,
      56.0566277
    ]
  },
  {
    "name": "Worcester Foregate Street",
    "coords": [
      -2.2207771,
      52.1953125
    ]
  },
  {
    "name": "Hartlebury",
    "coords": [
      -2.2210855,
      52.3344413
    ]
  },
  {
    "name": "Armadale",
    "coords": [
      -3.6929618,
      55.8865302
    ]
  },
  {
    "name": "Caldercruix",
    "coords": [
      -3.8887176,
      55.8880483
    ]
  },
  {
    "name": "Rufford",
    "coords": [
      -2.8079516,
      53.6343744
    ]
  },
  {
    "name": "Sandy",
    "coords": [
      -0.2809477,
      52.1249106
    ]
  },
  {
    "name": "Arbroath",
    "coords": [
      -2.5892737,
      56.5593376
    ]
  },
  {
    "name": "Morpeth",
    "coords": [
      -1.6831484,
      55.1623623
    ]
  },
  {
    "name": "Falkirk Grahamston",
    "coords": [
      -3.7854737,
      56.0023684
    ]
  },
  {
    "name": "Stonehaven",
    "coords": [
      -2.225283,
      56.9668616
    ]
  },
  {
    "name": "Inverkeithing",
    "coords": [
      -3.3954171,
      56.0352386
    ]
  },
  {
    "name": "Partick",
    "coords": [
      -4.3094365,
      55.8699211
    ]
  },
  {
    "name": "Golf Street",
    "coords": [
      -2.7201226,
      56.4979456
    ]
  },
  {
    "name": "Bradford Interchange",
    "coords": [
      -1.7491251,
      53.790494
    ]
  },
  {
    "name": "South Woodham Ferrers",
    "coords": [
      0.6060545,
      51.6494076
    ]
  },
  {
    "name": "Worcestershire Parkway",
    "coords": [
      -2.1600339,
      52.1561771
    ]
  },
  {
    "name": "Apedale Road",
    "coords": [
      -2.2658011,
      53.0364237
    ]
  },
  {
    "name": "Ludborough",
    "coords": [
      -0.0311433,
      53.4451119
    ]
  },
  {
    "name": "Smethwick Galton Bridge",
    "coords": [
      -1.9804372,
      52.5021195
    ]
  },
  {
    "name": "Wombwell",
    "coords": [
      -1.4163018,
      53.5174468
    ]
  },
  {
    "name": "Selly Oak",
    "coords": [
      -1.9355913,
      52.4418625
    ]
  },
  {
    "name": "Bournville",
    "coords": [
      -1.9266683,
      52.4273889
    ]
  },
  {
    "name": "Five Ways",
    "coords": [
      -1.9130708,
      52.4710941
    ]
  },
  {
    "name": "Small Heath",
    "coords": [
      -1.8593194,
      52.4636809
    ]
  },
  {
    "name": "Tyseley",
    "coords": [
      -1.8385604,
      52.4539238
    ]
  },
  {
    "name": "Acocks Green",
    "coords": [
      -1.8192378,
      52.4495299
    ]
  },
  {
    "name": "Hamstead",
    "coords": [
      -1.9288687,
      52.5309945
    ]
  },
  {
    "name": "Ashfield",
    "coords": [
      -4.2484588,
      55.8888403
    ]
  },
  {
    "name": "Possilpark and Parkhouse",
    "coords": [
      -4.2583527,
      55.890141
    ]
  },
  {
    "name": "Cowcaddens",
    "coords": [
      -4.2593895,
      55.8677878
    ]
  },
  {
    "name": "Blackpool South",
    "coords": [
      -3.0488911,
      53.7983538
    ]
  },
  {
    "name": "Duddeston",
    "coords": [
      -1.8712807,
      52.4884888
    ]
  },
  {
    "name": "Whitley Bay",
    "coords": [
      -1.442273,
      55.0397265
    ]
  },
  {
    "name": "Tynemouth",
    "coords": [
      -1.4288662,
      55.0170464
    ]
  },
  {
    "name": "Chichester",
    "coords": [
      -1.4320475,
      54.9866761
    ]
  },
  {
    "name": "Cullercoats",
    "coords": [
      -1.4363669,
      55.034999
    ]
  },
  {
    "name": "Monkseaton",
    "coords": [
      -1.4584698,
      55.042298
    ]
  },
  {
    "name": "West Monkseaton",
    "coords": [
      -1.4759796,
      55.0405469
    ]
  },
  {
    "name": "North Shields",
    "coords": [
      -1.4489628,
      55.0081382
    ]
  },
  {
    "name": "South Shields",
    "coords": [
      -1.4329872,
      54.9973681
    ]
  },
  {
    "name": "Tyne Dock",
    "coords": [
      -1.4416187,
      54.9761432
    ]
  },
  {
    "name": "Simonside",
    "coords": [
      -1.4554849,
      54.971707
    ]
  },
  {
    "name": "Station B",
    "coords": [
      -0.4857886,
      51.4798719
    ]
  },
  {
    "name": "Station A",
    "coords": [
      -0.4882479,
      51.4797899
    ]
  },
  {
    "name": "Aberystwyth Cliff Railway Upper Station",
    "coords": [
      -4.0827684,
      52.4243334
    ]
  },
  {
    "name": "Aberystwyth Cliff Railway Lower Station",
    "coords": [
      -4.0839049,
      52.4223809
    ]
  },
  {
    "name": "Henllan",
    "coords": [
      -4.3949566,
      52.040521
    ]
  },
  {
    "name": "Hebron",
    "coords": [
      -4.1180163,
      53.1045444
    ]
  },
  {
    "name": "Kingswear",
    "coords": [
      -3.5723937,
      50.34888
    ]
  },
  {
    "name": "Clyde Valley Station",
    "coords": [
      -3.8610189,
      55.6940364
    ]
  },
  {
    "name": "Preston Riverside",
    "coords": [
      -2.754002,
      53.7587057
    ]
  },
  {
    "name": "Pier",
    "coords": [
      -0.9707315,
      54.5861191
    ]
  },
  {
    "name": "Clogwyn",
    "coords": [
      -4.0803839,
      53.0841378
    ]
  },
  {
    "name": "Halfway",
    "coords": [
      -4.0960793,
      53.0955784
    ]
  },
  {
    "name": "Butterley",
    "coords": [
      -1.401268,
      53.0633087
    ]
  },
  {
    "name": "Humberston North Sea Lane",
    "coords": [
      0.0003892,
      53.5399931
    ]
  },
  {
    "name": "Riverside Station",
    "coords": [
      -3.6645247,
      50.5579041
    ]
  },
  {
    "name": "Kingsway Station",
    "coords": [
      -0.0168191,
      53.550671
    ]
  },
  {
    "name": "Lakeside Central",
    "coords": [
      -0.0095815,
      53.5436891
    ]
  },
  {
    "name": "Rowsley South",
    "coords": [
      -1.6096489,
      53.1745377
    ]
  },
  {
    "name": "South Station",
    "coords": [
      -1.4518349,
      50.8214669
    ]
  },
  {
    "name": "Silverdale",
    "coords": [
      -2.2658653,
      53.0329455
    ]
  },
  {
    "name": "Diss",
    "coords": [
      1.1235411,
      52.3736162
    ]
  },
  {
    "name": "Danzey",
    "coords": [
      -1.8208401,
      52.3247544
    ]
  },
  {
    "name": "Bolton-upon-Dearne",
    "coords": [
      -1.3114857,
      53.5188149
    ]
  },
  {
    "name": "Goldthorpe",
    "coords": [
      -1.3128969,
      53.5338284
    ]
  },
  {
    "name": "Thurnscoe",
    "coords": [
      -1.3083856,
      53.5455375
    ]
  },
  {
    "name": "Moorthorpe",
    "coords": [
      -1.3048115,
      53.5948943
    ]
  },
  {
    "name": "Normanton",
    "coords": [
      -1.4235073,
      53.7004001
    ]
  },
  {
    "name": "Snaith",
    "coords": [
      -1.0279398,
      53.6931673
    ]
  },
  {
    "name": "Whitley Bridge",
    "coords": [
      -1.1588897,
      53.6991292
    ]
  },
  {
    "name": "Knottingley",
    "coords": [
      -1.2592535,
      53.7064452
    ]
  },
  {
    "name": "Glasshoughton",
    "coords": [
      -1.3420479,
      53.7090568
    ]
  },
  {
    "name": "Pontefract Monkhill",
    "coords": [
      -1.3041376,
      53.6988004
    ]
  },
  {
    "name": "Castleford",
    "coords": [
      -1.3551009,
      53.7240751
    ]
  },
  {
    "name": "Goole",
    "coords": [
      -0.874258,
      53.7049682
    ]
  },
  {
    "name": "Thorne North",
    "coords": [
      -0.9724456,
      53.6161857
    ]
  },
  {
    "name": "Horden",
    "coords": [
      -1.3072209,
      54.7637615
    ]
  },
  {
    "name": "Bow Street",
    "coords": [
      -4.0303603,
      52.4399137
    ]
  },
  {
    "name": "Hadlow Down",
    "coords": [
      0.1922072,
      50.9958916
    ]
  },
  {
    "name": "Station 7504143540",
    "coords": [
      -1.0654981,
      53.1083163
    ]
  },
  {
    "name": "Sutton Hall Railway Station",
    "coords": [
      0.7243279,
      51.5693654
    ]
  },
  {
    "name": "Mortimer",
    "coords": [
      -1.0356438,
      51.3720595
    ]
  },
  {
    "name": "Bramley",
    "coords": [
      -1.0608367,
      51.3299792
    ]
  },
  {
    "name": "Livingston Mill",
    "coords": [
      -3.5485017,
      55.8852617
    ]
  },
  {
    "name": "Almondhaugh Halt",
    "coords": [
      -3.5553551,
      55.8847771
    ]
  },
  {
    "name": "Lionheart",
    "coords": [
      -1.6866887,
      55.4025681
    ]
  },
  {
    "name": "Pontprenshitw",
    "coords": [
      -4.4069336,
      52.0415956
    ]
  },
  {
    "name": "Weymouth Bay Miniature Railway",
    "coords": [
      -2.4455866,
      50.6258855
    ]
  },
  {
    "name": "Trago Central",
    "coords": [
      -3.6660642,
      50.5555299
    ]
  },
  {
    "name": "Much Natter",
    "coords": [
      -3.1007729,
      50.6976224
    ]
  },
  {
    "name": "Hall Drive",
    "coords": [
      -2.6047757,
      53.5689612
    ]
  },
  {
    "name": "Caldecotte Miniature Railway",
    "coords": [
      -0.7084561,
      52.0106337
    ]
  },
  {
    "name": "Mills Wood",
    "coords": [
      -0.7720564,
      51.1838357
    ]
  },
  {
    "name": "Burmarsh Road",
    "coords": [
      1.0040989,
      51.036039
    ]
  },
  {
    "name": "Dumbarton East",
    "coords": [
      -4.5540413,
      55.9423477
    ]
  },
  {
    "name": "Northampton",
    "coords": [
      -0.9069769,
      52.2373719
    ]
  },
  {
    "name": "Hawarden",
    "coords": [
      -3.0320721,
      53.1848468
    ]
  },
  {
    "name": "Station",
    "coords": [
      -1.3640883,
      50.9553976
    ]
  },
  {
    "name": "Cannock",
    "coords": [
      -2.0223507,
      52.6860971
    ]
  },
  {
    "name": "Perrygrove",
    "coords": [
      -2.6111685,
      51.7825235
    ]
  },
  {
    "name": "Oakiron",
    "coords": [
      -2.6102566,
      51.7824969
    ]
  },
  {
    "name": "Leyburn",
    "coords": [
      -1.8222392,
      54.308109
    ]
  },
  {
    "name": "Station 7756847448",
    "coords": [
      -0.9518419,
      51.3584485
    ]
  },
  {
    "name": "Shakespeare Line Warwick Road",
    "coords": [
      -1.843698,
      52.4544518
    ]
  },
  {
    "name": "California Crossing",
    "coords": [
      -1.9292816,
      51.985948
    ]
  },
  {
    "name": "Witton",
    "coords": [
      -1.8839327,
      52.512194
    ]
  },
  {
    "name": "Earlswood",
    "coords": [
      -1.8614034,
      52.3665989
    ]
  },
  {
    "name": "The Lakes",
    "coords": [
      -1.8446544,
      52.3590972
    ]
  },
  {
    "name": "Inverness Airport",
    "coords": [
      -4.055475,
      57.5333636
    ]
  },
  {
    "name": "Kingsbridge Park Side",
    "coords": [
      -3.774543,
      50.2804339
    ]
  },
  {
    "name": "Kingsbridge Ria End",
    "coords": [
      -3.7755376,
      50.2822457
    ]
  },
  {
    "name": "Wickham Market",
    "coords": [
      1.3986272,
      52.1510336
    ]
  },
  {
    "name": "Alexandra Palace",
    "coords": [
      -0.1206625,
      51.5982024
    ]
  },
  {
    "name": "New Southgate",
    "coords": [
      -0.1428091,
      51.613804
    ]
  },
  {
    "name": "Oakleigh Park",
    "coords": [
      -0.1662251,
      51.6376675
    ]
  },
  {
    "name": "New Barnet",
    "coords": [
      -0.1726236,
      51.6482779
    ]
  },
  {
    "name": "Sundridge Park",
    "coords": [
      0.021475,
      51.4139567
    ]
  },
  {
    "name": "West Norwood",
    "coords": [
      -0.1034911,
      51.4316272
    ]
  },
  {
    "name": "Gipsy Hill",
    "coords": [
      -0.0840424,
      51.4245334
    ]
  },
  {
    "name": "Birkbeck",
    "coords": [
      -0.0565394,
      51.4034563
    ]
  },
  {
    "name": "East Dulwich",
    "coords": [
      -0.0807982,
      51.4610374
    ]
  },
  {
    "name": "South Greenford",
    "coords": [
      -0.3364379,
      51.5332032
    ]
  },
  {
    "name": "Castle Bar Park",
    "coords": [
      -0.3315024,
      51.5228669
    ]
  },
  {
    "name": "Drayton Green",
    "coords": [
      -0.3301943,
      51.5163854
    ]
  },
  {
    "name": "Windsor and Eton Central",
    "coords": [
      -0.6105638,
      51.4832744
    ]
  },
  {
    "name": "Tinkers Lane",
    "coords": [
      0.1914099,
      50.9952313
    ]
  },
  {
    "name": "Blake Street",
    "coords": [
      -1.8446597,
      52.6043776
    ]
  },
  {
    "name": "Depot Approach",
    "coords": [
      -0.2807018,
      51.5042491
    ]
  },
  {
    "name": "Ealing End",
    "coords": [
      -0.2817182,
      51.5054114
    ]
  },
  {
    "name": "Killington Lane",
    "coords": [
      -3.9036851,
      51.1967627
    ]
  },
  {
    "name": "Woody Bay",
    "coords": [
      -3.8874256,
      51.2017482
    ]
  },
  {
    "name": "Wrexham General",
    "coords": [
      -3.0015161,
      53.0505698
    ]
  },
  {
    "name": "Ashford International",
    "coords": [
      0.8752323,
      51.143379
    ]
  },
  {
    "name": "Colchester",
    "coords": [
      0.8924554,
      51.9005793
    ]
  },
  {
    "name": "Cramlington",
    "coords": [
      -1.5986832,
      55.0877627
    ]
  },
  {
    "name": "Woodbridge",
    "coords": [
      1.3178856,
      52.0902961
    ]
  },
  {
    "name": "Station 8076043299",
    "coords": [
      0.5876955,
      50.8556592
    ]
  },
  {
    "name": "Knowsley Safari Park Train Station",
    "coords": [
      -2.8151829,
      53.4369651
    ]
  },
  {
    "name": "Luton DART Parkway",
    "coords": [
      -0.3951825,
      51.8726445
    ]
  },
  {
    "name": "Central Terminal",
    "coords": [
      -0.3737972,
      51.8785942
    ]
  },
  {
    "name": "Kumali",
    "coords": [
      -0.8068088,
      54.2111863
    ]
  },
  {
    "name": "Zoo",
    "coords": [
      -0.8036184,
      54.2087968
    ]
  },
  {
    "name": "Plaza",
    "coords": [
      -0.8078347,
      54.2094998
    ]
  },
  {
    "name": "Old Hill",
    "coords": [
      -2.0561814,
      52.4707939
    ]
  },
  {
    "name": "Coseley",
    "coords": [
      -2.0858098,
      52.5453191
    ]
  },
  {
    "name": "Spring Road",
    "coords": [
      -1.8362585,
      52.444262
    ]
  },
  {
    "name": "Thompson Green station (MR2)",
    "coords": [
      0.7609321,
      51.9250992
    ]
  },
  {
    "name": "Hag Fold",
    "coords": [
      -2.4938302,
      53.5335276
    ]
  },
  {
    "name": "Golding Spring Central",
    "coords": [
      -0.9228506,
      51.8625389
    ]
  },
  {
    "name": "Henllan High Level",
    "coords": [
      -4.3952567,
      52.0400325
    ]
  },
  {
    "name": "Adderley Park",
    "coords": [
      -1.8551418,
      52.4830865
    ]
  },
  {
    "name": "Marsh Barton",
    "coords": [
      -3.521486,
      50.7043896
    ]
  },
  {
    "name": "Foxfield Colliery",
    "coords": [
      -2.0369415,
      52.9984067
    ]
  },
  {
    "name": "Wootton Wawen",
    "coords": [
      -1.7845997,
      52.2658372
    ]
  },
  {
    "name": "Hall Green",
    "coords": [
      -1.8455704,
      52.4369843
    ]
  },
  {
    "name": "Olton",
    "coords": [
      -1.804385,
      52.4384167
    ]
  },
  {
    "name": "Station 8382226307",
    "coords": [
      -1.5607643,
      53.7300054
    ]
  },
  {
    "name": "Station 8382281520",
    "coords": [
      -0.8080105,
      54.2071578
    ]
  },
  {
    "name": "Birmingham Moor Street",
    "coords": [
      -1.8919518,
      52.4789357
    ]
  },
  {
    "name": "Marston Green",
    "coords": [
      -1.7550948,
      52.4668809
    ]
  },
  {
    "name": "Luton",
    "coords": [
      -0.4140848,
      51.8825271
    ]
  },
  {
    "name": "Weston Wharf",
    "coords": [
      -3.0428622,
      52.8415842
    ]
  },
  {
    "name": "Four Oaks",
    "coords": [
      -1.8280314,
      52.5795454
    ]
  },
  {
    "name": "Gilshochill",
    "coords": [
      -4.2824645,
      55.8972756
    ]
  },
  {
    "name": "Strathcarron",
    "coords": [
      -5.4285637,
      57.4227498
    ]
  },
  {
    "name": "Roose",
    "coords": [
      -3.1943835,
      54.1150592
    ]
  },
  {
    "name": "Station 8460797744",
    "coords": [
      -2.1989333,
      52.9607275
    ]
  },
  {
    "name": "Station 8460797803",
    "coords": [
      -2.1973282,
      52.956173
    ]
  },
  {
    "name": "Meols Cop",
    "coords": [
      -2.9752779,
      53.6460131
    ]
  },
  {
    "name": "Shirley",
    "coords": [
      -1.8451962,
      52.4035742
    ]
  },
  {
    "name": "Pye Corner",
    "coords": [
      -3.0412227,
      51.5813041
    ]
  },
  {
    "name": "Shepherdswell (EKMR)",
    "coords": [
      1.2299591,
      51.1891733
    ]
  },
  {
    "name": "Kingfisher Halt",
    "coords": [
      -1.9243093,
      54.7260089
    ]
  },
  {
    "name": "Rookwood",
    "coords": [
      -2.6127976,
      51.7850193
    ]
  },
  {
    "name": "Tulse Hill",
    "coords": [
      -0.1048466,
      51.4399271
    ]
  },
  {
    "name": "Whitrope Siding",
    "coords": [
      -2.7482498,
      55.2938104
    ]
  },
  {
    "name": "Headbolt Lane",
    "coords": [
      -2.8837132,
      53.4915834
    ]
  },
  {
    "name": "Reading Green Park",
    "coords": [
      -1.0013637,
      51.4265936
    ]
  },
  {
    "name": "Portslade",
    "coords": [
      -0.2052986,
      50.8357626
    ]
  },
  {
    "name": "Waterside Station",
    "coords": [
      -1.5432862,
      52.7388088
    ]
  },
  {
    "name": "Greenrigg Halt",
    "coords": [
      -1.6603872,
      55.396437
    ]
  },
  {
    "name": "Berwyn",
    "coords": [
      -3.1950487,
      52.979942
    ]
  },
  {
    "name": "Deeside Halt",
    "coords": [
      -3.2301065,
      52.9727965
    ]
  },
  {
    "name": "Glyndyfrdwy",
    "coords": [
      -3.2674053,
      52.9766183
    ]
  },
  {
    "name": "Carrog",
    "coords": [
      -3.314922,
      52.981703
    ]
  },
  {
    "name": "Cedarbarn",
    "coords": [
      -0.7504915,
      54.2379744
    ]
  },
  {
    "name": "Brent Cross West",
    "coords": [
      -0.2265437,
      51.5688188
    ]
  },
  {
    "name": "Appleby",
    "coords": [
      -0.6224048,
      53.5866845
    ]
  },
  {
    "name": "Paddington",
    "coords": [
      -0.1780541,
      51.5163921
    ]
  },
  {
    "name": "Whitehead Lane",
    "coords": [
      -2.4435015,
      53.4945115
    ]
  },
  {
    "name": "Trencherbone Platform",
    "coords": [
      -2.4458362,
      53.4954145
    ]
  },
  {
    "name": "Puxton Park",
    "coords": [
      -2.8673149,
      51.3618222
    ]
  },
  {
    "name": "Station 9079211824",
    "coords": [
      -4.0042878,
      51.1886258
    ]
  },
  {
    "name": "Canary Wharf (Elizabeth line)",
    "coords": [
      -0.0176241,
      51.5061102
    ]
  },
  {
    "name": "Nine Elms",
    "coords": [
      -0.1296937,
      51.4801837
    ]
  },
  {
    "name": "Battersea Power Station",
    "coords": [
      -0.1429709,
      51.4796154
    ]
  },
  {
    "name": "Station 9170022077",
    "coords": [
      -2.2360818,
      52.860256
    ]
  },
  {
    "name": "Wilmcote",
    "coords": [
      -1.7557915,
      52.2225644
    ]
  },
  {
    "name": "Barking Riverside",
    "coords": [
      0.1160126,
      51.5195582
    ]
  },
  {
    "name": "Alvechurch",
    "coords": [
      -1.9679877,
      52.3468339
    ]
  },
  {
    "name": "Threlkeld Quarry",
    "coords": [
      -3.0439443,
      54.6085896
    ]
  },
  {
    "name": "Threlkeld Quarry Station",
    "coords": [
      -3.0440881,
      54.6110501
    ]
  },
  {
    "name": "Aspatria",
    "coords": [
      -3.3318813,
      54.7589539
    ]
  },
  {
    "name": "Corkickle",
    "coords": [
      -3.5821304,
      54.5416692
    ]
  },
  {
    "name": "Parton",
    "coords": [
      -3.5807799,
      54.5704232
    ]
  },
  {
    "name": "Cynghordy",
    "coords": [
      -3.7484924,
      52.0514771
    ]
  },
  {
    "name": "Portway Park and Ride",
    "coords": [
      -2.6875586,
      51.4881079
    ]
  },
  {
    "name": "Llanhilleth",
    "coords": [
      -3.1334485,
      51.6999036
    ]
  },
  {
    "name": "Crosskeys",
    "coords": [
      -3.1258367,
      51.6207575
    ]
  },
  {
    "name": "Yardley Wood",
    "coords": [
      -1.8545598,
      52.421023
    ]
  },
  {
    "name": "Reston",
    "coords": [
      -2.1926024,
      55.849914
    ]
  },
  {
    "name": "Gresford (WDSME)",
    "coords": [
      -2.9784405,
      53.0738888
    ]
  },
  {
    "name": "Whipsnade Central",
    "coords": [
      -0.5415762,
      51.8461109
    ]
  },
  {
    "name": "Farringdon",
    "coords": [
      -0.1040013,
      51.519696
    ]
  },
  {
    "name": "Liverpool Street",
    "coords": [
      -0.0838044,
      51.5176297
    ]
  },
  {
    "name": "Whitechapel",
    "coords": [
      -0.0578614,
      51.5203109
    ]
  },
  {
    "name": "Custom House",
    "coords": [
      0.0272279,
      51.5098025
    ]
  },
  {
    "name": "Bond Street",
    "coords": [
      -0.1490563,
      51.514033
    ]
  },
  {
    "name": "Tottenham Court Road",
    "coords": [
      -0.1305917,
      51.515401
    ]
  },
  {
    "name": "Abbey Wood",
    "coords": [
      0.1201967,
      51.491102
    ]
  },
  {
    "name": "Station 9772115517",
    "coords": [
      -2.642275,
      51.4527313
    ]
  },
  {
    "name": "Kearsley",
    "coords": [
      -2.3754601,
      53.5445108
    ]
  },
  {
    "name": "Ashton-under-Lyne",
    "coords": [
      -2.09355,
      53.4911925
    ]
  },
  {
    "name": "Ince",
    "coords": [
      -2.6127432,
      53.539096
    ]
  },
  {
    "name": "Hindley",
    "coords": [
      -2.5748804,
      53.542391
    ]
  },
  {
    "name": "Patricroft",
    "coords": [
      -2.3573446,
      53.4848233
    ]
  },
  {
    "name": "Heald Green",
    "coords": [
      -2.2366797,
      53.3694132
    ]
  },
  {
    "name": "Mauldeth Road",
    "coords": [
      -2.208947,
      53.4336613
    ]
  },
  {
    "name": "North Thoresby",
    "coords": [
      -0.040372,
      53.4675548
    ]
  },
  {
    "name": "Station 9968666754",
    "coords": [
      -0.013182,
      51.6995763
    ]
  },
  {
    "name": "Royal Gunpowder Mills Railway",
    "coords": [
      -0.0119197,
      51.6941293
    ]
  },
  {
    "name": "Moseley Junction (High Level)",
    "coords": [
      -5.2468577,
      50.2397196
    ]
  },
  {
    "name": "Moseley Junction (Low Level)",
    "coords": [
      -5.2470171,
      50.2397034
    ]
  },
  {
    "name": "Paul's Loop",
    "coords": [
      -5.246274,
      50.2402266
    ]
  },
  {
    "name": "Common Lane",
    "coords": [
      -2.4024297,
      50.9949551
    ]
  },
  {
    "name": "Pinesway Junction",
    "coords": [
      -2.4036374,
      50.9936437
    ]
  },
  {
    "name": "Central Station",
    "coords": [
      -3.5033404,
      53.3137652
    ]
  },
  {
    "name": "Swanley New Barn Miniature Railway",
    "coords": [
      0.171652,
      51.4056227
    ]
  },
  {
    "name": "Hamilton Square",
    "coords": [
      -3.0140763,
      53.3943237
    ]
  },
  {
    "name": "Conway Park",
    "coords": [
      -3.0230881,
      53.3935254
    ]
  },
  {
    "name": "Birkenhead Park",
    "coords": [
      -3.0398169,
      53.3975951
    ]
  },
  {
    "name": "Birkenhead North",
    "coords": [
      -3.0579268,
      53.404707
    ]
  },
  {
    "name": "Bidston",
    "coords": [
      -3.078782,
      53.4093577
    ]
  },
  {
    "name": "Meols",
    "coords": [
      -3.1539246,
      53.3994382
    ]
  },
  {
    "name": "Manor Road",
    "coords": [
      -3.1700493,
      53.3949574
    ]
  },
  {
    "name": "Hoylake",
    "coords": [
      -3.1788231,
      53.3899025
    ]
  },
  {
    "name": "West Kirby",
    "coords": [
      -3.1837893,
      53.3734193
    ]
  },
  {
    "name": "Wallasey Village",
    "coords": [
      -3.0691606,
      53.4229804
    ]
  },
  {
    "name": "Wallasey Grove Road",
    "coords": [
      -3.0697346,
      53.4284435
    ]
  },
  {
    "name": "Rock Ferry",
    "coords": [
      -3.0108212,
      53.3728002
    ]
  },
  {
    "name": "Bebington",
    "coords": [
      -3.0030663,
      53.3576614
    ]
  },
  {
    "name": "Spital",
    "coords": [
      -2.9940923,
      53.3400511
    ]
  },
  {
    "name": "Bromborough",
    "coords": [
      -2.9868878,
      53.3218579
    ]
  },
  {
    "name": "Eastham Rake",
    "coords": [
      -2.981272,
      53.3075725
    ]
  },
  {
    "name": "Hooton",
    "coords": [
      -2.9773177,
      53.2969936
    ]
  },
  {
    "name": "Little Sutton",
    "coords": [
      -2.9431269,
      53.2853509
    ]
  },
  {
    "name": "Overpool",
    "coords": [
      -2.9249263,
      53.2840873
    ]
  },
  {
    "name": "Capenhurst",
    "coords": [
      -2.9426005,
      53.260233
    ]
  },
  {
    "name": "Bache",
    "coords": [
      -2.8913945,
      53.2082623
    ]
  },
  {
    "name": "Copsewood Miniature Railway",
    "coords": [
      -1.4624777,
      52.4000212
    ]
  },
  {
    "name": "Ryton Pools Miniature Railway",
    "coords": [
      -1.4553489,
      52.3493154
    ]
  },
  {
    "name": "Murthwaite Halt",
    "coords": [
      -3.3619494,
      54.3806285
    ]
  },
  {
    "name": "Broomy Hill",
    "coords": [
      -2.7351338,
      52.0491983
    ]
  },
  {
    "name": "Cardiff Queen Street",
    "coords": [
      -3.1702926,
      51.4820022
    ]
  },
  {
    "name": "Barrhead",
    "coords": [
      -4.3974133,
      55.8038509
    ]
  },
  {
    "name": "Kirkhill",
    "coords": [
      -4.1673394,
      55.8140092
    ]
  },
  {
    "name": "Swanwick Junction",
    "coords": [
      -1.3838589,
      53.0639519
    ]
  },
  {
    "name": "St Helens Central",
    "coords": [
      -2.7299776,
      53.4526608
    ]
  },
  {
    "name": "Station 10277778506",
    "coords": [
      0.5670252,
      50.8671948
    ]
  },
  {
    "name": "Grotto Halt",
    "coords": [
      -1.5063236,
      52.3739177
    ]
  },
  {
    "name": "Willesden Junction High Level",
    "coords": [
      -0.2432136,
      51.5320922
    ]
  },
  {
    "name": "Willesden Junction Low Level",
    "coords": [
      -0.2443729,
      51.5323881
    ]
  },
  {
    "name": "Statfold Junction",
    "coords": [
      -1.6457952,
      52.65534
    ]
  },
  {
    "name": "Oak Tree Halt",
    "coords": [
      -1.6422322,
      52.6515328
    ]
  },
  {
    "name": "Cogan Halt",
    "coords": [
      -1.6362501,
      52.6528103
    ]
  },
  {
    "name": "Mallard Halt",
    "coords": [
      -1.645068,
      52.6497777
    ]
  },
  {
    "name": "Lurgan",
    "coords": [
      -6.33812,
      54.4672236
    ]
  },
  {
    "name": "Botanic",
    "coords": [
      -5.9326473,
      54.5883819
    ]
  },
  {
    "name": "Whitehead Excursion",
    "coords": [
      -5.710925,
      54.7560183
    ]
  },
  {
    "name": "Corwen",
    "coords": [
      -3.3711545,
      52.9818258
    ]
  },
  {
    "name": "Barassie",
    "coords": [
      -4.6514783,
      55.5617266
    ]
  },
  {
    "name": "Ayr",
    "coords": [
      -4.6258275,
      55.4582668
    ]
  },
  {
    "name": "Little Ruddington",
    "coords": [
      -1.1487445,
      52.885603
    ]
  },
  {
    "name": "Lakeside",
    "coords": [
      -1.8509193,
      50.8508845
    ]
  },
  {
    "name": "Kingsmere",
    "coords": [
      -1.8536555,
      50.8536434
    ]
  },
  {
    "name": "Pleasurewood Hills",
    "coords": [
      1.744004,
      52.5071639
    ]
  },
  {
    "name": "Station 11060342471",
    "coords": [
      1.7468986,
      52.5083631
    ]
  },
  {
    "name": "Station 11060481226",
    "coords": [
      1.745394,
      52.5085011
    ]
  },
  {
    "name": "Station 11060716813",
    "coords": [
      1.7478716,
      52.5075288
    ]
  },
  {
    "name": "Leven",
    "coords": [
      -3.0022502,
      56.19246
    ]
  },
  {
    "name": "Springy's Railroad",
    "coords": [
      -0.1249298,
      52.7989647
    ]
  },
  {
    "name": "Station 11193057323",
    "coords": [
      -1.5058243,
      52.3735547
    ]
  },
  {
    "name": "Midgeway",
    "coords": [
      -1.5054448,
      52.374288
    ]
  },
  {
    "name": "Quarry Siding Halt",
    "coords": [
      -3.988765,
      52.6265065
    ]
  },
  {
    "name": "Howard's Halt",
    "coords": [
      -1.1110145,
      51.4983202
    ]
  },
  {
    "name": "East Linton",
    "coords": [
      -2.6621772,
      55.9868712
    ]
  },
  {
    "name": "Weybourne",
    "coords": [
      1.1501325,
      52.932799
    ]
  },
  {
    "name": "Somerleyton",
    "coords": [
      1.6521994,
      52.5101722
    ]
  },
  {
    "name": "Newbridge",
    "coords": [
      -3.1430645,
      51.6656994
    ]
  },
  {
    "name": "Middle Engine Lane",
    "coords": [
      -1.4958574,
      55.0154743
    ]
  },
  {
    "name": "Station 11828605433",
    "coords": [
      -1.5564872,
      53.494503
    ]
  },
  {
    "name": "Turf Moor Halt",
    "coords": [
      -0.8616583,
      53.6205255
    ]
  },
  {
    "name": "Earl's Halt",
    "coords": [
      -4.1759675,
      50.3569049
    ]
  }
]

const herons = [
  {
    "name": "Heron Foods",
    "coords": [
      -1.6640568,
      53.6802832
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.6298447,
      53.6901106
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.9908069,
      52.613211
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.2355188,
      54.5768161
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.2429939,
      54.5607097
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.8847115,
      52.5408979
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.6040547,
      54.9628405
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.1703683,
      53.9112868
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.1274132,
      52.557671
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.2935413,
      54.2103286
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.528095,
      54.4825152
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.6158085,
      54.4856391
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.2274186,
      52.9648218
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.1775276,
      52.9035167
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.1972355,
      53.0007729
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.7240247,
      53.2950262
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.6206744,
      53.7956584
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.1391719,
      52.6040963
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.5483084,
      54.6436205
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.3109222,
      53.4452055
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.9703007,
      52.4163376
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.0883293,
      53.971795
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.4348615,
      53.7234503
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.1950262,
      53.5637497
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.021291,
      52.9803552
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.4968288,
      54.7139479
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.4138581,
      53.7806695
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.9009385,
      52.2630255
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5833495,
      55.33388
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.6748415,
      54.6643154
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.9240339,
      54.5430228
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5792193,
      54.5340735
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.4256643,
      53.418446
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.7359883,
      54.4030036
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5220385,
      54.9130332
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5738425,
      54.8547721
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.0083721,
      53.2040466
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.7975541,
      54.1360652
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.9625136,
      53.6117791
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.4069865,
      54.9722975
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5096206,
      55.1267665
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.437526,
      54.9891912
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.4381727,
      54.9980054
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5461501,
      54.9410654
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5713373,
      54.9495647
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5994555,
      54.936284
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.677956,
      54.9462807
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.8499669,
      54.9616262
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.5890413,
      54.5486621
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.6926,
      52.3080981
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.6980119,
      53.7607488
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.0420448,
      53.8771138
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5626394,
      54.9738108
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5457372,
      54.9741565
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.3773574,
      52.7687934
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.1638963,
      52.2577857
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.0146085,
      53.9210674
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      0.0329254,
      53.7304634
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.9494794,
      53.4432079
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.9930858,
      53.4525771
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5441383,
      53.8021018
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.859259,
      53.722923
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.0406244,
      52.4757001
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.9652186,
      53.4006224
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.375688,
      53.7435864
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.4498517,
      52.9304357
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.2883952,
      53.48837
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.124608,
      53.9552779
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.930367,
      52.4167638
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.1280226,
      53.0133117
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.7465314,
      54.714783
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.2929548,
      54.6070821
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.8390713,
      53.4111243
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.7393178,
      52.4801129
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.1897196,
      54.0833067
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.1980598,
      53.1456999
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.4720878,
      54.8444364
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.210402,
      53.3687561
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.0216235,
      51.6552373
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5910083,
      55.0113149
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5029858,
      54.9971222
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.1539225,
      52.7875193
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.4439864,
      53.6856405
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.2265738,
      54.1122316
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.9832951,
      52.5836574
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.6526086,
      55.0065452
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.4614616,
      54.9482581
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.0532423,
      54.5355403
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.3301445,
      53.4378448
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.0150953,
      51.5696938
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.1987474,
      53.7406576
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      0.3383907,
      53.1433026
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.6575653,
      53.7707238
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.640607,
      53.4519562
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.2334245,
      54.6548648
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.9031993,
      52.5178597
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.9338546,
      53.2016
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.7240286,
      53.4195752
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.7762755,
      53.399334
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.688183,
      55.00631
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.7981325,
      53.7829318
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.0996078,
      53.5494818
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.4481877,
      53.4190631
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.5987213,
      54.9491456
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.0309219,
      53.5591107
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.1129702,
      53.5419047
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -3.1198704,
      51.5205469
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.3209585,
      53.7867203
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.6364695,
      53.4864271
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.6646568,
      53.5615315
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.1507387,
      53.6161475
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.9412635,
      53.516655
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.1813347,
      54.549929
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.9340524,
      53.4244492
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.8717853,
      53.2077925
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.2620825,
      53.1252649
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.296402,
      53.5916735
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.5169938,
      53.4962158
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -0.0565812,
      53.5714061
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -1.991593,
      52.5174458
    ]
  },
  {
    "name": "Heron Foods",
    "coords": [
      -2.1450658,
      53.0339321
    ]
  },
  {
    "name": "Heron 8797571541",
    "coords": [
      -3.2681424,
      51.4058391
    ]
  },
  {
    "name": "Heron 2719996301",
    "coords": [
      -2.6763707,
      51.4896071
    ]
  },
  {
    "name": "Heron 3814457508",
    "coords": [
      -2.5982916,
      51.4415394
    ]
  },
  {
    "name": "Heron 1549087640",
    "coords": [
      -1.971842,
      52.4372426
    ]
  },
  {
    "name": "Heron 8384021007",
    "coords": [
      -2.9971625,
      53.0458867
    ]
  },
  {
    "name": "Heron 1360713479",
    "coords": [
      -1.9925203,
      52.4745189
    ]
  },
  {
    "name": "Heron 6268057612",
    "coords": [
      -2.0814831,
      52.5112481
    ]
  },
  {
    "name": "Heron 11931917531",
    "coords": [
      -2.0326305,
      52.5294856
    ]
  },
  {
    "name": "Heron 2652668506",
    "coords": [
      -2.0826527,
      52.5990309
    ]
  },
  {
    "name": "Heron 5640091963",
    "coords": [
      -2.0205257,
      52.5523732
    ]
  },
  {
    "name": "Heron 12151447096",
    "coords": [
      -1.7909299,
      52.49926
    ]
  },
  {
    "name": "Heron 6227219722",
    "coords": [
      -2.2349172,
      53.0402749
    ]
  },
  {
    "name": "Heron 6227219723",
    "coords": [
      -2.2350294,
      53.0403208
    ]
  },
  {
    "name": "Heron 347271781",
    "coords": [
      -2.1735361,
      53.0518184
    ]
  },
  {
    "name": "Heron 3400282453",
    "coords": [
      -2.4612308,
      53.1133818
    ]
  },
  {
    "name": "Heron 597845867",
    "coords": [
      -1.4634855,
      52.3889728
    ]
  },
  {
    "name": "Heron 1038147534",
    "coords": [
      -1.1324779,
      52.6371703
    ]
  },
  {
    "name": "Heron 771470510",
    "coords": [
      -1.4525348,
      52.8899324
    ]
  },
  {
    "name": "Heron 823076787",
    "coords": [
      -1.3089021,
      52.9743056
    ]
  },
  {
    "name": "Heron 2320842110",
    "coords": [
      -1.3024955,
      53.0174506
    ]
  },
  {
    "name": "Heron 369130447",
    "coords": [
      -1.341888,
      53.1057817
    ]
  },
  {
    "name": "Heron 495433965",
    "coords": [
      -1.1310376,
      52.9649973
    ]
  },
  {
    "name": "Heron 3412009107",
    "coords": [
      -1.1313594,
      52.9650094
    ]
  },
  {
    "name": "Heron 2092891925",
    "coords": [
      -1.2556879,
      52.9969995
    ]
  },
  {
    "name": "Heron 2351675973",
    "coords": [
      -1.1976817,
      52.9709486
    ]
  },
  {
    "name": "Heron 2370579110",
    "coords": [
      -1.174064,
      53.0104054
    ]
  },
  {
    "name": "Heron 943792824",
    "coords": [
      -1.0377053,
      52.9104172
    ]
  },
  {
    "name": "Heron 7806299882",
    "coords": [
      -1.2203093,
      53.144675
    ]
  },
  {
    "name": "Heron 4707238386",
    "coords": [
      -0.7025474,
      52.4880295
    ]
  },
  {
    "name": "Heron 3700769838",
    "coords": [
      -0.8158827,
      53.0620006
    ]
  },
  {
    "name": "Heron 1258158612",
    "coords": [
      -0.1172448,
      53.2085105
    ]
  },
  {
    "name": "Heron 3294576890",
    "coords": [
      -3.4891495,
      53.3196415
    ]
  },
  {
    "name": "Heron 3615169760",
    "coords": [
      -2.948129,
      53.3781669
    ]
  },
  {
    "name": "Heron 2547561931",
    "coords": [
      -3.1129752,
      53.4016803
    ]
  },
  {
    "name": "Heron 9866216058",
    "coords": [
      -3.0440632,
      53.4196454
    ]
  },
  {
    "name": "Heron 2696790727",
    "coords": [
      -3.022735,
      53.3901919
    ]
  },
  {
    "name": "Heron 10614437696",
    "coords": [
      -2.9710036,
      53.4399329
    ]
  },
  {
    "name": "Heron 4526871118",
    "coords": [
      -2.8042227,
      53.4293635
    ]
  },
  {
    "name": "Heron 11011190093",
    "coords": [
      -2.7256002,
      53.3678239
    ]
  },
  {
    "name": "Heron 9005096387",
    "coords": [
      -2.5929121,
      53.3894628
    ]
  },
  {
    "name": "Heron 7354994776",
    "coords": [
      -2.5871018,
      53.3986798
    ]
  },
  {
    "name": "Heron 1152550314",
    "coords": [
      -2.6697171,
      53.5217045
    ]
  },
  {
    "name": "Heron 11291261010",
    "coords": [
      -2.5420092,
      53.5119675
    ]
  },
  {
    "name": "Heron 1598692618",
    "coords": [
      -3.0542885,
      53.8148043
    ]
  },
  {
    "name": "Heron 3876051588",
    "coords": [
      -3.0518604,
      53.8203488
    ]
  },
  {
    "name": "Heron 3546407428",
    "coords": [
      -3.0397648,
      53.8520156
    ]
  },
  {
    "name": "Heron 11051244748",
    "coords": [
      -2.2631382,
      53.3793489
    ]
  },
  {
    "name": "Heron 4722348656",
    "coords": [
      -2.4676738,
      53.5142316
    ]
  },
  {
    "name": "Heron 9668876578",
    "coords": [
      -2.4642313,
      53.5678474
    ]
  },
  {
    "name": "Heron 6870138277",
    "coords": [
      -2.429988,
      53.5771994
    ]
  },
  {
    "name": "Heron 6562440941",
    "coords": [
      -2.411877,
      53.5879642
    ]
  },
  {
    "name": "Heron 4967261115",
    "coords": [
      -2.3956082,
      53.5478475
    ]
  },
  {
    "name": "Heron 3641211201",
    "coords": [
      -1.8217182,
      53.8055918
    ]
  },
  {
    "name": "Heron 2395637761",
    "coords": [
      -1.832743,
      54.8516214
    ]
  },
  {
    "name": "Heron 4980314328",
    "coords": [
      -1.6981473,
      54.8695098
    ]
  },
  {
    "name": "Heron 194214822",
    "coords": [
      -1.5014838,
      53.4031926
    ]
  },
  {
    "name": "Heron 1614601618",
    "coords": [
      -1.479548,
      53.4316635
    ]
  },
  {
    "name": "Heron 361687292",
    "coords": [
      -1.4652684,
      53.3229739
    ]
  },
  {
    "name": "Heron 671720027",
    "coords": [
      -1.44869,
      53.3556167
    ]
  },
  {
    "name": "Heron 11245573191",
    "coords": [
      -1.4645821,
      53.3838689
    ]
  },
  {
    "name": "Heron 666138086",
    "coords": [
      -1.400879,
      53.3487023
    ]
  },
  {
    "name": "Heron 1346730600",
    "coords": [
      -1.3564935,
      53.4326336
    ]
  },
  {
    "name": "Heron 6586852321",
    "coords": [
      -1.343732,
      53.460052
    ]
  },
  {
    "name": "Heron 9799289658",
    "coords": [
      -1.2904539,
      53.4935893
    ]
  },
  {
    "name": "Heron 9885672371",
    "coords": [
      -1.4373861,
      53.5005654
    ]
  },
  {
    "name": "Heron 7252890959",
    "coords": [
      -1.4001721,
      53.5237135
    ]
  },
  {
    "name": "Heron 8979490185",
    "coords": [
      -1.2898734,
      53.595018
    ]
  },
  {
    "name": "Heron 9631584418",
    "coords": [
      -1.1995594,
      53.4238617
    ]
  },
  {
    "name": "Heron 7169063072",
    "coords": [
      -1.078511,
      53.4780608
    ]
  },
  {
    "name": "Heron 5100628149",
    "coords": [
      -1.1332843,
      53.5242401
    ]
  },
  {
    "name": "Heron 2484397459",
    "coords": [
      -1.5898022,
      53.7970984
    ]
  },
  {
    "name": "Heron 6584366275",
    "coords": [
      -1.5243574,
      53.8025705
    ]
  },
  {
    "name": "Heron 5876791043",
    "coords": [
      -1.5100453,
      53.8091238
    ]
  },
  {
    "name": "Heron 3167949013",
    "coords": [
      -1.4497957,
      53.8068442
    ]
  },
  {
    "name": "Heron 305716058",
    "coords": [
      -1.3514382,
      53.7262234
    ]
  },
  {
    "name": "Heron 3075957145",
    "coords": [
      -0.0037594,
      53.3675242
    ]
  },
  {
    "name": "Heron 11230880951",
    "coords": [
      -0.4308555,
      53.8420617
    ]
  },
  {
    "name": "Heron 3087593652",
    "coords": [
      -0.4154464,
      53.7536675
    ]
  },
  {
    "name": "Heron 2482673237",
    "coords": [
      -0.3436698,
      53.7441035
    ]
  },
  {
    "name": "Heron 3054397583",
    "coords": [
      -0.3802657,
      53.7779081
    ]
  },
  {
    "name": "Heron 3585438719",
    "coords": [
      -0.3585508,
      53.7623908
    ]
  },
  {
    "name": "Heron 3105957281",
    "coords": [
      -0.3280481,
      53.8051223
    ]
  },
  {
    "name": "Heron 3095384033",
    "coords": [
      -0.3111161,
      53.7548134
    ]
  },
  {
    "name": "Heron 3095384040",
    "coords": [
      -0.3113106,
      53.7550437
    ]
  },
  {
    "name": "Heron 3080642565",
    "coords": [
      -0.2729217,
      53.7576167
    ]
  },
  {
    "name": "Heron 3023022121",
    "coords": [
      -0.2649448,
      53.7715109
    ]
  },
  {
    "name": "Heron 3023022128",
    "coords": [
      -0.2652553,
      53.7716134
    ]
  },
  {
    "name": "Heron 4355281149",
    "coords": [
      -0.2682582,
      53.7765177
    ]
  },
  {
    "name": "Heron 2592200160",
    "coords": [
      -1.342721,
      54.2333972
    ]
  },
  {
    "name": "Heron 1281852697",
    "coords": [
      -1.3144636,
      54.5654738
    ]
  },
  {
    "name": "Heron 11262399269",
    "coords": [
      -1.343131,
      54.58759
    ]
  },
  {
    "name": "Heron 1153279433",
    "coords": [
      -1.3248386,
      54.5895023
    ]
  },
  {
    "name": "Heron 300057771",
    "coords": [
      -1.5765026,
      54.7994559
    ]
  },
  {
    "name": "Heron 4993459180",
    "coords": [
      -1.6288333,
      54.8188488
    ]
  },
  {
    "name": "Heron 4352705944",
    "coords": [
      -1.47553,
      54.956496
    ]
  },
  {
    "name": "Heron 1897252976",
    "coords": [
      -1.4524031,
      54.8210455
    ]
  },
  {
    "name": "Heron 4032708231",
    "coords": [
      -1.4266146,
      54.8755042
    ]
  },
  {
    "name": "Heron 4034882198",
    "coords": [
      -1.4287382,
      54.9014286
    ]
  },
  {
    "name": "Heron 11186136149",
    "coords": [
      -1.3833367,
      54.9052199
    ]
  },
  {
    "name": "Heron 11186136154",
    "coords": [
      -1.3834842,
      54.9049998
    ]
  },
  {
    "name": "Heron 6325929188",
    "coords": [
      -1.0626895,
      54.6179658
    ]
  },
  {
    "name": "Heron 3136120939",
    "coords": [
      -0.3990863,
      54.2828856
    ]
  },
  {
    "name": "Heron 4755957061",
    "coords": [
      -1.7170687,
      54.9950818
    ]
  },
  {
    "name": "Heron 4755957062",
    "coords": [
      -1.7165611,
      54.9949955
    ]
  },
  {
    "name": "Heron 4185103800",
    "coords": [
      -1.6175484,
      54.9710039
    ]
  },
  {
    "name": "Heron 4630400391",
    "coords": [
      -1.5329994,
      54.9909517
    ]
  },
  {
    "name": "Heron 2922338935",
    "coords": [
      -1.517166,
      55.0337506
    ]
  },
  {
    "name": "Heron 4548425055",
    "coords": [
      -1.4482184,
      55.009093
    ]
  },
  {
    "name": "Heron 1813243717",
    "coords": [
      0.5114855,
      52.3430732
    ]
  },
  {
    "name": "Heron 2409791370",
    "coords": [
      0.0886327,
      52.5504704
    ]
  },
  {
    "name": "Heron 4062668187",
    "coords": [
      0.1619538,
      52.6651554
    ]
  },
  {
    "name": "Heron 2255756244",
    "coords": [
      0.3984743,
      52.7538915
    ]
  },
  {
    "name": "Heron 2407423159",
    "coords": [
      0.2591293,
      53.3414716
    ]
  }
]



export const presets = {
  postboxes: postboxes,
  capitals: capitals,
  airports: airports,
  stadiums: stadiums,
  stations: stations,
  herons: herons,
}
// https://overpass-turbo.eu/
