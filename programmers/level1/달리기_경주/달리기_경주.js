function solution(players, callings) {
    var answer = [];
    let playerObj = {}
    let i = 0
    for(let player of players) {
        playerObj[player] = i
        i++
    }
    for(let call of callings) {
        // 방금호출된 플레이어의 순서 (추월한 플레이어)
        let callPlayer = playerObj[call] // 첫 callings[0] 인 kai 는 players[3] 에 해당하며 callPlayer = 3 이 출력된다
        // callPlayer 에게 추월당한 사람을 beforePlayer 로 칭함
        let beforePlayer = players[callPlayer - 1] // beforePlayer 는 players[callPlayer - 1] = poe

        // players 배열에서 추월한 플레이어와 추월당한 플레이어의 위치를 바꾼다
        players[callPlayer - 1] = call
        players[callPlayer] = beforePlayer

        // 순서가 바뀌었기 때문에 위에서 생성된 playerObj 도 최신화 시켜준다
        playerObj[call] = callPlayer - 1
        playerObj[beforePlayer] = callPlayer
    }
    
    // playerObj 에서 확인된 순서대로 answer 배열을 구성하여 return 한다
    for(let player in playerObj) {
        answer[playerObj[player]] = player
    }
    return answer;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])

// 개선사항
// 굳이 return 할때 for in 을 해서 answer 배열을 새로 만들어야하는가???
// players 배열을 return 한다면 성능이 더욱 개선됨