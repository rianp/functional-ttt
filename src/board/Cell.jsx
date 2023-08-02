import React, { useState } from "react";
import "./Cell.css";
import PropTypes from "prop-types";
import { isValidMove } from "../validation/validateMove";

function Cell({ cellSpot, handleClick }) {
  console.log(cellSpot);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCellClick = () => {
    if (isValidMove(cellSpot)) {
      setIsFlipped(!isFlipped);
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
