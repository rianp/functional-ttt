import React, { useState } from "react";
import "./App.css";
import Board from "./board/Board";
import { Instructions } from "./instructions/Instructions";
import InstructionsButton from "./instructions/InstructionsButton";
import {
  calculateCurrentPlayerId,
  calculateCurrentPlayerMark,
} from "./changeTurn";
import Alert from "./alert/Alert";

export default function App() {
  const [currentPlayerId, setCurrentPlayerId] = useState(0);
  const [isAlertVisible, setAlertVisible] = useState(false);

  const changeTurn = () => {
    const updatedPlayerId = calculateCurrentPlayerId(currentPlayerId);
    setCurrentPlayerId(updatedPlayerId);
  };

  const showAlert = () => {
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
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
        <div>
          {isAlertVisible && (
            <Alert
              message="Move already made. Please choose an empty cell."
              onClose={closeAlert}
            />
          )}
        </div>
        <Board
          showAlert={showAlert}
          changeTurn={changeTurn}
          currentPlayer={calculateCurrentPlayerMark(currentPlayerId)}
        />
      </div>
    </div>
  );
}
