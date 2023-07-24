import { render, screen } from "@testing-library/react";
import Cell from "./Cell";
import userEvent from "@testing-library/user-event";

test("display a value in a cell", () => {
  render(<Cell cellValue={"abc"} handleClick={jest.fn()} />);

  expect(screen.getByText("abc")).toBeVisible();
});

test("handles click", () => {
  const handleClickMock = jest.fn();
  const cellValue = "abc";

  render(<Cell cellValue={cellValue} handleClick={handleClickMock} />);

  const cell = screen.getByText("abc");
  userEvent.click(cell);

  expect(handleClickMock).toHaveBeenCalledWith(cellValue);
});
