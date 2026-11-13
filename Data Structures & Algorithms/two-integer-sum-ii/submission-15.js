class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    // TIme: O(n)
    // Space: O(1)
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
      let sum = numbers[l] + numbers[r];
      if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      } else {
        return [l + 1, r + 1];
      }
    }
    return [];
  }
}
