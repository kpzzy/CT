function solution(keymap, targets) {
    let keyboardObj = {}

    keymap.map((cur, idx) => {
        for(let i = 0; i < cur.length; i++) {
            if(keyboardObj[cur[i]] === undefined) keyboardObj[cur[i]] = i + 1
            if(keyboardObj[cur[i]] > i) {
                keyboardObj[cur[i]] = i + 1
            }
        }
    })

    let answer = Array(targets.length).fill(0)
    let idx = 0

    for(let target of targets) {
        let temp = 0
        for(let i = 0; i < target.length; i++) {
            if(keyboardObj[target[i]]) {
                temp += keyboardObj[target[i]]
                answer[idx] = temp
            } else {
                answer[idx] = -1
                break
            }
            
        }
        idx++
    }
    return answer;
}

// solution(["ABACD", "BCEFD"], ["ABCD","AABB"])
// [9, 4]
// A 1, B 1, C 2, D 5 = 9
// A 1, A 1, B 1, B 1 = 4

// solution(["AA"], ["B"])
// [-1]
// B가 없기때문에 -1

solution(["ABC"], ["DA"]) // answer[idx] = -1 하고 브레이크를 거는 반례 