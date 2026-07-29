class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const n = nums.length;
	const res = new Array(n);
	for (let i = 0; i < nums.length; i++) {
		let pro = 1;
		for (let j = 0; j < nums.length; j++) {
			if (j != i) {
				pro *= nums[j];
				console.log("aam", pro, nums[j]);
			}
			res[i] = pro;
		}
	}
	return res;
    }
}
