/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n^2)
var numIdenticalPairs = function (nums) {
  let n = nums.length,
    count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};

// O(n)
var numIdenticalPairsV2 = function (nums) {
  const countMap = new Map();
  let goodPairs = 0;
  for (const num of nums) {
    if (!countMap.has(num)) countMap.set(num, 1);
    else {
      const numValue = countMap.get(num);
      goodPairs += numValue;
      countMap.set(num, numValue + 1);
    }
  }
  return goodPairs;
};

console.log(numIdenticalPairsV2([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairsV2([1, 1, 1, 1]));
console.log(numIdenticalPairsV2([1, 2, 3]));
