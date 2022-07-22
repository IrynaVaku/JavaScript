const strTest = 'MaDam';
const palindrome = (str) => {
  for (let i = 0; i <= str.length / 2 - 1; i++) {
    let letter = str[i].toLowerCase();
    let m = str[str.length - 1 - i].toLowerCase();
    //console.log(m);
    if (letter !== m) return false;
  }
  return true;
};
let res = palindrome(strTest);
console.log(res);
