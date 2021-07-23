function highestRank(arr){
    let hash = {}
    for (let num of arr){
      hash[num] ? hash[num]++ : hash[num] = 1
    }
    let highestVal = 0
    let highestKey = 0
    for (let [key,value] of Object.entries(hash)){
      if(value > highestVal){
        highestVal = value
        highestKey = key
      }else if(value === highestVal){
        if(highestKey < key){
          highestKey = key
          highestVal = value
        }
      }
    }
    return Number(highestKey)
}