// const ingredient = [1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1];
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1, 2, 3, 1];
// const ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2];

function solution(ingredient) {
  let answer = 0;
  let box = [];

  for (let i = 0; i < ingredient.length; i++) {
    box.push(ingredient[i]);

    if (
      box[box.length - 1] === 1 &&
      box[box.length - 2] === 3 &&
      box[box.length - 3] === 2 &&
      box[box.length - 4] === 1
    ) {
      box.pop();
      box.pop();
      box.pop();
      box.pop();
      answer++;
    }
  }

  return answer;
}

console.log(solution(ingredient));
