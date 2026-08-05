class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const result = [];
        const computeKey = (key) => {
            return key.split("").sort().join("");
        };

        for (let i = 0; i < strs.length; i++) {
            const key = computeKey(strs[i]);
            if (!map.has(key)) {
                map.set(key, [strs[i]]);
            } else {
                map.set(key, [...map.get(key), strs[i]]);
            }
        }

        for (const value of map.values()) {
            result.push(value);
        }

        return result;
    }
}
