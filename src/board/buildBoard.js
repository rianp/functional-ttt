export function buildBoard(boardSize) {
  let count = 1;

  return range(0, boardSize).map(() =>
    range(0, boardSize).map(() => (count++).toString())
  );
}

function range(start, end) {
  return Array.from({ length: end - start }, (_, i) => start + i);
}
