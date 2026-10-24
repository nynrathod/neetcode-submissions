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
   * @return {void}
   */
  reorderList(head) {
    if (!head) return;
    let s = head;
    let f = head;

    while (f && f.next) {
      s = s.next;
      f = f.next.next;
    }

    let curr = s.next;
    let prev = null;
    s.next = null; // disconnect both half

    // reverse second half
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    let first = head;
    let second = prev;

    while (second) {
      let tmp1 = first.next;
      let tmp2 = second.next;

      first.next = second;
      second.next = tmp1;
      first = tmp1;
      second = tmp2;
    }
  }
}
