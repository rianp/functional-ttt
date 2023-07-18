import "./App.css";
import Board from "./board/Board";
import { changeTurn } from "./players/Players";
import { updateBoard } from "./board/Board";
import { boardData } from "./board/BoardData";
import React, { useState } from "react";

import { Instructions } from "./instructions/Instructions";
import InstructionsButton from "./instructions/InstructionsButton";

export default function App() {
  const [updatedBoardData, setUpdatedBoardData] = useState(boardData);

  const handleClick = (cellValue) => {
    let turn = changeTurn();
    setUpdatedBoardData((prevBoardData) =>
      updateBoard(prevBoardData, cellValue, turn)
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <InstructionsButton>
          <Instructions />
        </InstructionsButton>
      </header>
      <div className="App-body">
        <Board data={updatedBoardData} handleClick={handleClick} />
      </div>
    </div>
  );
}
