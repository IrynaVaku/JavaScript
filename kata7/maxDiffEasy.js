//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
function maxDiff(list) {
  return list.length ? Math.max(...list) - Math.min(...list) : 0;
}

///////////////////////////////////////////
function maxDiff1(list) {
  let max = Math.max(...list);
  let min = Math.min(...list);

  if (list.length <= 1) {
    return 0;
  }

  return max - min;
}
///////////////////////////////////////////
function maxDiff2(list) {
  return list.sort((a, b) => b - a)[0] - list.sort((a, b) => a - b)[0] || 0;
}
