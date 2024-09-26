function solution(d, budget) {
    var answer = 0;
    let temp = 0
    let total = d.reduce((a,b) => a+b)
    if(total <= budget) {
        answer = d.length

        return answer
    }
    d.sort((a,b) => a-b)
    if(total > budget) {
        for(let i = 0; i < d.length; i++){
            if(temp + d[i] <= budget) {
                temp += d[i]
                answer++
            }
        }
    }

    return answer
}
solution([1,3,2,5,4], 10)
// 정답3

solution([2,2,3,3], 10)
// 정답4