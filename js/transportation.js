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
    var tr = document.createElement("tr");
    tr.appendChild(renderBridgeProps(bridge.name, true));
    tr.appendChild(renderBridgeProps(bridge.verbal_rating));
    return tr;
};

function renderBridgeTable(bridgeArray) {
  var tbody = document.querySelector("tbody");
  tbody.textContent = "";
  for (var idx = 0; idx < bridgeArray.length; idx++) {
      var bridge = bridgeArray[idx];
      tbody.appendChild(renderBridgeRow(bridge));
    };
};

bridgesArray.sort(function(bridge1, bridge2) {
    return bridge2.numerical_rating-bridge1.numerical_rating;
});

renderBridgeTable(bridgesArray);

var userInput = document.querySelector("#user-input")

userInput.addEventListener("input", function() {
    var searchString = userInput.value.toLowerCase();
    var filteredBridges = bridgesArray.filter(function(bridge) {
      var bridgesLower = bridge.name.toLowerCase();
      return bridgesLower.indexOf(searchString) >= 0;
});
    renderBridgeTable(filteredBridges);
});