const testStr1 = 'fried';
const testStr2 = 'firped';

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const createHashTable = (word) => {
    let hash = {};
    for (i = 0; i < word.length; i++) {
      //console.log(hash);
      if (!hash[word[i]]) {
        hash[word[i]] = 1;
      } else {
        hash[word[i]]++;
      }
    }
    return hash;
  };
  const hashForString1 = createHashTable(str1);
  const hashForString2 = createHashTable(str2);
  //console.log(hashForString1, hashForString2);
  for (let key in hashForString1) {
    if (hashForString1[key] !== hashForString2[key]) {
      return false;
    }
  }
  return true;
};
let res = anagram(testStr1, testStr2);
console.log(res);
