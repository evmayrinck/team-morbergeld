"use strict";

//SODA Library API: https://dev.socrata.com/foundry/data.cityofnewyork.us/feuq-due4 
var libraryAPI = "https://data.cityofnewyork.us/resource/feuq-due4.json?$$app_token=RcUPQJWzXQaCJq2SgQgtjkrAL";

//latitude and longitude of NYC city center

var map = L.map('map').setView([40.7128, -74.0059], 13);

//access token: pk.eyJ1IjoiYXVsb3JiZSIsImEiOiJjajA1amE0Mncwank3MnFsczByeTdzYjk1In0.2pqlyLnTotT54ZCoR0rnRA
//style url: mapbox://styles/mapbox/satellite-v9 

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXVsb3JiZSIsImEiOiJjajA1amE0Mncwank3MnFsczByeTdzYjk1In0.2pqlyLnTotT54ZCoR0rnRA', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.7128, -74.0059]).addTo(map)
  .bindPopup('something nice')
  .openPopup();

/*var userIn = document.querySelector("#user-input")

var libraries = [];

userIn.addEventListener("input", function() {
    for (var i = 0; i < libraries.length; i++) {
	    var rec = libraries[i];
        var searchIn = userIn.value.toLowerCase();
        var libraryName = librariesJSON.name.toLowerCase();
        var libraryAdd = librariesJSON.address.toLowerCase();
        var libraryWebsite = librariesJSON.URL.toLowerCase();

        if ((libraryName.indexOf(searchIn) >= 0) || (libraryAdd.indexOf(searchIn) >= 0) 
            || (libraryWebsite.indexOf(searchIn) >=0)) {
            rec.marker.addTo(map);
        } else {
            rec.marker.removeFrom(map);
        };
    };
});


function parseAsJSON(response) {
    return response.json();
}

function handleError(err) {
    console.error(err);
    alert(err.message);
}

function createMarker(data) {
        for (var i = 0; i < data.length; i++) {
            var library = data[i];
            if (library.the_geom.coordinates != undefined) {
            var latlng = library.the_geom.coordinates.reverse();

            var marker = L.marker(latlng).addTo(map)
                .bindPopup("<h4>"+library.name+"</h4>"+
                "<div>"+library.address+"</div>"+
                '<div><a href="'+library.URL+'">Website</a></div>');

            records.push({
                library: lib,
                marker: marker
            });
            }
        }
    } **/