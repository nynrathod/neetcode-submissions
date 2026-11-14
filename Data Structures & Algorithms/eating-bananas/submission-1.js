class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    // Time: O(n*logm)
    // Space: o(1)
    let l = 1;
    let r = Math.max(...piles);
    let res = r;

    while (l <= r) {
      let k = l + Math.floor((r - l) / 2);

      let totalTime = 0;
      for (let p of piles) {
        totalTime += Math.ceil(p / k);
      }

      if (totalTime <= h) {
        res = k;
        r = k - 1;
      } else {
        l = k + 1;
      }
    }
    return res;
  }
}
