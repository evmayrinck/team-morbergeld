"use strict";

//SODA New York art galleries API 
//API can be found at https://dev.socrata.com/foundry/data.cityofnewyork.us/2hzz-95k8
var SODAagAPI = "https://data.cityofnewyork.us/resource/2hzz-95k8.json?$$app_token=dNjo0bVaaQvP9GEFDkHGujiRG";

var map = L.map('map').setView([40.7128, -74.0059], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZtYXlyaW5jayIsImEiOiJjajAxaXBja3QwNzhmMndsczk4NnlteG9qIn0.9JNK9Zq_C3I43Uqw4x0KBA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiZXZtYXlyaW5jayIsImEiOiJjajAxaXBja3QwNzhmMndsczk4NnlteG9qIn0.9JNK9Zq_C3I43Uqw4x0KBA'
}).addTo(map);

var userIn = document.querySelector("#user-input")

var records = [];

userIn.addEventListener("input", function() {
    for (var i = 0; i < records.length; i++) {
	    var rec = records[i];
        var searchIn = userIn.value.toLowerCase();
        var theName = rec.theater.name.toLowerCase();
        var theAdd = rec.theater.address1.toLowerCase();

        if ((theName.indexOf(searchIn) >= 0) || (theAdd.indexOf(searchIn) >= 0)) {
            rec.marker.addTo(map);
        } else {
            rec.marker.removeFrom(map);
        };
    }
})

function parseAsJSON(response) {
    return response.json();
}

function handleError(err) {
    console.error(err);
    alert(err.message);
}

function createMarker(data) {
        for (var i = 0; i < data.length; i++) {
            var the = data[i];
            if (the.the_geom.coordinates != undefined) {
            var latlng = the.the_geom.coordinates.reverse();

            var marker = L.marker(latlng).addTo(map)
                .bindPopup("<h4>"+the.name+"</h4>"+
                "<div>"+the.address1+"</div>"+
                "<div>"+the.tel+"</div>"+
                '<div><a href="'+the.url+'">Website</a></div>');

            records.push({
                theater: the,
                marker: marker
            });
            }
        }
    }

fetch(SODAagAPI)
    .then(parseAsJSON)
    .then(createMarker)
    .catch(handleError);