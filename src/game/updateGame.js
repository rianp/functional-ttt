export const updateGame = (
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
  }

  return updatedBoard;
};
