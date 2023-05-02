
// const personOne = {
//     name: 'Bob',
//     age: 22 
// }
// console.log (personOne.name)
// function printName () {
//     console.log ('Bogdan')
// }
 
// setTimeout(printName , 1000)
// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);




// const number = 10;

// const foo = function (){

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }
// } 
// setInterval(foo ,1000);


// function checkForSpam(message) {
    
//     let result;
//     // Change code below this line
//   result = 0;
//     message.toLowerCase().includes('spam') ||
//       message.toLowerCase().includes('sale')
//       ?
//       (result = true)
//       :(result = false);
//     // Change code above this line
//     return result;
function withdraw(amount, balance) {
    if (amount === 0) {
      console.log("Для проведення операції введіть суму більшу за нуль");
    } else if (amount > balance) {
      console.log("Недостатньо коштів на рахунку");
    } else {
      console.log("Операція зняття коштів проведена успішно");
    }
  }
  
  withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
  withdraw(500, 300); // "Недостатньо коштів на рахунку"
  withdraw(100, 300); // "Операція зняття коштів проведена успішно"