//https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript
function repeats(arr) {
  let sum = 0;
  for (let i in arr) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) sum += arr[i];
  }
  return sum;
}
console.log(repeats([9, 10, 19, 13, 19, 13]));
/////////////////////////////////////////////////////////
function repeats1(arr) {
  return arr.reduce(
    (acc, el) => acc + (arr.indexOf(el) == arr.lastIndexOf(el) ? el : 0),
    0
  );
}
console.log(repeats1([9, 10, 19, 13, 19, 13]));
