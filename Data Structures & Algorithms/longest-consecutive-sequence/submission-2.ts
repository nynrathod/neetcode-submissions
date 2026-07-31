class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    let res = 0;
    let store = new Set(nums);

    for (let n of nums) {
      if (!store.has(n - 1)) {
        let streak = 0;
        while (store.has(n + streak)) {
          streak++;
        }
        res = Math.max(res, streak);
      }
    }

    return res;
  }
}
