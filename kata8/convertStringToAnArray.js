const stringToArray = (str) => {
  return str.split('-');
};
console.log(stringToArray('str-Robin'));
//////////////////2method///////////////
let string = 'split, by, dash';
const stringByArr = (string) => {
  return string.split(',');
};
console.log(stringByArr(string));
/////////////////////////3 method////////////////
const stringToArray2 = (str) => {
  return str.split(' ');
};
console.log(stringToArray2('Robin Down'));
