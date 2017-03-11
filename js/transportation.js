  "use strict";

  var transportJSON = <a href="../Bridges.json"></a>; 

  
function renderBridgeProperties(value, nonNumeric) {
    //create, populate, and return a new <td> element

    var td = document.createElement("td");

    td.textContent = value; 

        if (nonNumeric) {
            td.classList.add("mdl-data-table__cell--non-numeric");
        };

    return td;
};



function renderBridge(bridge) {
    //create <tr> element
    var tr = document.createElement("tr");

    //use renderMovieProp() to create <td> elements for
    //the title, sales, and tickets props and append them
    //to the <tr> element 

    tr.appendChild(renderBridgeProperties(bridge.feature-carried, true));
    tr.appendChild(renderBridgeProperties(bridge.verbal-rating));
  

    //return the <tr> element

    return tr;
};
  


function renderBridges(bridges) {
    //clear any existing content within the <tbody> element
    var tbody = document.querySelector("tbody");

    tbody.textContent="";

    
    //for each element in the movies array
    //use renderMovie() to create a full-populated <tr> element
    
    for (var i=0; i < bridges.length; i++) {
        var bridge = bridges[i];
        tbody.appendChild(renderMovie(bridge));
    //and append that to the <tbody> elemnet already in the page
}
}


//render all of the movies
renderBridges(Bridges);



var titleInput = document.querySelector("#user-input")


titleInput.addEventListener("input", function() {

    var searchString = titleInput.value.toLowerCase();

    var filteredBridges = Bridges.filter(function(bridge) {
    
    //return true if this movie should be in the filtered set
    //or false if not

    var bridgeLower = bridge.feature-carried.toLowerCase();

    return bridgeLower.indexOf(searchString) >= 0;
});

    renderBridges(filteredBridges);
});