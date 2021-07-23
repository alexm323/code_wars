function inArray(array1,array2){
    let result = []
    let og = [...array1]
    for(let word of array2){
      for(let w of array1){
        if(word.includes(w)){
          result.push(w)
        }
      }
    }
    
    
    
    return og.filter(w => result.includes(w)).sort()
  }

