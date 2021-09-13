/**
 * @param {number[]} nums
 * @return {number}
 */
// Space complexity is met. Seems to be a lot of room for speed optimization. 
var firstMissingPositive = function (nums) {
    let len = nums.length
    let seenSet = new Set()
    let lowNum = 1
    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0) {
            continue
        } else {
            seenSet.add(nums[i])
        }
    }
    while (seenSet.has(lowNum)) {
        lowNum++
    }
    return lowNum
};

//[-2,5,3,-3,1,2,0]