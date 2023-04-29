'use strict';
// console.log("check is complete");

// linking javascript  File
// let js = "amazing";
// console.log(40 + 8 + 69 - 8);
// console.log(js);
// console.log(`js is amazing`);
// console.log(typeof js);
// console.log(typeof (40 + 8 + 69 - 8));
// console.log(typeof `js is amazing`);

///////////////////////////////
// Values and variables

// console.log("andrew");
// console.log(35);

// let firstName = "AndyMandy";

// console.log(firstName);
// console.log(firstName);

//Variable name conventions

// let andy_fedosov = "AF";
// console.log(andy_fedosov);

// let $function = 35;
// console.log($function);

// let PI = 3.1415;

// let myFirstJob = "taxman";
// let mySecondJob = "salesman";

// upper variant is better, because we understand meaning of variable.
// below we can see not  good variant of naming

// let job1 = "taxman";
// let job2 = "salesman";

// console.log(job1, job2);

// console.log(myFirstJob, mySecondJob);

////////////////////////////////////

// datatypes

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun); // we'll get in tje console boolean type of variable

// console.log(typeof true); // and in this case we'll get boolean type

// console.log(typeof 23);
// console.log(typeof "23");

// javaScriptIsFun = "yes";
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1987;
// console.log(typeof year);

// console.log(typeof null);

///////////////////////////
//let, const, var

// let age = 34;
// console.log(age);

// age = 35;
// console.log(age);

// const birthYear = 1987;
// //birthYear = 1988; // incorrect because constant couldn't be changed
// console.log(birthYear);

//const job;  - // incorrect because we should give a value to constant

// const job = "vet";

// console.log(job);

// lastName = "Fedosov"; // incorrect because we should defined (declare) what type lastName will be (const or variable)
// console.log(lastName);

//////////////////////////////////
// basic operators
// math operators

// const now = 2023;

// const andyAge = now - 1987;
// const nastyaAge = now - 1990;

// console.log(andyAge, nastyaAge);

// console.log(andyAge * 2, andyAge / 3, 3 ** 3);

// const firstName = "Andrey";
// const lastName = "Fedosov";

// console.log(firstName + "," + lastName);

// assignment operators

// const now = 2023;

// const andyAge = now - 1987;
// const nastyaAge = now - 1990;

// let x = 25;
// console.log(x);
// x += 15; // equals  x = x +15;
// console.log(x);
// x *= 3; // equals x = x * 3;
// console.log(x);
// x++; // equals x = x + 1
// console.log(x);
// x--;
// console.log(x);
// x--;
// console.log(x);

// // comparison operators

// console.log(andyAge > nastyaAge); // >, <, =, <=, >=
// console.log(nastyaAge >= 25);

// const isFullAge = nastyaAge >= 45;

// console.log(isFullAge);

// console.log(now - 2000 > now - 1990);

///////////////////////////////
// type conversion and coercion

// type conversion

// const inputYear = '1987';

// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 35);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(25));

// // type coersion
// console.log('I am' + 23 + 'years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;

/////////////////////////////////
// truthy and falsy values

// there are 5 falsy values
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// let money = '';
// if (money) {
//   console.log(`yoy can go to the party`);
// } else {
//   console.log('it is too litle cash for  party');
// }

// let height = 100;
// if (height) {
//   console.log(`height is defined`);
// } else {
//   console.log(`Height is undefined`);
// }

///////////////////
//switch statement

const season = 'summer';

// switch (season) {
//   case 'winter':
//     console.log('it is time to warm');
//     console.log('cold');
//     break;
//   case 'spring':
//     console.log('spring is here');
//     break;
//   case 'summer':
//     console.log('summer is in the air');
//     break;
//   case 'autumn':
//     console.log('It is the time to go to school');
//     break;
// }

// if (season === 'winter') {
//   console.log('it is winter time');
// } else if (season === 'spring') {
//   console.log('it is spring time');
// } else if (season === 'summer' || season === 'autumn') {
//   console.log('it second part of the year');
// }

//////////////////////////////////////
// ternary operator

const myAge = 19;

myAge <= 34
  ? console.log('not too old to become a pilot')
  : console.log('you are too old for this job');

const drink = myAge < 18 ? 'water' : 'spirits';

console.log(drink);
