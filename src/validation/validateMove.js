export const validateMove = (cellSpot, setIsValidMove) => {
  setIsValidMove(isValidMove(cellSpot));
  return isValidMove(cellSpot);
};

export const isValidMove = (cellSpot) => {
  return cellSpot !== "X" && cellSpot !== "O";
};
