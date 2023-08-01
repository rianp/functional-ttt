export const displayGameStatus = (status) => {
  if (status === "X" || status === "O") {
    return `Winner is ${status}`;
  } else if (status === "draw") {
    return "The game is a draw!";
  }
  return status;
};
