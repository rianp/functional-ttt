import React, { useState } from "react";
import "./App.css";
import Board from "./board/Board";
import { Instructions } from "./instructions/Instructions";
import InstructionsButton from "./instructions/InstructionsButton";
import {
  calculateCurrentPlayerId,
  calculateCurrentPlayerMark,
} from "./changeTurn";

export default function App() {
  const [currentPlayerId, setCurrentPlayerId] = useState(0);

  const changeTurn = () => {
    const updatedPlayerId = calculateCurrentPlayerId(currentPlayerId);
    setCurrentPlayerId(updatedPlayerId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <InstructionsButton>
          <Instructions />
        </InstructionsButton>
      </header>
      <p>Current Player: {calculateCurrentPlayerMark(currentPlayerId)}</p>
      <div className="App-body">
        <Board
          changeTurn={changeTurn}
          currentPlayer={calculateCurrentPlayerMark(currentPlayerId)}
        />
      </div>
    </div>
  );
}
