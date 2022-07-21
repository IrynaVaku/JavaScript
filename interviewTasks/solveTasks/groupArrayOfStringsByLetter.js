const arr = ['Alf', 'Alice', 'Ben'];

const myFunction = (arr) => {
  const hash = {};
  for (let key of arr) {
    console.log(key);
    if (hash[key[0].toLowerCase()]) {
      hash[key[0].toLowerCase()].push(key);
    } else {
      hash[key[0].toLowerCase()] = [key];
    }
  }
  return hash;
};
let res = myFunction(arr);
console.log(res);
