/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let result = 0,
    balanceCount = 0;
  for (let c of s) {
    c === 'L' ? balanceCount++ : balanceCount--;
    if (balanceCount === 0) result++;
  }
  return result;
};
