class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board: string[][]): boolean {
    let rows = new Map();
    let cols = new Map();
    let square = new Map();

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] == ".") continue;

        let squareKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;

        if (
          (rows.get(r) && rows.get(r).has(board[r][c])) ||
          (cols.get(c) && cols.get(c).has(board[r][c])) ||
          (square.get(squareKey) && square.get(squareKey).has(board[r][c]))
        ) {
          return false;
        }

        if (!rows.has(r)) rows.set(r, new Set());
        if (!cols.has(c)) cols.set(c, new Set());
        if (!square.has(squareKey)) square.set(squareKey, new Set());

        rows.get(r).add(board[r][c]);
        cols.get(c).add(board[r][c]);
        square.get(squareKey).add(board[r][c]);
      }
    }
    return true;
  }
}
