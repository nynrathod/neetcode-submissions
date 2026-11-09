class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let i = 0; i < strs.length; i++) {
      res += strs[i].length + "#" + strs[i];
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    // Time: O(n+m)
    // space: O(n+m)

    let i = 0;
    let res = [];

    while (i < str.length) {
      let j = i;
      while (str[j] != "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}
