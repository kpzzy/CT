const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
const k = 2;

function solution(id_list, report, k) {
  let lists = {};
  let count = 0;
  const set = new Set(report);
  const uniqueReport = [...set];

  //   console.log(uniqueReport);

  //   const uReportIn = uniqueReport[0].split(' ');
  //   console.log(uReportIn);

  id_list.map((names) => {
    lists[names] = [[], count];
  });

  //   console.log(lists);

  for (let i = 0; i < uniqueReport.length; i++) {
    const uReportIn = uniqueReport[i].split(' ');
    lists[uReportIn[0]][0].push(uReportIn[1]);
    lists[uReportIn[1]][1]++;
    // console.log(uReportIn[0], 'test', uReportIn[1]);
  }
  //   console.log(lists);

  let kill = id_list.filter((id) => lists[id][1] >= k);
  //   console.log(kill);
  const test = id_list.map((id) => {
    return lists[id][0].filter((list) => kill.includes(list)).length;
  });
  //   console.log(test);
  return test;
}
answer = [2, 1, 1, 0];
console.log(solution(id_list, report, k));
