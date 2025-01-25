import { Ship } from './placeShip';
let shipIdx = 0;

let isHorizontal = false;

function generateGameBoard(mode) {
    if (mode == "placement") {
        const grid = document.querySelector('.grid');
        for (let row = 1; row <= 10; row++) {
            for (let column = 1; column <= 10; column++) {
                const cell = document.createElement('div');
                cell.id = `${row}${column}`;
                grid.appendChild(cell);
            }
        }
    }
}

function axisControl() {
    const horizontalBtn = document.querySelector('.axis-control');
    horizontalBtn.addEventListener('click', () => {
        isHorizontal = !isHorizontal;
    });
}

function placeShip(shipLength, rowPrefix, columnIndex) {
    let shipOverlap = false;
    const targetCells = [];

    for (let offset = 0; offset < shipLength; offset++) {
        const targetColumnIndex = columnIndex + offset;
        const targetCellId = !isHorizontal ? `${rowPrefix}${targetColumnIndex}` : `${targetColumnIndex}${rowPrefix}`;
        const targetCell = document.getElementById(targetCellId);

        if (targetCell.classList.contains('ship')) {
            shipOverlap = true;
            break;
        }

        targetCells.push(targetCell);
    }

    if (!shipOverlap) {
        targetCells.forEach(cell => cell.classList.add('ship'));
        const ids = targetCells.map((cell) => cell.id);
        console.log(ids);
        // if(shipIdx == 4){

        //     return;
        // }
        Ship(ids.length, ids);
        shipIdx++;
    }

}

function highlightArea(cell, mode = 'add') {
    const cellId = cell.id;
    const isDoubleDigit = cellId.startsWith("10");
    const columnIndex = isDoubleDigit ? parseInt(!isHorizontal ? cellId.slice(2) : "10")
        : parseInt(!isHorizontal ? cellId.slice(1) : cellId[0]);

    const rowPrefix = !isHorizontal ? (isDoubleDigit ? "10" : cellId[0]) : (isDoubleDigit ? cellId.slice(2) : cellId.slice(1));
    const shipLength = [2, 3, 3, 4, 5];
    const maxColumnIndex = 10;

    const isWithinBounds = columnIndex + shipLength[shipIdx] - 1 <= maxColumnIndex;

    let shipOverlap = false;

    for (let offset = 0; offset < Math.min(shipLength[shipIdx], 11 - columnIndex); offset++) {
        const targetColumnIndex = columnIndex + offset;

        const targetCellId = !isHorizontal ? `${rowPrefix}${targetColumnIndex}` : `${targetColumnIndex}${rowPrefix}`;
        const targetCell = document.getElementById(targetCellId);

        if (!targetCell) break;

        if (targetCell.classList.contains('ship'))
            shipOverlap = true;

        if (mode === 'add') {
            targetCell.classList.add(
                isWithinBounds && !shipOverlap ? 'high-light' : 'error-high-light'
            );
        }

        else if (mode === 'remove') {
            targetCell.classList.remove('high-light', 'error-high-light');
        }
    }

    if (mode === 'add' && isWithinBounds) {
        cell.addEventListener('click', () => {
            placeShip(shipLength[shipIdx], rowPrefix, columnIndex);
        }, { once: true });
    }
}

function gameBoard() {
    const gridCells = document.querySelectorAll('.grid div');

    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => highlightArea(cell, 'add'));
        cell.addEventListener('mouseout', () => highlightArea(cell, 'remove'));
    });
}

axisControl();

export { generateGameBoard, gameBoard };
