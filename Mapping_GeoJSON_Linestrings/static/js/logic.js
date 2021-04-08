// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",    maxZoom: 18,
    id: "mapbox/outdoors-v11",
    maxZoom : 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

  // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/dornabdi/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/majorAirports.json";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style: myStyle, 
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
      + feature.properties.dst + "<h3>");
    }
  })
.addTo(map);
});


// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//  console.log(city)
// });




// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);


// let  sanFranAirport = 
// {"type": "FeatureCollection", "features": [{
//     "type": "Feature",
//     "properties": {
//         "id": "3469",
//         "name": "San Francisco International Airport",
//         "city" : "San Francisco",
//         "country" : "United States",
//         "faa" : "SFO",
//         "icao" : "KSFO",
//         "alt" : "13",
//         "tz-offset": "-8",
//         "fst" : "A",
//         "tz" : "America/Los_Angeles"},
//         "geometry" :{
//               "type": "Point",
//               "coordinates": [-122.375, 37.61899948120117]}}
//       ]};

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


// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup()
//     .bindPopup("<h2>" + feature.properties.faa + feature.properties.name + "</h2>")

    
//   }

// }).addTo(map);

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




