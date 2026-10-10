class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    let s1Freq = new Array(26).fill(0);
    let windowFreq = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Freq[s1.charCodeAt(i) - 97]++;
        windowFreq[s2.charCodeAt(i) - 97]++;
    }
    // console.log("s1Freq",s1Freq);

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if(s1Freq[i] == windowFreq[i]) matches++;
    }

    for (let i = s1.length; i < s2.length; i++) {
        if (matches == 26) return true;
    
        let addIdx = s2.charCodeAt(i) - 97;
        windowFreq[addIdx]++;

        if(windowFreq[addIdx] == s1Freq[addIdx]) {
            matches++;
        } else if (windowFreq[addIdx] == s1Freq[addIdx] + 1) {
            matches--;
        }

        let remIdx = s2.charCodeAt(i-s1.length) - 97;
        windowFreq[remIdx]--;

        if(windowFreq[remIdx] == s1Freq[remIdx]) {
            matches++;
        } else if (windowFreq[remIdx] == s1Freq[remIdx] - 1) {
            matches--;
        }
    }

    return matches == 26;

  } 
}
