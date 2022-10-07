const s = '3people unFollowed me';
function solution(s) {
  var answer = '';
  let low = s.toLowerCase();
  let arr = low.split(' ');

  for (let i = 0; i < arr.length; i++) {
    let upper = arr[i].charAt(0).toUpperCase();
    let ignoreupper = arr[i].substring(1);
    answer += upper + ignoreupper + ' ';
  }

  let result = answer.slice(0, -1);
  return result;
}

console.log(solution(s));
