let container = document.querySelector('#container');
let btnReset = document.querySelector('#reset-btn');
let btnNewGrid = document.querySelector('#create-btn');
let rows; 
let columns;
let currentRow = 16;
let currentCols = 16;

createGrid(currentRow, currentCols);

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

function deleteRows(rowsNumber) {
    for(let i = 0; i < rowsNumber; i++) {
        container.removeChild(cell);
    }
}

function createCols(colsNumber) {
    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < colsNumber; j++) {
            let cell = document.createElement('div');
            cell.classList.add('column');
            cell.style.backgroundColor = 'white';
            rows[i].appendChild(cell);
        }
    }
    columns = document.querySelectorAll('.column');
}

function deleteCols(colsNumber) {
    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < colsNumber; j++) {
            rows[i].removeChild(cell);
        }
    }
}

function deleteGrid(nr1, nr2) {
    deleteCols(nr2);
    deleteRows(nr1);
}

columns.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = 'black';
    })
})

function reset() {
    columns.forEach(item => {
        item.style.backgroundColor = 'white';
    })
}

function newGrid() {
    var newLength = prompt("Select 16, 32 or 64");
    deleteGrid(currentRow, currentCols);
    currentRow = newLength;
    currentCols = newLength;
    createGrid(currentRow, currentCols);
}

btnReset.addEventListener('click', reset);

btnNewGrid.addEventListener('click', newGrid);

