class Solution {
  /**
   * @param {number[][]} points
   * @param {number} k
   * @return {number[][]}
   */
  kClosest(points, k) {
    let minHeap = new MinPriorityQueue((point) => point[0]);

    for (let [x, y] of points) {
      let dist = x ** 2 + y ** 2;
      minHeap.enqueue([dist, x, y]);
    }

    let res = [];
    for (let i = 0; i < k; i++) {
      let [_, x, y] = minHeap.dequeue();
      res.push([x, y]);
    }
    return res;
  }
}
