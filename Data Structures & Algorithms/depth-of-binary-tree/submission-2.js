/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(root) {
    // Time: o(h)
    // Spece: O(n)
    if (!root) return 0;

    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
  }
}
