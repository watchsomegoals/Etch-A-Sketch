let container = document.querySelector('#container');
let rows; 
let columns;

function createGrid(nr1, nr2) {
    createRows(nr1);
    createCols(nr2);
}

function createRows(rowsNumber) {
    for(let i = 0; i < rowsNumber; i++) {
        let cell = document.createElement('div');
        cell.classList.add('row');
        container.appendChild(cell);
    }
    rows = document.querySelectorAll('.row');
}

function createCols(colsNumber) {
    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < colsNumber; j++) {
            let cell = document.createElement('div');
            cell.classList.add('column');
            rows[j].appendChild(cell);
        }
    }
    columns = document.querySelectorAll('.column');
}