const testStr = 'Abracad';
//const str = str.toLowerCase();
let newStr = '';
const stringReverse = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};
let res = stringReverse(testStr.toLowerCase());
console.log(res);
