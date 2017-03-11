"use strict";

function renderBridgeProps(value, nonNumeric){
  var td = document.createElement("td");
  td.textContent = value; 
    if (nonNumeric) {
      td.classList.add("mdl-data-table__cell--non-numeric");
    };
  return td;
}; 

function renderBridgeRow(bridge) {
    //create the <tr> element
    var tr = document.createElement("tr");

    //create and append the <td> elements
    tr.appendChild(renderBridgeProps(bridge.name));
    tr.appendChild(renderBridgeProps(bridge.verbal_rating));
    tr.appendChild(renderBridgeProps(bridge.numerical_rating, true));

    //return the table row to the caller
    return tr;
};



function renderBridgeTable(bridgeArray) {
    //select the <tbody> element
    //you can make this more precise by using a descendant selector,
    //referring to a particular <table> by ID or style class name
    var tbody = document.querySelector("tbody");

    //clear any existing content in the body
    tbody.textContent = "";

    //for each element in the array...
    for (var idx = 0; idx < bridgeArray.length; idx++) {
        //get the person record at the current index
        var bridge = bridgeArray[idx];

        //render that person record as a <tr> with <td>s
        //and append it to the <tbody>
        tbody.appendChild(renderBridgeRow(bridge));
    }
};


renderBridgeTable(bridgesArray);