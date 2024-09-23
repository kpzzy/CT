function solution(k, score) {
    var answer = [];
    let temp = []
    for(let i = 0; i < score.length; i ++) {
        temp.push(score[i])
        temp.sort((a, b) => a - b)
        if(temp.length > k) {
            temp.shift()
        }
        answer.push(temp[0])
    }
    return answer;
}

solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])