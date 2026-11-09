class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    // time: O(n)
    // Space: O(n)
    let counter = 0;
    let numSet = new Set(nums);
    for (let n of nums) {
      if (!numSet.has(n - 1)) {
        let length = 1;
        while (numSet.has(n + length)) {
          length++;
        }
        counter = Math.max(counter, length);
      }
      
    }
    return counter;
  }
}
