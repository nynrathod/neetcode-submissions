class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
    // Always binary search the shorter array
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;

    let left = 0;
    let right = m;

    const half = Math.floor((m + n + 1) / 2);

    while (left <= right) {
      const i = Math.floor(left + (right - left) / 2);
      const j = half - i;

      const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
      const minRight1 = i === m ? Infinity : nums1[i];

      const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
      const minRight2 = j === n ? Infinity : nums2[j];

      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
        if ((m + n) % 2 === 1) {
          return Math.max(maxLeft1, maxLeft2);
        }

        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else if (maxLeft1 > minRight2) {
        right = i - 1;
      } else {
        left = i + 1;
      }
    }

    return 0;
  }
}
