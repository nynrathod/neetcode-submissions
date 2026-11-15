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
   * @return {number[]}
   */
  rightSideView(root) {
    // Time: O(n)
    // Space: O(n)
    let res = [];
    let q = new Queue();

    q.push(root);
    while (!q.isEmpty()) {
      let rightSide = null;
      let size = q.size();

      for (let i = 0; i < size; i++) {
        let node = q.pop();
        if (node) {
          rightSide = node;
          q.push(node.left);
          q.push(node.right);
        }
      }
      if (rightSide) {
        res.push(rightSide.val);
      }
    }
    return res;
  }
}
