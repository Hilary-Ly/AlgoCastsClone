// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//    const totalCols = 2 * n - 1;
//    const midpt = Math.floor(totalCols / 2)
//    for (let row = 0; row < n; row++) {
//       let level = '';
//       for (let col = 0; col < totalCols; col++) {
//          if (col >= midpt - row && col <= midpt + row) level += '#'
//          else level += ' '
//       }
//       console.log(level);
//    }
// }

function pyramid(n, row = 0, level = '') {
    const totalCols = 2 * n - 1;
    const midpt = Math.floor(totalCols / 2)
    if (n === row) return;
    if (level.length === totalCols) {
        console.log(level)
        return pyramid(n, row + 1)
    }
    let add
    if (level.length >= midpt - row && level.length <= midpt + row) {
        add = '#'
    } else {
        add = ' '
    }
    pyramid(n, row, level + add)
}

module.exports = pyramid;
