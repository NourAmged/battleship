import { registerHit } from "./placeShip";

const occupiedCells = new Set();
let isPlayerTurn = true;

function allyAttack() {
    const grid = document.querySelectorAll('.grid:nth-of-type(2) div');
    grid.forEach((cell) => {
        if (!isPlayerTurn) return;

        cell.addEventListener('click', () => {
            const { hit } = registerHit(cell.id, 'enemy');
            cell.classList.add(hit ? 'hit-attack' : 'miss-attack');
            cell.style = "cursor: not-allowed;";

            isPlayerTurn = false;
            setTimeout(enemyAttack, 1000);
        }, { once: true });
    });
}

function generateAttackPosition() {

    let position;
    do {
        const startRow = Math.floor((Math.random() * 10) + 1);
        const startCol = Math.floor((Math.random() * 10) + 1);

        position = `${startRow}${startCol}`;

    } while (occupiedCells.has(position));

    return position;
}


function enemyAttack() {
    const grid = Array.from(document.querySelectorAll('.grid div'));

    const position = generateAttackPosition();

    const targetCell = grid.find(cell => cell.id === position);
    if (targetCell) {
        const { hit } = registerHit(targetCell.id, 'ally');
        targetCell.classList.add(hit ? 'hit-attack' : 'miss-attack');
        occupiedCells.add(position);
    }
    isPlayerTurn = true;
}

function gameLoop() {
    allyAttack();
}

export { allyAttack, enemyAttack, gameLoop };