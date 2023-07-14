'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//*09.07.2023 - Numbers, Data, Timers
//*175 creating dates

//*174  work with bigInt
// to represent numbers we use 53 bits
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// if we need bigger number we should use bigInt primitive type

console.log(154684286126461478524845245n);
console.log(typeof 154684286126461478524845245n);
console.log(BigInt(154684286126461478524845245n));

//operations with BigInt
// we can use with bigInt all math operations, but we can not mix BigInt numbers and integers numbers

console.log(3455656543n + 256762n); //3455913305n
console.log(1586544n * 1000n); //1586544000n
// console.log(165465498000n + 1); // error: Cannot mix BigInt and other types, use explicit conversions

// for work with integers and BigInt we should convert integer to BigInt

const huge = 15641549845498n;
const num = 15362;

console.log(huge + BigInt(num));

//Math methods dont work with bigINt

// console.log(Math.sqrt(16n)); // error Cannot convert a BigInt value to a number

// divisions looks this way

console.log(10n / 3n); // 3n
console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.33333

//but comparison is work

console.log(20n > 15);
console.log(20n < 25);
console.log(20n === 20); // false
console.log(20n == 20); // true because type coercion

//also concatenation is work
console.log(20n + ' is very big number');

//*13.07.23 - reminder (остаток от деления) lection
console.log(5 % 2); // 1
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

const isEven = n =>
  n % 2 === 0
    ? console.log(`number ${n} is even`)
    : console.log(`number ${n} is odd`);

isEven(16);
isEven(23);
isEven(55);
isEven(58);

// coloring every second movements

labelBalance.addEventListener('click', function () {
  return [...document.querySelectorAll('.movements__row')].forEach(function (
    row,
    i
  ) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'lightgreen';
  });
});

//*173 numeric separators
// for wor with big numberz we can use numeric separator - underscore

console.log(267460000000); // in console we get 267460000000
console.log(267_460_000_000); // in console we get 267460000000, but this approach is better to read

// it is importan to remember that underscore sign we cannot use in beginig

const priceInCents = 345_99;
console.log(priceInCents);

const transFee1 = 15_00; // 1500
const transFee2 = 1_500; // 1500

console.log(transFee1, transFee2); // in both cases we get  1500

//^ math constants

const PI = 3.14_15; // we get 3.1415
console.log(PI);

// const PITest =[3.1415_};
// const PITest =[3.1415__}; // we cant use underscore in the end of number
// const PITest =[3._1415};// we cant use underscore in the end of number
// const PITest =[3.14__15}; // we cant use  double underscore

console.log(Number('230000')); // we get 23000
console.log(Number('230_000')); // we get NaN

//*170 - converting and Checking numbers

//All numbers are represented as float point numbers
// console.log(23 === 23.0); // true

//base 10  system 0 - 9;
//binary - 0, 1;

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false - because⬆️

//adn this is the reason why Js is not good enough for precision operations like a bank, science an so on

//conver strin to numbers
// console.log(Number('23')); //23
// console.log(+'23'); //23 it is type coercion

//parsing - parseInt method
// console.log(Number.parseInt('25px')); // 25
// console.log(Number.parseInt('e29px')); //NaN

// console.log(Number.parseInt('2.5rem')); // we get 2
// console.log(Number.parseFloat('2.5rem')); // we get 2.5

//check if operand is not a number  - isNaN. it looks this way
console.log(Number.isNaN(2.0)); //false
console.log(Number.isNaN(' ')); //false
console.log(Number.isNaN('2.55px')); //)false;
console.log(Number.isNaN(2.0 / 'a')); //true

// method isFinite is good to check if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite(205 / 0)); // false, becouse when we divide 205 and 0 - we pursuit to get infinite

//if we work with integers we can do it using the method isInteger
console.log(Number.isInteger(15)); // true
console.log(Number.isInteger(15.0)); // true
console.log(Number.isInteger(355.3)); // false
console.log(Number.isInteger(355 / 0)); // false
console.log(Number.isInteger(5 * 0)); // true

//Math and roundings methods
//getting number square root

console.log(Math.sqrt(25)); // 5

//it also works as
console.log(25 ** (1 / 2)); // 5

// cubic root we can get this way
console.log(216 ** (1 / 3));

//getting max value

console.log(Math.max(5, 3, 18, 6, 10, 23)); // 23
//but
console.log(Math.max([5, 3, 18, 6, 10, 23])); //NaN
//note.type coercion works here
console.log(Math.max(5, 3, 18, 6, 10, '23')); // 23
console.log(typeof Math.max(5, 3, 18, 6, 10, '23')); // but type is number

//math. min
console.log(Math.min(5, 3, 18, 6, 10, '23')); // 3

//math constants
// Math.PI
console.log(Math.PI * Number.parseFloat('20px') ** 2); //1256.6370614359173

// Math.random() - to get random number between 0 - 1

console.log(Math.trunc(Math.random() * 6) + 1); // to get random number between 1 - 6

// function to get random number

const randInt = (max, min) => Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randInt(25, 6));
console.log(randInt(17, 6));
console.log(randInt(29, 15));

//rounding

//r1 Math.trunc - remove all decimal part

console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.9)); // 23
console.log('------');
//r2c-round to closest integer
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24
console.log('------');
//round up to bigger integer
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24
console.log('------');

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23
console.log(Math.floor('23.9')); // 23

console.log(Math.floor(-23.9)); // -24
console.log(Math.trunc(-23.9)); // -23

//round decimals - toFixed (we get string)

console.log((2.7).toFixed(0)); // 3 string
console.log((2.7).toFixed(3)); // 2.700 string
console.log((2.345).toFixed(2)); // 2.35 string
console.log(+(2.345).toFixed(2)); // 2.35 string
