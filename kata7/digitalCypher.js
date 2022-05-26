// https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript

const cypher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

function encode (str, n) {
  let strToArray = str.split('').map(letter => Number(cypher[letter]))
  let nToArray = String(n).split('').map(int => Number(int))

  let result = []

  let k = 0;
  for (let i=0; i<strToArray.length; i++) {
    if (k == nToArray.length) k = 0
    result.push(strToArray[i] + nToArray[k])
    k++
  }

  return result
}
console.log(encode("masterpiece",1939))
