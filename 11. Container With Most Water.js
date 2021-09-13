/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxArea = 0
    for(let i = 0; i< height.length; i++) {
        let boxHeight = Math.min(height[left],height[right])
        let boxWidth = right - left
        maxArea = Math.max(maxArea, boxWidth * boxHeight)
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};


