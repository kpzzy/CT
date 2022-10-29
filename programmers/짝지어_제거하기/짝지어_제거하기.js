const s = 'baabaa';
function solution(s) {
  let answer = 0;
  s = s.split('');
  let box = [];
  for (let i = 0; i < s.length; i++) {
    if (box[box.length - 1] !== s[i]) {
      box.push(s[i]);
    } else {
      box.pop();
    }
    console.log(box);
    answer = box.length === 0 ? 1 : 0;
  }

  return answer;
}
console.log(solution(s));
