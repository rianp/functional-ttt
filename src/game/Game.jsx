import Board from "../board/Board";

export const Game = ({ changeTurn, currentPlayer }) => {
  return (
    <div>
      <Board changeTurn={changeTurn} currentPlayer={currentPlayer} />
    </div>
  );
};

export default Game;
