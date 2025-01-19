function placeShip(shipLength, rowPrefix, columnIndex) {
    let shipOverlap = false;
    const targetCells = [];
    for (let offset = 0; offset < shipLength; offset++) {
        const targetColumnIndex = columnIndex + offset;
        const targetCellId = `${rowPrefix}${targetColumnIndex}`;
        const targetCell = document.getElementById(targetCellId);

        if (targetCell.classList.contains('ship')) {
            shipOverlap = true;
            break;
        }

        targetCells.push(targetCell);
    }

    if (!shipOverlap)
        targetCells.forEach(cell => cell.classList.add('ship'));

}

function highlightAreaX(cell, mode = 'add') {
    const cellId = cell.id;
    const isDoubleDigitRow = cellId.startsWith("10");
    const columnIndex = isDoubleDigitRow
        ? parseInt(cellId.slice(2))
        : parseInt(cellId.slice(1));
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

        if (targetCell.classList.contains('ship'))
            shipOverlap = true;

        if (mode === 'add') {
            targetCell.classList.add(
                isWithinBounds && !shipOverlap ? 'high-light' : 'error-high-light'
            );
            console.log("Row:" + rowPrefix);
            console.log("Column:" + targetColumnIndex);
        }

        else if (mode === 'remove') {
            targetCell.classList.remove('high-light', 'error-high-light');
        }
    }

    if (mode === 'add' && isWithinBounds) {
        cell.addEventListener('click', () => {
            placeShip(highlightLength, rowPrefix, columnIndex);
        });
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
