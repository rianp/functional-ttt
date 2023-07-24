export const updateGame = (
  showAlert,
  cellValue,
  boardData,
  currentPlayer,
  changeTurn,
  updateBoard
) => {
  let updatedBoard = boardData;

  if (cellValue !== "X" && cellValue !== "O") {
    updatedBoard = updateBoard(boardData, cellValue, currentPlayer);
    changeTurn();
  } else {
    showAlert();
  }

  return updatedBoard;
};
