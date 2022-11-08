const brown = 24;
const yellow = 24;

function solution(brown, yellow) {
  let plus = brown + yellow;

  for (let i = 3; i <= brown; i++) {
    if (plus % i === 0) {
      j = plus / i;

      if ((i - 2) * (j - 2) === yellow) {
        return [j, i];
      }
    }
  }
}

console.log(solution(brown, yellow));
