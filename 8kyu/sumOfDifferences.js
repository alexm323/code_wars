// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
    if (arr.length <=1) return 0;
    let currentSum = 0
    arr = arr.sort((a,b) => b-a)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if(i + 1 !== arr.length){
            currentSum = currentSum + (arr[i] - arr[i+1])
        }
        
        
    }
    return currentSum
}