class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqCounter = {};
        if (s.length !== t.length) return false;
        for (let value of s) {
            freqCounter[value] = (freqCounter[value] || 0) + 1;
        }
        for (let value of t) {
            if (!freqCounter[value] || freqCounter[value] === 0) return false;
            freqCounter[value]--;
        }

        return true;
    }
}
