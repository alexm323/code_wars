// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    // accept a string 
    // 
    let resultStr = ''
    let dict = {}
    word = word.toLowerCase()
    for(let char of word){
        if(dict[char]){
            dict[char] = dict[char] + 1
        }else{
            dict[char] = 1
        }
    }
    word = word.split('')
    word.map((letter) => {
        dict[letter] === 1 ? resultStr += '(' : resultStr += ')'
    })
    return resultStr
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))