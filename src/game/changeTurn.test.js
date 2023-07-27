import {
  calculateNextPlayerId,
  calculateCurrentPlayerMark,
} from "./changeTurn";

describe("calculateNextPlayerId", () => {
  it("should return 1 when currentPlayerId is 0", () => {
    const currentPlayerId = 0;

    const result = calculateNextPlayerId(currentPlayerId, 9999, jest.fn());

    expect(result).toBe(1);
  });

  it("should return 0 when currentPlayerId is 1", () => {
    const currentPlayerId = 1;

    const result = calculateNextPlayerId(currentPlayerId, 9999, jest.fn());

    expect(result).toBe(0);
  });

  it("should not change currentPlayerId when cell is already taken", () => {
    const currentPlayerId = 0;
    const cellSpot = "X";

    const result = calculateNextPlayerId(currentPlayerId, cellSpot, jest.fn());

    expect(result).toBe(currentPlayerId);
  });
});

describe("calculateCurrentPlayerMark", () => {
  it('should return "X" when currentPlayerId is 0', () => {
    const currentPlayerId = 0;

    const result = calculateCurrentPlayerMark(currentPlayerId);

    expect(result).toBe("X");
  });

  it('should return "O" when currentPlayerId is 1', () => {
    const currentPlayerId = 1;

    const result = calculateCurrentPlayerMark(currentPlayerId);

    expect(result).toBe("O");
  });
});
