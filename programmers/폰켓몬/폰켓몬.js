const nums = [1, 2, 3, 4, 5, 6];
function solution(nums) {
  var answer = 0;
  let chance = nums.length / 2;
  let type = nums.filter(
    (value, index) => nums.indexOf(value) === index
  ).length;

  if (type > chance) {
    answer = chance;
  }
  if (type < chance) {
    answer = type;
  }
  if (type === chance) {
    answer = chance;
  }
  return answer;
}

console.log(solution(nums));
