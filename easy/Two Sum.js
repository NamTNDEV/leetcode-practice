const nums = [2, 7, 11, 15];
const target = 9;

//Solution 1
// let twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

//Solution 2
let twoSum = function (nums, target) {
  const visitedNums = new Map();
  for (let i = 0; i < nums.length; i++) {
    const neededNum = target - nums[i];
    if (visitedNums.has(neededNum)) return [visitedNums.get(neededNum), i];
    visitedNums.set(nums[i], i);
  }
  return [];
};

console.log(twoSum(nums, target));
