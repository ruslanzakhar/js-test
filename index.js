"use strict";

function calculateTotal(number) {
  let total = 0;
  for (let i = 1; i <= number; i += 1) {
    total += i;
  }
  return total;
}

console.log(calculateTotal(18));
