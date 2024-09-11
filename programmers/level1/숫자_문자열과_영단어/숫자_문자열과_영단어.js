const s = 'one4seveneightoneone';
function solution(s) {
  const numbox = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < numbox.length; i++) {
    let numbox2 = s.split(numbox[i]);
    s = numbox2.join(i);
  }

  return Number(s);
}
console.log(solution(s));

// 원래는 replace함수와 정규표현식을 통하여 해결하려고 하였음
// 그런데 replace함수에 /numbox[i]/gi 여기부분을 ${numbox[i]}와 같이 해보고 여러방법을 해보았지만
// 정규표현식이라서 반복문을 통한 해결이 안되어서

//   //   console.log(s.replace(/one/gi, 1));
//   //     s = s.replace(/one/gi, 1);
//   //     s = s.replace(/seven/gi, 7);
//   //     s = s.replace(/eight/gi, 8);
//   //     answer = Number(s);

//   다음과 같은 방식으로 풀어보려고 하였는데 이방법은 너무 이상한것 같아서 결론적으로는 다른사람의 풀이를 보게되었음

//   split을 통하여 0~9까지를 나눈 다음에 join을 통하여 나눈 부분을 숫자로 바꾸어서 해결했다는 점에서
//   대단하다고 생각한다
