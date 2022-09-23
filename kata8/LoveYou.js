/*const howMuchILoveYou =(nbPetals) =>{
  let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  if(nbPetals % 6 === 1) return phrases[0]
    if(nbPetals % 6 === 2) return phrases[1]
    if(nbPetals % 6 === 3) return phrases[2]
    if(nbPetals % 6 === 4) return phrases[3]
    if(nbPetals % 6 === 5) return phrases[4]
    if(nbPetals % 6 === 0) return phrases[5]
}
for(let i =1; i<50; i++){
  //console.log(i,howMuchILoveYou(i))
}
//console.log(howMuchILoveYou(i));
////////////////////////////
function howMuchILoveYou(nbPetals) {
  let phrase = {    
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals%6]
}
console.log(howMuchILoveYou(615));*/
////////////////////////////////////
const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
];

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}
console.log(howMuchILoveYou(4));
