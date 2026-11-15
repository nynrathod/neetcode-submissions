class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();

    for (let num of nums) {
      this.minHeap.enqueue(num);
    }

    while (this.minHeap.size() > k) {
      this.minHeap.dequeue();
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    // Time: O(nlog⁡(n+1)+mlog⁡(k+1))
    // Space: O(n+k)
    this.minHeap.enqueue(val);
    while (this.minHeap.size() > this.k) {
      this.minHeap.dequeue();
    }
    return this.minHeap.front();
  }
}
