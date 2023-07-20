import { screen, render, fireEvent } from "@testing-library/react";
import Board from "./Board";

test("has the correct number of rows", () => {
  render(<Board changeTurn={jest.fn()} currentPlayer={"x"} />);

  expect(screen.getByText("1")).toBeVisible();
  expect(screen.getByText("2")).toBeVisible();
  expect(screen.getByText("3")).toBeVisible();
  expect(screen.getByText("4")).toBeVisible();
  expect(screen.getByText("5")).toBeVisible();
  expect(screen.getByText("6")).toBeVisible();
  expect(screen.getByText("7")).toBeVisible();
  expect(screen.getByText("8")).toBeVisible();
  expect(screen.getByText("9")).toBeVisible();
});

describe("when user clicks a cell", () => {
  test("board is updated with correct marker", () => {
    const mockChangeTurn = jest.fn();
    render(<Board changeTurn={mockChangeTurn} currentPlayer="z" />);

    const cellOne = screen.getByText("1");

    fireEvent.click(cellOne);
    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(cellOne).toHaveTextContent("z");
  });

  test("changes turn", () => {
    const mockChangeTurn = jest.fn();
    render(<Board changeTurn={mockChangeTurn} currentPlayer="z" />);

    const cellOne = screen.getByText("1");

    fireEvent.click(cellOne);
    expect(mockChangeTurn).toHaveBeenCalled();
  });
});

// move update board and defaultBoard to their own files.
//write unit tests for udpate baord function
