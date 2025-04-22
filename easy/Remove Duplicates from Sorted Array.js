/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  let i = 0,
    j = 1;
  while (j < n) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
    j++;
  }
  return i + 1;
};
