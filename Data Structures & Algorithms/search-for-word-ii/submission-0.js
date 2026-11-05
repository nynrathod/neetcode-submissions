class TrieNode {
  constructor() {
    this.child = {};
    this.word = false;
  }
}

class Solution {
  /**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */

  addword(word, root) {
    let cur = root;

    for (let c of word) {
      if (!cur.child[c]) {
        cur.child[c] = new TrieNode();
      }
      cur = cur.child[c];
    }

    cur.word = true;
  }

  findWords(board, words) {
    if (!board.length || !board[0].length) return [];

    let root = new TrieNode();

    for (let w of words) {
      this.addword(w, root);
    }

    let rows = board.length;
    let cols = board[0].length;

    let res = new Set();
    let visit = new Set();

    function dfs(r, c, node, word) {
      if (
        r < 0 ||
        c < 0 ||
        r >= rows ||
        c >= cols ||
        visit.has(`${r},${c}`) ||
        !node.child[board[r][c]]
      ) {
        return;
      }

      let ch = board[r][c];
      node = node.child[ch];

      visit.add(`${r},${c}`);
      word += ch;

      if (node.word) {
        res.add(word);
      }

      dfs(r + 1, c, node, word);
      dfs(r - 1, c, node, word);
      dfs(r, c + 1, node, word);
      dfs(r, c - 1, node, word);

      visit.delete(`${r},${c}`);
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dfs(r, c, root, "");
      }
    }

    return Array.from(res);
  }
}
