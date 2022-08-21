const testStr = 'Hello World';
let changeFrom = 'l';
let changeTo = 'x';

const replaceChar = (str, a, b) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === a) {
      res = res + b; //  res += b
    } else {
      res += str[i];
    }
  }
  return res;
};
let answ = replaceChar(testStr, changeFrom, changeTo);
console.log(answ);
