/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity1 = function (nums) {
  const evenArr = nums.filter(num => num % 2 === 0);
  const oddArr = nums.filter(num => num % 2 === 1);
  return [...evenArr, ...oddArr];
};

var sortArrayByParity2 = function (nums) {
  const n = nums.length;
  let l = 0,
    r = n - 1;
  while (l < r) {
    if (nums[l] % 2 > nums[r] % 2) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
    }
    if (nums[l] % 2 === 0) l++;
    if (nums[r] % 2 === 1) r--;
  }
  return nums;
};
