const testArr = [4, 5, 2, 7, 9, 8, 1, 0, -2, 11];
const target = 9;
const findAllPairs = (arr, value) => {
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
        resArr.push([arr[j], arr[i]]);
      }
      //console.log(resArr);
    }
  }
  return resArr;
};
res = findAllPairs(testArr, target);
console.log(res);
