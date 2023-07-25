export function updateBoard(board, value, turn) {
  if (value === "X" || value === "O") {
    return board;
  }

  return board.map((row) => row.map((cell) => (cell === value ? turn : cell)));
}
