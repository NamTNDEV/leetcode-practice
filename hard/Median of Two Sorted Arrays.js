/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (!nums1.length) return findMedianSortedArray(nums2);
  if (!nums2.length) return findMedianSortedArray(nums1);
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  const n = nums1.length,
    m = nums2.length;
  let left = 0,
    right = n;
  while (left <= right) {
    const partitionX = Math.floor((left + right) / 2);
    const partitionY = Math.floor((n + m + 1) / 2) - partitionX;

    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === n ? Infinity : nums1[partitionX];
    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === m ? Infinity : nums2[partitionY];
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((n + m) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      }
      return Math.max(maxLeftX, maxLeftY);
    } else if (maxLeftX > minRightY) {
      right = partitionX - 1;
    } else {
      left = partitionX + 1;
    }
  }

  throw new Error('Input arrays are not sorted');
};

var findMedianSortedArray = function (nums) {
  const n = nums.length;
  if (n % 2 === 0) {
    return (nums[n / 2 - 1] + nums[n / 2]) / 2;
  }

  return nums[Math.floor(n / 2)];
};
