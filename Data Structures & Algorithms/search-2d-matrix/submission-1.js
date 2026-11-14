class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    // time: O(log(m, n))
    // Space:  O(1)
    let ROWS = matrix.length;
    let COLS = matrix[0].length;

    let l = 0;
    let r = ROWS * COLS - 1;

    while (l <= r) {
      let m = l + Math.floor((r - l) / 2);

      let row = Math.floor(m / COLS);
      let col = m % COLS;

      if (target > matrix[row][col]) {
        l = m + 1;
      } else if (target < matrix[row][col]) {
        r = m - 1;
      } else {
        return true;
      }
    }
    return false;
  }
}
