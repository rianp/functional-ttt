import Cell from "./Cell";
import "./Row.css";
import PropTypes from "prop-types";

function Row({ row, handleClick }) {
  return (
    <div className="row">
      {row.map((cellSpot, index) => {
        return (
          <Cell key={index} cellSpot={cellSpot} handleClick={handleClick} />
        );
      })}
    </div>
  );
}

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Row;
