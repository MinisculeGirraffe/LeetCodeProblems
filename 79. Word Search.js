/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// Slightly janky DFS implementation but it works. 
 var exist = function (board, word) {
    let rows = board.length
    let cols = board[0].length
    let found = false
    const backtrack = (bRow, bCol, suffix) => {
        if (suffix == '') {
            found = true
            return found
        }
        if (bRow < 0 || bRow == rows || bCol < 0 || bCol == cols || board[bRow][bCol] !== suffix[0]) {
            return false
        }
        res = false
        board[bRow][bCol] = '#'
        for (let [rowOffset, colOffset] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            let res = backtrack(bRow + rowOffset, bCol + colOffset, suffix.slice(1))
            if (res) {
                break
            }
        }
        board[bRow][bCol] = suffix[0]
        return res
    }
    for (let row of [...Array(rows).keys()]) {
        if (found == false) {
            for (let col of [...Array(cols).keys()]) {
                if (backtrack(row, col, word)) {
                    break
                }
            }
        } else {
            break
        }
    }
    return found
};

