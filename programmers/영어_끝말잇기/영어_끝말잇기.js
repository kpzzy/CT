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
];

function solution(n, words) {
  let answer = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i][words[i].length - 1] === words[i + 1][1]) {
      console.log(words[0][words[0].length - 1], words[1][0]);
    }
  }

  return answer;
}

console.log(solution(n, words));
