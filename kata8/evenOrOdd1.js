const testData =[6, 54, 78, 3, 10, 2, 101, 985, 62, 0] 
testArr = (n) =>{
  let odd = 0
  let even = 0
  for(let i=0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
    odd= odd + n[i]
  }else {
even = even + n[i]
  }
}
return [odd, even]
}
const result = testArr(testData);
console.log(result)