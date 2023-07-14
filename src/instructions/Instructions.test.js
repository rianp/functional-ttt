import { render, fireEvent } from "@testing-library/react";
import Toggle from "./Toggle";
import { Instructions } from "./Instructions";

test("Button displays correct content only when toggled", () => {
  const { getByText, queryByText } = render(
    <Toggle>
      <Instructions />
    </Toggle>
  );

  const button = getByText("Instructions");

  expect(queryByText(/Here are the instructions to the game!/)).toBeNull();

  fireEvent.click(button);
  expect(
    queryByText(/Here are the instructions to the game!/)
  ).toBeInTheDocument();

  fireEvent.click(button);
  expect(queryByText(/Here are the instructions to the game!/)).toBeNull();
});
