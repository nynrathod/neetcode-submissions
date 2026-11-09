class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    // TIme: O(n)
    // Space : O(n)
    let res = new Map();
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (res.has(diff)) {
        return [res.get(diff), i];
      }
      res.set(nums[i], i);
    }
    return [];
  }
}
