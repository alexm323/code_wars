// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


function makeFreqCounter(str){
    let strArr = str.split('')
    const freqCounter = {};
    for(let el of strArr){
        freqCounter[el] = (freqCounter[el] + 1) || 1;
    }
    return freqCounter;
}

function validAnagram(str1,str2){
    if(str1.length !== str2.length) return false;
    const str1Freq = makeFreqCounter(str1);   
    const str2Freq = makeFreqCounter(str2);  
    for(let key in str1Freq){
        if(str1Freq[key] !== str2Freq[key]) return false;
    }
    return true;
}

function anagrams(word,wordArr){
    let solutionArr = []
    for (let w of wordArr){
        console.log('w',w)
        if(validAnagram(word,w)){
            console.log('is valid',w)
            solutionArr.push(w)
        }

    }
    return solutionArr;
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])