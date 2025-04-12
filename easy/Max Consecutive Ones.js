var findMaxConsecutiveOnes = function (nums) {
  let cm = 0,
    c = 0;
  for (let num of nums) {
    c += num;
    if (num !== 1) {
      cm = Math.max(cm, c);
      c = 0;
    }
  }
  cm = Math.max(cm, c);
  return cm;
};
