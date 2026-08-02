class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] < target) {
        left++;
      } else if (nums[left] + nums[right] > target) {
        right--;
      } else {
        return [left + 1, right + 1];
      }
    }
    return [];
  }
}
