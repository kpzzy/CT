const answers = [1, 3, 2, 4, 2];
function solution(answers) {
  let answer = [[], [], []];
  let box = [];
  const no1 = [1, 2, 3, 4, 5];
  const no2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const no3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    if (no1[i % 5] === answers[i]) answer[0].push(no1[i]);

    if (no2[i % 8] === answers[i]) answer[1].push(no2[i]);

    if (no3[i % 10] === answers[i]) answer[2].push(no3[i]);
  }

  let max = Math.max(answer[0].length, answer[1].length, answer[2].length);
  for (let i = 0; i < answer.length; i++) {
    if (max === answer[i].length) {
      box.push(i + 1);
    }
  }

  return box;
}
console.log(solution(answers));
