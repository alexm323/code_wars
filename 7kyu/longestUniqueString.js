function longest(s1, s2) {
    // your code
    let resultStr = s1+s2
    return Array.from(new Set(resultStr.split(''))).sort().join('')
  }