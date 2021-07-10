// return an array of numbers backwaards from a starting number
function digitize(n) {
    return String(n).split('').map((num) => Number(num)).reverse()
  }