import { isValid } from "./isValid";

describe("isValid", () => {
  it("should return true for a valid cell value", () => {
    const cellValue = " ";
    const setAlertVisible = jest.fn();

    const result = isValid(cellValue, setAlertVisible);

    expect(result).toBe(true);
    expect(setAlertVisible).toHaveBeenCalled();
  });

  it('should return false for invalid cell values "X" or "O"', () => {
    const cellValueX = "X";
    const cellValueO = "O";
    const setAlertVisible = jest.fn();

    const resultX = isValid(cellValueX, setAlertVisible);
    const resultO = isValid(cellValueO, setAlertVisible);

    expect(resultX).toBe(false);
    expect(resultO).toBe(false);
    expect(setAlertVisible).toHaveBeenCalledWith(true);
    expect(setAlertVisible).toHaveBeenCalledTimes(2);
  });
});
