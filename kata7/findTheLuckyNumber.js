//https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript
var filterLucky = (x) => {
  let newArr = [];
  x.map((el) => (String(el).includes(7) ? newArr.push(el) : ''));
  return newArr;
};
console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
