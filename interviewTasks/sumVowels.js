//First method

/*const sumVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  count = 0;
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i].toLowerCase();
    console.log(i)
    console.log('current letter',currentLetter )

    for (let j = 0; j < vowels.length; j++) {
      let currentVowel = vowels[j];
      if (currentLetter === currentVowel) count++;
    }
  }
  return count;
};
console.log(sumVowels('hahehoire'));

//Second method
const sumTheVowels = (str) => {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === 'a' ||
      str[i].toLowerCase() === 'e' ||
      str[i].toLowerCase() === 'i' ||
      str[i].toLowerCase() === 'u' ||
      str[i].toLowerCase() === 'o'
    )
      count++;
  }
  return count;
};
console.log(sumTheVowels('hahehoire'));*/

//Third method
console.log(
  'answer',
  'hahehoire'
    .split('')
    .filter(
      (e) =>
        e.toLowerCase() === 'a' ||
        e.toLowerCase() === 'e' ||
        e.toLowerCase() === 'i' ||
        e.toLowerCase() === 'o' ||
        e.toLowerCase() === 'u'
    ).length
);
