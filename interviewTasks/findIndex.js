let testStr = 'My name is Kamila'
let word1= 'name'
let word2 = 'aa'
/*findIndex = (string, find) =>{
  let index = string.indexOf(find)
  return index
  findIndex(testString, word1)
}
  const res = findIndex(testStr, word1)
console.log(res)*/
const findIndex = (s,f) => s.indexOf(f)
  const res1 = findIndex(testStr, word1)
  const res2 = findIndex(testStr, word2)
console.log(res1,res2)
  
const findIndexForLoop = (s, f) =>{
  console.log(`Hi this is function. You want to test string "${s}". We will looking for "${f}"`)
  let current
  let counter = 0
  for (i=0; i<s.length; i++){
    console.log(`\n new Interration.current i = ${i}`)
    current = s[i]
    console.log(`current letter is "${current}"`)
    if (current === f[counter]){
      console.log('found similarity')
  counter ++
console.log("found counter of risen words in 1 and now it is", counter)
if (counter === f.length){
  console.log("found the desicion of task")
  return i - counter + 1
    }
}else{
  console.log("в середине слова ошибка/не соответсвует слово");
      counter = 0;
    }
  }
  return -1;
};

let g = findIndexForLoop(testStr, word1)

console.log(g)
/*let b = []
for (i=0; i<str.length; i++){
  if i +=a
}*/
