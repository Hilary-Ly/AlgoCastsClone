// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
   for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < (arr.length - i - 1); j++) {
           // window starts at almost the full length (minus the last to account for j+1) and closes in from the back
           if (arr[j] > arr[j + 1]) { // swap
               let greater = arr[j]
               arr[j] = arr[j + 1]
               arr[j + 1] = greater
           }
       }
   } 
   return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) indexOfMin = j
        }
        if (i !== indexOfMin) { // swap
            let lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }
    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) return arr
    const center = Math.floor(arr.length / 2) 
    // rounds down if odd (left array is shorter)
    const left = arr.slice(0, center)
    const right = arr.slice(center)
    return merge(mergeSort(left), mergeSort(right))
    // keep calling mergeSort until arr.length is 1, then call merge
}

function merge(left, right) {
    const results = []
    let lesser
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            lesser = left.shift()
        } else {
            lesser = right.shift()
        }
        results.push(lesser)
    }
    return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
