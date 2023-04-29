'use strict';

////////////
// activating strict mode

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive');

// const interface = 'audio';
// const private = 534;

///////////////////////////
//Functions

// function logger() {
//   console.log('My name is Andrew');
// }

// // calling / running / invoking functions

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 6);
// console.log(appleOrangeJuice);

// const num = Number('23');

// function aPlusB(a, b) {
//   return a + b;
// }

// const summ58 = aPlusB(5, 8);
// console.log(summ58);

//////////////////////////////////
// function declaration function expression

// function declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const clientAge1 = calcAge1(1987);

// console.log(clientAge1);

// function expresion
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const client2Age = calcAge2(1990);

// console.log(client2Age);

/////////////////////
// arrow function

// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(2014);

// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;

//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1987, 'Andrey'));
// console.log(yearsUntilRetirement(1990, 'Anastasia'));

////////////////////////////
// functions calling other functions

// const cutFruitPieces = function (fruit) {
//   return fruit * 5;
// };

// const fruitProcessor = function (apple, orange) {
//   const applePieces = cutFruitPieces(apple);
//   const orangePieces = cutFruitPieces(orange);

//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// };
// console.log(fruitProcessor(6, 4));

///////////////////////////////
/// reviewing Functions

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = function (firstName, birthYear) {
//   const retirement = 65 - calcAge(birthYear);

//   return retirement > 0
//     ? `${firstName} retires in ${retirement} years`
//     : `${firstName} is already retired`;
// };
// console.log(yearsUntilRetirement('Anastasia', 1990));

/////////////
// introduction in Arrays

// const friend1 = 'Misha';
// const friend2 = 'Petya';
// const friend3 = 'Sasha';

// let friends = ['Misha', 'Petya', 'Sasha'];

// console.log(friends);

// //another type of array writing

// const y = new Array(1987, 1990, 2011, 2014);

// console.log(y);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Roman';
// console.log(friends);

// friends = ['bob', 'rob'];
// console.log(friends);

// const firstName = 'Andrew';
// const andrewsProfile = [firstName, 'fedosov', 1987, friends];
// console.log(andrewsProfile);
// console.log(andrewsProfile.length);

// //exercise

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [1987, 1990, 2011, 2014];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

//////////////////
//arrays methods

// const friends = ['Misha', 'Kolya', 'Petya'];

// console.log(friends);

// /////add new element

// const newLength = friends.push('Sasha'); // add element in the end of array
// console.log(friends); // we'll see new array
// console.log(newLength); // will be returned new arrays length

// const newLength2 = friends.unshift('Roma'); // add element in the begining of the array
// console.log(friends); // we'll see new array
// console.log(newLength2); // will be returned new arrays length

// //remove elements

// const poppedArray = friends.pop(); // remove last element
// console.log(friends);
// console.log(poppedArray); // return removed element - in this case it is 'Sasha'

// const shiftedArray = friends.shift(); // remove first element
// console.log(friends);
// console.log(shiftedArray); // remove removed element

// console.log(friends.indexOf('Petya'));
// console.log(friends.indexOf('Evgen')); // return -1 - it means that there is no sunch element in the array  and it's impossible to return its index

// friends.push('Semen');

// console.log(friends.includes('Misha'));
// console.log(friends.includes('Stepan'));
// console.log(friends.includes(1987));

// friends.includes('Timoh')
//   ? console.log('You have a friend with such name')
//   : console.log('you have not friend with such name');

// if (friends.includes('Semen')) {
//   console.log('you have a fried with such name');
// }

// /////////////////////////
// //introduction to objects

// const andrewArray = [
//   'Andrew',
//   'Fedosov',
//   'driver',
//   2023 - 1987,
//   ['Nastyushka', 'Misha'],
// ];

// // console.log(andrewArray);

// const andrewObject = {
//   firstName: 'Andrew',
//   lastName: 'Fedosov',
//   job: 'driver',
//   relatives: ['Nastyushka', 'Misha'],
// };

// console.log(andrewObject);

///////////////////////////////////////
// dot versus bracket notation

// const andrews = {
//   firstName: 'Andy',
//   lastName: 'Fedosov',
//   relatives: ['Nastyushka', 'Misha'],
//   age: 2023 - 1987,
//   hasDriverLicense: true,
// };

// console.log(andrews);

// console.log(andrews.firstName); // dot natation
// console.log(andrews['lastName']); // bracket notation

// const nameKey = 'Name';

// console.log(andrews['first' + nameKey]);
// console.log(andrews['last' + nameKey]);

// // console.log(andrews.'last' + nameKey);

// const interestedIn = prompt(
//   'what do you want to know about Andrew? choose between: firstName, lastName, age, hasDriverLicense'
// );

// if (andrews[interestedIn]) {
//   console.log(andrews[interestedIn]);
// } else {
//   console.log(
//     'wrong request! Choose between: firstName, lastName, age, hasDriverLicense'
//   );
// }

// andrews.location = 'Mogilev';
// andrews['telegram'] = '@fedosshmedos';

// console.log(andrews);

// console.log(
//   `Andrews has ${andrews.relatives.length} relatives. And his wife is called ${andrews.relatives[0]}`
// );

////////////////////////
/// object methods

const andyFedos = {
  firstName: 'Andy',
  birthYear: 1987,
  location: 'Mogilev',
  isMarried: 'undefined',
  job: 'driver',
  friends: ['Znichka', 'Misha'],
};

// calcAge: function (birthYear) {
//   return 2023 - birthYear;
// },

// calcAge: function () {
//   console.log(this);
//   return 2023 - this.birthYear;
// },
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} - year old ${
//       this.job
//     } and he is ${this.isMarried ? 'married' : 'single'}.`;
//   },
// };

// console.log(andyFedos.calcAge());
// console.log(andyFedos.getSummary());
// const hisAge = andyFedos.calcAge;
// hisAge;
// console.log(andyFedos.calcAge());

///////////////////////
//// Iteration: loop - for loop

// it works such way

// for (let i = 0; i < 15; i++) {
//   console.log(`it's step ${i + 1}`);
// }

/////////////////////////////
// looping arrays,  breaking, and continuing

// const andy = ['Andy', 'Fedosov', 1987, 'driver', ['Misha', 'Nastyushka'], true];

// const types = [];

// // for (let i = 0; i < andy.length; i++) {
// //   console.log(andy[i], typeof andy[i]);
// //   // types[i] = typeof andy[i];
// //   types.push(typeof andy[i]);
// // }

// for (let i = 0; i < andy.length; i++) {
//   // types[i] = typeof andy[i];
//   types.push(typeof andy[i]);
// }

// console.log(types);

// const years = [1987, 1990, 2009, 2011, 2014, 2016];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);

/////////////////////////////
// continue and break

// const andy = ['Andy', 'Fedosov', 1987, 'driver', ['Misha', 'Nastyushka'], true];

// console.log('----only strings ----');
// for (let i = 0; i < andy.length; i++) {
//   if (typeof andy[i] !== 'string') continue;
//   console.log(andy[i], typeof andy[i]);
// }

// // if you use continu

// for (let i = 0; i < andy.length; i++) {
//   if (typeof andy[i] === 'number') break;

//   // whe

//   console.log(andy[i], typeof andy[i]);
// }

///////////////////
// looping backwards and loops in loops

// const andy = ['Andy', 'Fedosov', 1987, 'driver', ['Misha', 'Nastyushka'], true];

// for (let i = andy.length - 1; i >= 0; i--) {
//   console.log(i, andy[i]);
// }

////////////
//loop in loop

// for (let exercise = 1; exercise < 6; exercise++) {
//   console.log('start exercise', exercise);

//   for (let rep = 1; rep < 12; rep++) {
//     console.log(`it's exercise ${exercise}, rep ${rep}.`);
//   }
// }

//////////////
// the while loop

for (let rep = 1; rep < 11; rep++) {
  console.log(`Doing rep ${rep}`);
}

///while

let rep = 1;
while (rep < 11) {
  console.log(`it is rep ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled dice ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log(`it's ${dice} dice`);
  }
}
