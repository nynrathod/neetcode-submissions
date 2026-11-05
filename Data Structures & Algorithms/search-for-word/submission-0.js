class Solution {
  /**
   * @param {character[][]} board
   * @param {string} word
   * @return {boolean}
   */
  exist(board, word) {
    let ROWS = board.length;
    let COLS = board[0].length;

    function dfs(r, c, i) {
      if (i == word.length) return true;

      if (
        r < 0 ||
        c < 0 ||
        r >= ROWS ||
        c >= COLS ||
        board[r][c] != word[i] ||
        board[r][c] === "#"
      ) {
        return false;
      }

      board[r][c] = "#";
      let res = 
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

      board[r][c] = word[i];
      return res;
    }

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (dfs(r, c, 0)) return true;
      }
    }
    return false;
  }
}
