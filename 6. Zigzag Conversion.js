function convert(s, numRows) {
    if (numRows == 1) return s
    let rows = [...Array(numRows).keys()].map(i => [])
    let rowIndex = 0
    let reverse = false
    for (let i = 0; i <= s.length; i++) {
        rows[rowIndex].push(s[i])
        if (rowIndex == 0 || rowIndex == numRows - 1) reverse = !reverse
        rowIndex += reverse ? 1 : -1;
    }
    return rows.reduce((prev, curr) => prev += curr.join(''), '')
};

console.log(convert('PAYPALISHIRING', 3))