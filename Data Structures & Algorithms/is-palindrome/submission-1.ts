class Solution {
  isAlphaNum(c) {
    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");
  }

  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      while (left < right && !this.isAlphaNum(s[left])) {
        left++;
      }
      while (right > left && !this.isAlphaNum(s[right])) {
        right--;
      }
      if (s[left].toLowerCase() != s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}
