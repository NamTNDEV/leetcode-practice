/**
 * @param {number[]} nums
 * @return {number[]}
 */

// #array
var smallerNumbersThanCurrentV1 = function (nums) {
  const n = nums.length;
  const result = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j && nums[i] > nums[j]) {
        result[i]++;
      }
    }
  }
  return result;
};

// #array, #sort
var smallerNumbersThanCurrentV2 = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const result = [];
  for (const num of nums) {
    result.push(sortedNums.indexOf(num));
  }
  return result;
};

// #array, #sort, #hash_table
var smallerNumbersThanCurrentV3 = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < sortedNums.length; i++) {
    if (!map.has(sortedNums[i])) map.set(sortedNums[i], i);
  }
  return nums.map(num => map.get(num));
};

// #array
var smallerNumbersThanCurrentV4 = function (nums) {
  const count = Array(101).fill(0);
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  return nums.map(num => (num === 0 ? 0 : count[num - 1]));
};

// console.log(smallerNumbersThanCurrentV1([8, 1, 2, 2, 3]));
// console.log(smallerNumbersThanCurrentV1([6, 5, 4, 8]));
// console.log(smallerNumbersThanCurrentV1([7, 7, 7, 7]));
// console.log(smallerNumbersThanCurrentV1([5, 0, 10, 0, 10, 6]));
// console.log();
// console.log(smallerNumbersThanCurrentV2([8, 1, 2, 2, 3]));
// console.log(smallerNumbersThanCurrentV2([6, 5, 4, 8]));
// console.log(smallerNumbersThanCurrentV2([7, 7, 7, 7]));
// console.log(smallerNumbersThanCurrentV2([5, 0, 10, 0, 10, 6]));
// console.log();
// console.log(smallerNumbersThanCurrentV3([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrentV3([5, 0, 10, 0, 10, 6]));
// console.log(smallerNumbersThanCurrentV3([6, 5, 4, 8]));
// console.log(smallerNumbersThanCurrentV3([7, 7, 7, 7]));
// console.log(smallerNumbersThanCurrentV3([5, 0, 10, 0, 10, 6]));
console.log();
// console.log(smallerNumbersThanCurrentV4([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrentV4([5, 0, 10, 0, 10, 6]));
// console.log(smallerNumbersThanCurrentV4([6, 5, 4, 8]));
// console.log(smallerNumbersThanCurrentV4([7, 7, 7, 7]));
// console.log(smallerNumbersThanCurrentV4([5, 0, 10, 0, 10, 6]));
