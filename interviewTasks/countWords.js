let word = 'isufghkjsabasdhglasababa238974';
function co(word) {
  let count = 0;
  let s = 'aba';
  for (let i = 0; i < word.length; i++) {
    if (word[i] + word[i + 1] + word[i + 2] === s) count++;
  }
  return count;
}
console.log(co(word));
