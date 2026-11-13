class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    // Time: O(n)
    // space: O(1)
    let l = 0;
    let r = 0;
    let maxP = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        let profit = prices[r] - prices[l];
        maxP = Math.max(maxP, profit);
      } else {
        l = r;
      }
      r++;
    }
    return maxP
  }
}
