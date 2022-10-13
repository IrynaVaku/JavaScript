/*function lastFibDigit(num) {
  let result = [ 0, 1 ];
  for(let i=2; i<=num; i++){
  let prevNum1 = result[i-1];
  let prevNum2 = result[i-2];
   let lastNumOfSum = (prevNum1 + prevNum2)%10
  result.push(lastNumOfSum );
  }
return result[result.length-1]
}
 let result = lastFibDigit(21) 
 console.log(result);*/
/////////////////////////////////////////

function lastFibDigit(n) {
  n = n % 60;
  let fib1 = 1;
  let fib2 = 1;
  let next;
  for (let i = 2; i < n; i++) {
    //console.log({i});
    next = (fib1 + fib2) % 10;
    // console.log("Sum of fib1 and fib2",{next});
    fib1 = fib2;
    //console.log("fib1 was fib2 Resighted",{fib1});
    fib2 = next;
    //console.log("Resighted fib 2 (it was previous number)",{fib2});
  }
  //console.log(fib1, fib2, next);
  return fib2;
}
let result = lastFibDigit(25);
console.log(result);
