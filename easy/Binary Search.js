var search = function (nums, target) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

var recursionBinarySearch = function (nums, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) {
    return mid;
  }
  if (nums[mid] < target) {
    return recursionBinarySearch(nums, target, mid + 1, right);
  } else {
    return recursionBinarySearch(nums, target, left, mid - 1);
  }
};

var search2 = function (nums, target) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  return recursionBinarySearch(nums, target, left, right);
};
