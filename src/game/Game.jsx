import React, { useState } from "react";
import Board from "../board/Board";
import { updateGame } from "../game/updateGame";
import { defaultBoardData } from "../board/boardData";

export const Game = ({ setAlertVisible, changeTurn, currentPlayer }) => {
  const [boardData, setBoardData] = useState(defaultBoardData);

  const handleClick = (cellValue) => {
    updateGame(
      setAlertVisible,
      cellValue,
      boardData,
      currentPlayer,
      changeTurn,
      setBoardData
    );
  };

  return (
    <div>
      <Board boardData={boardData} handleClick={handleClick} />
    </div>
  );
};

export default Game;
