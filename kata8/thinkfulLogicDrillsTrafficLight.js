//https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

function updateLight(current) {
  if (current === 'red') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'green';
  } else current === 'green';
  return 'red';
}
console.log(updateLight('red'));
///////////////////////
function updateLight(current) {
  return current === 'yellow'
    ? 'red'
    : current === 'green'
    ? 'yellow'
    : 'green';
}
