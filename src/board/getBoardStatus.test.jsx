import { getBoardStatus } from "./getBoardStatus";

describe("getBoardStatus", () => {
  it('should return "X" when a row is filled with "X"', () => {
    const board = [
      ["X", "X", "X"],
      ["O", "O", ""],
      ["", "", "O"],
    ];

    expect(getBoardStatus(board)).toBe("X");
  });

  it('should return "O" when a column is filled with "O"', () => {
    const board = [
      ["X", "O", "X"],
      ["", "O", "O"],
      ["", "O", "X"],
    ];

    expect(getBoardStatus(board)).toBe("O");
  });

  it('should return "X" when the diagonal from top-left to bottom-right is filled with "X"', () => {
    const board = [
      ["X", "", "O"],
      ["", "X", "O"],
      ["", "", "X"],
    ];

    expect(getBoardStatus(board)).toBe("X");
  });

  it('should return "O" when the diagonal from top-right to bottom-left is filled with "O"', () => {
    const board = [
      ["X", "", "O"],
      ["", "O", ""],
      ["O", "", "X"],
    ];

    expect(getBoardStatus(board)).toBe("O");
  });

  it('should return "Draw" when the board is filled with "X" and "O"', () => {
    const board = [
      ["X", "O", "X"],
      ["O", "O", "X"],
      ["X", "X", "O"],
    ];

    expect(getBoardStatus(board)).toBe("Draw");
  });

  it('should return "Ongoing" when the game is still in progress', () => {
    const board = [
      ["X", "", ""],
      ["", "O", "X"],
      ["", "", "O"],
    ];

    expect(getBoardStatus(board)).toBe("Ongoing");
  });
});

describe("getBoardStatus for 5x5 board", () => {
  it('should return "X" when a row is filled with "X"', () => {
    const board = [
      ["X", "X", "X", "X", "X"],
      ["O", "O", "", "", ""],
      ["", "", "O", "", ""],
      ["", "", "", "O", ""],
      ["", "", "", "", "O"],
    ];

    expect(getBoardStatus(board)).toBe("X");
  });

  it('should return "O" when a column is filled with "O"', () => {
    const board = [
      ["X", "O", "X", "", ""],
      ["", "O", "O", "", ""],
      ["", "O", "X", "", ""],
      ["", "O", "", "", ""],
      ["", "O", "", "", ""],
    ];

    expect(getBoardStatus(board)).toBe("O");
  });

  it('should return "X" when the diagonal from top-left to bottom-right is filled with "X"', () => {
    const board = [
      ["X", "", "O", "", ""],
      ["", "X", "O", "", ""],
      ["", "", "X", "", ""],
      ["", "", "", "X", ""],
      ["", "", "", "", "X"],
    ];

    expect(getBoardStatus(board)).toBe("X");
  });

  it('should return "O" when the diagonal from top-right to bottom-left is filled with "O"', () => {
    const board = [
      ["X", "", "O", "", "O"],
      ["", "O", "", "O", ""],
      ["O", "", "O", "", ""],
      ["", "O", "", "O", ""],
      ["O", "", "", "", "X"],
    ];

    expect(getBoardStatus(board)).toBe("O");
  });

  it('should return "Draw" when the board is filled with "X" and "O"', () => {
    const board = [
      ["X", "O", "X", "O", "X"],
      ["O", "O", "X", "O", "X"],
      ["X", "X", "O", "X", "O"],
      ["O", "O", "X", "O", "X"],
      ["X", "X", "O", "X", "O"],
    ];

    expect(getBoardStatus(board)).toBe("Draw");
  });

  it('should return "Ongoing" when the game is still in progress', () => {
    const board = [
      ["X", "O", "", "O", "X"],
      ["O", "", "X", "O", "X"],
      ["X", "", "O", "X", "O"],
      ["O", "O", "X", "", "X"],
      ["X", "X", "O", "X", "O"],
    ];

    expect(getBoardStatus(board)).toBe("Ongoing");
  });
});
