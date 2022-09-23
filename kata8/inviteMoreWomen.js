//https://www.codewars.com/kata/58acfe4ae0201e1708000075
let l = [-1,-1,-1]
const inviteMoreWomen=(l)=> {
  let men =0;
  let women =0;
  for(i =0; i <=l.length; i++){
    if(l[i] === -1){
    women ++
  }else{
    men ++
  }
 return women > men ?  true : false
}
}
console.log(inviteMoreWomen(l));