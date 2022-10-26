const s = '110010101001';

function solution(s) {
  let d0 = 0;
  let count = 0;

  while (s !== '1') {
    const s_len = s.length;

    s = s.replace(/0/gi, '');

    const s_d0 = s.length;
    d0 += s_len - s_d0;

    s = s_d0.toString(2);
    count++;
  }

  let answer = [count, d0];

  return answer;
}

console.log(solution(s));

// 10진법을 2진법으로 바꿀때는 .toString(2) 를 통하여 할 수 있음!
