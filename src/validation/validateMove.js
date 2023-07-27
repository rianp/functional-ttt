export const validateMove = (cellSpot = "Z", setIsValidMove) => {
  const isValidMove = cellSpot !== "X" && cellSpot !== "O";
  setIsValidMove(isValidMove);
  return isValidMove;
};
