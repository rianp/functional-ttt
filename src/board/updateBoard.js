export function updateBoard(board, value, turn) {
  const updatedBoard = board.map((row) =>
    row.map((cell) => (cell === value ? turn : cell))
  );

  return updatedBoard;
}
