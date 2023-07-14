import { render } from "@testing-library/react";
import Cell from "./Cell";

test("Stores a value in a cell", () => {
  render(<Cell cellValue={0} />);

  const { getByText } = render(<Cell cellValue={42} />);
  expect(getByText("42")).toBeInTheDocument();
});
