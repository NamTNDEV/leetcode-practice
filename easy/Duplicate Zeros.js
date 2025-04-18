/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const n = arr.length;
  const arrCopy = [...arr];
  for (let i = 0, j = 0; i < n; i++, j++) {
    arr[i] = arrCopy[j];
    if (arrCopy[j] === 0 && ++i < n) {
      arr[i] = 0;
    }
  }
};
