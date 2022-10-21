//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
function array(arr) {
  let arr2 = arr.split(',');
  if (arr2.length <= 2) {
    return null;
  } else {
    return arr2.filter((el, i, arr) => i != 0 && i != arr.length - 1).join(' ');
  }
}
console.log(array('1,2,3'));
//////////////////////////////////////////////////////
function array1(arr) {
  let arr2 = arr.split(',');
  return arr2.length <= 2
    ? null
    : arr2.filter((el, i, a) => i !== 0 && i !== a.length - 1).join(',');
}
console.log(array1('1,2,3,5,7'));
