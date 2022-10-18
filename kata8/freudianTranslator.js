//https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript
let s = "You're becoming a true freudian expert";
function toFreud(s) {
  return s.replace(/\w+/g, 'sex');
}
console.log(toFreud(s));
///////////////////////////////////////////
function toFreud1(s) {
return !s ? "" : s.replace(/\S+/g, "sex")
};
console.log(toFreud1(s));
/////////////////////////////////////////
function toFreud2(s) {
  if(s === ""){
    return s;
  }
  s = s.split(' ');
  for(var i = 0; i < s.length; i++){
    s[i] = 'sex';
  }
  s = s.join(' ');
  return s;
}
console.log(toFreud2(s));
