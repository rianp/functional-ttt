import React, { useState } from "react";
import Row from "./Row";
import "./Board.css";
import { updateBoard } from "./updateBoard";
import { defaultBoardData } from "../board/boardData";
import PropTypes from "prop-types";

function Board({ changeTurn, currentPlayer }) {
  const [boardData, setBoardData] = useState(defaultBoardData);

  const handleBoardClick = (cellSpot) => {
    const board = updateBoard(boardData, cellSpot, currentPlayer);
    setBoardData(board);
    changeTurn(cellSpot);
  };

  return (
    <div className="board">
      {boardData.map((row, index) => (
        <Row key={index} row={row} handleClick={handleBoardClick} />
      ))}
    </div>
  );
}

Board.propTypes = {
  changeTurn: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
};

export default Board;
