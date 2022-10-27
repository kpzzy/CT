const n = 1;
function solution(n) {
  let answer = 0;
  let i = n + 1;
  const jin2 = n.toString(2);

  while (true) {
    if (
      jin2.replace(/0/gi, '').length === i.toString(2).replace(/0/gi, '').length
    ) {
      answer += i;
      break;
    }
    i++;
  }
  return answer;
}

console.log(solution(n));
