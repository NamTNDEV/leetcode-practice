/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  return s.split(' ').slice(0, k).join(' ');
};

var truncateSentence2 = function (s, k) {
  let spacesCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      spacesCount++;
      if (spacesCount === k) return s.substring(0, i);
    }
  }
  return s;
};

console.log(truncateSentence('Hello how are you Contestant', 4));
