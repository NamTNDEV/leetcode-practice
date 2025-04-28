/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let [first, second, third] = [-Infinity, -Infinity, -Infinity];
  for (let num of nums) {
    if (num > first) [first, second, third] = [num, first, second];
    else if (num < first && num > second) [second, third] = [num, second];
    else if (num < second && num > third) third = num;
  }
  return third !== -Infinity ? third : first;
};
