class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqCounter = new Map();

        for (let i = 0; i < nums.length; i++) {
            freqCounter.set(nums[i], (freqCounter.get(nums[i]) || 0) + 1);
        }

        return Array.from(freqCounter.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((el) => el[0]);
    }
}

// const map = new Map();
//         for (let i = 0; i < nums.length; i++) {
//             map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//         }

//         // for (const [key, value] of map
//         //     .entries()
//         //     .sort((a, b) => b[1] - a[1])
//         //     .splice(0, k)) {
//         //     console.log({ key, value });
//         // }

//         return Array.from(map.entries())
//             .sort((a, b) => b[1] - a[1])
//             .splice(0, k)
//             .map((el) => el[0]);
