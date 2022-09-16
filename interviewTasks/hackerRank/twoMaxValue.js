let testArray = [1, 107, 5, 1, 7, 9, 121, 4, 0, 111, 1, 5, 1020142, 2]; // answer: 1020142,121
const twoMaxValue = (arr) => {
  let arrSortedIncr = [...arr.sort((a, b) => a - b)];
  let arrSortedDecr = [...arr.sort((a, b) => b - a)];
  // return {arrSortedIncr, arrSortedDecr,arrSortedDecr}
  return [arrSortedDecr[0], arrSortedDecr[1]];
};
//console.log(twoMaxValue(testArray));

//Second method
const twoMaxValue2 = (arr) => {
  let maxMax = arr[0];
  let maxNext = arr[0];
  let current;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    //console.log('\nI work with current el', current);
    //console.log({ maxMax, maxNext });
    if (current > maxMax) {
     // console.log('I see current is bigger than maxMax');
      maxNext = maxMax;
      //console.log('New maxNext is ', maxNext);
      maxMax = current;
      //console.log('New maxMax value is', maxMax);
    } else {
      //console.log('I see current is less or equal maxMax');
      //console.log('I compare current with maxNext');
      if (current > maxNext) {
       // console.log('I see current is bigger than maxNext');
        maxNext = current;
       // console.log('New maxNext is ', maxNext);
      } else {
      //  console.log('I do not change anything');
      }
    }
  }
};
twoMaxValue2(testArray);
