/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    if(height.length == 0) return 0
    
   let l = 0
   let r = height.length - 1
   let lMax = 0 
   let rMax = 0
    let ans = 0
    while (l < r) {
        if(height[l] < height[r]) {
            lMax = Math.max(lMax,height[l])
            ans += lMax - height[l]
            l++
        } else {
            rMax = Math.max(rMax,height[r])
            ans += rMax - height[r] 
            r--
        }
    }
    return ans
};