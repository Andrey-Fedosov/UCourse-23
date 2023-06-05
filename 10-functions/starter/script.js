'use strict';
//////// 01.06.2023
/////// chapter 10 - functions

/// lesson 128 - default parameters

/////adding default parameters

// const bookings = [];

// const bookingFlight = function (
//   flightNumber,
//   numberOfPassengers = 3, // this is default number of passengers
//   price = 50 * numberOfPassengers // this is default price = 50
// ) {
//   //earlier es5 setting default values take this way⬇️ lines 17-18
//   // numberOfPassengers = numberOfPassengers || 15;
//   // price = price || 50

//   const booking = {
//     flightNumber,
//     numberOfPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// bookingFlight('123jfk', 15, 54);
// bookingFlight('123jfk');
// bookingFlight('123jfk', 16);
// bookingFlight('123jfk', undefined, 500);

// console.log(bookings);

// function find(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) return i;
//   }
//   return 'Not found';
// }
///////// 02.06.2023 //////lesson 129

const flight = 'LH238';
const Andy = {
  name: 'Andy Fedos',
  pasport: 375291989,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.pasport === 375291989) {
//     alert('Check in!');
//   } else {
//     alert('Wrong passport' + passenger.pasport);
//   }
//   console.log(flightNum);
// };

// checkIn(flight, Andy);

// console.log(flight); /// flight stays the same like in line 44 - LH238
// console.log(Andy); /// shown {name: 'Mr.Andy Fedos', pasport: 375291989} - name property has changed - andvlooks like in function mask

// const flightNum = flight;
// const passenger = Andy;
//manipulate with passenger object is the same as manipulate with andy object because they are the same object in the memory heap

// passing the primitive type in function is the same as a copying, like in line 67

// const newPassport = function (person) {
//   person.pasport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(Andy); /// running of this function changes value pasport property in the object Andy

// checkIn(flight, Andy); //// and it leads that function checkIn  works incorrect because we get new pasport nuber which is equal to right number
// console.log(Andy); //// we get {name: 'Mr.Andy Fedos', pasport: 4325891563} and every function running will give new pasport number in andy object

////////////04.06.2023- 05.06.2023
////////callback function

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
// console.log(oneWord('Planet Earth'));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  // console.log(first, others);
  return [first.toUpperCase(), ...others].join(' ');
};
console.log(upperFirstWord('Planet Earth is our home'));

const transformString = function (str, fn) {
  console.log(fn(str));
};

transformString('all we need is love', oneWord);
transformString('all we need is love', upperFirstWord);

const high5 = function () {
  console.log(`Hello 👋`);
};

document.body.addEventListener('click', high5); // in this case high5  is a callback fuction which lounched when we click o  a page

['andy', 'mandy', 'semen', 'anton'].forEach(high5);

////////////lesson 125s
/////// funtion returns function

const greetMe = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

greetMe('hi')('pete'); /// one of the variant of writng the function that returns another function

const greetHolla = greetMe('holla');

greetHolla('Raul'); ///lines 123-124 also one way to wright function that return  another function

const greetArrow = greet => firstName => {
  console.log(`${greet}, ${firstName}`);
};

greetArrow('pryvet')('dude');
