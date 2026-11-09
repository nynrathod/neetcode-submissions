class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length != t.length) return false;

    // Time: O(n+m) : both lenght could be diff so
    // Space: O(1) : max 26 char possbile for both
    let countS = {};
    let countT = {};

    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = (countS[s[i]] || 0) + 1;
      countT[t[i]] = (countT[t[i]] || 0) + 1;
      // countS.set(c, (countS[c] || 0) + 1);
    }

    console.log("countS", countS);
    console.log("countT", countT);

    for (let k in countS) {
      if (countS[k] !== countT[k]) return false;
    }
    return true;
  }
}
