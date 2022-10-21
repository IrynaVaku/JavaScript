let a = 10;
let b = 4;
function culc(a, b) {
  let c = a + b;
  return c;
}
///console.log(culc(3,7));
let x = culc(3, 7);

//console.log(x);
/////////////////////////////////////////
let cofeeCap = {
  name: '',
  water: '',
  cupSize: '',
};
//console.log(cofeeCap);
////////////////////////
let cofeeCap2 = {
  milk: '',
  _proto_: cofeeCap,
};
//console.log(cofeeCap2);
//cofeeCap2.name = 'Latte';
//console.log(cofeeCap2.name);
////////////////////////////////
let cofeeCap3 = {
  _proto_: cofeeCap2,
  makeCofee: function() {
 }
};
console.log(`Take a cup, put a cofee`);
//console.log(cofeeCap3);

cofeeCap3.name = 'Mocha';
console.log(cofeeCap3.name);
