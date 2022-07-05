//https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
/*let arr1 = [1,3,5,7,9]
let arr2 = [10,8,6,4,2]
function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2); // merge array
  let sortedArr3 = arr3.sort((a, b) => a - b); // sort arr
  return [...new Set(sortedArr3)]; // return with no duplicates
}
console.log(mergeArrays(arr1, arr2));*/
////////////////// Second method/////////////
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [10, 8, 6, 4, 2];
const mergeArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr2.splice(j, 1); // splice удаляет или добавляет элементы в массив
      } //удалим 1(один) j элемент
    }
  }
  let res = arr1.concat(arr2);
  return res.sort((a, b) => a - b);
};
console.log(mergeArrays(arr1, arr2));
//массив.splice(откуда удаляем, сколько элементов удаляем, [вставить элемент])
