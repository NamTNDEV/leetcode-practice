/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jewelsSet = new Set(jewels);
  let count = 0;
  for (let stone of stones) {
    if (jewelsSet.has(stone)) count++;
  }
  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
