import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert Component", () => {
  it("should render the message correctly", () => {
    render(<Alert onClose={jest.fn()} />);

    const messageElement = screen.getByText(
      "Move already made. Please choose an empty cell."
    );

    expect(messageElement).toBeVisible();
  });

  it("should close message when close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(<Alert onClose={onCloseMock} />);

    const closeButton = screen.getByText("close");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect("Move already made. Please choose an empty cell.").not
      .toBeInTheDocument;
  });
});
