function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3)
}

// solution(45)
solution(125)

// function solution(n) {
//     var answer = 0;
//     let change = n.toString(3)
//     console.log(change)
//     let rever = [...change].reverse().join("")
//     console.log(rever)
    
//     answer = parseInt(rever, 3)
//     return answer;
// }