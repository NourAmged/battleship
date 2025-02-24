// placeShip.js
const allyShipsPositions = [];
const allyShips = [];
const enemyShipsPositions = [];
const enemyShips = [];

function createShip(length, positions, player) {
    const ship = {
        length,
        positions,
        hits: new Set(),
        get isSunk() {
            return this.hits.size === this.length;
        }
    };

    if (player === 'ally') {
        allyShipsPositions.push(...positions);
        allyShips.push(ship);
        console.log(allyShips);
    } else if (player === 'enemy') {
        enemyShipsPositions.push(...positions);
        enemyShips.push(ship);
        console.log(enemyShips);
    }
}

function registerHit(position, player) {
    const ships = player === 'ally' ? allyShips : enemyShips;
    for (const ship of ships) {
        if (ship.positions.includes(position)) {
            ship.hits.add(position);
            return ship.isSunk;
        }
    }
    return false;
}

export { createShip, registerHit };