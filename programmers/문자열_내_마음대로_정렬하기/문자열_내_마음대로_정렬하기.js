const strings = ['sun', 'bed', 'car'];
const n = 1;

function solution(strings, n) {
  var answer = [];
  strings.sort();
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return 0;
    if (a[n] < b[n]) return -1;
  });

  return strings;
}

console.log(solution(strings, n));

// https://hianna.tistory.com/409 참고자료

// sort 함수가 그냥 내림차순, 오름차순으로만 썼었는데 sort함수의 여러 기능을 알게 되었음

// 특히 return 1, 0, -1 로 쉽게 정렬을 할 수 있어서 유용하였음

// --------------------------------------------

// 맨첫줄에 한번 정렬을 하여서 뒤에 문자열이 중복되더라도 가만히 있게 하였음
