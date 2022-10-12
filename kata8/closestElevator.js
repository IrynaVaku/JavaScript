function elevator(left, right, call) {
  if (left > right && right >= call) {
    return 'right';
  } else if (left < right && call >= right) {
    return 'right';
  } else if (left > right && call >= left) {
    return 'left';
  } else if (left < right && call <= left) {
    return 'left';
  } else {
    return 'right';
  }
}
console.log(elevator(0, 1, 2));
///////////////////////////////////////////////////
function elevator1(left, right, call) {
  return Math.abs(left - call) < Math.abs(right - call) ? 'left' : 'right';
}
console.log(elevator1(0, 1, 0));
