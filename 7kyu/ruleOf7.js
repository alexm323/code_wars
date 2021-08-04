// function seven(m,count=1) {
//   if(count === 1){
//     console.log(m)
//   }
//    let numStr = String(m)
   
// //    console.log(numStr.length)
//    let firstNum = Number(numStr.substring(0,numStr.length - 1))
// //    console.log(firstNum,'firstNum')
//    let secondNum = Number(numStr.substring(numStr.length -1))
// //    console.log('secondNum',secondNum)
//     let subtractedNum = (firstNum - (2*secondNum))
//     if(numStr.length === 3){
//       return [subtractedNum,count]
//     }
  
//     else{
//       return seven(subtractedNum,count+1)
//     }
// }
function seven(m) {
    var i = 0;
      while(m.toString().length>2){
        m=Math.floor(m/10)-(m%10)*2;
        i++;
      }  
    return [m, i];
    }