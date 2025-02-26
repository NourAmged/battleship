import { registerHit } from "./placeShip";


function allyAttack() {
    const grid = document.querySelectorAll('.grid:nth-of-type(2) div');
    grid.forEach((cell) => {
        cell.addEventListener('click', () => {
            const { hit } = registerHit(cell.id, 'ally');
            cell.classList.add(hit ? 'hit-attack' : 'miss-attack');
            cell.style = "cursor: not-allowed;";
        }, { once: true });
    });
}

function generateAttackPosition() {
    const startRow = Math.floor((Math.random() * 10) + 1);
    const startCol = Math.floor((Math.random() * 10) + 1);

    return `${startRow}${startCol}`;
}


function enemyAttack() {
    const grid = document.querySelectorAll('.grid div');
    const occupiedCells = new Set();

    let position;
    do {
        position = generateAttackPosition();
    } while (occupiedCells.has(position));

    const targetCell = grid.find(cell => cell.id === position);
    if (targetCell) {
        const { hit } = registerHit(targetCell.id);
        targetCell.classList.add(hit ? 'hit-attack' : 'miss-attack');
        occupiedCells.add(position);
    }
}

function gameLoop() {

}

export { allyAttack, enemyAttack };