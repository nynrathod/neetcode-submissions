class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;
    let count1 = new Map();
    let count2 = new Map();

    for (let i = 0; i < s.length; i++) {
      count1.set(s[i], (count1.get(s[i]) || 0) + 1);
      count2.set(t[i], (count2.get(t[i]) || 0) + 1);
    }
    for (let [char, freq] of count1) {
      if (count2.get(char) != freq) {
        return false;
      }
    }
    return true;
  }
}
