//https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript

const players = ['a', 'b', 'c', 'd'];
function duckDuckGoose(players, goose) {
  if (goose >= players.length) {
    return players[(goose - 1) % players.length].name;
  } else if (goose % 10 == 0) {
    return players[0].name;
  } else return players[goose - 1].name;
  // console.log(players[goose - 1]);
}
//console.log(duckDuckGoose(players, 1));

//////////////////////////////  2 method ////////////////
function duckDuckGoose1(players, goose) {
  return players[(goose - 1) % players.length];
}
console.log(duckDuckGoose1(players, 1));
