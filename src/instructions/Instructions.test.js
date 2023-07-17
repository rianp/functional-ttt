import { render, fireEvent } from "@testing-library/react";
import Toggle from "./InstructionsButton";
import { Instructions } from "./Instructions";

describe("Instructions button", () => {
  test("Button displays correct content when toggled on", () => {
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
  });

  test("Button hides content when toggled off", () => {
    const { getByText, queryByText } = render(
      <Toggle>
        <Instructions />
      </Toggle>
    );

    const button = getByText("Instructions");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(queryByText(/Here are the instructions to the game!/)).toBeNull();
  });
});
