function betterThanAverage(classPoints, yourPoints) {
  let sum =0;
let classAverage=0
for(let i=0; i<classPoints.length; i++){
sum +=classPoints[i]
}
classAverage = sum/classPoints.length 
return yourPoints > classAverage
}
console.log(betterThanAverage(13,14));