class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    let res = 0;
    let store = new Set(nums);

    for (let n of nums) {
      let curr = n;
      let streak = 0;
      if (store.has(n - 1)) continue;

      while (store.has(curr)) {
        streak++;
        curr++;
      }
      res = Math.max(res, streak);
    }
    return res;
  }
}
