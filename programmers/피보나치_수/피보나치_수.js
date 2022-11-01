const n = 5;
function solution(n) {
  let box = [0, 1];

  for (let i = 2; i <= n; i++) {
    box.push((box[i - 1] + box[i - 2]) % 1234567);
  }

  return box[n];
}
console.log(solution(n));

// function solution(n) {
//   let box = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     box.push(box[i - 1] + box[i - 2]);
//   }

//   return box[n] % 1234567;
// }
