class TrieNode {
  constructor() {
    this.child = {};
    this.endOfWord = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let cur = this.root;
    for (let c of word) {
      if (!cur.child[c]) {
        cur.child[c] = new TrieNode();
      }
      cur = cur.child[c];
    }
    cur.endOfWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let cur = this.root;
    for (let c of word) {
      if (!cur.child[c]) {
        return false;
      }
      cur = cur.child[c];
    }
    return cur.endOfWord;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let cur = this.root;
    for (let c of prefix) {
      if (!cur.child[c]) {
        return false;
      }
      cur = cur.child[c];
    }
    return true;
  }
}
