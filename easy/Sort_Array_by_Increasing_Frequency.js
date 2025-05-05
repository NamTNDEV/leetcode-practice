/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySortV1 = function (nums) {
  const freq = new Map();
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  return nums.sort((a, b) => {
    const fa = freq.get(a);
    const fb = freq.get(b);
    return fa != fb ? fa - fb : b - a;
  });
};

var frequencySortV2 = function (nums) {
  const freqMap = new Map();
  for (let num of nums) freqMap.set(num, (freqMap.get(num) || 0) + 1);
  const bucket = new Map();
  let maxFreq = 0;
  for (let [key, value] of freqMap.entries()) {
    if (!bucket.has(value)) bucket.set(value, []);
    bucket.get(value).push(key);
    maxFreq = Math.max(maxFreq, value);
  }
  const result = [];
  for (let f = 1; f <= maxFreq; f++) {
    if (bucket.has(f)) {
      const group = bucket.get(f);
      group.sort((a, b) => b - a);
      for (const num of group) {
        for (let i = 0; i < f; i++) {
          result.push(num);
        }
      }
    }
  }

  return result;
};

// console.log(frequencySortV1([1, 1, 2, 2, 2, 3]));
// console.log(frequencySortV1([1, 2, 3, 1, 1, 3]));
// console.log(frequencySortV1([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
console.log(frequencySortV2([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
