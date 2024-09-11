const s = 'abcdefg';
function solution(s) {
  var answer = '';
  const length = s.length;
  if (length === 1) {
    answer = s[0];
  }

  if (length % 2 === 0) {
    answer = s[length / 2 - 1] + s[length / 2];
  }
  if (length % 2 === 1) {
    answer = s[parseInt(length / 2)];
  }
  return answer;
}

console.log(solution(s));
