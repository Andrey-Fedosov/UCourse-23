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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //textContent = 0; something similar
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    //^ for reseting  initial values in page html code we should use .innerHTML
    const transactionType = mov > 0 ? 'deposit' : 'withdrawal';
    // console.log(transactionType);
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${transactionType}">${
      i + 1
    } ${transactionType}</div>
          <div class="movements__value">${Math.abs(mov)}€</div>
        </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

// const calcAndPrintBalance = function (movements) {
//   labelBalance.innerHTML = '';

//   const calcBalance = movements.reduce((acc, mov) => acc + mov, 0);

//   const balanceHtml = `
//     <p class="balance__value">${calcBalance}€</p>
//   `;

//   labelBalance.insertAdjacentHTML('afterbegin', balanceHtml);
// };

// calcAndPrintBalance(account1.movements);

//^ below⬇️ teachers variant

const calcPrintBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} EURO`;
};

// calcPrintBalance(account1.movements);

//*25.06.2023
const displaySumm = function (acc) {
  const depositsSumm = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${depositsSumm}€`;

  const withdrawalSumm = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawalSumm)}€`;

  const interestR = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interestR}€`;
};

const displayData = function (acc) {
  displayMovements(acc.movements);
  calcPrintBalance(acc);
  displaySumm(acc);
};

//^ get userName
const getUserName = function (user) {
  const userName = user
    .toLowerCase()
    .split(' ')
    .map(el => el[0])
    .join('');
  return userName;
};

accounts.forEach(function (acc) {
  acc.userName = getUserName(acc.owner);
});

// console.log(accounts);

// displaySumm(account1.movements);

// console.log(account1.movements);

//* 26.06.23
//* implement login lesson

//event handler
/* let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display message and UI
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //display Balance
    calcPrintBalance(currentAccount.movements);

    //display movements
    displayMovements(currentAccount.movements);

    displaySumm(currentAccount);
  }
}); */

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    containerApp.style.opacity = 100;

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }.`;

    displayData(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  // console.log(receiverAcc);
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // console.log('Transfer Valid');
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    displayData(currentAccount);
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
  }
});
let accToDelete;
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  accToDelete = inputCloseUsername.value;
  if (
    accToDelete === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    // console.log(index);

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    console.log(accounts);
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  // console.log(amount);

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    currentAccount.movements.push(amount);

    displayData(currentAccount);
  }
});

// const sortArray = function (e) {
//   e.preventDefault(e);
//   displayData(currentAccount.movements, true);
// };
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// const
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// array methods practice lesson 1

const bankDepositsSum = accounts.map(acc => acc.movements);

console.log(bankDepositsSum);

const bankDepositsSumMovements = bankDepositsSum.flat().filter(mov => mov > 0);

console.log(bankDepositsSumMovements);

const bankDepositsSumMovementsTotal = bankDepositsSumMovements.reduce(
  (acc, el) => acc + el,
  0
);

// way 2 to do it in one function
const bankDepositsSum2 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositsSumMovementsTotal); // 25180
console.log(`---------------`);
console.log(bankDepositsSum2); // 25180

//* deposits more than 1000

const depositsMore1K = accounts
  .flatMap(el => el.movements)
  .filter(mov => mov >= 1000).length;

//  do it through reduce method
const depositsMore1K2 = accounts
  .flatMap(el => el.movements)
  .filter(mov => mov >= 1000)
  .reduce((_, __, i, array) => array.length, 0);
const depositsMore1K3 = accounts
  .flatMap(el => el.movements)
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count, 0));

console.log(depositsMore1K); // 6
console.log('----------------');
console.log(depositsMore1K2); // 6
console.log(depositsMore1K3); // 6

console.log(depositsMore1K);

//3 sum separately deposit and withdrawals

const sums = accounts
  .flatMap(el => el.movements)
  .reduce(
    (sums, curr) => {
      curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// rewrite  via object destructure

const { deposits, withdrawals } = accounts
  .flatMap(el => el.movements)
  .reduce(
    (sums, curr) => {
      curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// also one way to rewrite via bracket notation

const { depos, withdraws } = accounts
  .flatMap(el => el.movements)
  .reduce(
    (sums, curr) => {
      sums[curr > 0 ? 'depos' : 'withdraws'] += curr;
      return sums;
    },
    { depos: 0, withdraws: 0 }
  );

console.log(depos, withdraws);

//4. Capitalize title case

// below my attempt

// const capTitle = function (str) {
//   const strArr = str.split(' ');
//   strArr.filter(el => {
//     // console.log(el[0]);
//     // console.log(el[0].toUpperCase());
//     el.length > 1 ? el.replace(el[0], el[0].toUpperCase()) : el;
//   });
//   return strArr.join('');
// };

// console.log(capTitle('there is a castle in the wood'));

// teachers variant

const convertTitleCase = function (title) {
  const capitalize = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };
  const exeptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'with', 'in'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exeptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title, but not too Long'));
console.log(convertTitleCase('and here is another title with an ExaMPLE'));

//* 03.07.2023 creating array with fill method and other ways

//1 method to array creating
console.log([1, 2, 3, 4, 5, 6, 7, 8]);
//or via constructor new Array
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

// if  we  need generate array pragrammatically

const generatedArr = new Array(7);

console.log(generatedArr); // [empty × 7] - generated  7 elements emty array

// with empty arr  we can use only fill method
console.log(generatedArr.fill(5)); // we  get  such array[5, 5, 5, 5, 5, 5, 5]

console.log(generatedArr.fill(3, 2)); // it mutates initial generatedArr [5, 5, 3, 3, 3, 3, 3]: from position 2  array is filled with 3.

console.log(generatedArr.fill(4, 4, 6)); // [5, 5, 3, 3, 4, 4, 3]

const newArray2 = new Array(8);
console.log(newArray2);

newArray2.fill(2, 3, 5);
console.log(newArray2); // [empty × 3, 2, 2, empty × 3] - last(5) index not included

// array.from method

const genArray = Array.from({ length: 9 }, () => 2);
console.log(genArray); // we get [2, 2, 2, 2, 2, 2, 2, 2, 2]
//* 30.06.2023 sort method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// create array from 1 to 9

const genArr1To7 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(genArr1To7); // we get [1, 2, 3, 4, 5, 6, 7]

// to get 100 element arr with random elements
// const randomArr = Array.from({ length: 100 }, () =>
//   Math.trunc(Math.random() * 101);
// );
// console.log(randomArr);

// create array from arrayLike structures (iterable like result of querySelectorAll - nodesList(), sets, maps);

labelBalance.addEventListener('click', function () {
  const movArr = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  //
  // console.log(movArr.map(el => el.textContent.replace('€', '')));

  console.log(movArr);
});

const movArr2 = [...document.querySelectorAll('.movements__value')];

const turn = movArr2.map(el => Number(el.textContent.replace('€', '')));
console.log(turn);

// 2 ways of sort method if we sort String

const clientArr = ['Andy', 'Johny', 'Pete', 'Steve', 'Hanna'];

//! it is important to remember that sort method mutate initial array
const copiedClientArr = clientArr.slice(0);
console.log(`i copy clientArr and get: ${copiedClientArr}`);

const copiedClientArr2 = [...clientArr];
console.log(`i copy clientArr and get: ${copiedClientArr}`);

console.log(clientArr.sort()); // ['Andy', 'Hanna', 'Johny', 'Pete', 'Steve']

console.log(clientArr);

// but if we sort number array - we get

console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// for correct work we should write it this way

//return < 0: A, B
//return > 0: B, A

movements.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  }
});

// for ascending order
console.log(movements.sort((a, b) => a - b)); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// for descending order
console.log(movements.sort((a, b) => b - a)); // [3000, 1300, 450, 200, 70, -130, -400, -650]

//* flat  and flatMap
// const arr = [430, [1000, 700], 50, 90, [5000, 3400, -150]];
// console.log(arr.flat());

//go deeper
// const arr2 = [430, [1000, 700], [50, 90, [5000, 3400, -150]]];
// console.log(arr2.flat()); // [430, 1000, 700, 50, 90, Array(3)]

//get deeper layer
// console.log(arr2.flat(2)); // [430, 1000, 700, 50, 90, 5000, 3400, -150]

//to get total sum

// const accMoves = accounts.map(acc => acc.movements);
// console.log(accMoves);

// const intoOneArr = accMoves.flat();
// console.log(intoOneArr);

// const getTotal = intoOneArr.reduce((acc, el) => acc + el, 0);

// console.log(getTotal);

// or we can do it this way:
// const tot2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, el) => acc + el, 0);
// console.log(tot2);

//flatMap - it joins it itself flat and map Methods, but it works correct only with one layer-deep array

// const tot3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, el) => acc + el, 0);
// console.log(tot3);

//*28.06.2023 - .some() method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.some(el => el > 1000));

// console.log(movements.includes(-130)); // shown true -because there is an element 130 in the array

// const anyDeposits = movements.some(mov => mov > 0);

// console.log(anyDeposits);

// const movements2 = [430, 1000, 700, 50, 90];

// console.log(movements2.some(mov => mov < 0));

const depositCB = mov => mov > 0;

console.log(movements.every(depositCB));

console.log(movements.every(depositCB));
console.log(movements.filter(depositCB));
console.log(movements.some(depositCB));

// separate callback function writing

//*28.06.2023 - .findIndex() method
// const indOf450 = movements.findIndex(el => el === 450);
// console.log(indOf450);
// const indOf3000 = movements.findIndex(el => el === 3000);
// console.log(indOf3000);
// const indOfS3000 = movements.findIndex(el => el == 3000);
// console.log(indOfS3000);

//* 25.06.2023
//* 156 - find method

const findNegative = movements.find(mov => mov <= 0);
console.log(findNegative);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

//* 22.06.2023
//* 155 - chaining method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
// Pipeline
const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  // .map(
  //   mov => mov * euroToUsd

  // )
  .map(
    (mov, i, arr) => {
      // console.log(arr);
      return mov * euroToUsd;
    }
    // console.log(mov);
  )
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUsd);

//* 21.06.2023
// //* reduce method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> SNOWBALL
// const summEl = movements.reduce(function (acc, el, i, arr) {
// console.log(`Iteration ${i + 1} - summ: ${acc} `);
//   return acc + el;
// }, 0);

// transformed into arrow loop below

// const balance = movements.reduce((acc, el) => acc + el, 0);
// console.log(`The balance is ${balance}`);

// // do thesame with for-of loop
// let summ = 0;

// for (const tr of movements) {
//   summ += tr;
// }

// console.log(`the Summ = ${summ}`);

// console.log(summEl);

//? get maximum
// my decision
// const getMaxOfArr = movements.reduce(function (acc, mov) {
//   if (acc < mov) {
//     acc = mov;
//   }
//   return acc;
// }, 0);

//teacher variant

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(`Max value is ${max}`);

// console.log(getMaxOfArr);

//* filter method
//* ////////////////////////

// const moreThan1K = movements.filter(function (mov) {
//   return mov > 1000;
// });

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);

// console.log(moreThan1K);
// console.log(deposits);
// console.log(withdrawals);

// we can consider filter method as something like

// const deposits2 = [];

// for (const t of movements) {
//   if (t < 100) {
//     deposits2.push(t);
//   }
// }

// console.log(deposits2);

//* 20.06.2023 map, filter, reduce methods
//* MAP Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.5;

//here we use callback function to get required values. this is the modern  way.
// const convertedMovements = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// doing the same through the arrow function

// const movementsToUSD = movements.map(mov => mov * euroToUsd);

// console.log(convertedMovements);
// console.log(movementsToUSD);

//^  here we go through the initial array
// const newArr = [];
// for (const mov of movements) {
//   newArr.push(mov * 2);
// }
// console.log(`newArr is ${newArr}`);

//^ add to callback function index argument and array arg
// const movementDescription = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: you deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: you withdrew ${Math.abs(mov)}`;
//   }
// });
//^ using ternary operator
// const movDescr = movements.map((mov, i, arr) => {
//   return mov > 0
//     ? `Movement ${i + 1}: you deposited ${mov}`
//     : `Movement ${i + 1}: you withdrew ${Math.abs(mov)}`;
// });
//^ even shorter
// const shorterMovDescr = movements.map(
//   (mov, i, arr) =>
//     `Movement ${i + 1}: you ${mov > 0 ? `deposited ${mov}` : `withdrew ${mov}`}`
// );
// console.log(movementDescription);
// console.log(movDescr);
// console.log(shorterMovDescr);

// const user = 'Steven Thomas Williams';
// const getProfileName = function (client) {
//   const userToArray = client.toLowerCase().split(' ');
//   const profileNameLetters = userToArray.map(el => el.slice(0, 1));
//   return profileNameLetters.join('');
// };

// getProfileName(user);

// const getAllProfiles = accounts.map(function (el) {
//   return getProfileName(el.owner);
// });

// console.log(getAllProfiles);

//?  below teachers variant

const user = 'Steven Thomas Williams';

// const userName = user
//   .toLowerCase()
//   .split(' ')
//   .map(el => el[0])
//   .join('');

// console.log(profileNameLetters);
// const userToArray = user.toLowerCase().split(' ');
// console.log(userToArray);

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//*------------------------------------------
//*------------------------------------------
//* ----- ARRAY SECTION
//? ----- 11.06.2023
//? ----- FOREACH METHOD -----

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//? to go through the array for-of method

// for (const mov of movements) {
//   if (mov > 0) {
//     console.log(`you deposited ${mov}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(mov)}`);
//   }
// }

// ? if we need add index  - use entries() method
// for (const [i, m] of movements.entries()) {
//   if (m > 0) {
//     console.log(`${i + 1}: You deposited ${m}`);
//   } else {
//     console.log(`${i + 1}: You withdrew ${Math.abs(m)}`);
//   }
// }

// console.log(`\n---⚡USING FOREACH METHOD⚡---`);

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// });

// it works like
// function(200);
// function(450);
// function(-400);
// function(3000);
// ....

//? if we need to get index using forEach method we should do it this way
//? it is impOrtant to write arguments behind the scopes in follow order (element, index, array)

// movements.forEach(function (mov, index) {
//   if (mov > 0) {
//     console.log(`${index}: You deposited ${mov} `);
//   } else {
//     console.log(`${index}: You withdrew ${mov} `);
//   }
// });

//? FOREACH  METHOD IN MAPS AND SETS
// forEach with maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`here is key ${key}, value is ${value}`);
// });
// ? 13.06.2023  -  add Dom manipulation

//forEach for Sets
// const currenciesSet = new Set(['USD', 'EUR', 'GBP', 'GBP', 'GBP', 'EUR']);
// console.log(currenciesSet);
// currenciesSet.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

//? at method in arrays
// const arr = [23, 17, 48, 36];
// console.log(arr[0]); // 23
// console.log(arr[2]); // 48

// but now we can get it using the at-method⬇️
// console.log(arr.at(0)); // 23
// console.log(arr.at(2)); // 48

//?  getting the last element
// console.log(arr[arr.length - 1]); // we get 36
// console.log(arr.slice(-1)); // we get [36]
// console.log(arr.slice(-1)[0]); // in this case we get 36

//? getting the last element using at-method
// console.log(`-----geting the last element using at-method-----`);
// console.log(arr.at(-1)); // we get 36
// console.log(arr.at(-2)); // we get 48
// console.log(arr.at(-3)); // we get 17
// console.log(arr.at(-6)); // we get undefined
// i.e. it counts from the end
// it also works with string

// const nameStr = 'Andy';
// console.log(nameStr.at(0)); // A
// console.log(nameStr.at(-1)); // y

//////10.06.2023/////////

///// lesson 142 - simple array methods

//Slice method - to extract some array values without changing initial array
// const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// console.log(arr1.slice(2)); // ['c','d','e','f'] slice fron 2 element till the end;

// console.log(arr1.slice(2, 5)); // ['c','d','e'] slice fron 2 element till 5 element (no included);

// console.log(arr1.slice(-1)); // ['g'] - just last element

// console.log(arr1.slice(-2)); // ['f','g'] - just 2 last elements

// console.log(arr1.slice(2, -2)); // ['c','d','e'] - from element 2 without 2 last elements

// console.log(arr1); //['a', 'b', 'c', 'd', 'e', 'f', 'g'] initial array doesn't change

// // slice method allows to make shallow copy of the array
// const arr1Copy1 = arr1.slice();
// console.log(arr1Copy1); // that is equals spread operator

// const arr1Copy2 = [...arr1];
// console.log(arr1Copy2); // that is equals spread operator lines 94, 97

// console.log(arr1.slice);

// // SPLICE method - deletes elements from array and  return deleted elements. this method mutate array
// const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// const splicedArr2 = arr2.splice(3);
// console.log(splicedArr2); // returns ['d', 'e', 'f', 'g'] - i.e. new array

// console.log(arr2); // after the splice method in initial array leaves only 0-2 elements

// const arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// console.log(arr3.splice(2, 3)); // we get array ['c','d', 'e'] - i.e. splice 3 elememnts(second argument) from 2 element(the first argument)
// console.log(arr3.splice(2, 3, ...['dd', 'ee', 'gg'])); // third argument will be added to initial array
// console.log(arr3); //- it looks like ['a', 'b', 'dd', 'ee', 'gg']

// arr3.splice(-1);
// console.log(arr3); // without last element ['a', 'b', 'dd', 'ee']

// arr3.splice(-2);
// console.log(arr3); // without 2 last elements - ['a', 'b']

// /// REVERSE method  - to reverse array
// const arr4 = ['a', 'b', 'c', 'd', 'e'];
// const arr5 = ['f', 'g', 'h'];
// const arr5Reversed = arr5.reverse();

// console.log(arr5); // ['h', 'g', 'f'] - initial array mutated
// console.log(arr5Reversed); // ['h', 'g', 'f']

// //// CONCAT method

// const letters = arr4.concat(arr5);
// console.log(letters);

// // it works like

// const letters2 = [...arr4, ...arr5];
// console.log(`letters2 array looks like ${letters2}`);

// // JOIN method

// console.log(letters.join('-')); ///turn to string via separator  - a-b-c-d-e-h-g-f
