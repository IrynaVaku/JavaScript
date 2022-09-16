const testStr = 'Hello';

const replaceLetter = (str) => {
  let newStr = '';
  for (letter of str) {
    //console.log(letter);
    if (letter === 'l') {
      newStr += 'X';
    } else {
      newStr += letter;
    }
  }
  return newStr;
};
res = replaceLetter(testStr);
console.log(res);
