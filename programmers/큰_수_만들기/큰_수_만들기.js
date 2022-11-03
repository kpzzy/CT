const number = '1231234';
const k = 3;

function solution(number, k) {
  const box = [];

  for (let i = 0; i < number.length; i++) {
    while (true) {
      if (k === 0) break;
      if (box[box.length - 1] < number[i]) {
        k--;
        box.pop();
      } else break;
    }
    box.push(number[i]);
  }

  if (k > 0) {
    for (let i = 0; i < k; i++) {
      box.pop();
    }
  }

  return box.join('');
}

console.log(solution(number, k));
