const test = ['Berlin', 'Paris', 'Prague'];
const solver = (arr) => {
  hash = {};
  for (city of arr) {
    console.log(`\ncurrent city is ${city}`);
    let key = city[0].toLowerCase();
    console.log(`   First letter of the current city is ${key}`);
    console.log(`   at the moment hash is `, hash);
    console.log(`   I need to check if "${key}" key exists in hash`);
    if (!hash[key]) {
      console.log(
        `   This key = "${key}" does not exist in hash - I need to create a new key ${key} with an array that consists of only 1 city ${city}`
      );
      hash[key] = [city];
    } else {
      console.log(
        `   This key = "${key}" exists in hash - I need to push current city into this array`
      );
      hash[key].push(city);
    }
  }
  return hash;
};
const answer = solver(test);
console.log(answer);
