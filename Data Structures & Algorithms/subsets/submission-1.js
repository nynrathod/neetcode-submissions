class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsets(nums) {
    // Time: O(n*2n)
    // Space: O(2n)
    let res = [];
    let subset = [];

    function dfs(i) {
      if (i >= nums.length) {
        res.push([...subset]);
        return;
      }

      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
      dfs(i + 1);
    }
    dfs(0);
    return res;
  }
}
