class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";

        for (let i = 0; i < strs.length; i++) {
            encodedString = `${encodedString}${strs[i].length}#${strs[i]}`;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = str.indexOf("#", i);
            let len = parseInt(str.slice(i, j));
            let word = str.slice(j + 1, j + 1 + len);
            result.push(word);
            i = j + 1 + len;
        }

        return result
    }
}
