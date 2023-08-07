import React, { useState } from "react";
import "./Cell.css";
import PropTypes from "prop-types";
import { isValidMove } from "../validation/validateMove";

function Cell({ cellSpot, handleClick, gameStatus }) {
  console.log(cellSpot);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCellClick = () => {
    const audio = new Audio(process.env.PUBLIC_URL + "/cell.wav");
    if (isValidMove(cellSpot) & (gameStatus === "Ongoing")) {
      setIsFlipped(!isFlipped);
      audio.play();
    }
    handleClick(cellSpot);
  };

  return (
    <div
      className={`cell ${isFlipped ? "flipped" : ""}`}
      onClick={handleCellClick}
    >
      {cellSpot}
    </div>
  );
}

Cell.propTypes = {
  cellSpot: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
