import React, { useState } from "react";
import Row from "./Row";
import "./Board.css";
import { updateBoard } from "./updateBoard";
import PropTypes from "prop-types";
import { getBoardStatus } from "./getBoardStatus";
import { buildBoard } from "./buildBoard";

function Board({ changeTurn, currentPlayer, changeStatus, size }) {
  const [boardData, setBoardData] = useState(buildBoard(size));

  const handleBoardClick = (cellSpot) => {
    const board = updateBoard(boardData, cellSpot, currentPlayer);
    setBoardData(board);
    changeStatus(getBoardStatus(board));
    changeTurn(cellSpot);
  };

  return (
    <div className="board">
      {boardData.map((row, index) => (
        <Row
          key={index}
          row={row}
          handleClick={handleBoardClick}
          boardSize={size}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  changeTurn: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

export default Board;
