const testStr1 = 'fired';
const testStr2 = 'friled';

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const createHashTable = (word) => {
    const hash = {};
    for (let i = 0; i < word.length; i++) {
      if (!hash[word[i]]) {
        hash[word[i]] = 1;
      } else {
        hash[word[i]]++;
      }
    }
    return hash;
  };
  let res = createHashTable(testStr1, testStr2);
  //console.log(res);

  const hashForString1 = createHashTable(testStr1);
  const hashForString2 = createHashTable(testStr2);
  for (let key in hashForString1) {
    if (hashForString1[key] !== hashForString2[key]) {
      return false;
    }
  }
  return true;
};
let res = anagram(testStr1, testStr2);
console.log(res);
