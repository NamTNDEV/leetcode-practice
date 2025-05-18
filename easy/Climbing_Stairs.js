/**
 * @param {number} n
 * @return {number}
 */
var dp = function (n, cached) {
  if (cached[n]) return cached[n];
  cached[n] = dp(n - 1, cached) + dp(n - 2, cached);
  return cached[n];
};

var climbStairs = function (n) {
  const cached = new Array(46).fill(0);
  cached[1] = 1;
  cached[2] = 2;
  return dp(n, cached);
};
