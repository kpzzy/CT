function solution(hp) {
    const rule = {
        general: 5,
        soldier: 3,
        worker: 1
    }
    var answer = 0;
    while(hp !== 0) {
        answer += Math.floor(hp/rule.general)
        hp = hp%rule.general
        if(hp !== 0) {
            answer += Math.floor(hp/rule.soldier)
            hp = hp%rule.soldier
            if(hp !== 0) {
                answer += Math.floor(hp/rule.worker)
                hp = 0
            }
        }
    }
    return answer;
}

solution(999)

// 김희주
// 이거 반복문 왜넣으신거에요...? 

// 윤상돈
// 엣;;