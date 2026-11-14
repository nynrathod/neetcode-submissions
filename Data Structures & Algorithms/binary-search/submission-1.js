class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    // time: O(log n)
    // Space: o(1)
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
      let m = lo + Math.floor((hi - lo) / 2);

      if (nums[m] < target) {
        lo = m + 1;
      } else if (nums[m] > target) {
        hi = m - 1;
      } else {
        return m;
      }
    }
    return -1;
  }
}
