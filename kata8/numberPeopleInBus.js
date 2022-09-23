let busStops = [
  [10, 0],
  [3, 5],
  [5, 8],
];
var number = function (busStops) {
  let res1 = 0;
  let res2 = 0;
  for (let i = 0; i < busStops.length; i++) {
    res1 += busStops[i][0];
    res2 += busStops[i][1];
  }
  return res1 - res2;
};
console.log(number(busStops));

/*let number = function (busStops) {
  let peopleIn = 0;
  let peopleOut = 0;
  for (let i = 0; i < busStops.length; i++) {
    peopleIn += busStops[i][0];
    peopleOut += busStops[i][1];
  }
  return peopleIn - peopleOut;
};*/
