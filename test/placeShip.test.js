import { registerHit, allyShips, enemyShips, createShip } from "../src/modules/placeShip";


describe("registerHit", () => {
    beforeEach(() => {
        allyShips.length = 0;
        enemyShips.length = 0;
    });

    test('should register a hit on an ally ship', () => {
        createShip(3, ['11', '12', '13'], 'ally');

        const result = registerHit('11', 'ally');
        expect(result).toEqual({ hit: true, gameOver: false });
        expect(allyShips[0].hits.has('11')).toBe(true);
    });

    test('should miss a hit on an ally ship', () => {
        createShip(3, ['11', '12', '13'], 'ally');

        const result = registerHit('14', 'ally');
        expect(result).toEqual({ hit: false, gameOver: false });
        expect(allyShips[0].hits.has('11')).toBe(false);
    });

    test('the ally ship should be sunk and the game is over', () => {
        createShip(3, ['11', '12', '13'], 'ally');

        registerHit('11', 'ally');
        registerHit('12', 'ally');

        const result = registerHit('13', 'ally');

        expect(result).toEqual({ hit: true, gameOver: true });

        expect(allyShips[0].hits.has('11')).toBe(true);
        expect(allyShips[0].hits.has('12')).toBe(true);
        expect(allyShips[0].hits.has('13')).toBe(true);
        expect(allyShips[0].isSunk).toBe(true);
    });

    test('the ally ship should be sunk and the game is not over', () => {
        createShip(3, ['11', '12', '13'], 'ally');
        createShip(4, ['21', '22', '23', '24'], 'ally');

        registerHit('11', 'ally');
        registerHit('12', 'ally');

        const result = registerHit('13', 'ally');

        expect(result).toEqual({ hit: true, gameOver: false });

        expect(allyShips[0].hits.has('11')).toBe(true);
        expect(allyShips[0].hits.has('12')).toBe(true);
        expect(allyShips[0].hits.has('13')).toBe(true);
        expect(allyShips[0].isSunk).toBe(true);
    });

    test('should register a hit on an enemy ship', () => {
        createShip(3, ['11', '12', '13'], 'enemy');

        const result = registerHit('11', 'enemy');
        expect(result).toEqual({ hit: true, gameOver: false });
        expect(enemyShips[0].hits.has('11')).toBe(true);
    });


    test('should miss a hit on an enemy ship', () => {
        createShip(3, ['11', '12', '13'], 'enemy');

        const result = registerHit('14', 'enemy');
        expect(result).toEqual({ hit: false, gameOver: false });
        expect(enemyShips[0].hits.has('11')).toBe(false);
    });

    test('the enemy ship should be sunk and the game is over', () => {
        createShip(3, ['11', '12', '13'], 'enemy');

        registerHit('11', 'enemy');
        registerHit('12', 'enemy');

        const result = registerHit('13', 'enemy');
        expect(result).toEqual({ hit: true, gameOver: true });

        expect(enemyShips[0].hits.has('11')).toBe(true);
        expect(enemyShips[0].hits.has('12')).toBe(true);
        expect(enemyShips[0].hits.has('13')).toBe(true);

        expect(enemyShips[0].isSunk).toBe(true);
    });

    test('the enemy ship should be sunk and the game is over', () => {
        createShip(3, ['11', '12', '13'], 'enemy');

        registerHit('11', 'enemy');
        registerHit('12', 'enemy');

        const result = registerHit('13', 'enemy');
        expect(result).toEqual({ hit: true, gameOver: true });

        expect(enemyShips[0].hits.has('11')).toBe(true);
        expect(enemyShips[0].hits.has('12')).toBe(true);
        expect(enemyShips[0].hits.has('13')).toBe(true);

        expect(enemyShips[0].isSunk).toBe(true);
    });

    test('the enemy ship should be sunk and the game is not over', () => {
        createShip(3, ['11', '12', '13'], 'enemy');
        createShip(4, ['21', '22', '23', '24'], 'enemy');

        registerHit('11', 'enemy');
        registerHit('12', 'enemy');

        const result = registerHit('13', 'enemy');
        expect(result).toEqual({ hit: true, gameOver: false });

        expect(enemyShips[0].hits.has('11')).toBe(true);
        expect(enemyShips[0].hits.has('12')).toBe(true);
        expect(enemyShips[0].hits.has('13')).toBe(true);

        expect(enemyShips[0].isSunk).toBe(true);
    });
});