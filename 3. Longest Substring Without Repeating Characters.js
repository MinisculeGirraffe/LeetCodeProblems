/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0
    let right = 0
    let charMap = new Map()
    let ans = 0

    for (right = 0; right < s.length; right++) {
        let currCharIndex = charMap.get(s[right])
        if(currCharIndex != null) {
            left = Math.max(currCharIndex,left)
        }
        charMap.set(s[right],right + 1 )
        ans = Math.max(ans, (right - left) + 1 )
    }
    return ans
};

console.log(lengthOfLongestSubstring("dvdf"))