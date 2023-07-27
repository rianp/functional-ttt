import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("displays the Tic-Tac-Toe header", () => {
  render(<App />);

  expect(screen.getByText(/Tic-Tac-Toe/i)).toBeVisible();
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

describe("alert message", () => {
  test("doesn't display alert on initial load.", () => {
    render(<App />);

    expect(
      screen.queryByText("Move already made. Please choose an empty cell.")
    ).not.toBeInTheDocument();
  });

  test("displays the alert message when an invalid move is made", () => {
    render(<App />);
    const cellOne = screen.getByText("1");

    fireEvent.click(cellOne);
    fireEvent.click(cellOne);

    expect(
      screen.getByText("Move already made. Please choose an empty cell.")
    ).toBeVisible();
  });

  test("closes alert when the close button is clicked.", () => {
    render(<App />);
    const cellOne = screen.getByText("1");

    fireEvent.click(cellOne);
    fireEvent.click(cellOne);
    fireEvent.click(screen.getByText("close"));

    expect(
      screen.queryByText("Move already made. Please choose an empty cell.")
    ).not.toBeInTheDocument();
  });
});

describe("display game status", () => {
  test("displays game is ongoing when game isn't finished.", () => {
    render(<App />);

    expect(screen.queryByText("Game Status: Ongoing")).toBeVisible();
  });

  test("displays game is a draw when there is no winner.", () => {
    render(<App />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(screen.getByText("9"));

    expect(screen.getByText("Game Status: Draw")).toBeVisible();
  });

  test("displays game winner is X when player X has won horizontally.", () => {
    render(<App />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("3"));

    expect(screen.getByText("Game Status: Winner is X")).toBeVisible();
  });

  test("displays game winner is X when player X has won vertically.", () => {
    render(<App />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("7"));

    expect(screen.getByText("Game Status: Winner is X")).toBeVisible();
  });

  test("displays game winner is X when player X has won diagonally.", () => {
    render(<App />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("9"));

    expect(screen.getByText("Game Status: Winner is X")).toBeVisible();
  });
});
