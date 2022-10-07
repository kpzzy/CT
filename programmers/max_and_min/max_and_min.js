const s = '-1 -2 -3 -4';
let arr = s.split(' ');

const solution = (s) => {
  let answer = '';
  let first = Math.max(...arr);
  let last = Math.min(...arr);

  answer = last + ' ' + first;

  return answer;
};

console.log(solution(s));
