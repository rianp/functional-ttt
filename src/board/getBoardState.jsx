export function getBoardState(board) {
  for (const row of board) {
    if (row.every((cell) => cell === row[0])) {
      return row[0] === "X" ? "X" : "0";
    }
  }

  for (let col = 0; col < 3; col++) {
    if (board.every((row) => row[col] === board[0][col])) {
      return board[0][col] === "X" ? "X" : "O";
    }
  }

  if (board.every((row, i) => row[i] === board[0][0])) {
    return board[0][0] === "X" ? "X" : "O";
  }

  if (board.every((row, i) => row[2 - i] === board[0][2])) {
    return board[0][2] === "X" ? "X" : "O";
  }

  if (board.every((row) => row.every((cell) => cell === "X" || cell === "O"))) {
    return "Draw";
  }

  return "Ongoing";
}
