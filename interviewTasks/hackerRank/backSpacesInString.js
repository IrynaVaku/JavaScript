// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
function cleanString(s) {
  let result = []
  for(let i = 0; i < s.length; i++){
    if(s[i] !== '#'){
      result.push(s[i])
    } else {
      result.pop()
    }
  }
  return result.join('')
};
console.log(cleanString("awbc##d#l#hp"))