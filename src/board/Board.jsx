import Row from "./Row";
import "./Board.css";
// import { changeTurn } from "../players/Players";
import PropTypes from "prop-types";
const { arrayOf, string } = PropTypes;

function Board({ data, handleClick }) {
  return (
    <div className="board">
      {data.map((row, index) => (
        <Row
          key={index}
          row={row}
          handleClick={handleClick}
          data-testid="row"
        />
      ))}
    </div>
  );
}

export function updateBoard(board, value, turn) {
  const updatedBoard = board.map((row) =>
    row.map((cell) =>
      cell === value && value !== "x" && value !== "o" ? turn : cell
    )
  );

  return updatedBoard;
}

Board.propTypes = {
  data: arrayOf(arrayOf(string)).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Board;
