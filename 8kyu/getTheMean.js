// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    return marks.reduce((a,c,i,arr) => {
        if(arr.length === i+1){
            return Math.floor((a+c)/arr.length)
        }else{
            return a+c
        }
    })
  }

console.log(getAverage([70,82,90,100,54,65,70,20,100,100,25]),70)