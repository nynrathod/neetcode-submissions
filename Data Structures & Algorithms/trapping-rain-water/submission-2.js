class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    // time: O(n)
    // Space: O(1)

    let l = 0;
    let r = height.length - 1;
    let res = 0;

    let leftMax = height[l];
    let rightMax = height[r];
    while (l < r) {
      if (leftMax < rightMax) {
        l++;
        leftMax = Math.max(leftMax, height[l]);
        res += leftMax - height[l];
      } else {
        r--;
        rightMax = Math.max(rightMax, height[r]);
        res += rightMax - height[r];
      }
    }
    return res;
  }
}
