"use strict";
const movements = [200, 450, -400, 700, -750, 250];

const balance = movements.reduce(function (acc, val, i, arr) {
  console.log(`Iteration ${i + 1}: ${acc}`);
  return acc + val;
}, 0);

console.log(balance);

const balance1 = movements.reduce((acc, val) => acc + val, 0);

console.log(balance1);

let balance2 = 0;
for (const val of movements) {
  balance2 += val;
}

console.log(balance2);

const max = movements.reduce((acc, val) => {
  if (acc > val) return acc;
  else return val;
}, movements[0]);
console.log(max); // 700 answer

////////////////////////

const data = [5, 3, 4, 2, 15, 8, 3];
const data1 = [16, 6, 10, 5, 6, 1, 4];

const humanage = data.map(function (val, i) {
  console.log("kkkk");
  if (val <= 2) return val * 2;
  else if (val > 2) return 16 + val * 4;
});
console.log(humanage);

const childHumanDogs = humanage.filter(function (val) {
  return val > 18;
});
console.log(childHumanDogs);

const avgDogs =
  childHumanDogs.reduce(function (acc, val) {
    return acc + val;
  }, 0) / childHumanDogs.length;

console.log(avgDogs);
