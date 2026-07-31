class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();

        // for (let i = 0; i < numbers.length; i++) {
        //     let compliment = target - numbers[i];
        //     if (map.has(compliment)) return [map.get(compliment) + 1, i + 1];
        //     map.set(numbers[i], i);
        // }

        let left = 0,
            right = numbers.length - 1;

        while (left < right) {
            if (numbers[left] + numbers[right] === target) {
                return [left + 1, right + 1];
            }
            if (numbers[left] + numbers[right] < target) {
                left++;
            } else {
                right--;
            }
        }
    }
}
