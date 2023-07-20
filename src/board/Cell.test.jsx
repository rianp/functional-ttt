import { render } from "@testing-library/react";
import Cell from "./Cell";
import userEvent from "@testing-library/user-event";

test("display a value in a cell", () => {
  const { getByText } = render(
    <Cell cellValue={"abc"} handleClick={jest.fn()} />
  );

  expect(getByText("abc")).toBeVisible();
});

test("handles click", () => {
  const handleClickMock = jest.fn();
  const cellValue = "abc";

  const { getByText } = render(
    <Cell cellValue={cellValue} handleClick={handleClickMock} />
  );

  const cell = getByText("abc");
  userEvent.click(cell);

  expect(handleClickMock).toHaveBeenCalledWith(cellValue);
});
