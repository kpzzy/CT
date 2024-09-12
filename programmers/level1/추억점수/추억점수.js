function solution(name, yearning, photos) {
    var answer = []
    var temp = []
    const yearningObj = {}
    for(let i = 0; i < name.length; i++) {
        yearningObj[name[i]] = yearning[i]
    }
    for(let j = 0; j < photos.length; j++) {
        temp.push([])
        for (let k = 0; k < photos[j].length; k++) {
            if(yearningObj[photos[j][k]]) {
                temp[j].push(yearningObj[photos[j][k]])
            }
        }
        const final = temp[j].reduce((acc, cur) => acc + cur, 0)
        answer.push(final)
    }
    return answer;
}

solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])

// 1차 개선사항
// 김희주: 플로우는 비슷하지만 배열 부분에서 성능 튜닝 요망
//         reduce 또한 결국 반복문인데 2중반복문 내 반복문2개 => 반복문 1개로 개선가능하다

// const final = temp[j].reduce((acc, cur) => acc + cur, 0)
// answer.push(final)

// ========================================================================================

// 다른사람의 풀이
function solution(name, yearning, photo) {
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}

// ?? 연산자 = yearning[name.indexOf(c)] 가 null 이나 undefined 인 경우, 0을 할당한다
// map 함수와 reduce 함수를 사용하여 해결한 풀이
 
// https://ko.javascript.info/nullish-coalescing-operator [모던 자바스크립트 튜토리얼]