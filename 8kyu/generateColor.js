// Generate a valid randomly generated hexadecimal color string.Assume all of them always have 6 digits.

// Valid Output
// #ffffff
// #FfFfFf
// #25a403
// #000001
// Non - Valid Output
// #fff
// #aaa
// #zzzzz
// cafebabe
// #a567567676576756A7



function generateColor() {
    let colorString = '#'
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    function randIndex() {
        return Math.floor((Math.random() * digits.length))
    }
    for (let i = 0; i <= 5; i++) {
        colorString += digits[randIndex()]

    }
    return colorString
};