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
    } else if (player === 'enemy') {
        enemyShipsPositions.push(...positions);
        enemyShips.push(ship);
    }
}

function registerHit(position, player) {
    // const ships = player === 'ally' ? allyShips : enemyShips;
    const ships = enemyShips;
    for (const ship of ships) {
        if (ship.positions.includes(position)) {
            ship.hits.add(position);
            console.log(position);
            console.log(enemyShips);
            console.log(allyShips);
            return { hit: true, isSunk: ship.isSunk };
        }
    }
    return { hit: false, isSunk: false };
}

export { createShip, registerHit };

