function placeShip(shipLength, rowPrefix, columnIndex) {
    for (let offset = 0; offset < shipLength; offset++) {
        const targetColumnIndex = columnIndex + offset;
        const targetCellId = `${rowPrefix}${targetColumnIndex}`;
        const targetCell = document.getElementById(targetCellId);
        if (targetCell) {
            targetCell.classList.add('ship');
        }
    }
}

function highlightAreaX(cell, mode = 'add') {
    const cellId = cell.id;
    const isDoubleDigitRow = cellId.startsWith("10");
    const columnIndex = isDoubleDigitRow
        ? parseInt(cellId.slice(2), 10)
        : parseInt(cellId.slice(1), 10);
    const rowPrefix = isDoubleDigitRow ? "10" : cellId[0];
    const highlightLength = 3;
    const maxColumnIndex = 10;

    const isWithinBounds = columnIndex + highlightLength - 1 <= maxColumnIndex;

    let shipOverlap = false;

    for (let offset = 0; offset < Math.min(highlightLength, 11 - columnIndex); offset++) {
        const targetColumnIndex = columnIndex + offset;
        const targetCellId = `${rowPrefix}${targetColumnIndex}`;
        const targetCell = document.getElementById(targetCellId);

        if (!targetCell) break;

        if (targetCell.classList.contains('ship')) {
            shipOverlap = true;
        }

        if (mode === 'add') {
            targetCell.classList.add(
                isWithinBounds && !shipOverlap ? 'high-light' : 'error-high-light'
            );
        } else if (mode === 'remove') {
            targetCell.classList.remove('high-light', 'error-high-light');
        }
    }

    if (mode === 'add' && isWithinBounds && !shipOverlap) {
        cell.addEventListener('click', () => {
            placeShip(highlightLength, rowPrefix, columnIndex);
        }, { once: true });
    }
}

function highlight() {
    const gridCells = document.querySelectorAll('.grid div');

    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => highlightAreaX(cell, 'add'));
        cell.addEventListener('mouseout', () => highlightAreaX(cell, 'remove'));
    });
}

export { highlight };
