
function scoreGame(arr){
    let score = 0;
    const len = arr.length;
    for(let i=0;i<len;i+=2){
        if(arr[i]===10){
            if(arr[i+1]==10){
                score += (arr[i]+arr[i+1])+arr[i+2];
            }
        }
        else if(arr[i]+arr[i+1]===10){
            score += (arr[i] + arr[i+1] + arr[i+2]);
        }
        else if(arr[i]+arr[i+1]<10){
            score += (arr[i]+arr[i+1]);
        }
    }
    return score;
}
function winnerScore(rollArr){
    let winnerScore=0;
    for(let i =0;i<rollArr.length;i++){
        winnerScore=Math.max(winnerScore,scoreGame(rollArr[i]));
    }
    return winnerScore;
}
const testCase1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
const testCase2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
const testCase3 = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const rollArr = [testCase1,testCase2,testCase3];
// console.log(scoreGame(rollArr[0]));
// con
console.log(scoreGame(testCase1));
console.log(scoreGame(testCase2));
console.log(scoreGame(testCase3));
console.log(winnerScore(rollArr));
module.exports = scoreGame;