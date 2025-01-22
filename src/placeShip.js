const shipsPositions = [];
const ships = [];


function Ship(length, position) {
    shipsPositions.push(position);
    ships.push({
        "Sunk": false,
        "hitCounter": 0,
        "length": length
    });
}

// Hit Function
function hit(position) {
    for (let pos = 0; pos < shipsPositions.length; pos++) {
        if (shipsPositions[pos].includes(position)) { // Use includes to check for the position
            ships[pos].hitCounter++;
            if (ships[pos].hitCounter === ships[pos].length) {
                ships[pos].Sunk = true;
            }
            break;
        }
    }
}

// isSunk(){
// }

export { Ship };