// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     const chunkArr = []
//     let chunk = []
//     for (elem of array) {
//         if (chunk.length < size) chunk.push(elem);
//         else {
//            chunkArr.push(chunk);
//            chunk = [elem];
//         }
//     }
//     chunkArr.push(chunk);
//     return chunkArr
// }

// function chunk(array, size) {
//     const chunkArr = []
//     array.forEach(elem => {
//         const last = chunkArr[chunkArr.length - 1];
//         if (!last || last.length === size) {
//            chunkArr.push([elem]);
//         } else {
//            last.push(elem);
//         }
//     })
//     return chunkArr
// }

function chunk(array, size) {
    const chunkArr = []
    let index = 0
    while (index < array.length) {
        chunkArr.push(array.slice(index, index + size))
        index += size
    }
    return chunkArr
}

module.exports = chunk;
