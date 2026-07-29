class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    let pushed = [];
    for (let i = 0; i <= nums.length; i++) {
        if (!pushed.includes(nums[i])) {
            pushed.push(nums[i]);
        } else {
            return true;
        }
    }
    return false;
  }
}
