// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

let  sanFranAirport = 
{"type": "FeatureCollection", "features": [{
    "type": "Feature",
    "properties": {
        "id": "3469",
        "name": "San Francisco International Airport",
        "city" : "San Francisco",
        "country" : "United States",
        "faa" : "SFO",
        "icao" : "KSFO",
        "alt" : "13",
        "tz-offset": "-8",
        "fst" : "A",
        "tz" : "America/Los_Angeles"},
        "geometry" :{
              "type": "Point",
              "coordinates": [-122.375, 37.61899948120117]}}
      ]};

// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>")
//     ;
//   }

// }).addTo(map);


// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup()
    .bindPopup("<h2>" + feature.properties.faa + feature.properties.name + "</h2>")

    
  }

}).addTo(map);

// // Coordinates for each point to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];
// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",    maxZoom: 18,
    id: "mapbox/outdoors-v11",
    accessToken: API_KEY
  });


  
// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
 console.log(city)
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

