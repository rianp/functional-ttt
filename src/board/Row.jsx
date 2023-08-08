import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";
import "./Row.css";

const Row = ({ row, handleClick, boardSize }) => {
  const gridStyle = {
    "--num-columns": boardSize,
  };

  return (
    <div style={gridStyle} className="row">
      {row.map((cellSpot, index) => (
        <Cell key={index} cellSpot={cellSpot} handleClick={handleClick} />
      ))}
    </div>
  );
};

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Row;
