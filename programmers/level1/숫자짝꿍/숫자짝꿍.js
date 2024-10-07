function solution(X, Y) {
    var answer = '';
    let xObj = {}
    let yObj = {}
    let answerObj = {}
    for(let i = 0; i < 10; i++) {
        let xIlength = X.split(`${i}`).length - 1;
        let yIlength = Y.split(`${i}`).length - 1;
        xObj[i] = xIlength;
        yObj[i] = yIlength;
    }
    for(let i = 0; i < 10; i++) {
        if(xObj[i] === 0) {
            delete xObj[i]
        }
        if(yObj[i] === 0) {
            delete yObj[i]
        }
    }

    const concat = Object.keys(xObj).concat(Object.keys(yObj))
    let dupKey = concat.filter((item, index) => concat.indexOf(item) !== index)

    if(dupKey.length === 0) return '-1'
    if(dupKey.length === 1 && dupKey[0] === '0') return '0'

    for(let key in dupKey) {
        xObj[dupKey[key]] < yObj[dupKey[[key]]] ? answerObj[dupKey[key]] = xObj[dupKey[key]] : answerObj[dupKey[key]] = yObj[dupKey[key]]
    }
    for(let key of Object.keys(answerObj)) {
        answer += key.repeat(answerObj[key])
    }
    return answer.split('').sort((a,b) => b-a).join('');
}

solution("100", "2345")
// solution("100", "203045")
// solution("100", "123450")
// solution("12321", "42531")
// solution("5525", "1255")
