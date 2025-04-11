var isValid = function (s) {
  let stack = [];
  let cache = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (char of s) {
    if (char in cache) {
      stack.push(cache[char]);
    } else {
      if (stack.length === 0 || char !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
};

var isValid2 = function (s) {
  const stack = [];

  for (char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if (
        (char == ')' && top != '(') ||
        (char == '}' && top != '{') ||
        (char == ']' && top != '[')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
