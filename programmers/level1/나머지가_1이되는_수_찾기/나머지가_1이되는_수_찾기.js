const n = 10;
function solution(n) {
  var answer = 0;
  let box = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 1) {
      box.push(i);
    }
    if (n % i === 1) break;
  }
  answer = box[0];
  return answer;
}

console.log(solution(n));
