const topping = [1];

function solution(topping) {
  var answer = 0;
  let cheolsu = [];

  for (let i = 0; i < topping.length; i++) {
    let brother = topping.slice(i + 1);
    cheolsu.push(topping[i]);
    if ([...new Set(cheolsu)].length === [...new Set(brother)].length) answer++;
  }

  if (topping.length === 1) answer = 1;

  return answer;
}

console.log(solution(topping));
