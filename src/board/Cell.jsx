import "./Cell.css";
import PropTypes from "prop-types";

function Cell({ cellValue }) {
  return <div className="cell"> {cellValue}</div>;
}

Cell.propTypes = {
  cellValue: PropTypes.number.isRequired,
};

export default Cell;
