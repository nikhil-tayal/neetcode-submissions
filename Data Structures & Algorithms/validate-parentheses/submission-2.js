class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        const result = [];

        // const stackedS = s.split('')
        for (let i = 0; i < s.length; i++) {
            if (result.includes(map[s[i]]) && result[result.length - 1] === map[s[i]]) {
                result.pop();
            } else {
                result.push(s[i]);
            }
        }

        return result.length === 0 ? true : false;
    }
}
