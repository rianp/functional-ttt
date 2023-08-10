import React, { useState, useEffect } from "react";
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
  const [welcomeImage, setWelcomeImage] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setWelcomeImage(data.message);
      });
  }, []);

  const changeTurn = (cellSpot) => {
    setCurrentPlayerId((prevPlayerId) =>
      calculateNextPlayerId(prevPlayerId, cellSpot, setIsValidMove, gameStatus)
    );
  };

  const currentPlayerMark = calculateCurrentPlayerMark(currentPlayerId);

  const changeStatus = (gameStatus) => {
    setGameStatus(gameStatus);
  };

  const handleBoardSize = (boardSize) => {
    setBoardSize(boardSize);
  };

  const isBoardChosen = () => {
    return boardSize !== null;
  };

  console.log("welcome image", welcomeImage);

  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <img className="image" src={require("./title-banner.png")}></img>
          <h1 className="banner-text">Tic-Tac-Toe</h1>
        </div>
      </header>
      {isBoardChosen() ? (
        <div className="App-body">
          <InstructionsButton>
            <Instructions />
          </InstructionsButton>
          <div className="game-status">
            <div className="game-status-data">
              Current Player:{" "}
              <span className="game-status-text">{currentPlayerMark}</span>
            </div>
            <div className="game-status-data">
              Game Status:{" "}
              <span className="game-status-text">
                {displayGameStatus(gameStatus)}
              </span>
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
            boardSize={boardSize}
            gameStatus={gameStatus}
          />
        </div>
      ) : (
        <div className="App-body">
          <Menu handleBoardSize={handleBoardSize} />
          <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        </div>
      )}
    </div>
  );
}
