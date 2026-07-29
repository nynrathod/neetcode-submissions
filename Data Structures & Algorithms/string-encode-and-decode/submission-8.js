class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';
        for (let i = 0; i < strs.length; i++) {
			strs[i] = strs[i].length + "#" + strs[i];
		}
		const encodedStr = strs.join("");
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
       		let res = [];
		let i = 0;

		while (i < str.length) {
			let j = i;
			while (str[j] !== "#") {
				j++;
			}
			let length = parseInt(str.substring(i, j));
			console.log("length", str, i, j, length);

			i = j + 1;
			j = i + length;
			res.push(str.substring(i, j));
			i = j;
		}
        
        return res;
    }
}
