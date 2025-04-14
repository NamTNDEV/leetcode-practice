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

var firstUniqChar2 = function (s) {
  const counts = new Map();

  for (let char of s) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (counts.get(s[i]) === 1) return i;
  }

  return -1;
};
