/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && arr[i] === 2 * arr[j]) {
        return true;
      }
    }
  }

  return false;
};

var checkIfExist2 = function (arr) {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(2 * num) || (num % 2 === 0 && seen.has(num / 2))) {
      return true;
    }
    seen.add(num);
  }
  return false;
};
