import { updateBoard } from "./updateBoard";

describe("updateBoard", () => {
  it("should update the board correctly with the correct mark", () => {
    const board = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ];
    const cellSpot = "1";
    const currentPlayer = "o";

    const updatedBoard = updateBoard(board, cellSpot, currentPlayer);

    expect(updatedBoard).toEqual([
      ["o", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ]);
  });

  it("should not update the board if the cell is already taken", () => {
    const board = [
      ["1", "2", "3"],
      ["4", "o", "6"],
      ["7", "8", "9"],
    ];
    const cellSpot = "5";
    const currentPlayer = "x";

    const updatedBoard = updateBoard(board, cellSpot, currentPlayer);

    expect(updatedBoard).toEqual(board);
  });

  it("should not update the board if the chosen cell is outside of the board", () => {
    const board = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ];
    const cellSpot = "30";
    const currentPlayer = "x";

    const updatedBoard = updateBoard(board, cellSpot, currentPlayer);

    expect(updatedBoard).toEqual(board);
  });
});
