const arr=[5,12,4,10,45,71,96,8,3,9]
function sumArray(arr) {
  var sum = 0;
  var restSum;
  
  if(arr === null || arr.length === 1 || arr.length === 0) {
    return 0;
  } else {
      for(i=0; i<arr.length; i++) {
      sum += arr[i];
      restSum = sum - (Math.max(...arr) + Math.min(...arr));
    }
  }
  return restSum;
}
console.log(sumArray(arr));