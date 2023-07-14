import { render, screen } from "@testing-library/react";
import App from "./App";

test("displays the Tic-Tac-Toe header", () => {
  render(<App />);

  // Check if the Tic-Tac-Toe header is rendered
  const headerElement = screen.getByText(/Tic-Tac-Toe/i);
  expect(headerElement).toBeInTheDocument();
});
