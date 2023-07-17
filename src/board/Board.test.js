import { screen, render } from "@testing-library/react";
import Board from "./Board";

test("has the correct number of rows", () => {
  const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  render(<Board data={data} />);

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
