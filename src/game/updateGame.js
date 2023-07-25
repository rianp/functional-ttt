import { isValid } from "../validation/isValid";

export const updateGame = (
  setAlertVisible,
  cellValue,
  boardData,
  currentPlayer,
  changeTurn,
  updateBoard
) => {
  if (isValid(cellValue, setAlertVisible)) {
    const updatedBoard = updateBoard(boardData, cellValue, currentPlayer);
    changeTurn();
    return updatedBoard;
  }

  return boardData;
};
