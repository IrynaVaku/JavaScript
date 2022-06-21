// https://localcoding.us/challenge/62b09197e0f0e28f95ecddcd
/*const calculateHourlyWage = (h)=> {
if(h <= 4){
return h *50
} else if (h <= 8){
  return h *55
}
return h *60
}
const res = calculateHourlyWage(9)
console.log(res);*/
//Second method

let arr1 =[3,4,5,7,8,9]
/*const calculateHourlyWage = (h)=> {
  if(h >= 4){
  return h *50
  } else if (h >= 8){
    return h *55
  }
  return h *60
  }
  for(let i =0; i <= 24; i++){
  let count =calculateHourlyWage(i)
}console.log(`Employe worked ${i}a and his wage is ${count}`);
  //const res = calculateHourlyWage(9)*/
  
  // Third method
  let arr2 =[3,4,5,7,8,9];
  const calculateHourlyWage = (i)=> {
    if(i >= 4){
    return i *50
    } else if (i >= 8){
      return i *55
    }
    return i *60
    }
const test = arr2.map((el) =>calculateHourlyWage(el)) 
console.log(test)