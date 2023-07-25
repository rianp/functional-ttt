import { screen, render, fireEvent } from "@testing-library/react";
import Game from "./Game";

describe("when user clicks a cell", () => {
  test("board is updated with correct marker", () => {
    const mockChangeTurn = jest.fn();
    render(
      <Game
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
      <Game
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
      <Game
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
