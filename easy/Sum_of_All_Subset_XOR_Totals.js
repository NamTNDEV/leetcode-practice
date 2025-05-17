/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let total = 0;

  const backtrack = (index, currXOR) => {
    if (index === nums.length) {
      total += currXOR;
      return;
    }
    backtrack(index + 1, currXOR);
    backtrack(index + 1, currXOR ^ nums[index]);
  };

  backtrack(0, 0);
  return total;
};
