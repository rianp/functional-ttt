import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert Component", () => {
  it("should render the message correctly", () => {
    const message = "Test message";
    render(<Alert message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  it("should close message when close button is clicked", () => {
    const message = "Test message";
    const onCloseMock = jest.fn();
    render(<Alert message={message} onClose={onCloseMock} />);
    const closeButton = screen.getByText("close");
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
