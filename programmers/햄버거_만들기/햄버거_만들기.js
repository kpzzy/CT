// const ingredient = [1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1];
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1, 2, 3, 1];
// const ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2];

function solution(ingredient) {
  let str_ingredient = ingredient.join('').indexOf('1231');
  let answer = 0;

  if (str_ingredient !== -1) {
    while (true) {
      let test = ingredient.join('').indexOf('1231');

      if (test === -1) break;

      ingredient.splice(test, 4);

      answer++;
    }
  }

  return answer;
}

console.log(solution(ingredient));
