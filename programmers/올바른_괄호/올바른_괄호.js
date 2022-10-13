const s = '(()))()';
function solution(s) {
  let answer = true;
  let num = 0;
  const first = s[0];
  const last = s[s.length - 1];

  if (first !== '(' || last !== ')') answer = false;

  const firstNum = s.split('(').length - 1;
  const lastNum = s.split(')').length - 1;

  // if (first === '(' && last === ')') {
  //   let firstNum = s.match(/\(/g).length;
  //   let lastNum = s.match(/\)/g).length;
  //   if (firstNum === lastNum) {
  //     answer = true;
  //   }
  // }

  // 처음엔 위와같은 방법으로 풀었었는데 match 함수가 반복문 같은 개념으로 봐야하는것 같았다
  // 그 이유는 효율성 테스트에서 번번히 깨지고 있었음 그리하여 다른 방법인 split 함수를 이용해 보았는데
  // 스플릿 함수를 사용하였을 때 성공 하였음

  if (firstNum !== lastNum) answer = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') num += 1;
    if (s[i] === ')') num -= 1;
    if (num < 0) answer = false;
  }

  return answer;
}

console.log(solution(s));
