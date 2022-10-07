//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
function maxDiff(list) {
  return list.length ? Math.max(...list) - Math.min(...list) : 0;
}

///////////////////////////////////////////
function maxDiff(list1) {
  let max = Math.max(...list1);
  let min = Math.min(...list1);

  if (list.length <= 1) {
    return 0;
  }

  return max - min;
}
