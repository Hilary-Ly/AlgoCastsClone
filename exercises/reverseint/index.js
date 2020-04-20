// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//    const reversed = (Math.sign(n) * n)
//       .toString()
//       .split('')
//       .reduce((reversed, char) => (reversed = char + reversed));
//    return reversed * Math.sign(n);
// }

// function reverseInt(n) {
//    const reversed = (Math.sign(n) * n).toString().split('').reverse().join('');
//    return reversed * Math.sign(n);
// }

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)
}


module.exports = reverseInt;
