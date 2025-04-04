var firstUniqChar = function (s) {
  const counts = new Array(26).fill(0); // 97 - 122

  for (let char of s) {
    counts[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (counts[s.charCodeAt(i) - 97] === 1) return i;
  }

  return -1;
};
