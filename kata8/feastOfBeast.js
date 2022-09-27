function feast(beast, dish) {
  if (dish[0] === beast[0] && dish[dish.length - 1] === beast[beast.length - 1])
    return true;
  return false;
}
////////////////////////////
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}