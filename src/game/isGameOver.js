import { getBoardStatus } from "../board/getBoardStatus";

export function isGameOver() {
  return getBoardStatus() !== "Ongoing";
}
