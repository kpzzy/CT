function solution(babbling) {
    const useWord = ["aya", "ye", "woo", "ma"]
    var answer = 0;
    const checkWord = babbling.filter((ele) => {
        return useWord.every((word) => !ele.includes(word.repeat(2)))
    })

    const rule = /aya|ye|woo|ma/g

    for(let word in checkWord) {
        if(!checkWord[word].replace(rule, "").length) {
            answer++
        }
    }

    return answer;
}

solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa", "ayayeayaaya"])
// solution(["aya", "yee", "u", "maa", "ayayeayaaya"])
