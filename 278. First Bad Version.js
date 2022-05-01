/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
      let left = 0
    let right = n
    while (left < right) {
        let middle = Math.floor((left + right) / 2)
        console.log(`Left: ${left}, middle: ${middle} Right: ${right},`)
        console.log(`Left: ${isBadVersion(left)}, middle: ${isBadVersion(middle)} Right: ${isBadVersion(right)},`)
        if (isBadVersion(left) == false && isBadVersion(middle) == true) {
            if (left + 1 == middle) {
                return middle
            }
            right = middle 
        }
        if (isBadVersion(left) ==false && isBadVersion(middle) == false) {
            if (isBadVersion(right) && middle + 1 == right){
                return right
            }
            left = middle + 1 
        }
        if (isBadVersion(left) && isBadVersion(right)) {
            return left
        }
    }
    return right 
    };
};

