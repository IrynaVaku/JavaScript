const perfectRoots = (n) => {
  if (
    Math.sqrt(n) % 1 === 0 &&
    Math.sqrt(n, 4) % 1 === 0 &&
    Math.sqrt(n, 8) % 1 === 0
  ) {
    return true;
  }
  return false;
};
console.log(perfectRoots(15129));
//////////////////////
const perfectRoots1 = (n) => {
  if (n ** 0.5 % 1 === 0 && n ** 0.25 % 1 === 0 && n ** 0.125 % 1 === 0) {
    return true;
  }
  return false;
};
