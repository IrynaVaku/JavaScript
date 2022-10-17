//https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

const reverseWords1 = (str) => str.split(' ').reverse().join(' '); //this is first method

// second method

const reverseWords = (str) => {
  let res = '';
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      word += str[i];
    } else {
      res = ' ' + word + res;
      word = '';
    }
  }
  res = word + res;
  return res;
};
