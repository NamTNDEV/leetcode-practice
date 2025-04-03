// C1:
var removeElement = function (nums, val) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === val) {
      for (let j = i; j < n - 1; j++) {
        nums[j] = nums[j + 1];
      }
      n--;
      i--;
    }
  }
  return n;
};

// C2:
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
