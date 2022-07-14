const testStr =
  'Therefore, go and make disciplesag of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.';
const taskHash = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    //console.log(str[i]);
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  //console.log(obj);//////////////////////////MAX Value///////////////
  const max = { letter: null, value: 0 };
  const min = { letter: null, value: 0 };

  for (let key in obj) {

    if (obj[key] > max.value && key !== ' ') {
      max.value = obj[key];
      max.letter = key;
    }
    if(min.value === 0){
      min.value = obj[key];
      min.letter = key;
    }
    if (obj[key] > 0 && key !== ' ' && key !== '.') {
      min.value = obj[key];
      min.letter = key;
    }
  }
// console.log(max);
  console.log(min);

};
taskHash(testStr);

///////////////MIN Value//////////
