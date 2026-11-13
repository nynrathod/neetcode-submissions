class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    // Time: O(n)
    // Space: O(1)
    let l = 0;
    let r = heights.length - 1;
    let res = 0;

    while (l < r) {
      let area = Math.min(heights[l], heights[r]) * (r - l);
      res = Math.max(area, res);
      if (heights[l] <= heights[r]) {
        l++;
      } else {
        r--;
      }
    }
    return res;
  }
}
