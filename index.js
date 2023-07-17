'use strict';

// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(petya.username);
//   },
// };

// petya.showName();
// console.log(window)

// function foo() {
//   console.log(this);
// }

function count(countFrom = 1, countTo = 5, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1