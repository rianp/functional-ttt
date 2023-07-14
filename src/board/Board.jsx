import Row from "./Row";
import "./Board.css";
import PropTypes from "prop-types";

function Board({ data }) {
  return (
    <div className="board">
      {data.map((row, index) => (
        <Row key={index} row={row} data-testid="row" />
      ))}
    </div>
  );
}

Board.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default Board;
