class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers: number[], target: number): number[] {
    let store = new Map();

    for (let i = 0; i < numbers.length; i++) {
      let diff = target - numbers[i];

      if (store.has(diff)) {
        return [store.get(diff) + 1, i + 1];
      }

      store.set(numbers[i], i);
    }
    return [];
  }
}
