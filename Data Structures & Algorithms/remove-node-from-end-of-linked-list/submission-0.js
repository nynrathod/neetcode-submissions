/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let s = dummy;
        let f = dummy;

        for (let i=0; i<=n; i++) {
            f =  f.next
        }

        while (f != null) {
            s = s.next
            f = f.next
        }

        s.next = s.next.next

        return dummy.next
    }
}