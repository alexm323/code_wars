function squareOrSquareRoot(array) {
    return array.map((element) => {
        let sqrt = Math.sqrt(element)

        if (sqrt % 1 === 0) {
            return Math.sqrt(element)
        } else {
            return element ** 2
        }

    })
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))