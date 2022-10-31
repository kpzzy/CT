const new_id = 'abcdefghijklmn.p';

function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^\w-._]+/g, '');
  new_id = new_id.split('');

  for (let i = 0; i < new_id.length; i++) {
    if (new_id[i - 1] === '.' && new_id[i] === '.') {
      new_id.splice(i - 1, 1);
      i -= 1;
    }
  }
  if (new_id[0] === '.') new_id.shift();
  if (new_id[new_id.length - 1] === '.') new_id.pop();

  new_id = new_id.join('');
  if (new_id.length === 0) new_id = 'a';

  if (new_id.length > 15) new_id = new_id.slice(0, 15);

  while (true) {
    if (new_id[new_id.length - 1] !== '.') break;
    new_id = new_id.slice(0, new_id.length - 1);
  }

  if (new_id.length < 3) {
    while (true) {
      if (new_id.length === 3) break;
      new_id = new_id + new_id[new_id.length - 1];
    }
  }

  return new_id;
}

console.log(solution(new_id));
