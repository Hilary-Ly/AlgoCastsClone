// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// /* sol 1 - array methods */
// function anagrams(stringA, stringB) {
//    const sortedA = stringA
//       .replace(/[^\w]/g, '')
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('');
//    const sortedB = stringB
//       .replace(/[^\w]/g, '')
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('');
//    return sortedA === sortedB;
// }

/* sol 2 - array methods, helper function to elimate duplication */
function anagrams(stringA, stringB) {
   const sortedA = cleanString(stringA)
   const sortedB = cleanString(stringB)
   return sortedA === sortedB;
}
function cleanString(str) { // helper func
    return str.replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
}

/* sol 3 - using character maps (and helper func) */
// function anagrams(stringA, stringB) {
//     const charMapA = buildCharMap(stringA)
//     const charMapB = buildCharMap(stringB)
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false

//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) return false
//     }
//     return true
// }
// function buildCharMap(str) { // helper function
//     const charMap = {}
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
//     return charMap
// }


module.exports = anagrams;
