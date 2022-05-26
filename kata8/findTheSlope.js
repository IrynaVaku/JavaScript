//https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
function slope(points){
 let a = points[0];
  let b =points[1];
  let c =points[2];
  let d =points[3];
  let m = (d-b)/(c-a);
  if ((c-a)===0) return 'undefined'
  return m.toString();
}
console.log(slope([5,7,9,15]))