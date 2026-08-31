class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        const sortedKey = (val) => {
            return val.split("").sort().join("");
        };

        for (let i = 0; i < strs.length; i++) {
            const computeKey = sortedKey(strs[i]);

            if (!map.has(computeKey)) {
                map.set(computeKey, [strs[i]]);
            } else {
                map.set(computeKey, [...map.get(computeKey), strs[i]]);
            }
        }
        return Array.from(map.entries()).map((el) => el[1]);
    }
}

//    const map = new Map();
//         const result = [];
//         const computeKey = (key) => {
//             return key.split("").sort().join("");
//         };

//         for (let i = 0; i < strs.length; i++) {
//             const key = computeKey(strs[i]);
//             if (!map.has(key)) {
//                 map.set(key, [strs[i]]);
//             } else {
//                 map.set(key, [...map.get(key), strs[i]]);
//             }
//         }

//         for (const value of map.values()) {
//             result.push(value);
//         }

//         return result;
