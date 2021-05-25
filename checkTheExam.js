function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array2.length; i++) {

        if (array1[i] === array2[i]) {
            score += 4
        } else if (array1[i] !== array2[i] && array2[i] !== '') {
            score -= 1
        } else {
            score = score + 0
        }
    }
    if (score < 0) return 0
    return score
}