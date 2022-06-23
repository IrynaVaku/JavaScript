/*Write a short program that prints each number from 1 to 100 on a new line. 
For each multiple of 3, print "Fizz" instead of the number. 
For each multiple of 5, print "Buzz" instead of the number. 
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.*/

const fizzBuzz =() =>{
let count 
  for(let i =1; i <=100; i++){
    if (i % 3 ===0)return 'Fizz' 
else if(i % 5 ===0)return'Bizz'
else if (i % 15 ===0 && i % 3 ===0)return'Fizzbizz'
else return 'i'
}
}
console.log(fizzBuzz(7))

//Second
/*const fizzBuzz1 = () => {
  let ans = '';
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      ans += 'Fizz1';
    }
    if (i % 5 === 0) {
      ans += 'Buzz1';
    }
    console.log(ans ? ans : i);
    ans = '';
  }
};*/
