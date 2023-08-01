export function getBoardStatus(board) {
  for (const row of board) {
    if (row.every((cell) => cell === row[0])) {
      return row[0] === "X" ? "X" : "O";
    }
  }

  for (let col = 0; col < board.length; col++) {
    if (board.every((row) => row[col] === board[0][col])) {
      return board[0][col] === "X" ? "X" : "O";
    }
  }

  if (board.every((row, i) => row[i] === board[0][0])) {
    return board[0][0] === "X" ? "X" : "O";
  }

  if (
    board.every(
      (row, i) => row[row.length - i - 1] === board[0][row.length - 1]
    )
  ) {
    return board[0][board.length - 1] === "X" ? "X" : "O";
  }

  if (board.every((row) => row.every((cell) => cell === "X" || cell === "O"))) {
    return "Draw";
  }

  return "Ongoing";
}
