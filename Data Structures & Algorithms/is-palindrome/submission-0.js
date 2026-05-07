class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sSettled = "";
        const regex = /[a-z0-9]/i;
        for (let value of s) {
            if (regex.test(value)) {
                sSettled = sSettled + value.toLowerCase();
            }
        }

        console.log(sSettled)

        let left = 0, right = sSettled.length -1

        while(left<right){
            if(sSettled[left]===sSettled[right]){
                left++
                right--
            }
            else{
                console.log(sSettled[left] , sSettled[right], left, right)
                return false
            }
        }
        return true
    }
}
