const findPos = (pos: number, length: number) => {
  const r = Math.floor(pos / length);
  const c = pos % length;
  return { row: r, col: c };
};

/**
 *Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 */
var searchMatrix = function (matrix: number[][], target: number) {
  const m = matrix.length;
  const n = matrix[0].length;
  const length = m * n;

  let left = 0;
  let right = length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let { row, col } = findPos(mid, n);

    if (target === matrix[row][col]) {
      return true;
    }
    if (target < matrix[row][col]) {
      right = mid - 1;
    }
    if (target > matrix[row][col]) {
      left = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    1000
  )
);
