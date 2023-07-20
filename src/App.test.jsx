import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("displays the Tic-Tac-Toe header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Tic-Tac-Toe/i);
  expect(headerElement).toBeInTheDocument();
});

test("updates the currentPlayer", () => {
  const { container } = render(<App />);
  const cells = container.querySelectorAll(".cell");

  fireEvent.click(cells[0]);
  expect(screen.getByText("x")).toBeInTheDocument();

  fireEvent.click(cells[1]);
  expect(screen.getByText("o")).toBeInTheDocument();
});
