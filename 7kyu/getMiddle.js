function getMiddle(s)
{
  let arr = s.split('')
  if(arr.length === 1){
    return s[0]
  }else if(arr.length === 2){
    return arr.join('')
  }else{
    arr.pop()
    arr.shift()
    return getMiddle(arr.join(''))
    
  }
}