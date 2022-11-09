const priorities = [2, 1, 3, 2, 5, 6, 7];
// 3,
const location = 1;

function solution(priorities, location) {
  var answer = 0;
  let big = Math.max(...priorities);

  for (let i = 0; i < priorities.length; i++) {
    if (priorities[0] !== big) {
      let left = priorities.shift();
      priorities.push(left);
    }
    if (priorities[0] === big) break;
    location--;
  }
  console.log(location);
  console.log(priorities);
  return answer;
}

console.log(solution(priorities, location));
