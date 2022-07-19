const arr = ['программа', 'макака', 'прекрасный', 'оладушек'];
//arr.push('amazing')
const a = arr.join(', ').toUpperCase();
console.log(a);
const word = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  console.log(index);
  return arr[index];
};
console.log(word(arr));
