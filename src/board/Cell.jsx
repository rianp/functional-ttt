import React, { useState } from "react";
import "./Cell.css";
import PropTypes from "prop-types";
import { isValidMove } from "../validation/validateMove";
import { playAudio } from "../common/components/playAudio";

function Cell({ cellSpot, handleClick, gameStatus }) {
  console.log(cellSpot);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCellClick = () => {
    if (isValidMove(cellSpot) && gameStatus === "Ongoing") {
      setIsFlipped(!isFlipped);
      playAudio();
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
