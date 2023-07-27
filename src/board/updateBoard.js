export function updateBoard(board, cellSpot, currentPlayer) {
  if (cellSpot === "X" || cellSpot === "O") {
    return board;
  }

  return board.map((row) =>
    row.map((cell) => (cell === cellSpot ? currentPlayer : cell))
  );
}
