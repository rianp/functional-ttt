import {
  calculateCurrentPlayerId,
  calculateCurrentPlayerMark,
} from "./changeTurn";

describe("calculateCurrentPlayerId", () => {
  it("should return 1 when currentPlayerId is 0", () => {
    const currentPlayerId = 0;

    const result = calculateCurrentPlayerId(currentPlayerId, 3, jest.fn());

    expect(result).toBe(1);
  });

  it("should return 0 when currentPlayerId is 1", () => {
    const currentPlayerId = 1;

    const result = calculateCurrentPlayerId(currentPlayerId, 3, jest.fn());

    expect(result).toBe(0);
  });

  it("should not change currentPlayerId when cellValue is already taken", () => {
    const currentPlayerId = 0;

    const result = calculateCurrentPlayerId(currentPlayerId, "X", jest.fn());

    expect(result).toBe(0);
  });

  it("should throw an error with a specific message when currentPlayerId is negative", () => {
    const currentPlayerId = -3;

    const result = () => {
      calculateCurrentPlayerId(currentPlayerId);
    };

    expect(result).toThrowError(
      "Invalid currentPlayerId. It should be either 0 or 1."
    );
  });

  it("should return error message when currentPlayerId is a large positive number", () => {
    const currentPlayerId = 1000;
    const result = () => {
      calculateCurrentPlayerId(currentPlayerId);
    };

    expect(result).toThrowError(
      "Invalid currentPlayerId. It should be either 0 or 1."
    );
  });
});

describe("calculateCurrentPlayerMark", () => {
  it('should return "x" when currentPlayerId is 0', () => {
    const currentPlayerId = 0;

    const result = calculateCurrentPlayerMark(currentPlayerId);

    expect(result).toBe("X");
  });

  it('should return "o" when currentPlayerId is 1', () => {
    const currentPlayerId = 1;

    const result = calculateCurrentPlayerMark(currentPlayerId);

    expect(result).toBe("O");
  });

  it("should throw an error message when currentPlayerId is not 0 or 1", () => {
    const currentPlayerId = -3;

    const result = () => {
      calculateCurrentPlayerMark(currentPlayerId);
    };

    expect(result).toThrowError(
      "Invalid currentPlayerId. It should be either 0 or 1."
    );
  });

  it("should throw an error message when currentPlayerId is a string", () => {
    const currentPlayerId = "invalid";

    const result = () => {
      calculateCurrentPlayerMark(currentPlayerId);
    };

    expect(result).toThrowError(
      "Invalid currentPlayerId. It should be either 0 or 1."
    );
  });
});
