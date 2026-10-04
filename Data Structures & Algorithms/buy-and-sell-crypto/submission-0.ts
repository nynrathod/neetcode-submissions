class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0;
        let r = 1;
        let max = 0;
        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                max = Math.max(max, profit)
            }  else {
                l = r
            }
            r++
        }

        return max
    }
}
