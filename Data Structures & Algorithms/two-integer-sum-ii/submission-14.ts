class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
      let r = nums.length - 1;
      let l = i + 1;
      while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] > target - nums[i]) {
          r = mid - 1;
        } else if (nums[mid] < target - nums[i]) {
          l = mid + 1;
        } else {
          return [i + 1, mid + 1];
        }
      }
    }

    return [];
  }
}
