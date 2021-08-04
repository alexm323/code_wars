var gimme = function (inputArray) {
    //   console.log(inputArray)
      let sortedArr = [...inputArray]
      sortedArr.sort((a,b) => a-b)
    //   console.log(sortedArr)
      return inputArray.indexOf(sortedArr[1])
    };