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

/////// optional chaining since ES2020
console.log(restaurant.workHours.mon?.open);
console.log(restaurant.workHours.thu?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const openTime = restaurant.workHours[day]?.open ?? 'closed';

  console.log(`On ${day} we open at ${openTime}`);
}

////////methods

console.log(restaurant.order?.(0, 1) ?? 'method doesnt exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

////arrays

const restUsers = [
  {
    name: 'sergio',
    phone: 1235,
  },
  {
    name: 'Petro',
  },
];

console.log(restUsers[0]?.name ?? 'array is empty');

// for action like in line 106 earlier we should do it that way

if (restUsers.length > 0) {
  console.log(restUsers[0].name);
} else {
  console.log('array is empty');
}

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
