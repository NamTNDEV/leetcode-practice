/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const result = [];
  let curr = 1;
  for (let i = 1; i <= n; i++) {
    result.push(curr);
    if (curr * 10 <= n) curr *= 10;
    else {
      while (curr + 1 > n || curr % 10 === 9) curr = Math.floor(curr / 10);
      curr++;
    }
  }
  return result;
};

var lexicalOrderDfs = function (n) {
  const result = [];
  function dfs(curr) {
    if (curr > n) result;
    result.push(curr);
    for (let i = 0; i <= 9; i++) {
      dfs(curr * 10 + i);
    }
  }
  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }
  return result;
};
