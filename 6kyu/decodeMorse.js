decodeMorse = function(morseCode){
    let wordsArr = morseCode.split('   ')
  
    let charArr = []  
    for (let word of wordsArr){
  
      charArr.push(word.split(' '))
    }
    console.log(charArr)
    return charArr.map(morseWord => morseWord.map((letter) => MORSE_CODE[letter])).map((word) => word.join('')).join(' ').trim()
  }