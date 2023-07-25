import { isValid } from "../validation/isValid";
import { updateBoard } from "../board/updateBoard";

export const updateGame = (
  setAlertVisible,
  cellValue,
  boardData,
  currentPlayer,
  changeTurn,
  setBoardData
) => {
  if (isValid(cellValue, setAlertVisible)) {
    setBoardData(updateBoard(boardData, cellValue, currentPlayer));
    changeTurn();
  }
};
