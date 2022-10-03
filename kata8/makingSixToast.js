function sixToast(num) {
  return num > 6 ? num - 6 : 6 - num;
}
console.log(sixToast(2));
///////////////////////////2 method/////////////
function sixToast2(num) {
  return Math.abs(num - 6);
}
