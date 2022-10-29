const numbers = [3, 30, 34, 5, 9];
function solution(numbers) {
  var answer = '';
  answer = numbers.map((num) => String(num));
  answer = answer.sort((a, b) => b + a - (a + b)).join('');

  if (answer[0] === '0') {
    answer = '0';
  }
  return answer;
}

console.log(solution(numbers));

// 참고한 부분
// numbers = numbers.map((a) => String(a));
// // console.log(numbers);
// console.log(numbers[1][0]);
// numbers.sort((a, b) => {
//   console.log(a, b);
//   if (a[0] > b[0]) return -1;
//   if (a[0] < b[0]) return 1;
// });
// console.log(numbers);

// 처음에는 위 함수처럼 numbers의 0번째값 즉 앞자리를 통하여 비교를 하려고 하였는데 3이 30보다 먼저
// 와야하는 경우가 생겼었음 구글링을 통하여 이 문제의 핵심은 (b+a) - (a+b) 라는 것을 알게되었고
// 위와 같이 해결하였음

// sort함수에 대해서 더 공부가 필요함
