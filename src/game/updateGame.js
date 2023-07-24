export const updateGame = (
  showAlert,
  closeAlert,
  cellValue,
  boardData,
  currentPlayer,
  changeTurn,
  updateBoard
) => {
  let updatedBoard = boardData;

  if (cellValue !== "X" && cellValue !== "O") {
    closeAlert();
    updatedBoard = updateBoard(boardData, cellValue, currentPlayer);
    changeTurn();
  } else {
    showAlert();
  }

  return updatedBoard;
};
