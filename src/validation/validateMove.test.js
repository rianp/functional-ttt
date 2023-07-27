import { validateMove } from "./validateMove";

describe("validateMove", () => {
  it("should return true for a valid cell value", () => {
    const cellSpot = " ";
    const setIsValidMove = jest.fn();

    const result = validateMove(cellSpot, setIsValidMove);

    expect(result).toBe(true);
    expect(setIsValidMove).toHaveBeenCalledWith(true);
  });

  it("should return false when cell is already taken by X or O", () => {
    const cellSpotX = "X";
    const cellSpotO = "O";
    const setIsValidMove = jest.fn();

    const isXValid = validateMove(cellSpotX, setIsValidMove);
    const isOValid = validateMove(cellSpotO, setIsValidMove);

    expect(isXValid).toBe(false);
    expect(isOValid).toBe(false);
    expect(setIsValidMove).toHaveBeenCalledWith(false);
    expect(setIsValidMove).toHaveBeenCalledTimes(2);
  });
});
