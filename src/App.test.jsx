import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("displays the Tic-Tac-Toe header", () => {
  render(<App />);

  expect(screen.getByText(/Tic-Tac-Toe/i)).toBeVisible();
});

describe("menu", () => {
  test("should display at the start of the game", () => {
    render(<App />);

    expect(screen.getByText("Select Board Size")).toBeVisible();
  });

  test("should not be displayed after board size is chosen", () => {
    render(<App />);
    const sizeButton = screen.getByText("3x3");

    fireEvent.click(sizeButton);

    expect(screen.queryByText("Select Board Size")).not.toBeInTheDocument();
  });
});

describe("correctly sized board", () => {
  test("should be displayed when a 3x3 board is chosen", () => {
    render(<App />);
    const sizeButton = screen.getByText("3x3");

    fireEvent.click(sizeButton);

    expect(screen.getByText("1")).toBeVisible();
    expect(screen.getByText("9")).toBeVisible();
    expect(screen.queryByText("10")).not.toBeInTheDocument();
  });

  test("should be displayed when a 5x5 board is chosen", () => {
    render(<App />);
    const sizeButton = screen.getByText("5x5");

    fireEvent.click(sizeButton);

    expect(screen.getByText("1")).toBeVisible();
    expect(screen.getByText("25")).toBeVisible();
    expect(screen.queryByText("26")).not.toBeInTheDocument();
  });

  test("should not be displayed when a board hasn't been chosen", () => {
    render(<App />);

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("9")).not.toBeInTheDocument();
  });
});

test("updates the currentPlayer", () => {
  render(<App />);
  const sizeButton = screen.getByText("3x3");
  fireEvent.click(sizeButton);
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
  beforeEach(() => {
    render(<App />);
    const sizeButton = screen.getByText("3x3");
    fireEvent.click(sizeButton);
  });

  test("doesn't display alert on initial load.", () => {
    expect(
      screen.queryByText("Move already made. Please choose an empty cell.")
    ).not.toBeInTheDocument();
  });

  test("displays the alert message when an invalid move is made", () => {
    const cellOne = screen.getByText("1");

    fireEvent.click(cellOne);
    fireEvent.click(cellOne);

    expect(
      screen.getByText("Move already made. Please choose an empty cell.")
    ).toBeVisible();
  });

  test("closes alert when the close button is clicked.", () => {
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
  beforeEach(() => {
    render(<App />);
    const sizeButton = screen.getByText("3x3");
    fireEvent.click(sizeButton);
  });

  test("displays game is ongoing when game isn't finished.", () => {
    expect(screen.queryByText("Ongoing")).toBeVisible();
  });

  test("displays game is a draw when there is no winner.", () => {
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(screen.getByText("9"));

    expect(screen.getByText("Draw")).toBeVisible();
  });

  test("displays game winner is X when player X has won horizontally.", () => {
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("3"));

    expect(screen.getByText("Winner is X")).toBeVisible();
  });

  test("displays game winner is X when player X has won vertically.", () => {
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("7"));

    expect(screen.getByText("Winner is X")).toBeVisible();
  });

  test("displays game winner is X when player X has won diagonally.", () => {
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("9"));

    expect(screen.getByText("Winner is X")).toBeVisible();
  });
});
