/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reverse = 0
    let intmax = 2 ** 31
    while (x != 0) {
        if (Math.abs(reverse) > parseInt(intmax / 10)) return 0
        reverse = parseInt(reverse * 10 + x % 10)
        x = parseInt(x / 10)
        Math.exp()
    }
    return reverse

};