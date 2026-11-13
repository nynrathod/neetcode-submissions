class MinStack {
  // Time: O(1)
  // Space: O(n)
  constructor() {
    this.min = [];
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    val = Math.min(val, this.min.length == 0 ? val : this.min[this.min.length - 1]);
    this.min.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    this.min.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min[this.min.length - 1];
  }
}
