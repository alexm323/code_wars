// Return an array
function fizzbuzz(n)
{
  let fbz = []
  for(let i=1;i <= n; i++){
    if(i%3 === 0 && i%5 === 0){
      fbz.push('FizzBuzz')
    }else if(i%3 === 0){
      fbz.push('Fizz')
    }else if(i%5 === 0){
      fbz.push('Buzz')
    }else{
      fbz.push(i)
    }
  }
  return fbz
}