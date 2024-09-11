function solution(video_len, pos, op_start, op_end, commands) {
    const videoMinTime = Date.parse('1970-01-02 09:00:00')
    const videoMaxTime = Date.parse(`1970-01-02 09:${video_len}`)
    const defaultTime = Date.parse(`1970-01-02 09:${pos}`)
    const opStartTime = Date.parse(`1970-01-02 09:${op_start}`)
    const opEndTime = Date.parse(`1970-01-02 09:${op_end}`)

    let answer = defaultTime
    
    const addTime = (minute, second, skipCheck) => {
        if(skipCheck) return videoMinTime + (minute * 60 * 1000) + (second * 1000)
        return answer + (minute * 60 * 1000) + (second * 1000)
    }

    if(pos >= op_start && pos <= op_end) {
        answer = addTime(op_end.split(':')[0], op_end.split(':')[1], true)
    }
    for(let command of commands) {
        if(answer >= opStartTime && answer <= opEndTime) {
            answer = addTime(op_end.split(':')[0], op_end.split(':')[1], true)
        }
        if(command === 'next') {
            answer = addTime(0, 10)
            if(videoMaxTime - (10 * 1000) < answer) {
                answer = videoMaxTime
            }
        }
        if(command === 'prev') {
            answer = addTime(0, -10)
            if(videoMinTime + (10 * 1000) > answer) {
                answer = videoMinTime
            } 
        }
        if(answer >= opStartTime && answer <= opEndTime) {
            answer = addTime(op_end.split(':')[0], op_end.split(':')[1], true)
        }
    }
    let returnMin = (new Date(answer).getMinutes()).toString()
    let returnSec = (new Date(answer).getSeconds()).toString()
    if(returnMin.length !== 2) returnMin = '0'+returnMin
    if(returnSec.length !== 2) returnSec = '0'+returnSec
    return returnMin + ':' + returnSec
}

solution("10:55","00:05","00:15","06:55",["prev", "next", "next"])

// mm:ss 형식으로 return 하기 때문에 그 외 연도는 임의의값 지정
// pos 확인하여 skip 하여야하는지 확인
// 이후 개별 커맨드에 따라 로직 수행
// 리턴시 getMinute과 getSecond 사용시 Number 가 되기때문에 string 으로 리턴