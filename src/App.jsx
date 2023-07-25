import React, { useState } from "react";
import "./App.css";
import Game from "./game/Game";
import { Instructions } from "./instructions/Instructions";
import InstructionsButton from "./instructions/InstructionsButton";
import {
  calculateCurrentPlayerId,
  calculateCurrentPlayerMark,
} from "./game/changeTurn";
import Alert from "./common/components/Alert";

export default function App() {
  const [currentPlayerId, setCurrentPlayerId] = useState(0);
  const [isAlertVisible, setAlert] = useState(false);

  const changeTurn = (cellValue) => {
    setCurrentPlayerId((prevPlayerId) =>
      calculateCurrentPlayerId(prevPlayerId, cellValue, setAlert)
    );
  };

  const currentPlayerMark = calculateCurrentPlayerMark(currentPlayerId);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <InstructionsButton>
          <Instructions />
        </InstructionsButton>
      </header>
      <div className="App-body">
        <div className="game-state">
          <div className="game-state-data">
            Current Player: {currentPlayerMark}
          </div>
        </div>
        <div>{isAlertVisible && <Alert onClose={() => setAlert(false)} />}</div>
        <Game
          setAlertVisible={setAlert}
          changeTurn={changeTurn}
          currentPlayer={currentPlayerMark}
        />
      </div>
    </div>
  );
}
