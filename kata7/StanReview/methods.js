//let arr1 = new Array('tralala'); /////       let arr =[] equal let arr =[]new Array()
//arr1.length =0 // obnulenue array
//const array = [1, 2, 3];
//console.log(arr1);
//console.log(arr1[arr1.length-1]);  //////        arr1[arr1.length-1]  equal  arr1.at(-1)
//console.log(arr1.at(-1));
// pop() cut off from the end of array
// push() add to the  end of array
//arr1.push('str', 10, 5, 14, [1, 2, 5]); // can add a lot of elements
//console.log(arr1);
//arr1.pop()  ///// can cut only one element
//console.log(arr1[5].pop());
//console.log(arr1.length);
//console.log(arr1);

///////////shift(), unshift()//////////////

//////////////concat()/////////
/*let a = [1, 2, 5, 3];
let b = [1, 'str', 5, null];
let c = ['hg', 'lk', 5, [5, 7, , 'yu']];
let newArr = c.concat(a,b)
console.log(newArr);*/

////////////////reverse()/////////////
/*let arr = ['hg', 'lk', 5, [5, 7, null, 'yu']];
arr.reverse()
console.log(arr);*/

////////////////split(separator)/////////////
/*let str = 'Hello World !';
const arr = str.split('l'); // [ 'He', '', 'o Wor', 'd !' ]
const arr1 = str.split(' '); // [ 'Hello', 'World', '!' ]
const arr2 = str.split('o'); // [ 'Hell', ' W', 'rld !' ]
//console.log(arr2);
///////////////join(separator)//////////////
let newStr = arr.join('l') // Hello World !
console.log(newStr);*/

/////////////////slice([start], [end])///////////////////
/*let str = 'Hello World !';
const arr = str.split(''); 
console.log(arr);

//const newArr = arr.slice(-2) ////////  [ ' ', '!' ]
const newArr = arr.slice(2,5) ////////  [ [ 'l', 'l', 'o' ]]
console.log(newArr);*/

/////////////////////splice(index, deleteCount, el1, el2, ..., elN)//////////////////
/*let str = 'Hello World!';
arr.splice(1, 3, 'E', '$', '&'); ////////  [  'H', 'E', '$', '&', 'o', ' ', 'W', 'o','r', 'l', 'd', '!' ]
console.log(arr);
let arr1 = [2, 5, 8, 7];
arr1.splice(0, 2, 4, 5, 6);/////////////[ 4, 5, 6, 8, 7 ]
console.log(arr1);*/

/////////////////////////////  indexOf(),  lastIndex(), includes() ///////////////
/*const arr = 'Hello World!'.split('');
console.log(arr); //////////['H', 'e', 'l', 'l','o', ' ', 'W', 'o','r', 'l', 'd', '!']
let index = arr.indexOf('l',4) ///////// 9 ////////
//console.log(index);

let i = arr.lastIndexOf('l',5) //////////// 3 //////////
console.log(i);

const ar = 'Hello World!'.split('');
ar.push(NaN)
console.log(ar.includes(NaN)); //////////////// true /////////*/

/////////////find(), findIndex() /////////////// find(function(el, ind,arr) {...})
/*const ar1 = [2, 4, 5, 8, 3];
//num % 2 !=0
//console.log(ar1.find((x) => x % 2 != 0)); //////// 5  /////// only first odd element. If it is not return 'undefined'

const ar2 = [2, 4, 5, 8, 3];
//num % 2 !=0
//console.log(ar2.findIndex((x) => x % 2 === 0)); //////// 0  /////// only index of first even element. If it is not return '-1'

///////////  filter() //////////////
const ar3 = [2, 4, 5, 8, 3, 'str', null, true];
const ar3Odd = ar3.filter((x) => x % 2 != 0);
//console.log(ar3Odd) ///////////// [ 5, 3 ] ///////////////
const ar3Type = ar3.filter((el) => typeof el === 'number'); ///////////  [ 2, 4, 5, 8, 3 ]  //////////
//console.log(ar3Type);

//////////////// every(), some() ///////////////
const p = [1, 3, 5, 7, -2, 0, 5];
console.log(p.every((el) => el <= 0)); ///////////// false
console.log(p.some((el) => el <= 0)); */ //////////////////  true

/////////////////////forEach()
/*const arr = [-2, -4, -5, -8, -3, -9, -8];

//const changeSign = function (el) {
// console.log(-el);
//};
const changeSign = (el) => console.log(-el); // 2, 4, 5, 8, 3, 9, 8

//changeSign(arr[0]);

arr.forEach((el, i) => (i % 2 == 0 ? console.log(el ** 2) : console.log(' '))); // 4, 25, 9, 64

//arr.forEach(el=> console.log(el** 3));
//arr.forEach((el, i, newArr)=> i %2 != 0 ? console.log((el**2) + newArr.length) : console.log(' ')) // 23, 71, 88*/

/////////////////////////////    sort()   ///////////////////////////
//const ar = ['Ann', 'Str', 'Hull', 'Drue', 'Steve']; /////  [ 'Ann', 'Drue', 'Hull', 'Steve', 'Str' ]
//const arNum = [2, 4, -5, 18, 83, 89, 118]; /////////////// [-5, 118, 18, 2, 4,  83, 89]
//console.log(arNum.sort());
//console.log(arNum.sort((a, b) => a - b)); /////// [-5,  2,   4, 18, 83, 89, 118]

/////////////////  map() ///////////////////
//const ars = ['Java', 'JS', 'Python', 'SQL', 'English']; /////  [  ]
//console.log(ars.map(el => el.length)); /////// [ 4, 2, 6, 3, 7 ]
//console.log(
//ars.map((el, i, ars) => (i == 0 || i == ars.length - 1 ? `**${el}**` : el)); /////// [ '**Java**', 'JS', 'Python', 'SQL', '**English**' ]
/*const arNum = ['2', '4', '-5', '18', '83', '89', '118'];
const newAr = arNum.map(Number);
console.log(newAr);*/

////////////////////////// reduce()    reduceRight()    //////////////
/*const arrNum = [2, 4, -5, 1, 8, 9, 10]; /////  29

const res = arrNum.reduce((sum, el) => sum + el);
console.log(res);*/

////////////////////////          Array.from() //////////////////
const arr = Array.from('javaScript'); //////// ['j', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
//console.log(arr);
const arr1 = Array.from(Array(5).keys()); //////// [ 0, 1, 2, 3, 4 ]
//console.log(arr1);
let start = 10;
let finish = 15;
const arr2 = Array.from(
  Array(finish - start + 1).fill(start),
  (el, i) => el + i
); //////// [ 10, 11, 12, 13, 14, 15 ]
//console.log(arr2);
console.log([...Array.from(10)]);

//////////////////////////  Array.of()  ///////////////
