//recursion solution
function fib(n) {
  if (n < 2){
    return n;
  }
  else {
    return fib(n-1) + fib(n-2);
  }
}
//iterative solution
function fib_2(n) {
  const result = [0,1];
  for(let i = 2;i <= n;i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a+b);
  }
  return result[n];
}

function memoize(fn) {
  const cache = {};
  return function(...args){
    if(cache[args]) {
      return cache[args];
    } 

    const result = fn.apply(this,args);
    //pass result into cache
    cache[args] = result;

    return result;
  };
}

fib = memoize(fib);

module.exports = fib;
