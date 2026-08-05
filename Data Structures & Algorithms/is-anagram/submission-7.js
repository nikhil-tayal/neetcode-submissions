class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqCounter = new Map();

        for (const char of s) {
            freqCounter.set(char, (freqCounter.get(char) || 0) + 1);
        }

        for (const char of t) {
            freqCounter.set(char, freqCounter.get(char) - 1);
        }

        for (const count of freqCounter.values()) {
            if (count !== 0) return false;
        }

        return true;
    }
}
