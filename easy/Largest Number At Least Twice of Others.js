/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const n = nums.length;
  let max = -1,
    maxIndex = -1;
  let maxSecond = -1;
  for (let i = 0; i < n; i++) {
    if (max < nums[i]) {
      maxSecond = max;
      max = nums[i];
      maxIndex = i;
    } else {
      maxSecond = Math.max(maxSecond, nums[i]);
    }
  }
  return max === maxSecond * 2 ? maxIndex : -1;
};
