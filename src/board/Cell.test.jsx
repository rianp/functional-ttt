import { render, screen } from "@testing-library/react";
import Cell from "./Cell";
import userEvent from "@testing-library/user-event";

test("display a value in a cell", () => {
  render(<Cell cellSpot={"abc"} handleClick={jest.fn()} />);

  expect(screen.getByText("abc")).toBeVisible();
});

test("handles click", () => {
  const handleClickMock = jest.fn();
  const cellSpot = "abc";

  render(<Cell cellSpot={cellSpot} handleClick={handleClickMock} />);

  const cell = screen.getByText("abc");
  userEvent.click(cell);

  expect(handleClickMock).toHaveBeenCalledWith(cellSpot);
});
