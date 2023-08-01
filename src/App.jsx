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
import Menu from "./menu/Menu";

const GAME_STATUS = {
  Ongoing: "Ongoing",
  Won: "Won",
  Draw: "Draw",
};

export default function App() {
  const [currentPlayerId, setCurrentPlayerId] = useState(0);
  const [isValidMove, setIsValidMove] = useState(true);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.Ongoing);
  const [boardSize, setBoardSize] = useState(null);

  const changeTurn = (cellSpot) => {
    setCurrentPlayerId((prevPlayerId) =>
      calculateNextPlayerId(prevPlayerId, cellSpot, setIsValidMove, gameStatus)
    );
  };

  const currentPlayerMark = calculateCurrentPlayerMark(currentPlayerId);

  const changeStatus = (gameStatus) => {
    setGameStatus(gameStatus);
  };

  const handleBoardSizeChange = (size) => {
    setBoardSize(size);
  };

  const isBoardChosen = () => {
    return boardSize !== null;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <InstructionsButton>
          <Instructions />
        </InstructionsButton>
      </header>
      {isBoardChosen() ? (
        <div className="App-body">
          <div className="game-status">
            <div className="game-status-data">
              Current Player: {currentPlayerMark}
            </div>
            <div className="game-status-data">
              Game Status: {displayGameStatus(gameStatus)}
            </div>
          </div>
          <div>
            {shouldDisplayAlert(isValidMove, gameStatus) && (
              <Alert onClose={() => setIsValidMove(true)} />
            )}
          </div>
          <Board
            changeTurn={changeTurn}
            currentPlayer={currentPlayerMark}
            changeStatus={changeStatus}
            size={boardSize}
          />
        </div>
      ) : (
        <div className="App-body">
          <Menu handleBoardSizeChange={handleBoardSizeChange} />
        </div>
      )}
    </div>
  );
}
