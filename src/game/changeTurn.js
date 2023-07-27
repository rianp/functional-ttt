import { validateMove } from "../validation/validateMove";

export function calculateNextPlayerId(
  currentPlayerId,
  cellSpot,
  setIsValidMove
) {
  if (validateMove(cellSpot, setIsValidMove)) {
    const updatedPlayerId = Math.abs(currentPlayerId - 1);
    return updatedPlayerId;
  }

  return currentPlayerId;
}

export function calculateCurrentPlayerMark(currentPlayerId) {
  return currentPlayerId === 0 ? "X" : "O";
}
