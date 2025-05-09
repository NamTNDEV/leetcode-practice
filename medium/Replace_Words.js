/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const set = new Set(dictionary);
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (set.has(word.slice(0, j))) {
        words[i] = word.slice(0, j);
        break;
      }
    }
  }

  return words.join(' ');
};

console.log(
  replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery')
);
