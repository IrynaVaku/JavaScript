//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
console.log(createPhoneNumber(numbers));
///////////////////////////////////////////////
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber1(arr) {
  let mask = '(xxx) xxx-xxxx';

  arr.forEach((item) => {
    mask = mask.replace('x', item);
  });

  return mask;
}
console.log(createPhoneNumber1(arr));
////////////////////////////////////////////
function createPhoneNumber2(numbers) {
  let checkPhone = /^\(\d{3}\)\s{1}\d{3}\-{1}\d{4}/;
  let phoneString;
  let len = numbers.length;

  let first = '(';
  let second = '';
  let third = '';

  for (let f = 0; f < 3; f++) {
    first += numbers[f];
  }

  first += ') ';

  for (let s = 3; s < 6; s++) {
    second += numbers[s];
  }

  second += '-';

  for (let t = 6; t < 10; t++) {
    third += numbers[t];
  }

  phoneString = first + second + third;

  if (checkPhone.test(phoneString)) {
    return phoneString;
  }
}
console.log(createPhoneNumber2(numbers));
///////////////////////////////////////////////////////////
function createPhoneNumber3(numbers) {
  return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}
console.log(createPhoneNumber3(numbers));
