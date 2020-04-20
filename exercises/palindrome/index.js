// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('')
//     return reversed === str
// }

// function palindrome(str) {
//     let reversed = ''
//     for (let character of str) {
//         reversed = character + reversed
//     }
//     return reversed === str
// }

// function palindrome(str) {
//     let reversed = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed === str
// }

// sol 4 - using .reduce(), acc = reversedStr, currVal = character
// function palindrome(str) {
//     const reversed = str.split('').reduce((reversedStr, character) => {
//         return reversedStr = character + reversedStr
//     },'')
//     return reversed === str
// }

// sol 5 - using .every() to check the opposing characters
// takes an element and an optional index as arguments
// compare the element with its opposing side using i
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - 1 - i]
    })
}


module.exports = palindrome;
