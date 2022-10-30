const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let bit_str = arr1[i] | arr2[i];

    let bit2 = bit_str.toString(2);

    if (bit2.length < n) {
      while (true) {
        if (bit2.length === n) break;
        bit2 = '0' + bit2;
      }
    }

    let result = bit2.replaceAll('1', '#').replaceAll('0', ' ');
    answer.push(result);
  }
  return answer;
}
console.log(8000 * 2800000);
console.log(solution(n, arr1, arr2));

// 비트연산자 정리해보기
// a = 5;
// b = 2;

// 위와같은 경우일 때
// a | b = 7이 출력이 된다 그 이유는

// console.log(a.toString(2));
// 101
// console.log(b.toString(2));
// 10

//즉 101 과 10을 논리연산자 | 을 통하여 계산을 하면 111 이 되며
// 111은 7을 의미하기 때문에 7로 출력이 됨

// 위 문제에서는 비트연산자를 쓰지 않았다면 반복문이 매우 많이 들어갔을 것으로 예상
