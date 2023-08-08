import { getBoardStatus } from "./getBoardStatus";

export function updateBoard(board, cellSpot, currentPlayer) {
  if (
    cellSpot === "X" ||
    cellSpot === "O" ||
    getBoardStatus(board) !== "Ongoing"
  ) {
    return board;
  }

  return board.map((row) =>
    row.map((cell) => (cell === cellSpot ? currentPlayer : cell))
  );
}
