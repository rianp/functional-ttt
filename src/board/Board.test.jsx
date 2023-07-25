import { screen, render } from "@testing-library/react";
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
