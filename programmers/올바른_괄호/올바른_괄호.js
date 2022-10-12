const s = '())(()';
function solution(s) {
  var answer = false;
  let first = s[0];
  let last = s[s.length - 1];

  if (first === '(' && last === ')') {
    let firstNum = s.match(/\(/g).length;
    let lastNum = s.match(/\)/g).length;
    if (firstNum === lastNum) {
      answer = true;
    }
  }

  return answer;
}

console.log(solution(s));
