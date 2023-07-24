import { updateBoard } from "./updateBoard"; // Replace "./your-functions-file" with the actual path to your functions file.

describe("updateBoard", () => {
  it("should update the board correctly with the provided value", () => {
    const board = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ];
    const value = "1";
    const turn = "o";

    const updatedBoard = updateBoard(board, value, turn);

    expect(updatedBoard).toEqual([
      ["o", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ]);
  });

  it("should not update the board if the provided value is already taken", () => {
    const board = [
      ["1", "2", "3"],
      ["4", "o", "6"],
      ["7", "8", "9"],
    ];
    const value = "5";
    const turn = "x";

    const updatedBoard = updateBoard(board, value, turn);

    expect(updatedBoard).toEqual(board);
  });

  it("should not update the board if the provided value is not in the cells", () => {
    const board = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ];
    const value = "30";
    const turn = "x";

    const updatedBoard = updateBoard(board, value, turn);

    expect(updatedBoard).toEqual(board);
  });
});
