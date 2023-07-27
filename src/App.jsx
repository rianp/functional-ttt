import React, { useState } from "react";
import "./App.css";
import Board from "./board/Board";
import { Instructions } from "./instructions/Instructions";
import InstructionsButton from "./instructions/InstructionsButton";
import {
  calculateNextPlayerId,
  calculateCurrentPlayerMark,
} from "./game/changeTurn";
import Alert from "./common/components/Alert";
import { displayGameStatus } from "./game/displayGameStatus";

export default function App() {
  const [currentPlayerId, setCurrentPlayerId] = useState(0);
  const [isValidMove, setIsValidMove] = useState(true);
  const [boardState, setBoardState] = useState("Ongoing");

  const changeTurn = (cellSpot) => {
    setCurrentPlayerId((prevPlayerId) =>
      calculateNextPlayerId(prevPlayerId, cellSpot, setIsValidMove)
    );
  };

  const currentPlayerMark = calculateCurrentPlayerMark(currentPlayerId);

  const changeState = (state) => {
    setBoardState(state);
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
        <div className="game-state">
          <div className="game-state-data">
            Current Player: {currentPlayerMark}
          </div>
          <div className="game-state-data">
            Game Status: {displayGameStatus(boardState)}
          </div>
        </div>
        <div>
          {!isValidMove && <Alert onClose={() => setIsValidMove(true)} />}
        </div>
        <Board
          changeTurn={changeTurn}
          currentPlayer={currentPlayerMark}
          changeState={changeState}
        />
      </div>
    </div>
  );
}
