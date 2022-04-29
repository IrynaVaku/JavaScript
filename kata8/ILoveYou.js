//https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all
function howMuchILoveYou(nbPetals) {
  // your code
let arr = ["I love you", "a little", "a lot", "passionately", "madly","not at all"]
return arr[(nbPetals -1) % 6]
}
console.log(howMuchILoveYou(9));