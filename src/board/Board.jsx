import React, { useState } from "react";
import Row from "./Row";
import "./Board.css";
import { updateBoard } from "./updateBoard";
import { defaultBoardData } from "../board/boardData";

function Board({ changeTurn, currentPlayer }) {
  const [boardData, setBoardData] = useState(defaultBoardData);

  const handleBoardClick = (cellValue) => {
    const board = updateBoard(boardData, cellValue, currentPlayer);
    setBoardData(board);
    changeTurn(cellValue);
  };

  return (
    <div className="board">
      {boardData.map((row, index) => (
        <Row key={index} row={row} handleClick={handleBoardClick} />
      ))}
    </div>
  );
}

export default Board;
