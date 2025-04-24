/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const n = arr.length;
  let maxSoFar = -1;
  for (let i = n - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = maxSoFar;
    maxSoFar = Math.max(maxSoFar, current);
  }

  return arr;
};
