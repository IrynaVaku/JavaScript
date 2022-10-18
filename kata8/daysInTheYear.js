//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript

function yearDays(year) {
  return (!(year % 100) && year % 400) || year % 4
    ? `${year} has 365 days`
    : `${year} has 366 days`;
}
console.log(yearDays(1300));
