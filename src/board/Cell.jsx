import "./Cell.css";
import PropTypes from "prop-types";

function Cell({ cellValue, handleClick }) {
  return (
    <div className="cell" onClick={() => handleClick(cellValue)}>
      {cellValue}
    </div>
  );
}

Cell.propTypes = {
  cellValue: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
