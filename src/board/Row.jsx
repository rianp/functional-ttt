import Cell from "./Cell";
import "./Row.css";
import PropTypes from "prop-types";

function Row({ row, handleClick }) {
  return (
    <div className="row">
      {row.map((cellValue, index) => {
        return (
          <Cell
            key={index}
            cellValue={cellValue}
            handleClick={handleClick}
            data-testid="cell"
          />
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
