let container = document.querySelector('#container');
let btnReset = document.querySelector('#reset-btn');
let rows; 
let columns;

createGrid(16, 16);

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
            cell.style.backgroundColor = 'white';
            rows[i].appendChild(cell);
        }
    }
    columns = document.querySelectorAll('.column');
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

btnReset.addEventListener('click', reset);

