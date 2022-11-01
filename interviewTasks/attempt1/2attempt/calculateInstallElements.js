const calculInstallElements = (orderAmount) => {
  let num = orderAmount * 100;
  while (num % 4 !== 0) {
    num--;
  }
  return Array.from(Array(4).fill(num / 100 / 4));
};
console.log(calculInstallElements(100.08));
console.log(calculInstallElements(50.02));
