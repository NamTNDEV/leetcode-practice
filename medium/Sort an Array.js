// Merge Sort
var merge = function (leftArr, rightArr) {
  let n = leftArr.length + rightArr.length;
  let mergedArr = new Array(n);

  let i = 0,
    j = 0,
    k = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      mergedArr[k++] = leftArr[i++];
    } else {
      mergedArr[k++] = rightArr[j++];
    }
  }

  while (i < leftArr.length) {
    mergedArr[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
    mergedArr[k++] = rightArr[j++];
  }

  return mergedArr;
};

var mergeSort = function (nums, left, right) {
  if (left > right) return [];
  if (left === right) return [nums[left]];

  let mid = Math.floor((left + right) / 2);
  let leftArr = mergeSort(nums, left, mid);
  let rightArr = mergeSort(nums, mid + 1, right);
  let mergedArr = merge(leftArr, rightArr);

  return mergedArr;
};

// Quick Sort
var partitionLomuto = function (nums, left, right) {
  let pivot = nums[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (nums[j] <= pivot) {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  i++;
  [nums[i], nums[right]] = [nums[right], nums[i]];
  return i;
};

var quickSortLomuto = function (nums, left, right) {
  if (left > right) return [];
  if (left === right) return [nums[left]];

  let partitionIndex = partitionLomuto(nums, left, right);
  quickSortLomuto(nums, left, partitionIndex - 1);
  quickSortLomuto(nums, partitionIndex + 1, right);
  return nums;
};

var partitionHoare = function (nums, left, right) {
  let pivot = nums[left];
  let i = left - 1;
  let j = right + 1;

  while (true) {
    do {
      i++;
    } while (nums[i] < pivot);

    do {
      j--;
    } while (nums[j] > pivot);

    if (i >= j) return j;

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};

var quickSortHoare = function (nums, left, right) {
  if (left > right) return [];
  if (left === right) return [nums[left]];

  let partitionIndex = partitionHoare(nums, left, right);
  quickSortHoare(nums, left, partitionIndex);
  quickSortHoare(nums, partitionIndex + 1, right);
  return nums;
};

var sortArray = function (nums) {
  // return mergeSort(nums, 0, nums.length - 1);
  return quickSortLomuto(nums, 0, nums.length - 1);
  // return quickSortHoare(nums, 0, nums.length - 1);
};
