let arr = [88, 34, 15, 2];
const SmallestIntegerFinder = (arr) => {
  let minEl = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minEl) {
      minEl = arr[i];
    }
  }
  return minEl;
};
console.log(SmallestIntegerFinder(arr));
