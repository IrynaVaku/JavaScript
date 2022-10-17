//https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
let array = [15, 7, 3, -8];
function isSortedAndHow(array) {
  if (ascending(array)) {
    return 'yes, ascending';
  } else if (descending(array)) {
    return 'yes, descending';
  } else {
    return 'no';
  }

  function ascending(array) {
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let previous = array[i - 1];
      if (current < previous) {
        return false;
      }
    }
    return true;
  }

  function descending(array) {
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let previous = array[i - 1];
      if (current > previous) {
        return false;
      }
    }
    return true;
  }
}
console.log(isSortedAndHow(array));
////////////////////////////
function isSortedAndHow1(array) {
  let descend = true;
  let ascend = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      descend = false;
    }
    if (array[i] > array[i + 1]) {
      ascend = false;
    }
  }
  return descend ? 'yes, descending' : ascend ? 'yes, ascending' : 'no';
}
console.log(isSortedAndHow1(array));
