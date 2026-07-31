class Solution {
  isAlphaNum(c) {
    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");
  }
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s: string): boolean {
    let newStr = "";

    for (let c of s) {
      if (this.isAlphaNum(c)) {
        newStr += c.toLocaleLowerCase();
      }
    }
    return newStr == newStr.split("").reverse().join("");
  }
}
