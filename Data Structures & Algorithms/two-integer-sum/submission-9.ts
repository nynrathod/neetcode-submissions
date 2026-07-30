class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    let indices = new Map();

    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (indices.has(diff)) {
        return [i, indices.get(diff)];
      }

      indices.set(nums[i], i);
    }

    return [];
  }
}
