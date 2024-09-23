function solution(progresses, speeds) {
    var answer = [];
    let multiply = progresses.map((x,y) => Math.ceil((100 - x) / speeds[y]))
    let j = 1
    console.log(multiply, '멀티플라이')
    for(let i = 0 ; i < multiply.length; i ++) {
        if(multiply[i] >= multiply[i + 1]) {
            console.log(i, '1번케이스의 i')
            j++
        }
        if(multiply[i] < multiply[i + 1]) {
            console.log(i, '2번케이스의 i')

            answer.push(j)
            j = 1
        }
        if(!multiply[i + 1]) {
            console.log('오긴함?')
            answer.push(j)
        }
        if(multiply.length === 0) {
            break
        }
        console.log(answer, i , j)
        // if(i === multiply.length - 1 && j !== 1) {
        //     answer.push(j)
        //     j = 1
        // }
        // console.log(answer[answer.length - 1] !== 1)
        // if(i === multiply.length - 1 && j === 1 && answer[answer.length - 1] !== 1) {
        //     console.log(answer, j)
        //     // answer.push(1)
        //     j = 1
        // }
    }
    return answer;
}

// solution([93, 30, 55], [1, 30, 5])
// 기대값 2 1

solution([90,90,90], [1, 5,4]) 
// 기대값 3

// solution([95, 90, 99, 99, 80, 99], [1,1,1,1,1,1])
// 기대값 1 3 2

// solution([95, 95, 95, 95], [4, 3, 2, 1])
// 기대값 2 1 1