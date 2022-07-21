const arr = ['программа', 'макака', 'прекрасный', 'оладушек'];
arr.push('amazing')
const a = arr.join(', ').toUpperCase();
console.log(a);
const word = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  console.log(index);
  return arr[index];
};
console.log(word(arr));

//=============CONVERT ARR OF STRINGS TO ARR OF HUMBERS======
// map()
const arr1 = ['1', '2', '3'];
const nums = arr1.map(Number) 
  // using map() to convert array of strings to number
console.log(nums);
////=================Second method============
//  parseInt()
var stringArray = ["1", "2", "3", "4", "5"];
var numberArray = [];
for (var i = 0; i < stringArray.length; i++){
  numberArray.push(parseInt(stringArray[i]));
}
console.log(numberArray);