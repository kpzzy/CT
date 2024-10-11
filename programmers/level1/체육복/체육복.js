function solution(n, lost, reserve) {
    var answer = 0;
    // n 은 반 전체학생수를 의미
    // lost 는 잃어버린 학생의 번호를 의미
    // reserve 는 여분체육복을 가져온 학생을 의미

    const totalStudentArr = Array(n).fill(1)
    lost.sort((a,b) => a - b)
    reserve.sort((a,b) => a - b)

    lost.forEach(ele => {
        totalStudentArr[ele - 1]--
    });
    
    reserve.forEach(ele => {
        totalStudentArr[ele - 1]++
    })

    for(let i = 0; i < totalStudentArr.length; i ++) {
        let before = totalStudentArr[i - 1]
        let cur = totalStudentArr[i]
        let after = totalStudentArr[i + 1]
        if(before === 0 && cur === 2) {
            totalStudentArr[i]--
            totalStudentArr[i - 1]++
            continue
        }
        if(after === 0 && cur === 2) {
            totalStudentArr[i]--
            totalStudentArr[i + 1]++
            continue
        }
    }

    for(let student of totalStudentArr) {
        if(student > 0) answer++
    }

    return answer;
}

// solution(5, [2,4], [1,3,5])
// solution(5, [2,4], [3])
// solution(3, [3], [1])
// solution(4, [1,4], [2,3])
solution(5, [4,2], [3,5])
