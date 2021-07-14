//.reduce()
//var.reduce((accumulator, currentValue) => accumulator + currentValue)

const scores = [34, , 56, 24, 31];

const totalScores = scores.reduce((totalScore, score) => totalScore + score);

console.log(totalScores);

