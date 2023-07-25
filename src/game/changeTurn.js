export function calculateCurrentPlayerId(currentPlayerId) {
  if (currentPlayerId !== 0 && currentPlayerId !== 1) {
    throw new Error("Invalid currentPlayerId. It should be either 0 or 1.");
  }

  const updatedPlayerId = Math.abs(currentPlayerId - 1);
  return updatedPlayerId;
}

export function calculateCurrentPlayerMark(currentPlayerId) {
  if (currentPlayerId !== 0 && currentPlayerId !== 1) {
    throw new Error("Invalid currentPlayerId. It should be either 0 or 1.");
  }

  const currentPlayerMark = currentPlayerId === 0 ? "X" : "O";
  return currentPlayerMark;
}
