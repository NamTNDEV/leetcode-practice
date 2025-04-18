/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = nums
    .sort((a, b) => Math.abs(a) - Math.abs(b))
    .map((num, index) => {
      return (nums[index] = Math.pow(num, 2));
    });
  return result;
};

var sortedSquares2 = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;
  const result = new Array(nums.length);

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];
    if (leftSquare > rightSquare) {
      result[index--] = leftSquare;
      left++;
    } else {
      result[index--] = rightSquare;
      right--;
    }
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
