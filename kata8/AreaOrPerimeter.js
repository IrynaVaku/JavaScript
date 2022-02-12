//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript 
// Area or Perimeter
const areaOrPerimeter = (l , w)=> { 
    if (l <=0 || w <=0) return "wrong"
    if (l===w){
    return l*w
} else {
    return (l+w)*2
}
  };
  console.log(areaOrPerimeter(-7,5));