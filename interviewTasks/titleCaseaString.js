const testStr = 'hello world !';

//method LOOP for capitalize first letter of each word

const capitalizeWords1 = (str) => {
  str =str.trim() 
  let newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr = newStr + str[i] + str[i + 1].toUpperCase();
      i++
      console.log('newStr', newStr);
    }else{
      newStr += str[i]
    }
  }
  return newStr
};
//console.log(capitalizeWords1(testStr));
/////////
const capitalizeWords2 = (str) => {

  let arr = str.trim().split(' ');
  let str1 = '';
  let letter = ''
  let arr2 = []
  console.log(arr);
  for (let el of arr) {
    console.log('before', el);
letter = el.charAt(0)
    str1= letter.toUpperCase()+ el.slice(1);
    console.log('after', str1);
    arr2.push(str1)
  }
  console.log('arr after', arr2);
  return arr2.join(' ')
};
console.log(capitalizeWords2(testStr));
