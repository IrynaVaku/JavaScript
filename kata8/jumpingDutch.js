//https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript
function sc(floor) {
  let res = '';

  for (let i = 1; i < floor; i++) {
    res = res + 'Aa~ ';
  }
  if (floor <= 6 && floor > 1) {
    res = res + 'Pa! Aa!';
  } else if (floor > 6) {
    res = res + 'Pa!';
  }
  return res;
}
