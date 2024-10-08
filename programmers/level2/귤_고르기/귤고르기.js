function solution(k, tangerine) {
    var answer = 0;

    let count = 0
    const tangerineObj = {}
    
    for(let i = 0; i < tangerine.length; i++) {
        tangerineObj[tangerine[i]] ? tangerineObj[tangerine[i]]++ : tangerineObj[tangerine[i]] = 1
    }
    let tangerineArr = Object.entries(tangerineObj).sort((a,b) => b[1] - a[1])

    for(let j = 0; j < tangerineArr.length; j ++) {
        count += tangerineArr[j][1]
        answer++

        if(count >= k) {
            return answer
        }
    }

    return answer;
}

solution(6, [1,3,2,5,4,5,2,3])

// 전체 귤 중 k개를 골라 한상자에 담을것
// 크기별로 분류했을때 다른종류의 수를 최소화하기를 원함
// 위 에서 8개의 배열에서 6개를 판매하려한다면 1,4 를 제외한 6개를 담음
// 종류는 2,3,5 가 되며 이게 정답임 
// 따라서 answer = 3 이됨

// 타임아웃난 풀이
// function solution(k, tangerine) {
    // var answer = 0;
    // let count = 0;
    // let tangerineArr = []
    // tangerine.sort((a,b) => b - a)
    
    // while(tangerine.length !== 0) {
    //     let tempArr = []
    //     let zeroCount = tangerine.filter(ele => tangerine[0] === ele).length

    //     tempArr.push(tangerine[0])
    //     tempArr.push(zeroCount)
    //     tangerineArr.push(tempArr)
    //     tangerine.splice(0,zeroCount)
    // }
    // tangerineArr.sort((a,b) => b[1] - a[1])
    // for(let i = 0; i < tangerineArr.length; i++) {
    //     count += tangerineArr[i][1]

    //     if(count >= k) {
    //         answer = i+1
    //         break
    //     }
    // }

//     return answer;
// }

// solution(6, [1,3,2,5,4,5,2,3])