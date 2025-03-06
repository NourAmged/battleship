import { parseCellId } from "../src/modules/DOMhandle";

describe("parseCellId", () => {
    test("normal id", () => {
        expect(parseCellId('55')).toStrictEqual({
            row: 5,
            col: 5
        });
    });

    test("edge cases 1", () => {
        expect(parseCellId("1010")).toStrictEqual({
            row: 10,
            col: 10
        });
    });

    test("edge cases 2", () => {
        expect(parseCellId("109")).toStrictEqual({
            row: 10,
            col: 9
        });
    });

    test("edge cases 3", () => {
        expect(parseCellId("910")).toStrictEqual({
            row: 9,
            col: 10
        });
    });
});

