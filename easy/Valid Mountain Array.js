/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArrayBruteForce = function (arr) {
  const n = arr.length;
  if (n < 3) return false;
  let i = 0;
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++;
  }
  if (i === 0 || i === n - 1) return false;
  while (i < n - 1 && arr[i] > arr[i + 1]) {
    i++;
  }
  return i === n - 1;
};

var validMountainArrayTwoPointers = function (arr) {
  const n = arr.length;
  let l = 0,
    r = n - 1;
  while (l < n - 1 && arr[l] < arr[l + 1]) {
    l++;
  }
  while (r > 0 && arr[r] < arr[r - 1]) {
    r--;
  }
  return l === r && r !== n - 1 && l !== 0;
};
