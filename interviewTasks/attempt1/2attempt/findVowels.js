const testString = 'My name is Abracadabra. What do you do about that?';

const findVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === 'a' ||
      str[i].toLowerCase() === 'e' ||
      str[i].toLowerCase() === 'i' ||
      str[i].toLowerCase() === 'o' ||
      str[i].toLowerCase() === 'u'
    ) {
      count++;
    }
   }
    return count;
};
let res =findVowels(testString);
console.log(res);
