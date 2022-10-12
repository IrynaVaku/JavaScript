//https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
function calculateAge(x, y) {
  let result;
  if (x + 1 == y) {
    result = `You are ${y - x} year old.`;
  } else if (x < y) {
    result = `You are ${y - x} years old.`;
  } else if (x == y + 1) {
    result = `You will be born in ${x - y} year.`;
  } else if (x > y) {
    result = `You will be born in ${x - y} years.`;
  } else {
    result = 'You were born this very year!';
  }
  return result;
}
console.log(calculateAge(2012, 2016));
