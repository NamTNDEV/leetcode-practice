/**
 * @param {number[]} heights
 * @return {number}
 */
var heightCheckerWithSort = function (heights) {
  const expectedArr = [...heights].sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expectedArr[i]) count++;
  }

  return count;
};

console.log(heightCheckerWithSort([1, 1, 4, 2, 1, 3]));
console.log(heightCheckerWithSort([5, 1, 2, 3, 4]));
console.log(heightCheckerWithSort([1, 2, 3, 4, 5]));
