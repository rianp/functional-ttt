import { getBoardState } from "./getBoardState";

export function updateBoard(board, cellSpot, currentPlayer) {
  if (
    cellSpot === "X" ||
    cellSpot === "O" ||
    getBoardState(board) !== "Ongoing"
  ) {
    return board;
  }

  return board.map((row) =>
    row.map((cell) => (cell === cellSpot ? currentPlayer : cell))
  );
}
