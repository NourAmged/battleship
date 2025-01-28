// gameBoard.js
import { createShip } from './placeShip';

let shipIdx = 0;
let isHorizontal = false;
const SHIP_LENGTHS = [2, 3, 3, 4, 5];

function generateGameBoard(mode) {
    if (mode === "placement") {
        const grid = document.querySelector('.grid');
        grid.innerHTML = ''; // Clear existing grid
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
        horizontalBtn.textContent = isHorizontal ? 'Horizontal' : 'Vertical';
    });
}

function disableShipPlacement() {
    const grid = document.querySelector('.grid');
    const gridCells = document.querySelectorAll('.grid div');
    const horizontalBtn = document.querySelector('.axis-control');
    
    grid.style.pointerEvents = 'none';
    horizontalBtn.style.display = 'none';
    
    gridCells.forEach((cell) => {
        cell.style.cursor = 'not-allowed';
    });
}

function parseCellId(cellId) {
    if (cellId.startsWith('10')) {
        return {
            row: 10,
            col: cellId.length > 2 ? parseInt(cellId.slice(2)) : 10
        };
    }
    return {
        row: parseInt(cellId[0]),
        col: parseInt(cellId.slice(1))
    };
}

function highlightArea(cell, mode = 'add') {
    const { row, col } = parseCellId(cell.id);
    const currentShipLength = SHIP_LENGTHS[shipIdx];
    
    let isWithinBounds = false;
    const targetCells = [];
    let shipOverlap = false;

    if (isHorizontal) {
        isWithinBounds = col + currentShipLength <= 11;
    } else {
        isWithinBounds = row + currentShipLength <= 11;
    }

    for (let offset = 0; offset < currentShipLength; offset++) {
        const targetRow = isHorizontal ? row : row + offset;
        const targetCol = isHorizontal ? col + offset : col;
        
        if (targetRow > 10 || targetCol > 10) break;

        const targetCellId = `${targetRow}${targetCol}`;
        const targetCell = document.getElementById(targetCellId);
        
        if (!targetCell) break;
        if (targetCell.classList.contains('ship')) shipOverlap = true;
        
        targetCells.push(targetCell);
    }

    if (mode === 'add') {
        targetCells.forEach(cell => {
            cell.classList.add(
                isWithinBounds && !shipOverlap ? 'high-light' : 'error-high-light'
            );
        });

        if (isWithinBounds && !shipOverlap) {
            cell.addEventListener('click', () => placeShip(row, col), { once: true });
        }
    } else {
        targetCells.forEach(cell => {
            cell.classList.remove('high-light', 'error-high-light');
        });
    }
}

function placeShip(startRow, startCol) {
    if (shipIdx >= SHIP_LENGTHS.length) return;

    const shipLength = SHIP_LENGTHS[shipIdx];
    const targetCells = [];
    let shipOverlap = false;

    for (let offset = 0; offset < shipLength; offset++) {
        const targetRow = isHorizontal ? startRow : startRow + offset;
        const targetCol = isHorizontal ? startCol + offset : startCol;
        
        if (targetRow > 10 || targetCol > 10) {
            shipOverlap = true;
            break;
        }

        const targetCellId = `${targetRow}${targetCol}`;
        const targetCell = document.getElementById(targetCellId);

        if (!targetCell || targetCell.classList.contains('ship')) {
            shipOverlap = true;
            break;
        }

        targetCells.push(targetCell);
    }

    if (!shipOverlap && targetCells.length === shipLength) {
        targetCells.forEach(cell => cell.classList.add('ship'));
        createShip(shipLength, targetCells.map(cell => cell.id), 'ally');
        shipIdx++;
        
        if (shipIdx === SHIP_LENGTHS.length) {
            disableShipPlacement();
        }
    }
}

function gameBoard() {
    const gridCells = document.querySelectorAll('.grid div');
    gridCells.forEach(cell => {
        cell.addEventListener('mouseover', () => highlightArea(cell, 'add'));
        cell.addEventListener('mouseout', () => highlightArea(cell, 'remove'));
    });
}

axisControl();

export { generateGameBoard, gameBoard };