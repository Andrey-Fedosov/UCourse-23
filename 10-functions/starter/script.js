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

// const high5 = function () {
//   console.log(`Hello 👋`);
// };

// document.body.addEventListener('click', high5); // in this case high5  is a callback fuction which lounched when we click o  a page

// ['andy', 'mandy', 'semen', 'anton'].forEach(high5);

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

////lesson 134  - call an d apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  ///below⬇️ will be a function

  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};

lufthansa.book(856, 'andy fedosov');
lufthansa.book(253, 'Mandy pedos');

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

////to add to this object bookfunction we shouldn't copy it from previous object. because when we copy it we take of it from initial object.
// i mean it's bad idea to lounch the book function out of its object.
// to solve this problem - we should use three keywords: call, apply, bind

/////using call keyword
book.call(eurowings, 23, 'Sarrah Smith');

console.log(eurowings);

/// it looks like we call function book (that in its functionality is the same as lufthansa.book function ) for eurowings object and besides we use 23 as a flightNum , and a sarrah Smith as a passengerName

book.call(lufthansa, 149, 'Shimon Zlateck');
console.log(lufthansa);

const belavia = {
  airline: 'Belavia',
  iataCode: 'B2',
  bookings: [],
};

book.call(belavia, 301, 'Andy Fedos');
console.log(belavia);

//// apply method

const flightData = [444, 'Pete Shmit'];

book.apply(belavia, flightData);

console.log(belavia);

//// nowadays the better practise is to use call method and spread operator line 202

const flightData2 = [258, 'Helen krochek'];

book.call(eurowings, ...flightData2);
console.log(eurowings);

///////////06.06.23
///////// bind method

// for the start
// book.call(eurowings, 456 'John Smith');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookB2 = book.bind(belavia);
bookEW(23, 'John Smith'); //

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Misha Fedos');
bookEW23('AndyFedos');

//////using bind Method with event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

// const buyPlaneLH = buyPlane.bind(lufthansa);
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//////partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.25, 200));

const addVAT = addTax.bind(null, 0.2); // it is equal to
// addVAT = value + value * 0.2

console.log(addVAT(300));

const addTax2 = function (value) {
  return function (rate) {
    console.log(value * (1 + rate));
  };
};

const addTo2K = addTax2(2000);
addTo2K(0.3);

const addTax3 = value => rate => console.log(value * (1 + rate));

addTax3(100)(0.5);
