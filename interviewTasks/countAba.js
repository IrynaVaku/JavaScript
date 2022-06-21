function countAba(str, f) {
  let countLetters = 0; //для подсчета количества букв искомого слова
  let countWords = 0; //для подчета количества совпадений искомого слова
  let current; //для сохранения буквы
  for (i = 0; i < str.length; i++) {
    current = str[i]; // current letter in the word
    console.log('\n Current letter of line', current);
    console.log(
      `\n Compare letter of line '${current}' with letter we are looking for from word '${f[countLetters]}'`
    );

    if (current === f[countLetters]) {
      console.log('Current letter in the line equal letter from word');
      countLetters++;
      console.log('Change countLetters, his new meaning', countLetters);
      if (countLetters === f.length) {
        countWords++;
        console.log('Search word was found');
        console.log('Fully amount words in the string are', countWords);
        countLetters = 0;
      }
    } else {
      countLetters = 0;
      console.log('Current letter in the line is not equal letter from word');
    }
  }
  return countWords;
}
console.log(countAba('hjh4343abaicoeru4abciu343abc', 'abc'));
