// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    let resultStr = ''
    for (let char of x){
      if(char !== ' '){
        resultStr += char
      }
    }
    return resultStr
  }