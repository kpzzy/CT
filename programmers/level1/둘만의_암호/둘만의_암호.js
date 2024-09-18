function solution(s, skip, index) {
    let answer = ''
    let skipAsciiNumberArray = []

    for(let skipString of skip) {
        skipAsciiNumberArray.push(skipString.charCodeAt())
    }

    for(let i = 0; i < s.length; i++) {
        let temp = []

        for(let j = 0; j < index; j++) {
            let decodeS = temp.length === 0 ? s[i].charCodeAt() + (j+1) : temp[temp.length - 1] + 1
            if(decodeS > 122) decodeS = decodeS - 26
            if(skipAsciiNumberArray.indexOf(decodeS) !== -1) {
                temp.push(decodeS + 1)
            } else {
                temp.push(decodeS)
            }
        }

        answer = answer + String.fromCharCode(temp[temp.length-1])
    }
    return answer;
}
solution("aukks", "wbqd", 5)
