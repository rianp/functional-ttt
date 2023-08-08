import React from "react";

function Menu({ handleBoardSize }) {
  return (
    <div className="board-size-selection">
      <h1>Select Board Size</h1>
      <button className="size-button" onClick={() => handleBoardSize(3)}>
        3x3
      </button>
      <button className="size-button" onClick={() => handleBoardSize(5)}>
        5x5
      </button>
    </div>
  );
}

export default Menu;
