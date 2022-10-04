//https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
function position(letter) {
  let str = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i++) {
    if (letter == str[i]) {
      return 'Position of alphabet: ' + (i + 1);
    }
  }
}
