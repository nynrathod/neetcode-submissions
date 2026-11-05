class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    let res = [];
    let stack = [];

    function dfs(openN, closeN) {
      if (openN == closeN && openN == n) {
        res.push(stack.join(""));
      }

      if (openN < n) {
        stack.push("(");
        dfs(openN + 1, closeN);
        stack.pop();
      }

      if (closeN < openN) {
        stack.push(")");
        dfs(openN, closeN + 1);
        stack.pop();
      }
    }

    dfs(0, 0);
    return res;
  }
}
