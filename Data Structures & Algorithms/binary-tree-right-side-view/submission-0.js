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
    let q = [root];
    let res = [];
    let head = 0;

    while (head < q.length) {
      let size = q.length - head;

      let rightNode = null;
      for (let i = 0; i < size; i++) {
        let node = q[head++];
        if (node) {
          rightNode = node;
          q.push(node.left);
          q.push(node.right);
        }
      }
      if (rightNode) {
        res.push(rightNode.val);
      }
    }
    return res;
  }
}
