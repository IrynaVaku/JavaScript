//https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/javascript

let word = 'ceggodegge heggeregge';
function unscrambleEggs(word) {
  return word.replace(/egg/g, '');
}
console.log(unscrambleEggs(word));
