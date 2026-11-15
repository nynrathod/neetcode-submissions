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
   * @return {number[][]}
   */
  levelOrder(root) {
    // time: O(n)
    // space: O(n)
    let res = [];
    if (!root) return res;

    let q = new Queue();
    q.push(root);

    while (!q.isEmpty()) {
      let level = [];
      let size = q.size();

      for (let i = 0; i < size; i++) {
        let node = q.pop();
        if (node != null) {
          level.push(node.val);
          if (node.left != null) q.push(node.left);
          if (node.right != null) q.push(node.right);
        }
      }
      res.push(level);
    }
    return res;
  }
}
