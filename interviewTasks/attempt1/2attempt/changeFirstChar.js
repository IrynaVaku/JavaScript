const testString = 'hello maria i like to see you';

const changeFirstChar = (str) => {
  //str = str.trim();
  let newStr = str[0].toUpperCase();
  //console.log(newStr);
  for (let i = 1; i < str.length; i++) {
    if (str[i] === ' ') {
      //console.log(newStr);
      newStr = newStr + ' ' + str[i + 1].toUpperCase();
      i++;
     // console.log('newStr', newStr);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
let res = changeFirstChar(testString);
console.log(res);
