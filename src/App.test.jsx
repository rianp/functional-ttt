import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("displays the Tic-Tac-Toe header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Tic-Tac-Toe/i);
  expect(headerElement).toBeVisible();
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

test("displays the alert message when showAlert is called", () => {
  render(<App />);
  const cellOne = screen.getByText("1");
  fireEvent.click(cellOne);
  fireEvent.click(cellOne);

  const alertMessage = screen.getByText(
    "Move already made. Please choose an empty cell."
  );
  expect(alertMessage).toBeVisible();
});
