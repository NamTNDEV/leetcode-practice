// C1:
var findNumbers = function (nums) {
  let count = 0;
  for (let n of nums) {
    if (Math.floor(n.toString().length % 2) === 0) {
      count++;
    }
  }
  return count;
};

// C2:
function countDigits(n) {
  return Math.floor(Math.log10(n) + 1);
}

var findNumbers = function (nums) {
  let count = 0;
  for (let n of nums) {
    if (countDigits(n) % 2 === 0) {
      count++;
    }
  }
  return count;
};

//C3:
function countDigits(n) {
  let result = 0;
  while (n) {
    n = Math.floor(n / 10);
    result++;
  }
  return result;
}

var findNumbers = function (nums) {
  let count = 0;
  for (let n of nums) {
    if (countDigits(n) % 2 === 0) {
      count++;
    }
  }
  return count;
};
