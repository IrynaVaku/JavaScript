/**const reverseStr = (str)=>{
  str= str.toLowerCase()
  let newStr = ""
  for(let i = str.length-1; i >= 0;  i--){
newStr +=str[i]
  }
  return newStr.charAt(0).toUpperCase()+newStr.slice(1)
}
console.log(reverseStr('Reverse'));
///////////////////////////*/

/*function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    console.log('Array before changing', arr);
    console.log(
      `\nNew itteration, new i = ${i}. Current left letter is ${
        arr[i]
      }. Current right letter is ${arr[arr.length - 1 - i]}`
    );
    let num = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = num;
    console.log('array after changin', arr);
  }
  let str = arr.join('');
  return str;
}
console.log(reverseArrayInPlace(['a', 'b', ' c', 'd']));
//////////////////////////////////////*/
const reverseStr = (string) => string.split('').reverse().join('');
console.log(reverseStr('Merry Poppins'));
