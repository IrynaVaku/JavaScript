// #1 Palindrome
//definition:- Palindrome is a word, sentence or character sequence which reads the same as we reverse it.
// Like- “mam”, “racecar” etc.

const testWord = 'kayak';

const palindrome = (word) => {
  for (let i = 0; i < Math.floor(word.length) / 2; i++) {
    //to divide the word for easy check
    //console.log('check i', i);
    //console.log('check letter', word[i]);
    //if(word[0] !== word[word.length-1-i]){ // compare first and last letters
    //if(word[1] !== word[word.length-1-i]){ // compare second and prelast letters
    // if(word[2] !== word[word.length-1-i]){ // compare third and 2 letters left
    // [i] amount iteration
    if (word[i] !== word[word.length - 1 - i]) {
      console.log('there are not equal');
      return false;
    }
  }
  return true;
};
res = palindrome(testWord);
//console.log(res)

/////////////////////2 Method/////////////////
const palindrome1 = (str) => str.split('').reverse().join('');
//console.log(palindrome1(testWord));

let greetings = ['hel','lo', 'WOr','ld!']; ////// REVERSE works only with array!!!!!!!!
console.log(greetings.reverse());

////////////////////3 Method/////HASH TABLE/////////////
const testStr2 = 'Madam'
const palindrome2 = (str) =>{
  str = str.toLowerCase()
  let obj ={}
  for(let i = 0; i < str.length; i++) {
    console.log('Iterration', str[i]);
if(!obj[str[i]]){
  obj[str[i]]=1
}
else{
  obj[str[i]]++
}}
return
} 
res = palindrome2(testStr2)
console.log(res);