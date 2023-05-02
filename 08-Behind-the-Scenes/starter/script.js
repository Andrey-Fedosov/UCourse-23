'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   // console.log(firstName); // function take data from line 9 (this is how scopeChain works)

//   function printAge() {
//     const output = `${firstName} is ${age} old driver, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `you are millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(millenial); // if line 12 will let or const
//     console.log(add(5, 4));
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Andy';
// calcAge(1987);
// console.log(age);
// console.log(printAge);

// console.log(calcAge(1987));

////////////////////////////////////////////////
//hoisting and TDZ in practice

// Variables

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'andy';
// const job = 'driver';
// let year = 1987;

// // Functions

// console.log(addDeclaration(2, 3));
// // console.log(addExpression(2, 5));

// const addArrow = (a, b) => a + b;
// // console.log(addArrow);
// console.log(addArrow(2, 3));

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

///////////
//example

// console.log(undefined);

// if (!numProducts) deleteShopingCart();

// var numProducts = 10; // here should be

// const deleteShopingCart = function () {
//   console.log('all products are deleted');
// };

// var x = 12;
// let y = 2;
// const z = 3;

// console.log(window.x);
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

////////

//variables
// console.log(me);
// console.log(year);
// console.log(job);

// var me = 'Andy';
// let year = 1987;
// const job = 'driver';

// /////// functions

// console.log(addDecl(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// console.log(addExpression(2, 6));
// console.log(addArrow(2, 3));

// var addExpression = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

/////////////
// if (!numProducts) deleteShopingCart();

// var numProducts = 10;

// function deleteShopingCart() {
//   console.log('all products deleted');
// }

////////////////
/// this keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   // console.log(this);
// };

// calcAge(1987);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   // console.log(this);
// };

// calcAgeArrow(1990);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };
// jonas.calcAge();
// // console.log(this.calcAge);

// const matilda = {
//   name: 'matilda',
//   year: 1990,
// };

// matilda.calcAge = jonas.calcAge;

// console.log(matilda);

// matilda.calcAge();

// const f = jonas.calcAge;

// f();

///////////////// regular
// var firstName = 'ivan';

// const jonas = {
//   firstName: 'jonas',
//   year: 1987,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);

// we can add additional variable self
// const self = this; // it will be work such way
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
// const isMillenial = function () {
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
///////// do this through the arrow function
//   const isMillenial = () => {
//     console.log(this);
//     console.log(this.year >= 1981 && this.year <= 1996);
//   };
//   isMillenial();
// },

// greet: () => console.log(`Hey, ${this.firstName}`),
//   greet: function () {
//     console.log(`Hey, ${this.firstName}`);
//   },
// };

// jonas.calcAge();
// jonas.greet();

/////////arguments

// const addExpression = function (a, b) {
//   console.log(arguments);
//   console.log(arguments.length);
//   return a + b;
// };

// console.log(addExpression(5, 6, 15, 3));

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

/////////////////////////////////////////////
//primitive vs reference types

// let age = 33;
// let oldAge = age;
// age = 34;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'andy',
//   age: 35,
// };

// const friend = me;

// friend.age = 33;

// console.log('me', me);
// console.log('friend', friend);

/////////////////////////////////////////////
////////

// let lastName = 'robins';
// let oldLastName = lastName;
// lastName = 'Davis';

// console.log('last name', lastName);
// console.log('old last name', oldLastName);

const jess = {
  name: 'jess',
  lastName: 'davis',
};

const marriedJess = jess;

marriedJess.lastName = 'robins';

// marriedJess = {};

console.log(jess);
console.log(marriedJess);

////////////// copying object

const jess2 = {
  name: 'jess',
  lastName: 'davis',
  family: ['rob', 'bob'],
};

const jessCopy = Object.assign({}, jess2);
jessCopy.lastName = 'davis';
jessCopy.family.push('steve');

console.log(jess2);
console.log(jessCopy);
