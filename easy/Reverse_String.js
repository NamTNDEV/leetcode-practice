/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const n = s.length;
  let l = 0,
    r = n - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++, r--;
  }
  return s;
};
