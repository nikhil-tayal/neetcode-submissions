class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0,
            right = heights.length - 1,
            max = 0;
        while (left < right) {
            let minWall = Math.min(heights[left], heights[right]);
            let area = minWall * (right - left);
            max = Math.max(max, area);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max;
    }
}
