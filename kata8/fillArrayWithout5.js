const arr = [];
let x = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 5 != 0) {
    arr[x] = i;
    x++;
  }
}
//console.log(arr);
////////////////////////////
/*const arr1 = [];
for (let i = 0; i <= 20; i++){
    if (i % 5 != 0){
      arr1.push(i);  
    } 
}
console.log (arr1)*/

function arr2(n) {
  let newArr=[];
  for(let i=0;i<n;i++){
    newArr.push(i)
//console.log(newArr);
  }
 return newArr
};
//arr2(n)
console.log(arr2(7));
