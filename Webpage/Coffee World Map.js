// Create a map object
var myMap = L.map("map", {
  center: [0,0],
  zoom: 10

});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Team Lecajadedamita",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(Exports) {
  return (Exports / 60);
}

// Each city object contains the city's name, location and population
var Country = [
  {
    name: "Ethopia",
    location: [9.1450005, 40.4896736],
    Exports: 6400000
  },
  {
    name: "Indonesia",
    location: [-0.789275, 113.9213257],
    Exports: 11000000
  },
  {
    name: "Uganda/Africa",
    location: [-30.5594826, 22.9375057],
    Exports: 4800000
  },
  {
    name: "Phillipine",
    location: [12.8797207, 121.7740173],
    Exports: 3971883
  },
  {

    name: "Vietnam",
    location: [14.0583239, 108.2771988],
    Exports: 27500000

   
  }
];

// Loop through the Country array and create one marker for each crountry object
for (var i = 0; i < Country.length; i++) {

  console.log(Country[i].Exports);

  L.circle(Country[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its Exports
    //radius: markerSize(7500)
    radius: markerSize(Country[i].Exports)
    //radius: markerSize(Country[i].Exports)
  }).bindPopup("<h1>" + Country[i].name + "</h1> <hr> <h3>Exports: " + Country[i].Exports + "</h3>").addTo(myMap);
}