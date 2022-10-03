//https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript
function chromosomeCheck(sperm) {
  return sperm == 'XX'
    ? "Congratulations! You're going to have a daughter."
    : "Congratulations! You're going to have a son.";
}
console.log(chromosomeCheck('XX'));
/////////////////////////////////////////////////
function chromosomeCheck1(sperm) {
  return (
    "Congratulations! You're going to have a " +
    (sperm == 'XX' ? 'daughter.' : 'son.')
  );
}
console.log(chromosomeCheck1('XY'));
