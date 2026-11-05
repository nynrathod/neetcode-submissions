class TrieNode {
  constructor() {
    this.child = {};
    this.word = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let cur = this.root;
    for (let c of word) {
      if (!cur.child[c]) {
        cur.child[c] = new TrieNode();
      }
      cur = cur.child[c];
    }
    cur.word = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    function dfs(j, cur) {
      for (let i = j; i < word.length; i++) {
        let c = word[i];

        if (c == ".") {
          for (let child of Object.values(cur.child)) {
            if (dfs(i + 1, child)) {
              return true;
            }
          }
          return false;
        } else {
          if (!cur.child[c]) return false;

          cur = cur.child[c];
        }
      }
      return cur.word;
    }

    return dfs(0, this.root);
  }
}
