import { createShip } from "./placeShip";

function highlightAreaEnemyBoard(gird) {
    gird.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('high-light');
        });
        cell.addEventListener('mouseout', () => {
            cell.classList.remove('high-light');
        });
    })
}

function generateEnemyShipPositions() {
    const shipsLength = [2, 3, 3, 4, 5];
    let shipIdx = 0;
    const shipOverlap = {};

    while (true) {
        if (shipIdx === shipsLength.length)
            break;

        const startRow = Math.floor((Math.random() * 10) + 1);
        const startCol = Math.floor((Math.random() * 10) + 1);
        const isHorizontal = Math.round(Math.random());


        if (isHorizontal && startRow + shipsLength[shipIdx] - 1 <= 10) {
            const positions = [];
            let isOverlap = false;
            for (let pos = 0; pos < shipsLength[shipIdx]; pos++) {
                const cell = (startRow + pos).toString() + startCol.toString();
                positions.push(cell);
                if (cell in shipOverlap) {
                    isOverlap = true;
                    break;
                }
                else
                    shipOverlap[cell] = 0;
            }

            if (!isOverlap) {
                createShip(shipsLength[shipIdx], positions, 'enemy');
                shipIdx++;

            }
        }

        if (!isHorizontal && startCol + shipsLength[shipIdx] - 1 <= 10) {
            const positions = [];
            let isOverlap = false;
            for (let pos = 0; pos < shipsLength[shipIdx]; pos++) {
                const cell = startRow.toString() + (startCol + pos).toString();
                positions.push(cell);
                if (cell in shipOverlap) {
                    isOverlap = true;
                    break;
                }
                else
                    shipOverlap[cell] = 0;
            }
            if (!isOverlap) {
                createShip(shipsLength[shipIdx], positions, 'enemy');
                shipIdx++;
            }
        }
    }

}


export { highlightAreaEnemyBoard, generateEnemyShipPositions };