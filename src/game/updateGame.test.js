import { updateGame } from "./updateGame";

describe("updateGame", () => {
  const setAlertVisibleMock = jest.fn();
  const updateBoardMock = jest.fn();
  const changeTurnMock = jest.fn();
  const setBoardDataMock = jest.fn();
  const currentPlayer = "X";
  const boardData = [];

  it("should update the board if the cellValue is not already taken", () => {
    const cellValue = "3";

    updateGame(
      setAlertVisibleMock,
      cellValue,
      boardData,
      currentPlayer,
      changeTurnMock,
      setBoardDataMock
    );

    expect(setBoardDataMock).toHaveBeenCalled(
      updateBoardMock(boardData, cellValue, currentPlayer)
    );
  });

  it("should not update the board if the cellValue is already taken", () => {
    const cellValue = "X";

    updateGame(
      setAlertVisibleMock,
      cellValue,
      boardData,
      currentPlayer,
      changeTurnMock,
      setBoardDataMock
    );

    expect(setBoardDataMock).not.toHaveBeenCalled();
  });

  it("should not change turns if the cellValue is already taken", () => {
    const cellValue = "O";

    updateGame(
      setAlertVisibleMock,
      cellValue,
      boardData,
      currentPlayer,
      changeTurnMock,
      setBoardDataMock
    );

    expect(changeTurnMock).not.toHaveBeenCalled();
  });

  it("should change turns if the cellValue is not already taken", () => {
    const cellValue = "3";

    updateGame(
      setAlertVisibleMock,
      cellValue,
      boardData,
      currentPlayer,
      changeTurnMock,
      setBoardDataMock
    );

    expect(changeTurnMock).toHaveBeenCalledTimes(1);
  });
});
