// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// input is a single number 
// output returns an array of all the possible divisors 

function divisors(num){
    let divArr = [];
    for (let i = 2; i < num; i++) {
        if(Number.isInteger(num/i)){
            divArr.push(i)
        }
        
    }
    if(divArr.length === 0) return `${num} is prime`
    return divArr;
};