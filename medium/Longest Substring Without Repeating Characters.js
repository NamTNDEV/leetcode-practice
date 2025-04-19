/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const asciiArr = new Array(128).fill(0); // 0 - 127
  let left = 0,
    right = 0;
  let maxLength = 0;
  while (right < s.length) {
    const char = s[right];
    asciiArr[char.charCodeAt(0)]++;
    while (asciiArr[char.charCodeAt(0)] > 1) {
      asciiArr[s[left].charCodeAt(0)]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};

var lengthOfLongestSubstring2 = function (s) {
  const map = new Map();
  let maxLength = 0;

  for (let left = 0, right = 0; right < s.length; right++) {
    const char = s[right];
    if (map.has(char)) {
      left = Math.max(map.get(char) + 1, left);
    }
    map.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
