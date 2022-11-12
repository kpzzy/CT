const priorities = [2, 1, 3, 2, 5, 6, 7];
// 3,
const location = 1;

function solution(priorities, location) {
  let max;
  let cnt = 0;

  while (true) {
    max = Math.max.apply(null, priorities);
    let n = priorities.shift(); //맨 앞의 요소를 빼낸다

    if (n === max) {
      //꺼낸 요소가 max와 같으면
      cnt++; //pop하므로 cnt 1증가
      if (location === 0) {
        //만약 location이 0이되면
        return cnt; //cnt를 return
      }
    } else {
      //꺼낸 요소가 max와 다르면
      priorities.push(n); //배열 맨 끝에 꺼낸 요소를 추가
    }
    location--; //한 차례마다 location값을 계속 줄여나간다

    if (location == -1) {
      //만약 -1이 되어버리면 다시 배열의 맨끝으로 보낸다
      location = priorities.length - 1;
    }
  }
}

console.log(solution(priorities, location));

// 다른 사람의 풀이 참조;;
// 출처
// https://velog.io/@ypyp66/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%94%84%EB%A6%B0%ED%84%B0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
