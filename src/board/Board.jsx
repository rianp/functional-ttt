import React, { useState } from "react";
import Row from "./Row";
import "./Board.css";
import PropTypes from "prop-types";

const defaultBoardData = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

function Board({ changeTurn, currentPlayer }) {
  const [boardData, setBoardData] = useState(defaultBoardData);

  const handleClick = (cellValue) => {
    const updatedBoard = updateBoard(boardData, cellValue, currentPlayer);
    setBoardData(updatedBoard);

    changeTurn();
  };

  return (
    <div className="board">
      {boardData.map((row, index) => (
        <Row
          key={index}
          row={row}
          handleClick={handleClick}
          data-testid="row"
        />
      ))}
    </div>
  );
}

export function updateBoard(board, value, turn) {
  const updatedBoard = board.map((row) =>
    row.map((cell) =>
      cell === value && value !== "x" && value !== "o" ? turn : cell
    )
  );

  return updatedBoard;
}

Board.propTypes = {
  changeTurn: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
};

export default Board;
