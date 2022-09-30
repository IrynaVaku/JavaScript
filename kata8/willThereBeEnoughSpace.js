//https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
function enough(cap, on, wait) {
  return on + wait >= cap ? on + wait - cap : 0;
}
console.log(enough(5, 7, 12));
