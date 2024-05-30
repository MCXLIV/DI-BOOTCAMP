// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base

const table = document.getElementById("sampleTable")
const row = table.insertRow(0)
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";