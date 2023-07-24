import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("displays the Tic-Tac-Toe header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Tic-Tac-Toe/i);
  expect(headerElement).toBeInTheDocument();
});

test("updates the currentPlayer", () => {
  render(<App />);
  const cellOne = screen.getByText("1");
  const cellTwo = screen.getByText("2");

  fireEvent.click(cellOne);
  expect(screen.queryByText("1")).not.toBeInTheDocument();
  expect(cellOne).toHaveTextContent("X");

  fireEvent.click(cellTwo);
  expect(screen.queryByText("2")).not.toBeInTheDocument();
  expect(cellTwo).toHaveTextContent("O");
});

// refactor to check that other cells arent changed
