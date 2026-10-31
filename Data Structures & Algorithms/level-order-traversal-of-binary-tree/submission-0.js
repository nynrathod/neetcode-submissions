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
    let res = [];

    if (!root) return res;

    let q = [root];
    let head = 0;

    while (head < q.length) {
      let level = [];

      let size = q.length - head;

      for (let i = 0; i < size; i++) {
        let node = q[head++];
        if (node != null) {
          level.push(node.val);
          q.push(node.left);
          q.push(node.right);
        }
      }
      if (level.length > 0) {
        res.push(level);
      }
    }
    return res;
  }
}
