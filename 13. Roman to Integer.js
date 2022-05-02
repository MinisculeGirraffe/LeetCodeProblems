/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let acc = 0
    for (let i = 0; i < s.length; i++) {
        const lookAhead = (values[s[i + 1]] || 0)
        if (values[s[i]] >= lookAhead) {
            acc += values[s[i]]
        } else {
            acc += lookAhead - values[s[i]]
            i++
        }
    }
    return acc
};

console.log(romanToInt("MCMXCIV"))