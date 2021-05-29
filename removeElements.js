// Take an array and remove every second element from the array.Always keep the first element and start removing with the next element.

//     Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-- > ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr) {
    return arr.filter((ele, i) => {
        return i % 2 === 0
    })
}