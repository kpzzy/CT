const n = 12;
function solution(n) {
  var answer = 0;

  for (let i = 0; i <= n; i++) {
    if (Number.isInteger(n / i) === true) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(n));
