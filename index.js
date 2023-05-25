
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
// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//     } else if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//     } else {
//       console.log("Операція зняття коштів проведена успішно");
//     }
//   }
  
//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
//   withdraw(100, 300); // "Операція зняття коштів проведена успішно"


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };



// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }



//   // Якщо це невласна властивість - нічого не робимо
// }
// const name = Object.create(book);
// book.name = 'rusik'
// console.log(book.hasOwnProperty('name'))



// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25




// const string = "Java Script";

// const letters = string.split('');
// let inverseString = '';

// for (const letter of letters){

// if (letter === letter.toLocaleLowerCase()){
// inverseString += letter.toLocaleUpperCase();
// }
// else{
//   inverseString += letter.toLocaleLowerCase();
// }

// }
// console.log(inverseString)







const arays = [1 , 3 , 4 , 7, 17 , 57 , 47 , 88];
const number = 12 ;

for ( aray of arays){
  if (number <= aray){
    console.log ( aray  , `больше за ${number}`)
  }
}