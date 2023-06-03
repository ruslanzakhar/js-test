'use strict';

const person = {
  name: 'Ruslan',
  age: 24,
  city: 'Globino',
};
 
let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);