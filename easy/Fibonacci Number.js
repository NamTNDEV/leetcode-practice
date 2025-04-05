var fib = function (n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let tmp = a + b;
    a = b;
    b = tmp;
  }

  return b;
};

var fib2 = function (n) {
  if (n <= 1) return n;
  return fib2(n - 1) + fib2(n - 2);
};

var fib3 = function (n, cache = []) {
  if (n <= 1) return n;
  if (cache[n]) return cache[n];
  return (cache[n] = fib3(n - 1, cache) + fib3(n - 2, cache));
};
