function numberToPower(number, power) {
  var total = 1;
  for (var i = 1; i <= power; i++) {
    total = total * number;
  }
  return total;
}
console.log(numberToPower(0, 3));
