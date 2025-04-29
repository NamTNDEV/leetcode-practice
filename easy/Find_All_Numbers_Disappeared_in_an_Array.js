/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const counters = new Array(n + 1).fill(0);
  const result = [];
  for (let num of nums) counters[num]++;
  for (let i = 0; i < counters.length; i++) {
    if (i !== 0 && counters[i] === 0) {
      result.push(i);
    }
  }
  return result;
};

var findDisappearedNumbersWithoutExtraSpace = function (nums) {
  const n = nums.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
