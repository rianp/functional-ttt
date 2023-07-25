import React, { useState } from "react";
import Board from "../board/Board";
import { updateBoard } from "../board/updateBoard";
import { updateGame } from "../game/updateGame";
import { defaultBoardData } from "../board/boardData";

export const Game = ({ setAlertVisible, changeTurn, currentPlayer }) => {
  const [boardData, setBoardData] = useState(defaultBoardData);

  const handleClick = (cellValue) => {
    const updatedBoard = updateGame(
      setAlertVisible,
      cellValue,
      boardData,
      currentPlayer,
      changeTurn,
      updateBoard
    );
    setBoardData(updatedBoard);
  };

  return (
    <div>
      <Board boardData={boardData} handleClick={handleClick} />
    </div>
  );
};

export default Game;
