class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let best = 0;
        
        for (let num of numSet) {
            if (numSet.has(num - 1)) continue;

            let length = 1;

            while (numSet.has(num + length)) {
                length++;
            }

            best = Math.max(best, length);
        }
        return best
    }
}
