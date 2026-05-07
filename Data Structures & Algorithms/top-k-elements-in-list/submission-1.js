class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }

        return (Object.entries(map).sort((a,b)=>b[1] - a[1]).splice(0,k).map(el=>el[0]))
    }
}
