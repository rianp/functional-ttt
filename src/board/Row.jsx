import Cell from "./Cell";
import "./Row.css";
import PropTypes from "prop-types";

function Row({ row }) {
  return (
    <div className="row">
      {row.map((cellValue, index) => {
        return <Cell key={index} cellValue={cellValue} />;
      })}
    </div>
  );
}

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Row;
