// C1:
var maximumWealth = function (accounts) {
  let maxWealth = 0;
  const m = accounts.length;
  const n = accounts[0].length;
  for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += accounts[i][j];
    }
    maxWealth = Math.max(sum, maxWealth);
  }

  return maxWealth;
};

// C2:
var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (customer of accounts) {
    let wealth = customer.reduce((sum, money) => sum + money, 0);
    maxWealth = Math.max(wealth, maxWealth);
  }

  return maxWealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
