//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
let meet = {
  tim: 0,
  jim: 2,
  randy: 0,
  sandy: 7,
  andy: 0,
  katie: 5,
  laura: 1,
  saajid: 2,
  alex: 3,
  john: 2,
  mr: 0,
};

function outed(meet, boss) {
  let res = 0;
  let count = 0;

  for (let keys in meet) {
    count++;
    if (keys == boss) {
      res += meet[keys] * 2;
    } else {
      res += meet[keys];
    }
  }
  return res / count <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
////////////////////////////////////////
function outed(meet, boss) {
  meet[boss] *= 2;
  let avgRating =
    Object.values(meet).reduce((sum, el) => sum + el) /
    Object.values(meet).length;
  return avgRating <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
