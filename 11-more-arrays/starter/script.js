'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////// array section/////
//////10.06.2023/////////

///// lesson 142 - simple array methods

//Slice method - to extract some array values without changing initial array
const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arr1.slice(2)); // ['c','d','e','f'] slice fron 2 element till the end;

console.log(arr1.slice(2, 5)); // ['c','d','e'] slice fron 2 element till 5 element (no included);

console.log(arr1.slice(-1)); // ['g'] - just last element

console.log(arr1.slice(-2)); // ['f','g'] - just 2 last elements

console.log(arr1.slice(2, -2)); // ['c','d','e'] - from element 2 without 2 last elements

console.log(arr1); //['a', 'b', 'c', 'd', 'e', 'f', 'g'] initial array doesn't change

// slice method allows to make shallow copy of the array
const arr1Copy1 = arr1.slice();
console.log(arr1Copy1); // that is equals spread operator

const arr1Copy2 = [...arr1];
console.log(arr1Copy2); // that is equals spread operator lines 94, 97

console.log(arr1.slice);

// SPLICE method - deletes elements from array and  return deleted elements. this method mutate array
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const splicedArr2 = arr2.splice(3);
console.log(splicedArr2); // returns ['d', 'e', 'f', 'g'] - i.e. new array

console.log(arr2); // after the splice method in initial array leaves only 0-2 elements

const arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(arr3.splice(2, 3)); // we get array ['c','d', 'e'] - i.e. splice 3 elememnts(second argument) from 2 element(the first argument)
console.log(arr3.splice(2, 3, ...['dd', 'ee', 'gg'])); // third argument will be added to initial array
console.log(arr3); //- it looks like ['a', 'b', 'dd', 'ee', 'gg']

arr3.splice(-1);
console.log(arr3); // without last element ['a', 'b', 'dd', 'ee']

arr3.splice(-2);
console.log(arr3); // without 2 last elements - ['a', 'b']

/// REVERSE method  - to reverse array
const arr4 = ['a', 'b', 'c', 'd', 'e'];
const arr5 = ['f', 'g', 'h'];
const arr5Reversed = arr5.reverse();

console.log(arr5); // ['h', 'g', 'f'] - initial array mutated
console.log(arr5Reversed); // ['h', 'g', 'f']

//// CONCAT method

const letters = arr4.concat(arr5);
console.log(letters);

// it works like

const letters2 = [...arr4, ...arr5];
console.log(`letters2 array looks like ${letters2}`);

// JOIN method

console.log(letters.join('-')); ///turn to string via separator  - a-b-c-d-e-h-g-f
