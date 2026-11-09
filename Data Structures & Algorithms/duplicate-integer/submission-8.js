class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {

    // Time : O(n)
    // Space : O(n)
    let seen = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (seen.has(nums[i])) {
        return true;
      }
      seen.set(nums[i]);
    }
    return false;
  }
}
