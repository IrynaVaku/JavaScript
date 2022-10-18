//https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
let results = { Java: 10, Ruby: 80, Python: 65 };
const myLanguages = (results) => {
  let arr = [];
  for (let key in results)
    if (results[key] >= 60) {
      arr.push(key);
    }
  return arr.sort((a, b) => results[b] - results[a]);
};
console.log(myLanguages(results));
///////////////////////////////////////
function myLanguages1(results) {
  return Object.keys(results)
    .filter((v) => results[v] >= 60)
    .sort((a, b) => results[b] - results[a]);
}
