//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript 
//Remove First and Last Character
//const removeChar = str => str.slice(1,-1);
//console.log(removeChar("string"));
function removeChar(str){ 
    let arr = str.split('');
    arr.pop();
    arr.shift();
    return arr.join('')
}
