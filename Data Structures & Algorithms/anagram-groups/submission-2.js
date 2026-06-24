class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const result = []
        const computeKey = (w) => {
            return w.split("").sort().join("");
        };
        for (let i = 0; i < strs.length; i++) {
            const key = computeKey(strs[i]);
            if (map.has(key)) {
                map.set(key, [...map.get(key), strs[i]]);
            } else {
                map.set(key, [strs[i]]);
            }
        }

        map.forEach(val=>{
            result.push(val)
        })
        console.log(result)
        return result
    }

}
