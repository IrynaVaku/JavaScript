// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
let s = 'bitcoin take over the world maybe who knows perhaps';
function findShort(s) {
  let arr = s.split(' ');
  //console.log(str);
  let min = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i].length) {
      min = arr[i].length;
    }
  }
  return min;
}
console.log(findShort(s));
