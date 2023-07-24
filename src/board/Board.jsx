import React, { useState } from "react";
import Row from "./Row";
import "./Board.css";
import { defaultBoardData } from "./boardData";
import { updateBoard } from "./updateBoard";
import { updateGame } from "../game/updateGame";
import PropTypes from "prop-types";

function Board({ changeTurn, currentPlayer }) {
  const [boardData, setBoardData] = useState(defaultBoardData);

  const handleClick = (cellValue) => {
    const updatedBoard = updateGame(
      cellValue,
      boardData,
      currentPlayer,
      changeTurn,
      updateBoard
    );
    setBoardData(updatedBoard);
  };

  return (
    <div className="board">
      {boardData.map((row, index) => (
        <Row key={index} row={row} handleClick={handleClick} />
      ))}
    </div>
  );
}

Board.propTypes = {
  changeTurn: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
};

export default Board;
