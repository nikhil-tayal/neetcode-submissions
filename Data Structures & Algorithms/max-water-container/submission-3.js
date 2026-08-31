class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let best = 0;

        while (left < right) {
            let area = Math.min(heights[left], heights[right]) * (right - left);

            best = Math.max(area, best);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return best;
    }
}
