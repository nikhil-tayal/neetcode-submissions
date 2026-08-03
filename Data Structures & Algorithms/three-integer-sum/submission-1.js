class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = new Set();

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            let left = i + 1,
                right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.add([nums[i], nums[left], nums[right]].join(","));
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return Array.from(result).map((el) => el.split(","));
    }
}
