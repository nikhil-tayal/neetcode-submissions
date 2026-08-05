class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;

        const result = new Array(n).fill(1);

        let prefix = 1;
        let suffix = 1;

        for (let i = 0; i < n; i++) {
            result[i] = prefix; //i=1, prefix= 1
            prefix = prefix * nums[i]; // prefix = 1 * 2 = 2
        }

        // console.log({result})


        for (let i = n - 1; i >= 0; i--) {
            result[i] = result[i] * suffix;
            suffix = suffix * nums[i];
        }

        return result;
    }
}
