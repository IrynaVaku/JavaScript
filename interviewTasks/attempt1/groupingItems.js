const testArray = [
  'notebook',
  'notebook',
  'mouse',
  'keyboard',
  'keyboard',
  'notebook',
  'printer',
];
const test = testArray.sort();

const groupingItems = (arr) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else hash[arr[i]]++;
  }
  console.log(hash);
};
res = groupingItems(test);
