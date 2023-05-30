'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const workHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  workHours,

  // numGuests: 15,
  order: function (starterIndex, mainIndex) {
    return [
      (this.starterMenu[starterIndex] = 'focacia'),
      (this.mainMenu[mainIndex] = 'caesar salat'),
    ];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order recieved! Time: ${time}, Address: ${address}, meals: ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}`
    );
  },

  orderPasta: function (ingr1, ingr2, ingr3) {
    console.log(`Here is your pasta with ${ingr1}, ${ingr2}, ${ingr3}`);
  },

  //////
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//////////30.05.2023///////////////////
//// lesson 131 -work with strings⬇️//

const airline = 'Belavia ';
const airline2 = 'emirates airlines';
const plane = 'B737';

/////// getting certain letter from the string

const thirdLetter = airline[2];
console.log(thirdLetter);
console.log(airline[0]);

////////// getting index of the letter - indexOf();

console.log(airline.indexOf('a'));
console.log(airline.indexOf('e'));
console.log(airline.lastIndexOf('a')); // for geting last index  of certain letter
console.log(airline.indexOf('avia'));

//////convert number to string
/////// first method⬇️
const tel = String(80291989959);

/////// the second method by adding to number empty string symbol ''

const tel2 = 1979254;
const stringTel = tel2 + '';
console.log(stringTel, typeof stringTel);

console.log(`type of tel constant is ${typeof tel}`);

///// 1.2 - slice method

console.log(airline2, airline2.slice(0)); // slice from index 0
console.log(airline2, airline2.slice(0, 3)); // slice from index 0 to index 3 (3 - is not includes) - shown emi
console.log(airline2, airline2.slice(-1)); // slice from last index from the end
console.log(airline2, airline2.slice(-2)); // slice 2 letters from the end

///// getting length of the string

console.log(airline.length);

console.log(airline2.slice(0, airline2.indexOf(' '))); //// this allow to get firs word of the string whereve we don't know its length
console.log(airline2.slice(airline.lastIndexOf(' ') + 2));
/////// writing a function that check is seat in the middle
const checkMiddleSeat = function (seat) {
  if (seat.slice(-1) == 'B' || seat.slice(-1) == 'E') {
    return `You've got a middle seat`;
  } else return `You lucky 😎`;
};

console.log(checkMiddleSeat('15D'));
console.log(checkMiddleSeat('5F'));
console.log(checkMiddleSeat('10B'));

console.log(new String('Andy'));
console.log(typeof new String('Andy'));

//////// part 2  strings

///// conver into lower case or upper case

const airline3 = 'KLM Airlines';

const lowerCaseWord = airline3.toLowerCase(); /////convert string into lower case klm emirates
const upperCaseWord = lowerCaseWord.toUpperCase();

console.log(lowerCaseWord);
console.log(upperCaseWord);

/////fix capitalization
const passengerName = 'roBeRT';
const passengerLowerCase = passengerName.toLowerCase();
const correctName =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(correctName);

///////check email

const userEmail = 'mailbox@andymail.io';
const loginEmail = '   MAilbox@AndyMail.IO \n';
const convertedLoginEmail = loginEmail.toLowerCase().trim();
console.log(convertedLoginEmail);
console.log(convertedLoginEmail === userEmail);

///////replace part of the string -method replace()
const priceGB = '125.54$';
const priceBYN = priceGB.replace('.', ',').replace('$', 'BYN');
console.log(priceBYN);

const announcement =
  'All passenger come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate')); /// replace all

/// also it's possible with regex using

console.log(announcement.replace(/door/g, 'gate'));

///////////////// Booleans

const plane1 = 'Airbus320neo';

console.log(plane1.includes('320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Air'));
console.log(plane1.endsWith('neo'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of new airbus family');
}

//////exercise

const luggageList = 'knife, passport, phone';
const luggageList1 = 'glass, passport, phone';

const handLuggagePermit = function (lug) {
  if (lug.toLowerCase().includes('knife')) {
    console.log(`you cant take it on the board`);
  } else console.log(`you can pass`);
};

handLuggagePermit(luggageList);
handLuggagePermit(luggageList1);

///////////////////////////////////////////
//27.05.2023////////////////     Maps//////

// maps - data structure to unite keys with values. that key can be any type not only string

// const rest = new Map();

// /////////ad data into the map

// rest.set('name', 'Classico italiano');
// rest.set(1, 'Roma');
// rest.set(2, 'Milan');
// rest.set('seats', 23);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 12)
//   .set('close', 24)
//   .set(true, 'we are open')
//   .set(false, 'we are close');

// console.log(rest); // shown Map(3) {"name" => "Classico italiano", "city" => "Roma", "seats" => 23}

// /////////// gettin data from the map

// const restSeats = rest.get('seats');

// console.log(restSeats);
// console.log(rest.get(true));

// const time = 21;
// const workStatus = rest.get(
//   time > rest.get('open') && time < rest.get('close') ? true : false
// );
// console.log(workStatus);

// //////check key - method has

// console.log(rest.has('seats'));
// console.log(rest.has('owner'));

// // deleting from the map

// // rest.delete('seats');
// console.log(rest);

// ////// size of the map - method .size()

// console.log(rest.size);

// /////using arrays as a map keys
// const test = [1, 2, 3];
// // rest.set([1, 2, 3], 'major');
// rest.set(test, 'major');
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);

// // console.log(rest.get([1, 2, 3])); // shown undefined
// console.log(rest.get(test));

////////////maps iteration/////////////
///////////////////////////////////////

// const question = new Map([
//   ['question', 'what is the best programming language ?'],
//   [1, 'c'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'try again'],
// ]);

// console.log(question);

// ////convert object to map

// const workHoursMap = new Map(Object.entries(workHours));
// console.log(workHoursMap);

//// for loop is available for map

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} is ${value}`);
// }

// getting answer from the user

// const answer = Number(prompt(question.get('question')));

// const inToConsole = question.get(question.get('correct') === answer);

// console.log(inToConsole);

// below my variant, above - teachers variant (lines 154-156)
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

///////convert map into array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

//////////////////////////////////////////////////////////////////////////////////
////////17.07.2023/////////////////////////17/07/2023////////////////////////

//// lesson 117 as a string property

/////////////////////////////////////////////////////////////////////////////////
/////////16.05.2023/////////////////////16.05.2023//////////////////////////////

// Lesson 116 sets/////////////////////////////////////////////////////////////

//// create set ==>>
// const orderSet = new Set(['Pasta', 'pizza', 'pizza', 'risotto', 'Pasta']);

// console.log(orderSet);

// ///// representing string as a set===>>>
// console.log(new Set('Andy'));

// //// get set size ===>>>
// console.log(orderSet.size);

// ////// check set some value
// console.log(orderSet.has('risotto'));
// console.log(orderSet.has('gelatto'));

// ///////add to the set
// orderSet.add('gelatto');
// orderSet.add('latte');
// orderSet.add('latte');
// console.log(orderSet);

// ////// delete from the set
// orderSet.delete('latte');
// console.log(orderSet);

// /////// delete whole set

// // console.log(orderSet.clear());
// // console.log(orderSet);

// ////// looping set

// for (const order of orderSet) {
//   console.log(order);
// }

// /////// searchin uniq values

// const staff = ['chef', 'waiter', 'barista', 'hostess', 'waiter', 'chef'];

// const staffSet = new Set(staff);

// ////// here spread operator allows to transform set into array===>>>
// const arrayFromSet = [...staffSet];
// console.log(arrayFromSet);
// console.log(typeof arrayFromSet);

// console.log(staff);
// console.log(staffSet);

// //////////example
// console.log(
//   new Set(['chef', 'waiter', 'barista', 'hostess', 'waiter', 'chef']).size
// ); // here we get that size = 4;

// console.log(new Set('AndyMandy').size); /// we get 6 as a unique symbols

//////////////////15.05.2023/////////////////////////////////////////////////////////
//lesson 114 - looping objects: object keys, values and entries

//114.1  looping object - property names

// const property = Object.keys(workHours);
// console.log(property);

// console.log(`we are open ${property.length} days`);

// for (const day of Object.keys(workHours)) {
//   console.log(day);
// }
//=>=>=>

// for (const day of property) {
//   console.log(day);
// }

// let openStr = `we are open ${property.length} days: `;
// ////=>=>=>
// for (const day of property) {
//   openStr += `${day} `;
// }
// console.log(openStr);

//114.2 looping objects - property values

// const objValues = Object.values(workHours);
// console.log(objValues);

///114.3 property entries (entire object)

// const objEntries = Object.entries(workHours);
// console.log(objEntries);

// for (const [day, { open: openH, close: closeH }] of objEntries) {
//   // console.log(x); //<<<== we get array which contains key and value
//   console.log(`On ${day} we open at ${openH} and close at ${closeH}`);
// }

////////optional chaining

/////earlier it looked like:
// if (restaurant.workHours.mon) {
//   console.log(restaurant.workHours.mon.open);
// }

// if (restaurant.workHours.fri) {
//   console.log(restaurant.workHours.fri.open);
// }
/////// or even

// if (restaurant.workHours && restaurant.workHours.sat) {
//   console.log(restaurant.workHours.sat.open);
// }

/////// lesson 113 optional chaining since ES2020
// console.log(restaurant.workHours.mon?.open);
// console.log(restaurant.workHours.thu?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const openTime = restaurant.workHours[day]?.open ?? 'closed';

//   console.log(`On ${day} we open at ${openTime}`);
// }

////////methods

// console.log(restaurant.order?.(0, 1) ?? 'method doesnt exist');
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

////arrays

// const restUsers = [
//   {
//     name: 'sergio',
//     phone: 1235,
//   },
//   {
//     name: 'Petro',
//   },
// ];

// console.log(restUsers[0]?.name ?? 'array is empty');

// for action like in line 106 earlier we should do it that way

// if (restUsers.length > 0) {
//   console.log(restUsers[0].name);
// } else {
//   console.log('array is empty');
// }

// console.log(3 || 'done'); // 3
// console.log('' || 'Andy'); // 'andy'
// console.log(true || 0); // true
// console.log(undefined || null);

// console.log(undefined || '' || 0 || 'hello' || 23);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

// const guests2 = restaurant.numGuests || 15;
// console.log(guests2);

// console.log('----And----');

// console.log(7 && 0);
// console.log('jonas' && undefined);
// console.log('jony' && 'andy');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('onion', 'olives');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //////// lesson 111 looping array

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }
// below old style
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 2}: ${el}`);
// }

////112 enhanced object-literals

// console.log([...menu.entries()]);
//////rest pattern

// const pizzaIngredients = ['mozarella', 'basilic', 'becon', 'olives'];

// ///////order pizza get ingredient as spreaded array;
// restaurant.orderPizza(...pizzaIngredients);

// //////orderpizza function get ingredients ass list of string
// restaurant.orderPizza('mushrooms', 'olives', 'cucumbers');

// const arr = [1, 2, 3, 6, 7];

// const [a, b, ...others] = [1, 6, 5, 7, 9, 11];

// console.log(a, b, others);

// const [pizza, , rissotto, ...othersFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, rissotto, othersFood);
// console.log(pizza);

// ///////objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// /////////functions
// ////below line 73 we use rest operator to collect data into array
// const add = function (...numbers) {
//   let sum = 0;
//   for (let j = 0; j < numbers.length; j++) {
//     sum += numbers[j];
//   }
//   return sum;
// };
// console.log(add(1, 7));
// console.log(add(2, 5, 6, 9));
// console.log(add(2, 3, 8, 7));

// /////////
// const x = [1, 3, 6, 5];

// console.log(add(...x)); /// here we use spread operator

// const ingridientsList = ['chees', 'cream', 'tomatoe'];

// restaurant.orderPasta(...ingridientsList);

// const arr = [7, 8, 9];
// const badNewArray = [1, 5, arr[0], arr[1], arr[2]];

// console.log(badNewArray);

///// using the soread operator
// const newArray = [1, 5, ...arr];
// console.log(newArray);

// console.log(...newArray);

////// below creating new array by cpying old with spread operator and adding new position
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

///////copy array

// const mainMenuCopy = [...restaurant.mainMenu];

//////join arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

/////iterables: arrays, strings, maps, sets but not objects

// const stringName = 'Andy';
// const nameByLetters = [...stringName, '', 'j'];

// console.log(nameByLetters);
// const [firstLetter, secondLetter, ...lastLetters] = nameByLetters;

// console.log(firstLetter, secondLetter, lastLetters);

// const ingredients = [
//   prompt('let is do pasta.choose ingredient 1'),
//   prompt('ingredient 2'),
//   prompt('ingredient 3'),
// ];

// restaurant.orderPasta(...ingredients);

////////rest operator

/////////spread with objects

// const newRestaurant = { ...restaurant, founder: 'Marko', founded: 1992 };
// console.log(newRestaurant);

// /////copy objects

// const copyRestaurant = { ...restaurant };
// copyRestaurant.name = 'Tavolo di casa';

// console.log(copyRestaurant);
// console.log(restaurant);

// restaurant.orderDelivery({
//   time: '22.10',
//   address: 'Fatina Street',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// const order02 = restaurant.orderDelivery({
//   address: 'lenina str',
// });

// // console.log(typeof order02);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);
// console.log(tags);

// ////// set defaults values
// const { menu = [], starterMenu: starters = [], drinks = [] } = restaurant;
// console.log(menu, starters, drinks);

// /////////mutating values
// let a = 256;
// let b = 1024;
// const obj = { a: 25, b: 8, c: 56 };

// ({ a, b } = obj);
// console.log(a, b);

// ////////////nested objects
// // const { fri } = openingHours;
// // console.log(fri);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const orderN = restaurant.order(4, 3);

// console.log(orderN);

////array destructuring

// const arrayWithNumbers = [2, 8, 9, 5];
// // console.log(arrayWithNumbers[0]);
// // console.log(arrayWithNumbers[1]);
// // console.log(arrayWithNumbers[2]);
// // console.log(arrayWithNumbers[3]);

// const [j, k, ...restValues] = arrayWithNumbers;
// console.table(j, k, restValues);
// console.log(arrayWithNumbers);

// let [main, secondary, , , fifth = 'fusion'] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary]; // destructuring allow change  elements without adding additional variable
// console.log(main, secondary, fifth);

////////////////////
/////nested arrays

// const nestedArray = [2, 4, [5, 7]];

// // const [i, j, k] = nestedArray;
// //const [m, n] = k; /// destructuring inside destructuring
// //or this can be done such way it is also destructurin inside destructuring
// const [i, j, [k, m], n = 0] = nestedArray;
// // console.log(m, n);
// console.log(i, j, k, m, n);

// /// default values

// const [p, q, r = 2] = [5, 9];
// console.log(p, q, r);

//////destructuring objects
