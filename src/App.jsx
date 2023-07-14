import "./App.css";
import Board from "./board/Board";
import { boardData } from "./board/BoardData";

import { Instructions } from "./instructions/Instructions";
import InstructionsButton from "./instructions/InstructionsButton";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <InstructionsButton>
          <Instructions />
        </InstructionsButton>
      </header>
      <div className="App-body">
        <Board data={boardData} />
      </div>
    </div>
  );
}
