function sortByLength (array) {
    let result = []
    let lenArr = array.map(e => e.length).sort((a,b) => a-b )
    for(let i =0; i < array.length; i++){
      result.push((array.filter(ele => ele.length === lenArr[i]))[0])
      }
  
    
    return result
    
    // Return an array containing the same strings, ordered from shortest to longest
  }