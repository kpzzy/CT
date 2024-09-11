const n = 3;
const words = [
  'tank',
  'kick',
  'know',
  'wheel',
  'land',
  'dream',
  'mother',
  'robot',
  'tank',
  'hi',
];

function solution(n, words) {
  let answer = [];
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    let test =
      words[i - 1].slice(-1) === words[i][0] &&
      !words.slice(0, i).includes(words[i]);
    if (i % n === 0) turn++;
    if (!test) return [(i % n) + 1, turn];
  }

  return [0, 0];
}

console.log(solution(n, words));
