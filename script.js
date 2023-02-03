const container = document.querySelector(".container");
const button = document.querySelector(".newgrid");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

let noOfRows = 16;
let noOfColumns = 16;

button.addEventListener("click", function() {
    noOfRows = prompt("Enter number of rows");
    noOfColumns = prompt("Enter number of columns");
    parseInt(noOfRows);
    parseInt(noOfColumns);

    if (noOfRows > 100) {
        alert("Your grid should not have more than 100 rows.");
        return;
    } else if(noOfColumns > 100) {
        alert("Your grid should not have more than 100 columns.");
        return;
    }

    let row = document.querySelectorAll(".row");
    row.forEach( function (node) {
        node.remove();
    });
    let grid = document.querySelectorAll(".cell");
    grid.forEach( function (node) {
        node.remove();
    });

    makeGrid(noOfRows,noOfColumns);
})

function makeGrid(rowCount,columnCount) {
for (let i = 0; i < rowCount; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
} // create rows

for (i = 0; i < rows.length; i++) {
    for (j = 0; j < columnCount; j++) {
        let box = document.createElement("div");
        box.classList.add("cell");
        rows[j].appendChild(box);

        box.onmouseover = function() {
        box.style.cssText = "background-color: black;"
    };
}
}; //for each row, create 16 cells
}


