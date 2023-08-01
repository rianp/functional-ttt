import React, { useState } from "react";
import "./App.css";
import Board from "./board/Board";
import { Instructions } from "./instructions/Instructions";
import InstructionsButton from "./instructions/InstructionsButton";
import {
  calculateNextPlayerId,
  calculateCurrentPlayerMark,
} from "./game/helpers";
import Alert, { shouldDisplayAlert } from "./common/components/Alert";
import { displayGameStatus } from "./game/displayGameStatus";

const GAME_STATUS = {
  Ongoing: "Ongoing",
  Won: "Won",
  Draw: "Draw",
};

export default function App() {
  const [currentPlayerId, setCurrentPlayerId] = useState(0);
  const [isValidMove, setIsValidMove] = useState(true);
  const [gameState, setGameState] = useState(GAME_STATUS.Ongoing);

  const changeTurn = (cellSpot) => {
    setCurrentPlayerId((prevPlayerId) =>
      calculateNextPlayerId(prevPlayerId, cellSpot, setIsValidMove, gameState)
    );
  };

  const currentPlayerMark = calculateCurrentPlayerMark(currentPlayerId);

  const changeState = (gameState) => {
    setGameState(gameState);
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
            Game Status: {displayGameStatus(gameState)}
          </div>
        </div>
        <div>
          {shouldDisplayAlert(isValidMove, gameState) && (
            <Alert onClose={() => setIsValidMove(true)} />
          )}
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
