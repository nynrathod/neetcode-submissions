class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    // Time: O(n)
    // Space: O(n)

    let stack = [];
    let res = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
      let t = temperatures[i];
      while (stack.length > 0 && t > stack[stack.length - 1][0]) {
        const [stacT, stackI] = stack.pop();
        res[stackI] = i - stackI;
      }
      stack.push([t, i]);
    }
    return res;
  }
}
