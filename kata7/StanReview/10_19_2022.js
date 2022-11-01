let log = console.log();
let obj = {};
obj.name = 'name';
obj.occupation = 'student';
obj.introduce = function () {
  log(`Hello, I am ${this.name}`);
  log(`Hello, I am ${this.occupation}`);
};

/*obj.introduce()
 let o = {
  name :'Anna',
  occupation :'student',
  introduce(){ 
  log(`Hello, I am ${this.name}`),
  log(`Hello, I am ${this.occupation}`),
 }
}
o.introduce()*/

function Person(name, occupation) {
  this.name = name;
  this.occupation = occupation;
}
///////////////////////////////////////////////////

let s = 'abamadhsgfjsadbgfgsjfgjasd';
let target = 'adb';
const arr = [];
let idx = s.indexOf(target[0]);
//console.log(idx);
while (idx != -1) {
  let idx2 = s.indexOf(target[1], idx + 1);

  while (idx2 != -1) {
    let idx3 = s.indexOf(target[2], idx2 + 1);

    if (idx3 != -1) {
      arr.push(s.substring(idx, idx3 + 1));
    }
    break;
  }
  idx = s.indexOf(target[0], idx + 1);
}
console.log(arr.sort((a, b) => a.length - b.length)[0]);
console.log(arr);
console.log(arr.map((el) => el.length).sort((a, b) => a - b));
///////////////////////////////////////////////////////////////////////////////
