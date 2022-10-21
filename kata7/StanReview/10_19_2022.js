 let log = console.log();
 let obj ={}
  obj.name = 'name';
 obj.occupation = 'student';
 obj.introduce = function(){
  log(`Hello, I am ${this.name}`)
  log(`Hello, I am ${this.occupation}`)
 }
 
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

function Person(name,occupation){
  this.name = name;
  this.occupation = occupation;
}
