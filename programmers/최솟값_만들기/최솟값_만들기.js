const A = [1, 4, 2];
const B = [5, 4, 4];
function solution(A, B) {
  var answer = 0;
  let A_orm = A.sort((a, b) => a - b);
  let B_naerim = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A_orm[i] * B_naerim[i];
  }

  return answer;
}

console.log(solution(A, B));
