function duplicateEncode(word) {
  let str = '';
  let newWord = word.toLowerCase();
  for (let i = 0; i < newWord.length; i++) {
    if (newWord.indexOf(newWord[i]) == newWord.lastIndexOf(newWord[i])) {
      str += '(';
    } else str += ')';
  }
  return str;
}
