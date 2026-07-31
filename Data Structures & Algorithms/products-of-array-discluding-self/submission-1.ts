class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
      let product = 1;
      for (let j = 0; j < nums.length; j++) {
        if (j != i) {
          product *= nums[j];
        }
      }
      res.push(product);
    }
    return res;
  }
}
