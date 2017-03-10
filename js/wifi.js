"use strict";

//SODA New York wifi hotspots API 
//API can be found at https://dev.socrata.com/foundry/data.cityofnewyork.us/jd4g-ks2z
var SODAagAPI = "https://data.cityofnewyork.us/resource/jd4g-ks2z.json?$$app_token=dNjo0bVaaQvP9GEFDkHGujiRG";

var map = L.map('map').setView([40.7128, -74.0059], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZtYXlyaW5jayIsImEiOiJjajAxaXBja3QwNzhmMndsczk4NnlteG9qIn0.9JNK9Zq_C3I43Uqw4x0KBA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiZXZtYXlyaW5jayIsImEiOiJjajAxaXBja3QwNzhmMndsczk4NnlteG9qIn0.9JNK9Zq_C3I43Uqw4x0KBA'
}).addTo(map);

function parseAsJSON(response) {
    return response.json();
}

function handleError(err) {
    console.error(err);
    alert(err.message);
}

function createMarker(data) {
        for (var i = 0; i < data.length; i++) {
            var spot = data[i];
            if (spot.the_geom.coordinates != undefined) {
            var latlng = spot.the_geom.coordinates.reverse();

            L.marker(latlng).addTo(map)
                .bindPopup("<h4>"+spot.name+"</h4>"+
                "<div>"+"SSID: "+spot.ssid+"</div>"+
                "<div>"+spot.location+"</div>"+
                "<div>"+spot.type+"</div>");
            }
        }
    }

fetch(SODAagAPI)
    .then(parseAsJSON)
    .then(createMarker)
    .catch(handleError);