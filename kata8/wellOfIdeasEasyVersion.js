//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript 
//Well of Ideas - Easy Version
let testData = ['bad', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad'];

const well = x =>{
    let current 
    let count = 0
    for(let i =0; i < testData.length; i++){
        
console.log(`\nitteration. i=${i}`);
current =x[i] 
console.log(`current=${current}`);

if (current ==="good") {
    console.log("current = good");
    count++
    console.log(`count = ${count}`);
}
    }
if (count == 1 || count ==2)return 'Publish!'
if (count >= 2)return 'I smell a series!'
return 'Fail!'

}
const result = well(testData)
console.log(result);
