class Twitter {
  constructor() {
    this.count = 0;
    this.followMap = new Map();
    this.tweetMap = new Map();
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    if (!this.tweetMap.has(userId)) {
      this.tweetMap.set(userId, []);
    }
    this.tweetMap.get(userId).push([this.count, tweetId]);
    this.count--;
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    let res = [];
    if (!this.followMap.has(userId)) {
      this.followMap.set(userId, new Set());
    }
    this.followMap.get(userId).add(userId);

    let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);

    for (let followeeId of this.followMap.get(userId)) {
      if (this.tweetMap.has(followeeId)) {
        let tweets = this.tweetMap.get(followeeId);
        let index = tweets.length - 1;
        let [count, tweetId] = tweets[index];
        minHeap.enqueue([count, tweetId, followeeId, index - 1]);
      }
    }

    while (!minHeap.isEmpty() && res.length < 10) {
      let [count, tweetId, followeeId, nextIndex] = minHeap.dequeue();
      res.push(tweetId);
      if (nextIndex >= 0) {
        let [olderCount, olderTweetId] = this.tweetMap.get(followeeId)[nextIndex];
        minHeap.enqueue([olderCount, olderTweetId, followeeId, nextIndex - 1]);
      }
    }

    return res;
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (!this.followMap.has(followerId)) {
      this.followMap.set(followerId, new Set());
    }
    this.followMap.get(followerId).add(followeeId);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (this.followMap.has(followerId)) {
      this.followMap.get(followerId).delete(followeeId);
    }
  }
}
