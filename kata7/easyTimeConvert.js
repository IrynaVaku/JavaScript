//https://www.codewars.com/kata/5a084a098ba9146690000969/train/javascript
function timeConvert(num) {
  return num <= 0
    ? '00:00'
    : `${Math.trunc(num / 60)}`.padStart(2, '0') +
        ':' +
        `${num % 60}`.padStart(2, '0');
}
console.log(timeConvert(32));
////////////////////////////////

function timeConvert1(num) {
  if (num < 0) return '00:00';
  let h = Math.floor(num / 60);
  let m = num % 60;
  return (
    (h.toString().length < 2 ? '0' + h : '' + h) + ':' + ('00' + m).slice(-2)
  );
}
console.log(timeConvert1(84));
/////////////////////////////////////////////

function timeConvert2(num) {
  if (num <= 0) {
    return '00:00';
  }
  const min = Math.floor(num / 60);
  const sec = num % 60;
  const resultMin = min < 10 ? '0' + min : min;
  const resultSec = sec < 10 ? '0' + sec : sec;

  return `${resultMin}:${resultSec}`;
}
console.log(timeConvert2(47));
