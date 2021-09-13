/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Bad bruteforce. Edit later to check for seen pairs
var twoSum = function (nums, target) {
    var result
    let arr = [...nums]
    for (i = 0; i < nums.length; i++) {
        if (result == null) {
            for (j = i + 1; j < nums.length; j++) {
                let sum = nums[i] + nums[j]
                if (sum === target) {
                    result = [i, j]
                    break
                }
            }
        } else {
            break
        }

    }
    return result
};

