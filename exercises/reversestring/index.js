// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// sol 1
// function reverse(str) {
//     let reversedStr = ''
//     for (let i = 0; i < str.length; i++) {
//         reversedStr = str[i] + reversedStr
//     }
//     return reversedStr
// }

// sol 2
// function reverse(str) {
//     let reversedStr = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i]
//     }
//     return reversedStr
// }

// sol 3 - with for-of loops!
function reverse(str) {
   let reversed = '';
   for (let character of str) {
      reversed = character + reversed;
   }
   return reversed;
}

// sol 4
// function reverse(str) {
//    return str.split('').reverse().join('')
// }

// sol 5 - using .reduce() = advanced array helper
// accumulator = reversed, currentValue = character
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => character + reversed,'')
// }

module.exports = reverse;
