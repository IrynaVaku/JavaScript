//const obj = { apple: 12, plum: 13, grape: 15, orange: 8 };

//////////////////  key in obj ///////////////
//for (let key in obj) {
// if (key == 'plum') {
//   console.log(` ${key} -$${obj[key]}`);
//  }
//}

//console.log(Array.fromArray(10));
//console.log('c' in obj);
//console.log(obj.b);

//let newObj = { 'a i': 'a', b: 123, c: true, d: { 1: 2, 6: 4 } };
//newObj = obj;
//console.log(newObj);
//obj.e = 'Test'

//const testObj = {};
//Object.assign(testObj, obj, newObj);

//console.log(testObj);
//console.log(obj == testObj);

//console.log(newObj["a i"]);
//console.log(obj.e);
//console.log(newObj == obj);

/*const firstName = 'Anna';
const lesson = 'JavaScript';

const obj = {
  firstName: firstName,
  lesson: lesson,
};
console.log(obj);*/

/*Object.keys()
Object.values()
Object.entries()*/

/*const subjects = { js: 'JavaScript', j: 'Java', sql: 'SQL', e: 'English' };

const subjects1 = { 1: 'JavaScript', 14: 'Java', 2: 'SQL', 100: 'English' };

//console.log(Object.keys(subjects));
//console.log(Object.values(subjects).sort());
//console.log(Object.keys(subjects).sort());
console.log(Object.keys(subjects1).sort((a, b) => a - b));

console.log(Object.entries(subjects));*/

/*const fruits = { apple: 12, plum: 13, grape: 15, orange: 8 };
console.log(fruits);

const arr = Object.entries(fruits);
console.log(arr);

const newArr = arr.map(([key, value]) => [key, + (value * 1.2).toFixed(2)]);
console.log(newArr);

const finalFruits = Object.fromEntries(newArr)
console.log(finalFruits);*/

const str = 'hello World!';

const obj = {};
for (let letter of str) {
  if (letter in obj) {
    obj[letter]++;
  } else {
    obj[letter] = 1;
  }
}
console.log(obj
  );
