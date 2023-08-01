import { buildBoard } from "./buildBoard";

describe("buildBoard", () => {
  test("should build a 3x3 board", () => {
    const size = 3;
    const expectedBoard = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ];
    const result = buildBoard(size);
    expect(result).toEqual(expectedBoard);
  });

  test("should build a 5x5 board", () => {
    const size = 5;
    const expectedBoard = [
      ["1", "2", "3", "4", "5"],
      ["6", "7", "8", "9", "10"],
      ["11", "12", "13", "14", "15"],
      ["16", "17", "18", "19", "20"],
      ["21", "22", "23", "24", "25"],
    ];
    const result = buildBoard(size);
    expect(result).toEqual(expectedBoard);
  });
});
