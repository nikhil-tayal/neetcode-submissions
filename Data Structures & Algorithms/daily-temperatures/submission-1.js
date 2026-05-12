class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // dailyTemperatures(temperatures) {
    //     const result = [];

    //     for (let i = 0; i < temperatures.length; i++) {
    //         for (let j = i + 1; j < temperatures.length; j++) {
    //             if (temperatures[j] > temperatures[i]) {
    //                 result.push(Math.abs(i - j));
    //                 break;
    //             }
    //         }
    //         if (!result[i]) {
    //             result.push(0);
    //         }
    //     }

    //     return result;
    // }

    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);

        const stack = []; //0,

        for (let today = 0; today < temperatures.length; today++) {
            while (stack.length > 0 && temperatures[today] > temperatures[stack.at(-1)]) {
                const prevDay = stack.pop();
                result[prevDay] = today - prevDay;
            }
            stack.push(today);
        }

        return result;
    }
}
