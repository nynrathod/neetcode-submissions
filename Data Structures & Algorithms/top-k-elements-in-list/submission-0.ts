class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    let total: Record<any, any> = {};

    for (const num of nums) {
      total[num] = (total[num] || 0) + 1;
    }
    const arr = Object.entries(total).map(([num, freq]) => [freq, parseInt(num)]);
    arr.sort((a, b) => Number(b[0]) - Number(a[0]));

    return arr.slice(0, k).map((pair) => pair[1]);
  }
}
