// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let results = []
    for (let i = 0; i < n; i++) { // create empty matrix first!
        results.push([])
    }
    let counter = 1
    let leftBound = 0
    let rightBound = n - 1
    let topBound = 0
    let bottomBound = n - 1
    // think of these as boundaries for i
    while (leftBound <= rightBound && topBound <= bottomBound) {
        // top side: start column moves. ends leftBound=2, topBound=0
        for (let i = leftBound; i <= rightBound; i++) {
            results[topBound][i] = counter
            counter++
        }
        topBound++ // since all of 1st row is done
        // right side: start row moves, all done at last column
        for (let i = topBound; i <= bottomBound; i++) {
            results[i][rightBound] = counter
            counter++
        }
        rightBound--
        // bottom side: end column moves
        for (let i = rightBound; i >= leftBound; i--) {
            results[bottomBound][i] = counter
            counter++
        }
        bottomBound--
        // left side: end row moves
        for (let i = bottomBound; i >= topBound; i--) {
            results[i][leftBound] = counter
            counter++
        }
        leftBound++
    }
    console.log(results)
    return results
}


module.exports = matrix;
