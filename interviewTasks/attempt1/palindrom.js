const strTest = 'kayak';

const isPalindrom = (str) => {
  for (let i = 0; i <= str.length / 2 - 1; i++) {
    //console.log(str[str.length - 1 - i]);
    if (str[i] !== str[str.length - 1 - i]) {
    return false
  }
  }
  return true
};
res =isPalindrom(strTest);
console.log(res);