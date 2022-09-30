/////////////Function declaration//////////////
console.log('1');
console.log('2');
console.log('3');
print();

function print() {
  console.log('Hello World!'); ///1,2, 3, Hello World!
}
/////////////Function expression//////////////
const print1 = function () {
  // console.log('Hello World!');
};
print1();
///////////////////
function checkEven(num) {
  //console.log(num % 2 ? false : true); ///1,2, 3, Hello World!
  //console.log(); ///1,2, 3, Hello World!
  //return num % 2 == 0 ? true : false
  return num % 2 == 0 ? 'even' : 'odd';
}
let arr = [2, 4, 5, 6, 8, 7, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(`${arr[i]} - ${checkEven(arr[i])}`);
  //checkEven(arr[i]);
}
