var longestPalindrome = function (s) {
    let longest = ''
    for (let cursor = 0; cursor <= s.length; cursor++) {
        for (let i = 0; i <= s.length; i++) {
            let sub = s.substring(cursor, i)
            if (sub == reverse(sub)) {
                if (sub.length > longest.length) {
                    longest = sub
                }
            }
        }
    }
    return longest
};

function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}