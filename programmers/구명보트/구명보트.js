const people = [70, 50, 80, 50];
const limit = 100;

function solution(people, limit) {
  let answer = 0;
  let left = 0;
  let right = people.length - 1;
  people = people.sort((a, b) => b - a);

  console.log(people);

  while (left < right) {
    if (people[right] + people[left] > limit) {
      left++;
    } else {
      right--;
      left++;
    }

    answer++;
  }

  if (left === right) answer++;

  return answer;
}
console.log(solution(people, limit));

// 이 문제는 최대 2명만 보트에 탈 수 있었음 따라서 기존 sort 처리한 people의 맨 앞과 맨뒤만 비교를 해주어야 했음
// 그래서 리미트를 넘겼을때는 가장큰 수 한개만 건너뛰고 다시 비교를 하여야 함

// const people = [70, 50, 80, 50, 50];
// const limit = 100;

// function solution(people, limit) {
//   var answer = 0;
//   let plus = 0;
//   let box = [];
//   people = people.sort((a, b) => a - b);

//   for (let i = 0; i < people.length; i++) {
//     plus += people[i];

//     if (plus >= limit) {
//       plus = 0;
//       answer++;
//       box = [];
//     }
//     if (plus < limit) box.push(people[i]);
//   }

//   if (box.length !== 0) answer = answer + box.length;

//   return answer;
// }

// console.log(solution(people, limit));
