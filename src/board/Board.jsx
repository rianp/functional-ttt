import React from "react";
import Row from "./Row";
import "./Board.css";

function Board({ boardData, handleClick }) {
  return (
    <div className="board">
      {boardData.map((row, index) => (
        <Row key={index} row={row} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Board;
