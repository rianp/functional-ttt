import "./App.css";
import { printGreeting, printInstructions } from "./components/Console";
import { formatBoard } from "./utils/Formatter";
import { generateBoard } from "./components/Board";

function App() {
  const greeting = printGreeting();
  const instructions = printInstructions();
  let boardSize = 9;
  const board = formatBoard(generateBoard(boardSize), boardSize);

  return (
    <div className="App">
      <header className="App-header">
        <pre>{greeting}</pre>
      </header>
      <pre>{instructions}</pre>
      <body className="App-body">{board}</body>
    </div>
  );
}

export default App;
