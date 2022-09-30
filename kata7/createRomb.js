let res = '';
let space = 10;

for (let i = 1; i < 10; i++) {
  let cont = '';

  for (let k = space; k > 1; k--) {
    cont += ' ';
  }
  for (let j = 1; j <= i; j++) {
    cont += j;
  }
  for (let l = i; l > 1; l--) {
    cont += l - 1;
  }
  space--;
  console.log(cont);
}

let full = '';
for (let m = 1; m < 10; m++) {
  full += m;
}
full += 0;

for (let mm = 9; mm >= 1; mm--) {
  full += mm;
}
console.log(full);

let space2 = 1;

for (let i = 9; i > 0; i--) {
  let count = '';

  for (let k = space2; k >= 1; k--) {
    count += ' ';
  }
  for (let j = 1; j <= i; j++) {
    count += j;
  }
  for (let l = i; l > 1; l--) {
    count += l - 1;
  }
  space2
  ++;
  console.log(count);
}
