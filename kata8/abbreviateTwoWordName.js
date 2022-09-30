//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {
  let initials = name[0] + '.';
  for (let i = 0; i < name.length; i++) {
    if (name[i] == ' ') {
      initials += name[i + 1];
    }
  }
  return initials.toUpperCase();
}
console.log(abbrevName('Peter Wong'));
/////////////////////////////////////////////////////
function abbrevName2(name) {
  res = '';
  for (let i = 0; i < name.length; i++) {
    if (name[i] == ' ') {
      res = name[0] + '.' + name[i + 1];
    }
  }
  return res.toUpperCase();
}
console.log(abbrevName2('Patrick Feenan'));
