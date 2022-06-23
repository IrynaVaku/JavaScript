const testWord1 = 'aaabbbh';
const testWord2 = 'abababh';

const anagram = (a, b) => {
  if (a.length !== b.length) return false;
  let currentLetter;
  let uniqeLetter = '';
  let counterFor1Word = 0;
  let counterFor2Word = 0;
  for (let i = 0; i < a.length; i++) {
    currentLetter = a[i];
    if (!uniqeLetter.includes(currentLetter)) {
      uniqeLetter += currentLetter;
    } else continue;
    for (let j = 0; j < b.length; j++) {
      if (a[j] === currentLetter) {
        counterFor1Word++;
      }
      if (b[j] === currentLetter) {
        counterFor2Word++;
      }
    }
    if (counterFor1Word !== counterFor2Word) return false;
  }
  return true;
};
//console.log(anagram(testWord1, testWord2));

// 2 method with hashTable
const anagram2 = (a, b) => {
  if (a.length !== b.length) return false;
  let objFor1Word = {};
  let objFor2Word = {};
  for (let i = 0; i < a.length; i++) {
    if (!objFor1Word[a[i]]) {
      objFor1Word[a[i]] = 1; // key
    } else {
      objFor1Word[a[i]]++; //value
    }
    if (!objFor2Word[b[i]]) {
      objFor2Word[b[i]] = 1;
    } else {
      objFor2Word[b[i]]++;
    }
  }
  for (let key in objFor1Word) {
    console.log('Checking', key);
    console.log('Value', objFor1Word[key]);
    if (objFor1Word[key] !== objFor2Word[key]) return false;
  }
  return true;
  console.log(objFor1Word, objFor2Word);
};
console.log(anagram2(testWord1, testWord2));
