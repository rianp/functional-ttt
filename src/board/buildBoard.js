export function buildBoard(size) {
  let count = 1;

  return range(0, size).map(() =>
    range(0, size).map(() => (count++).toString())
  );
}

function range(start, end) {
  return Array.from({ length: end - start }, (_, i) => start + i);
}
