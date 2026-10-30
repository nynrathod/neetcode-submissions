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
    if (!root) return 0;

    let q = [root];
    let head = 0;
    let level = 0;

    while (head < q.length) {
      let size = q.length - head;
      for (let i = 0; i < size; i++) {
        const node = q[head++];

        if (node.left != null) q.push(node.left);
        if (node.right != null) q.push(node.right);
      }

      level++;
    }

    return level;
  }
}
