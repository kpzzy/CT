function solution(video_len, pos, op_start, op_end, commands) {
    let videolenReplace = video_len.replace(':', '')
    let posReplace = pos.replace(':', '')
    let opstartReplace = op_start.replace(':', '')
    let opendReplace = op_end.replace(':', '')

    var answer = posReplace;
    if(posReplace >= opstartReplace && posReplace <= opendReplace) {
        answer = opendReplace
    }
    for(let command of commands) {
        if(command === 'next') {
            if(answer[2] < 5) {
                answer = answer.split('')
                answer[2] = (Number(answer[2]) + 1).toString()
                answer = answer.join('')
            } else {
                answer = answer.split('')
                answer[2] = '0'
                answer[1] = (Number(answer[1]) + 1).toString()
                if(answer[1] > 4) {
                    
                }
                answer = answer.join('')
            }
            
            // answer = answer > videolenReplace ? videolenReplace : answer
        }
        // if(command === 'prev') {
        //     answer -= 10
        //     answer = answer < 0 ? 0 : answer 
        // }

        if(answer >= opstartReplace && answer <= opendReplace) {
            answer = op_end.replace
        }
    }
    return answer;
}

solution("10:55","00:05","00:15","06:55",["prev", "next", "next"])

// 아닌가 비슷햇으려나...