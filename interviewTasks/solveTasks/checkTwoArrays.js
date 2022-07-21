const gerry = (argument1, argument2) => {
  // console.log("Первый аргумент: " + argument1);
  // console.log("Второй аргумент: " + argument2);
};
gerry(2, 5);
//////===============
const double = (number) => {
  return number * 2;
};
//console.log(double(3))
////////================
var randomWords = ['Планета', 'Червяк', 'Цветок', 'Компьютер'];
var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
//console.log(pickRandomWord(randomWords))
///===================

let arr1 = [5, 6, 7, 4];
let arr2 = [5, 6, 7, 4];
const areArraysSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false;
    }
  }
  return true;
};
let res = areArraysSame(arr1, arr2);
console.log(res);
///////==============

