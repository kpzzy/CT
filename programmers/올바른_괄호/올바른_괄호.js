const s = '()()';
function solution(s) {
  let answer = true;
  let num = 0;
  let first = s[0];
  let last = s[s.length - 1];

  const firstNum = s.match(/\(/g).length;
  const lastNum = s.match(/\)/g).length;
  // if (first === '(' && last === ')') {
  //   let firstNum = s.match(/\(/g).length;
  //   let lastNum = s.match(/\)/g).length;
  //   if (firstNum === lastNum) {
  //     answer = true;
  //   }
  // }

  if (first !== '(' || last !== ')') answer = false;

  if (firstNum !== lastNum) answer = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') num += 1;
    if (s[i] === ')') num -= 1;
    if (num < 0) answer = false;
  }

  return answer;
}

console.log(solution(s));
