/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const n = nums.length;
  const sumAll = nums.reduce((sum, val) => sum + val, 0);
  let sumLeft = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] + 2 * sumLeft === sumAll) return i;
    sumLeft += nums[i];
  }
  return -1;
};
