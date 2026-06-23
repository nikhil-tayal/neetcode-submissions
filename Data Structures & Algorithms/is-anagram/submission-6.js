class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashMap = new Map();
        let isAnagram = true;
        for (let i = 0; i < s.length; i++) {
            hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
        }
        for (let i = 0; i < t.length; i++) {
            hashMap.set(t[i], hashMap.get(t[i]) - 1);
        }
        hashMap.forEach((a) => {
            if (a !== 0) {
                isAnagram = false;
            }
        });
        return isAnagram
    }
}
