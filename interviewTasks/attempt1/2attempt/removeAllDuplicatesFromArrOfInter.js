const testArr = [1, 5, 7, 12, 5, 10, 7, 12, -4, 25];

const removeDubl = (arr) => {
  let hash = {};
  let newArr = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }
  //console.log(hash)
  for (let key in hash) {
    if (hash[key] === 1) {
      newArr.push(+key);
    }
  }
  return newArr;
};
console.log(removeDubl(testArr));
