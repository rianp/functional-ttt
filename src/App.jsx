import React, { useState } from "react";
import "./App.css";
import Board from "./board/Board";
import { Instructions } from "./instructions/Instructions";
import InstructionsButton from "./instructions/InstructionsButton";

export default function App() {
  const [currentPlayerId, setCurrentPlayerId] = useState(0);

  const changeTurn = () => {
    const updatedPlayerId = Math.abs(currentPlayerId - 1);
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
      <div className="App-body">
        <Board
          changeTurn={changeTurn}
          currentPlayer={currentPlayerId === 0 ? "x" : "o"}
        />
      </div>
    </div>
  );
}
