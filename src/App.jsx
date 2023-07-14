import "./App.css";
import Board from "./board/Board";
import { boardData } from "./board/BoardData";

import { Instructions } from "./instructions/Instructions";
import Toggle from "./instructions/Toggle";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <Toggle>
          <Instructions />
        </Toggle>
      </header>
      <div className="App-body">
        <Board data={boardData} />
      </div>
    </div>
  );
}
