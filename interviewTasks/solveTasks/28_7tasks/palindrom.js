let testStr = null;
const isPalindrome = (str) => {
  if (typeof str !== 'string') return false;
  let str1 = str.trim();
  if (str1 === '') return false;
  for (let i = 0; i < Math.floor(str1.length / 2); i++) {
    console.log(str1[i], str1[str1.length - 1 - i]);
    if (str1[i].toLowerCase() !== str1[str1.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};
let res = isPalindrome(testStr);
console.log(res);
