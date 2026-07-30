class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    let A = [];
    for (let i = 0; i < nums.length; i++) {
      A.push([nums[i], i]);
    }
    A.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = A.length - 1;
    while (left < right) {
      if (A[left][0] + A[right][0] === target) {
        return [A[left][1], A[right][1]];
      } else if (A[left][0] + A[right][0] < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }
}
