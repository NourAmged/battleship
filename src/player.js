import { registerHit } from "./placeShip";

const occupiedCells = new Set();
let isPlayerTurn = true;

function winMessage (player) {
    const body = document.querySelector('body');
    const container = document.createElement('div');

    const popUp = document.createElement('div');
    
    popUp.className = 'pop-up';

    const message = document.createElement('p');
    const restartBtn = document.createElement('button');

    message.innerText = player === 'ally' ? 'You Won' : 'You lost';
    message.className = 'message';

    restartBtn.innerText = 'Play again';
    restartBtn.className = 'restart-btn';

    container.appendChild(message);
    container.appendChild(restartBtn);

    popUp.appendChild(container);

    body.appendChild(popUp);
    body.style.pointerEvents = 'none';
    
    restartBtn.addEventListener('click', ()=>{
        location.reload();
    });

}


function allyAttack() {
    const grid = document.querySelectorAll('.grid:nth-of-type(2) div');
    grid.forEach((cell) => {
        if (!isPlayerTurn) return;

        cell.addEventListener('click', () => {
            const { hit, gameOver } = registerHit(cell.id, 'enemy');
            cell.classList.add(hit ? 'hit-attack' : 'miss-attack');
            cell.style = "cursor: not-allowed;";

            if(gameOver)
                winMessage("ally");

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
        const { hit, gameOver } = registerHit(targetCell.id, 'ally');
        targetCell.classList.add(hit ? 'hit-attack' : 'miss-attack');
        occupiedCells.add(position);
        if(gameOver)
            winMessage("enemy");
    }
    isPlayerTurn = true;
}

function gameLoop() {
    allyAttack();
}

export { allyAttack, enemyAttack, gameLoop, winMessage };