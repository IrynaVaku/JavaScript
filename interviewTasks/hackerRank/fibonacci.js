//0,1,1,2,3,5,8,13,21,...
//write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as an argument to the function.
const fibonacci = (num) => {
if(num <=2) return 1

return fibonacci(num-1) + fibonacci(num - 2)
};
//let answer = fibonacci(50)
//console.log(answer);//2

//Second method
function fibonacci2(num) {
  let result = [ 0, 1 ];
  for(let i=2; i<=num; i++){
  let prevNum1 = result[i-1];
  let prevNum2 = result[i-2];
  result.push( prevNum1 + prevNum2);
  }
return result[num];
}
let result = fibonacci2(50)
console.log(result);

//Third method
const fibonacci3 = (num, memo = {}) => {
  if(num in memo) return memo[num]
  if(num <=2) return 1
  memo[num] = fibonacci3(num-1, memo) + fibonacci3(num - 2, memo)
return memo[num]
  };
  let result2 = fibonacci3(75)
  console.log(result2);