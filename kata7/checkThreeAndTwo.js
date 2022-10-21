//https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript
function checkThreeAndTwo(arr) {
  let cA = arr.reduce((acc, el) => (el == 'a' ? acc + 1 : acc), 0);
  let cB = arr.reduce((acc, el) => (el == 'b' ? acc + 1 : acc), 0);
  let cC = arr.reduce((acc, el) => (el == 'c' ? acc + 1 : acc), 0);
  let res3 = cA == 3 || cB == 3 || cC == 3;
  let res2 = cA == 2 || cB == 2 || cC == 2;
  return res2 && res3;
}
console.log(checkThreeAndTwo(['a', 'c', 'a', 'c', 'b']));
////////////////////////////////////////////////////////////
function checkThreeAndTwo1(arr) {
  let a = arr.join().split('a').length - 1;
  let b = arr.join().split('b').length - 1;
  let c = arr.join().split('c').length - 1;
  console.log(b);
  return ((a > 3 || a < 2) && (a != 0 || b > 3 || b < 2) && b != 0) ||
    ((c > 3 || c < 2) && c != 0)
    ? false
    : true;
}
console.log(checkThreeAndTwo1(['a', 'a', 'a', 'a', 'a']));
