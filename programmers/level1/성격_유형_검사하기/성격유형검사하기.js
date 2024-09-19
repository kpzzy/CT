function solution(survey, choices) {
    var answer = '';
    let surveyArr = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N']
    let answerObj = {}

    const choiceScore = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3
    }
    const existSurveyCheck = (survey) => {
        return Object.keys(answerObj).includes(survey)
    }
    for(let i = 0; i < survey.length; i++) {
        if(choices[i] > 4) {
            existSurveyCheck(survey[i][1]) ? answerObj[survey[i][1]] += choiceScore[choices[i]] : answerObj[survey[i][1]] = choiceScore[choices[i]]
        }

        if(choices[i] < 4) {
            existSurveyCheck(survey[i][0]) ? answerObj[survey[i][0]] += choiceScore[choices[i]] : answerObj[survey[i][0]] = choiceScore[choices[i]]
        }
    }
    for(let survey of surveyArr) {
        if(!answerObj[survey]) answerObj[survey] = 0
    }
    for(let i = 0; i < 8; i++) {
        if(i % 2 === 0) {
            if(answerObj[surveyArr[i]] >= answerObj[surveyArr[i+1]]) {
                answer = answer + surveyArr[i]
            } else {
                answer += surveyArr[i+1]
            }
        }
    }
    return answer;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])
// 	"TCMA"