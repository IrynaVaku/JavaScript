/*for (let i = 0; i <= 5; i++) {
  let str1 = '';
  for (let j = 0; j <= i; j++) {
    str1 += '*';
  }
 // console.log(str1);
}*/
/////////////////////
let hight = 5;
for (let i = 0; i <= hight; i++) {
  let str = '';
  for (let j = 0; j < hight - i; j++) {
    str += ' ';
  }
  for (let k = 0; k < i; k++) {
    str += '*';
  }
  str += '*';
  for (let s = 0; s < i; s++) {
    str += '*';
  }
  console.log(str);
}
