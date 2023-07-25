export const isValid = (cellValue, setAlertVisible) => {
  const isValidValue = cellValue !== "X" && cellValue !== "O";
  setAlertVisible(!isValidValue);
  return isValidValue;
};
