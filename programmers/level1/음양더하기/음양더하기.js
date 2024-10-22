function solution(absolutes, signs) {
    return absolutes.map((cur, idx) => signs[idx] ? cur : -cur).reduce((acc, cur, idx) => { return acc + cur })
}


solution([4,7,12], [true, false, true])



// function solution(absolutes, signs) {
    
//     let answer = 0;
//     let abl = absolutes.length
    
//     for (let i = 0; i<abl; i++)
//         if(signs[i] == false){

//             answer = answer - absolutes[i]
//             console.log(answer)
            
//         } else if(signs[i] == true) {
            
//             answer = answer + absolutes[i]
//         }
//     return answer;
// }
