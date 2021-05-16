// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(string){
    let strArr = [];
    for (let i = 0; i < string.length; i++) {
        let accStr = '';
        console.log('accStr and i',accStr,i)
        accStr = string[i].toUpperCase() + string[i].toLowerCase().repeat(i)
        console.log('accStr',accStr)
        strArr.push(accStr)
    }
    return strArr.join('-')
}

accum('high')