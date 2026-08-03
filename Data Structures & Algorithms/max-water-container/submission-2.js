class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0,
            right = heights.length - 1;
        let area = 0;
        while (left < right) {
            // 0<7
            let temp = Math.min(heights[left], heights[right]) * (right - left);

            area = Math.max(temp, area);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }


        return area;
    }
}
