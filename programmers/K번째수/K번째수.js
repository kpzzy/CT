const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    if (commands[i][0] === commands[i][1]) {
      answer.push(array[commands[i][0] - 1]);
    } else {
      const test = array
        .slice(commands[i][0] - 1, commands[i][1])
        .sort((a, b) => a - b);
      answer.push(test[commands[i][2] - 1]);
    }
  }

  return answer;
}

console.log(solution(array, commands));

// splice와 slice의 차이 -
// splice 사용시 array의 내용이 바뀜
// slice 사용시 array 바뀌지 않음

// 위 문제 하다 막힌점
// 처음에는 17번째줄의 sort를 sort() 로만 작성을 하였다 하지만 제출하였을 때 2번 문제에서 에러가 발생
// 무언가 sort()를 할때는 sort((a,b)=>a-b) 처럼 제대로 기입을 해주는게 맞는거라고 생각함
