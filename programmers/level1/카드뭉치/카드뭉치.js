function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let card1 = 0
    let card2 = 0

    for(let i = 0; i < goal.length; i++) {
        if(cards1.includes(goal[i])) {
            if(cards1.indexOf(goal[i]) >= card1 + 2) {
                answer = 'No'
            }
            card1 = cards1.indexOf(goal[i])
        }

        if(cards2.includes(goal[i])) {
            if(cards2.indexOf(goal[i]) >= card2 + 2) {
                answer = 'No'
            }
            card2 = cards2.indexOf(goal[i])
        }
    }
    return answer;
}

// solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])
solution(["a", "b", "c"], ["d", "e", "f"], ["a", "d", "f"])

// 기대값 "YES"