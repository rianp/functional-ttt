export function updateBoard(board, value, turn) {
  const updatedBoard = board.map((row) =>
    row.map((cell) =>
      cell === value && value !== "x" && value !== "o" ? turn : cell
    )
  );

  return updatedBoard;
}
