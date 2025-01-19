let isHorizontal = false;

function axisControl(){
    const horizontalBtn = document.querySelector('.axis-control');
    horizontalBtn.addEventListener('click', () =>{
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

    if (!shipOverlap)
        targetCells.forEach(cell => cell.classList.add('ship'));

}

function highlightAreaX(cell, mode = 'add') {
    const cellId = cell.id;
    const isDoubleDigit = cellId.startsWith("10");
    const columnIndex = isDoubleDigit ? parseInt(!isHorizontal ? cellId.slice(2) : "10") 
    : parseInt(!isHorizontal ? cellId.slice(1) : cellId[0]);
    
    const rowPrefix = !isHorizontal ? (isDoubleDigit ? "10" : cellId[0]) : (isDoubleDigit ? cellId.slice(2) : cellId.slice(1));
    const highlightLength = 3;
    const maxColumnIndex = 10;

    const isWithinBounds = columnIndex + highlightLength - 1 <= maxColumnIndex;

    let shipOverlap = false;

    for (let offset = 0; offset < Math.min(highlightLength, 11 - columnIndex); offset++) {
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
            placeShip(highlightLength, rowPrefix, columnIndex);
        }, {once: true });
    }
}

function highlight() {
    const gridCells = document.querySelectorAll('.grid div');

    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => highlightAreaX(cell, 'add'));
        cell.addEventListener('mouseout', () => highlightAreaX(cell, 'remove'));
    });
}

axisControl();

export { highlight };
