const testStr = 'barrab';
const palindrome = (str) => {
  for (let i = 0; i <= str.length / 2 - 1; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
let res = palindrome(testStr);
console.log(res);
