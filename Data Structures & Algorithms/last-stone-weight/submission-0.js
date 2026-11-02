class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  lastStoneWeight(stones) {
    let maxPq = new MaxPriorityQueue();

    for (let stone of stones) {
      maxPq.enqueue(stone);
    }

    while (maxPq.size() > 1) {
      let stone1 = maxPq.dequeue();
      let stone2 = maxPq.dequeue();

      if (stone1 != stone2) {
        maxPq.enqueue(stone1 - stone2);
      }
    }
    return maxPq.size() === 1 ? maxPq.dequeue() : 0;
  }
}
