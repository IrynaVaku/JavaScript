testStr = 'Mamad';

const checkPotentialPalindrome = (str) => {
  if (str === ' ' || str === '') return false;
  if(typeof str !== 'string') return false;
  str = str.toLowerCase().trim();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  } //console.log(obj);
  let count = 0;
  for (let key in obj) {
    if (obj[key] % 2 !== 0) count++;
    if (count > 1) return false;
  }
  return true;
  //return count === 1 ? true : false;
};
let res = checkPotentialPalindrome(testStr);
console.log(res);
