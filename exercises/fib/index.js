// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* iterative sol | O(n) time */
// function fib(n) {
//     const result = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1]
//         const b = result[i - 2]
//         result.push(a + b)
//     }
//     return result[n]
// }

/* iterative sol - my attempt | O(n) time  */
// function fib(n) {
//     const arr = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     return arr[n]
// }

/* recursive sol | exponential time */
// function fib(n) {
//     if (n <= 1) return n
//     return fib(n-1) + fib(n-2)
// }

/* memoization sol w/ cache obj outside of function | O(n), O(1) (?) for repeated execution */
// const cache = {
//   0: 0,
//   1: 1
// };
// function fib (n) {
//   if (cache.hasOwnProperty(n)) return cache[n];
//   return cache[n] = fib(n - 1) + fib(n - 2);
// }

/* memoization sol w/ cache as an arg */
function fib(n, cache = { 0: 0, 1: 1 }) {
   if (cache.hasOwnProperty(n)) return cache[n] // '(cache[n])' doesn't work
   return cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
}

/* memoization sol w/ additonal memoize function */
/* aka "how can we improve the runtime of this recursive fn" */
// function slowFib(n) { // same recursive function, renamed
//    if (n <= 1) return n;
//    return fib(n - 1) + fib(n - 2); // refers to the memoized fib
// }
// function memoize(fn) {
//    const cache = {};
//    return function (...args) {
//       if (cache[args]) { // check cache to see if computed this before
//          return cache[args];
//       }
//       const result = fn(...args); // otherwise compute for this arg
//       // can also write fn.apply(this, args) or fn.call(this, ...args)
//       return cache[args] = result; // then save in cache
//     //   return result;
//    };
// }
// const fib = memoize(slowFib);

module.exports = fib;
