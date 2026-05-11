class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let best = 0;
        let left = 0;
        for (let right = 0; right < s.length; right++) {
            const rightCh = s[right];

            map.set(rightCh, (map.get(rightCh) || 0) + 1);

            while (map.get(rightCh) > 1) {
                const leftCh = s[left];
                map.set(leftCh, map.get(leftCh) - 1);
                if (map.get(leftCh) === 0) map.delete(leftCh);
                left++;
            }

            best = Math.max(best, right - left + 1);
        }

        return best;
    }
}
