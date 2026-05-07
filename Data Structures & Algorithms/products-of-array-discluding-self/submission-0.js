class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result  = []

        for(let i = 0; i<nums.length ; i++){
            let mult = 1
            for (let j=0; j<nums.length ; j++){
                if(i===j) continue

                mult = mult*nums[j]
            }
                result.push(mult)
        }

        console.log(result)
        return result

    }
}
