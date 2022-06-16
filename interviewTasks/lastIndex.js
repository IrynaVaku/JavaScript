let testStr = 'My naaame is Irynaa';
let word1 = 'name';
let word2 = 'aa';

const findLastIndex = (s, f) => s.lastIndexOf(f);
const res1 = findLastIndex(testStr, word1);
const res2 = findLastIndex(testStr, word2);
//console.log(res1, res2);

const findLastIndexForLoop = (s, f) => {
  console.log(
    `Hi this is function. You want to test string "${s}". We will looking for a last word "${f}"`
  );
  let current;
  let counter = 0;
  for (i = s.length - 1; i >= 0; i--) {
    console.log(`\n new Interration.current i = ${i}`);
    current = s[i];
    console.log(`current letter is "${current}"`);
    console.log(`find letter  ${f[f.length - counter - 1]}`);
    if (current === f[f.length - counter - 1]) {
      console.log('found similarity');
      counter++;
      console.log('found counter of risen words in 1 and now it is', counter);
      console.log(`looking for a new letter ${f[f.length - counter - 1]}`);
      if (counter === f.length) {
        console.log(
          `found the desicion of task index equal ${i - counter + f.length}`
        );
        return i - counter + f.length;
      }
    } else {
      console.log('в середине слова ошибка/не соответствует слово');
      counter = 0;
    }
  }
  console.log('the desicion is not found, return -1');
  return -1;
};
let g = findLastIndexForLoop(testStr, word2);
console.log(g);
