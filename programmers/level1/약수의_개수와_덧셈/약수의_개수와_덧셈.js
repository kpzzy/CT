const left = 24;
const right = 27;

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      answer -= i;
    }
    if (Math.sqrt(i) % 1 !== 0) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(left, right));
