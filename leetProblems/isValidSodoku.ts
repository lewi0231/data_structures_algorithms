/**
 * 
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated * according to the following rules:

    - Each row must contain the digits 1-9 without repetition.
    - Each column must contain the digits 1-9 without repetition.
    - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */

const isValidSodoku = (board: string[][]) => {
  let n = 9;
  const rows: number[][] = [];
  const cols: number[][] = [];
  const boxes: number[][] = [];

  for (let r = 0; r < n; r++) {
    rows[r] = new Array(9).fill(0);
    cols[r] = new Array(9).fill(0);
    boxes[r] = new Array(9).fill(0);
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === ".") {
        continue;
      }
      let val = parseInt(board[r][c]);

      if (rows[r][val] > 0) {
        return false;
      } else {
        rows[r][val] = 1;
      }

      if (cols[c][val] > 0) {
        return false;
      } else {
        cols[c][val] = 1;
      }

      let index = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (boxes[index][val] > 0) {
        return false;
      } else {
        boxes[index][val] = 1;
      }
    }
  }
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSodoku(board));
