// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* iterative sol */
// function vowels(str) {
//    let vowelCount = 0
//    const vowelList = ['a', 'e', 'i', 'o', 'u']
//    // use an array rather than a string so that you can account for double-character search in the future!
//    for (let char of str.toLowerCase()) {
//        if (vowelList.includes(char)) vowelCount++;
//    } 
//    return vowelCount
// }

/* regex sol (g = don't stop after match, i = case insensitive) */
function vowels(str) {
    const matches = str.match(/[aeiou]/gi)
    if (matches) return matches.length
    else return 0
}

module.exports = vowels;
