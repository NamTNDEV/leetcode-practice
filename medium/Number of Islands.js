/**
 * @param {character[][]} grid
 * @return {number}
 */
var dfs = function (grid, i, j, rowsNum, colsNum) {
  if (i < 0 || i >= rowsNum || j < 0 || j >= colsNum || grid[i][j] === '0') {
    return;
  }
  grid[i][j] = '0';
  dfs(grid, i + 1, j, rowsNum, colsNum);
  dfs(grid, i - 1, j, rowsNum, colsNum);
  dfs(grid, i, j + 1, rowsNum, colsNum);
  dfs(grid, i, j - 1, rowsNum, colsNum);
  return;
};

var numIslands = function (grid) {
  const rowsNum = grid.length;
  const colsNum = grid[0].length;
  let count = 0;

  for (let i = 0; i < rowsNum; i++) {
    for (let j = 0; j < colsNum; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j, rowsNum, colsNum);
        count++;
      }
    }
  }
  return count;
};
