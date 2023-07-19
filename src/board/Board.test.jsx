import { screen, render } from "@testing-library/react";
import Board from "./Board";

test("has the correct number of rows", () => {
  render(<Board changeTurn={jest.fn()} currentPlayer={"x"} />);

  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
  expect(screen.getByText("3")).toBeInTheDocument();
  expect(screen.getByText("4")).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument();
  expect(screen.getByText("6")).toBeInTheDocument();
  expect(screen.getByText("7")).toBeInTheDocument();
  expect(screen.getByText("8")).toBeInTheDocument();
  expect(screen.getByText("9")).toBeInTheDocument();
});
