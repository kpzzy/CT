function solution(lottos, win_nums) {
    var answer = [];
    let maximumCount = 0
    let minimumCount = 0

    const winRule = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
    }

    for(let lotto of lottos) {
        const checkLottoNumber = win_nums.indexOf(lotto)

        if(checkLottoNumber !== -1) {
            maximumCount++
            minimumCount++
        }

        if(lotto === 0) maximumCount ++
    }

    winRule[maximumCount] ? answer.push(winRule[maximumCount]) : answer.push(6)
    winRule[minimumCount] ? answer.push(winRule[minimumCount]) : answer.push(6)

    return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])