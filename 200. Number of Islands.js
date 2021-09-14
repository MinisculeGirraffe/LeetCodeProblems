var numIslands = function(grid) {
    let count = 0

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if(grid[x][y] == 1 ) {
                searchIslands(x,y,grid)
                count++
            }
        }
    }
    return count
};

const searchIslands = (x,y,grid) => {
    grid[x][y] = 0
    for(let [offX,offY] of [[0,1],[1,0],[0,-1],[-1,0]]) {
        if(grid[x + offX] && grid[x + offX][y + offY] && grid[x + offX][y + offY] == 1) {
           let ans = searchIslands(x + offX,y + offY,grid)
        }
    }
    return true
}

