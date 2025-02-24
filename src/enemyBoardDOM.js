import { createShip } from "./placeShip";

function highlightAreaEnemyBoard(grid) {
    grid.forEach((cell) => {
        cell.addEventListener('mouseover', () => cell.classList.add('high-light'));
        cell.addEventListener('mouseout', () => cell.classList.remove('high-light'));
    });
}

function generateEnemyShipPositions() {
    const shipsLength = [2, 3, 3, 4, 5];
    let shipIdx = 0;
    const occupiedCells = new Set();

    function isValidPlacement(positions) {
        return positions.every(cell => !occupiedCells.has(cell));
    }

    function placeShip(positions) {
        positions.forEach(cell => occupiedCells.add(cell));
    }

    while (shipIdx < shipsLength.length) {
        const startRow = Math.floor((Math.random() * 10) + 1);
        const startCol = Math.floor((Math.random() * 10) + 1);
        const isHorizontal = Math.round(Math.random());
        const shipSize = shipsLength[shipIdx];


        let positions = [];

        if (isHorizontal && startCol + shipSize - 1 <= 10) {
            positions = Array.from({ length: shipSize }, (_, pos) => `${startRow}${startCol + pos}`);
        }
        else if (!isHorizontal && startRow + shipSize - 1 <= 10) {
            positions = Array.from({ length: shipSize }, (_, pos) => `${startRow + pos}${startCol}`);
        }


        if (positions.length && isValidPlacement(positions)) {
            createShip(shipSize, positions, 'enemy');
            placeShip(positions);
            shipIdx++;
        }

    }

}
export { highlightAreaEnemyBoard, generateEnemyShipPositions };