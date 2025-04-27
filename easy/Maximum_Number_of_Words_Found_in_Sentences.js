/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxNumWord = -Infinity;
  sentences.forEach(sentence => {
    let count = 1;
    for (let word of sentence) {
      if (word === ' ') count++;
    }
    maxNumWord = Math.max(maxNumWord, count);
  });
  return maxNumWord;
};

var mostWordsFound2 = function (sentences) {
  let maxNumWord = -Infinity;
  for (const sentence of sentences) {
    const words = sentence.split(' ');
    maxNumWord = Math.max(words.length, maxNumWord);
  }
  return maxNumWord;
};

var mostWordsFound3 = function (sentences) {
  return Math.max(...sentences.map(word => word.split(' ').length));
};

const mock1 = [
  'alice and bob love leetcode',
  'i think so too',
  'this is great thanks very much',
];
const mock2 = ['please wait', 'continue to fight', 'continue to win'];

console.log('Mock 1::', mostWordsFound3(mock1)); //6
console.log('Mock 2::', mostWordsFound3(mock2)); //3
