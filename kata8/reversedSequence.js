//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
// Reversed sequence
const { expect } = require('chai');
//module.exports = {require: '@babel/register’}
const reverseSeq = (n) => { 
  let arr=[]
  for (let i = n; i > 0; i--) {
    //console.log(i);
    arr.push(i)
  }
return arr
};
// console.log(reverseSeq(10));
describe('main test suite', () => {
  it('test 10', ()=>{
    let a = 10
    let res = reverseSeq(a)
    let expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
     expect(res).to.deep.eq(expected)
  })
  it('test 7', ()=>{
    let a = 7
    let res = reverseSeq(a)
    let expected =  [7, 6, 5, 4, 3, 2, 1]
     expect(res).to.deep.eq(expected)
  })
})
//npx mocha reversedSequence.js --reporter nyan