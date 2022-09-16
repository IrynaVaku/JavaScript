var countSheep = function (num) {
  let stringSheep = '';
  for (let i = 1; i <= num; i++) {
    stringSheep += `${i} sheep...`;
  }
  return stringSheep;
};
console.log(countSheep(5));
