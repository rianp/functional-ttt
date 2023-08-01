export const validateMove = (cellSpot, setIsValidMove) => {
  const isValidMove = cellSpot !== "X" && cellSpot !== "O";
  setIsValidMove(isValidMove);
  return isValidMove;
};
