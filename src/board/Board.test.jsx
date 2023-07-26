import { screen, render, fireEvent } from "@testing-library/react";
import Board from "./Board";

test("has the correct number of rows", () => {
  const boardData = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];

  render(<Board boardData={boardData} handleClick={() => {}} />);

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
    render(
      <Board
        setAlertVisible={jest.fn()}
        changeTurn={mockChangeTurn}
        currentPlayer="z"
      />
    );

    const cellOne = screen.getByText("1");
    fireEvent.click(cellOne);

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(cellOne).toHaveTextContent("z");
  });

  test("changes turn", () => {
    const mockChangeTurn = jest.fn();
    render(
      <Board
        setAlertVisible={jest.fn()}
        changeTurn={mockChangeTurn}
        currentPlayer="z"
      />
    );

    const cellOne = screen.getByText("1");
    fireEvent.click(cellOne);

    expect(mockChangeTurn).toHaveBeenCalled();
  });

  test("other cells remain unchanged", () => {
    const mockChangeTurn = jest.fn();
    render(
      <Board
        setAlertVisible={jest.fn()}
        changeTurn={mockChangeTurn}
        currentPlayer="z"
      />
    );

    const cellOne = screen.getByText("1");
    const cellTwo = screen.getByText("2");
    const cellThree = screen.getByText("3");
    fireEvent.click(cellOne);

    expect(cellOne).toHaveTextContent("z");
    expect(cellTwo).toHaveTextContent("2");
    expect(cellThree).toHaveTextContent("3");
  });
});
