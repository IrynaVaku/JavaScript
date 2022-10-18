//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
function bonusTime(salary, bonus) {
  return bonus == false ? '\u00A3' + salary : '\u00A3' + salary * 10;
}
console.log(bonusTime(4500, true));
