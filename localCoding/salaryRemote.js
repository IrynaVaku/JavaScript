// https://localcoding.us/challenge/62b09197e0f0e28f95ecddcd
const calculateHourlyWage = (h)=> {
if(h <= 4){
return h *50
} else if (h <= 8){
  return h *55
}
return h *60
}
const res = calculateHourlyWage(9)
console.log(res);