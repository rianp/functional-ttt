import "./Cell.css";
import PropTypes from "prop-types";

function Cell({ cellSpot, handleClick }) {
  return (
    <div className="cell" onClick={() => handleClick(cellSpot)}>
      {cellSpot}
    </div>
  );
}

Cell.propTypes = {
  cellSpot: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
