"use strict";

//SODA New York art galleries API 
//API can be found at https://dev.socrata.com/foundry/data.cityofnewyork.us/43hw-uvdj
var SODAagAPI = "https://data.cityofnewyork.us/resource/43hw-uvdj.json?$$app_token=dNjo0bVaaQvP9GEFDkHGujiRG";

var osmTiles = {
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
};

var nyCoords = [40.7850, -73.9682];

var defaultZoom = 12;

var map = L.map("map").setView(nyCoords, defaultZoom);
L.tileLayer(osmTiles.url, {
    attribution: osmTiles.attribution
}).addTo(map);

fetch(SODAagAPI)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            var gal = data[i];
            if (gal.the_geom != undefined) {
                L.marker(gal.the_geom.coordinates).addTo(map)
                    .bindPopup("<h3>"+gal.name+"</h3>"+gal.address1+/*"<br>"+gal.address2+"<br>"+*/gal.tel+"<br>"+gal.url)
                    .openPopup();
            }
        }
    })
    .catch(function(err) {
        console.error(err);
        alert(err.message);
    });