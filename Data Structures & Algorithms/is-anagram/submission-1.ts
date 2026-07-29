class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;
    let count1 = {};
    let count2 = {};

    for (let i = 0; i < s.length; i++) {
      count1[s[i]] = (count1[s[i]] || 0) + 1;
      count2[t[i]] = (count2[t[i]] || 0) + 1;
    }

    for (let char in count1) {
      if (count1[char] != count2[char]) {
        return false;
      }
    }
    return true;
  }
}
