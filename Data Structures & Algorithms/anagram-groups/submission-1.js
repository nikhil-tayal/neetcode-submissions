class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = {}
        const computeKey = (key)=>key.split('').sort().join('')
        for(let value of strs){
            const key = computeKey(value)
            if(map[key]){
                map[key].push(value)
            }else{
                map[key] = [value]
            }
        }

        return Object.values(map)
    }
}
