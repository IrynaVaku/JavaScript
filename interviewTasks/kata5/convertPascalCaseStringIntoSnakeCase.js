//https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript
function toUnderscore(string) {
  let newStr =
    typeof string == 'number' ? '' + string : string[0].toLowerCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i] >= 'A' && string[i] <= 'Z') {
      newStr += '_' + string[i].toLowerCase();
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
