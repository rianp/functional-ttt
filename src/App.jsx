import React, { useState } from "react";
import "./App.css";
import Board from "./board/Board";
import { Instructions } from "./instructions/Instructions";
import InstructionsButton from "./instructions/InstructionsButton";

const players = ["x", "o"];

export default function App() {
  const [turnIndex, setTurnIndex] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState("x");

  const changeTurn = () => {
    const updatedIndex = (turnIndex + 1) % players.length;
    const updatedPlayer = players[updatedIndex];
    setTurnIndex(updatedIndex);
    setCurrentPlayer(updatedPlayer);
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
        <Board changeTurn={changeTurn} currentPlayer={currentPlayer} />
      </div>
    </div>
  );
}
