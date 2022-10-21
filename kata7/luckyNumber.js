//https://www.codewars.com/kata/55afed09237df73343000042/train/javascript
function isLucky(n) {
  let a = n.toString();
  let count = 0;
  for (i = 0; i < a.length; i++) {
    count += a[i];
  }
  return count % 9 == 0;
}
console.log(isLucky(125789));
