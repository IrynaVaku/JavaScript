// https://www.codewars.com/kata/5e96332d18ac870032eb735f/train/javascript

const womensAge=(n)=> {
  if (n % 2 ===0){
    return `${n}? That's just 20, in base ${n/2}!`
      }
  return `${n}? That's just 21, in base ${Math.floor(n/2)}!`
}

console.log(womensAge(57))
