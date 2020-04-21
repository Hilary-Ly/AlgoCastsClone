// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* sol 1 - first attempt */
// function steps(n) {
//     for (let i = 0; i < n; i++) {
//         let currStep = ''
//         for (let j = 0; j <= i; j++) {
//             currStep += '#'
//         }
//         for (let k = 1; k < n - i; k++) {
//             currStep += ' '
//         }
//         console.log(currStep)
// //     }
// // }

// /* sol 2 - nested for loops for row and col (or row data) | O(n^2) time */
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let currStep = ''
//         for (let col = 0; col < n; col++) {
//             if (col <= row) currStep += '#'
//             else currStep += ' '
//         }
//         console.log(currStep)
//     }
// }

/* sol 3 - recursion */
function steps(n, row = 0, step = '') {
    if (n === row) { // base case
        return
    } 

    if (n === step.length) { // recursive case for next row
        console.log(step)
        return steps(n, row + 1);
    }

    if (step.length <= row) { // recursive case for current row
        step += '#'
    } else {
        step += ' '
    }
    steps(n, row, step)
}

module.exports = steps;
