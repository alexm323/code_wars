// find whether the sum of an array is odd or even 


function oddOrEven(array) {
    if(array.length === 0)return 'even'
  if(array.reduce((a,c) => a+c) %2 === 0){
    return 'even'
  }
   return 'odd'
 }