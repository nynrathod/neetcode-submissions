class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s: string, t: string): string {
    if (t.length > s.length) return "";

    let countT = {};
    for (let c of t) {
      countT[c] = (countT[c] || 0) + 1;
    }

    let required = Object.keys(countT).length;
    let bestLen = Infinity;
    let bestStart = 0;
    let formed = 0;

    let windowsCount = {};
    let left = 0;

    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      windowsCount[c] = (windowsCount[c] || 0) + 1;

      if (countT[c] && windowsCount[c] == countT[c]) {
        formed++;
      }

      while (formed == required) {
        if (r - left + 1 < bestLen) {
          bestStart = left;
          bestLen = r - left + 1;
        }

        windowsCount[s[left]]--;
        if (countT[s[left]] && windowsCount[s[left]] < countT[s[left]]) {
          formed--;
        }
        left++;
      }
    }
    return bestLen == Infinity ? "" : s.substring(bestStart, bestStart + bestLen);
  }
}
