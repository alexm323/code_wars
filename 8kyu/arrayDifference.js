// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (valueArr, targets) => {
    // if(removeTargetArr.length === 0 || valueArr.length === 0) return valueArr
    // let resultArr = [...valueArr]
    // for(let target of targets){
    //     for(let value of valueArr){
    //         if(value !== target){
    //             resultArr = resultArr.slice(1)
    //         }
    //     }
    // }
    // return resultArr
    return valueArr.filter(value => !targets.includes(value))
}

// console.log(arrayDiff([1,2,2,2,3],[2]))
// console.log(arrayDiff([1,2],[1]))
console.log(arrayDiff([1,2,3],[1,2]))
console.log(arrayDiff([3,4],[3]))

// const filter = (arr,target) => arr.filter(val => val !== target) 
// console.log(filter([3,4],3))