import { updateGame } from "./updateGame";

describe("updateGame", () => {
  const showAlertMock = jest.fn();
  const closeAlertMock = jest.fn();
  const updateBoardMock = jest.fn();
  const changeTurnMock = jest.fn();
  const currentPlayer = "X";
  const boardData = [
    ["X", "O", "3"],
    ["4", "X", "O"],
    ["O", "8", "X"],
  ];

  it('should update the board and change turn if the cellValue is not "X" or "O"', () => {
    const cellValue = "3";
    const expectedUpdatedBoard = [
      ["X", "O", "X"],
      ["4", "X", "O"],
      ["O", "8", "X"],
    ];

    updateBoardMock.mockReturnValueOnce(expectedUpdatedBoard);
    const updatedBoard = updateGame(
      showAlertMock,
      closeAlertMock,
      cellValue,
      boardData,
      currentPlayer,
      changeTurnMock,
      updateBoardMock
    );

    expect(updatedBoard).toEqual(expectedUpdatedBoard);
    expect(changeTurnMock).toHaveBeenCalledTimes(1);
    expect(updateBoardMock).toHaveBeenCalledWith(
      boardData,
      cellValue,
      currentPlayer
    );
    expect(showAlertMock).not.toHaveBeenCalled();
    expect(closeAlertMock).toHaveBeenCalled();
  });

  it('should not update the board and not change turn if the cellValue is "X"', () => {
    const cellValue = "X";

    const updatedBoard = updateGame(
      showAlertMock,
      closeAlertMock,
      cellValue,
      boardData,
      currentPlayer,
      changeTurnMock,
      updateBoardMock
    );

    expect(updatedBoard).toEqual(boardData);
    expect(changeTurnMock).not.toHaveBeenCalled();
    expect(updateBoardMock).not.toHaveBeenCalled();
    expect(showAlertMock).toHaveBeenCalledTimes(1);
  });

  it('should not update the board and not change turn if the cellValue is "O"', () => {
    const cellValue = "O";

    const updatedBoard = updateGame(
      showAlertMock,
      closeAlertMock,
      cellValue,
      boardData,
      currentPlayer,
      changeTurnMock,
      updateBoardMock
    );

    expect(updatedBoard).toEqual(boardData);
    expect(changeTurnMock).not.toHaveBeenCalled();
    expect(updateBoardMock).not.toHaveBeenCalled();
    expect(showAlertMock).toHaveBeenCalledTimes(1);
  });
});
