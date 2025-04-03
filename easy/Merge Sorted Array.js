// C1:
function handleMerge(nums1, m, num2) {
  for (let k = 0; k < m; k++) {
    if (nums1[k] > num2) {
      for (let j = m - 1; j >= k; j--) {
        nums1[j + 1] = nums1[j];
      }

      nums1[k] = num2;

      return;
    }
  }

  nums1[m] = num2;
}

var merge = function (nums1, m, nums2, n) {
  for (let num2 of nums2) {
    handleMerge(nums1, m, num2);
    m++;
  }
};

//C2:
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  j = n - 1;
  k = n + m - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
