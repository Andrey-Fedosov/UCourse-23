'use strict';
//////// 01.06.2023
/////// chapter 10 - functions

/// lesson 128 - default parameters

/////adding default parameters

const bookings = [];

const bookingFlight = function (
  flightNumber,
  numberOfPassengers = 3, // this is default number of passengers
  price = 50 * numberOfPassengers // this is default price = 50
) {
  //earlier es5 setting default values take this way⬇️ lines 17-18
  // numberOfPassengers = numberOfPassengers || 15;
  // price = price || 50

  const booking = {
    flightNumber,
    numberOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

bookingFlight('123jfk', 15, 54);
bookingFlight('123jfk');
bookingFlight('123jfk', 16);
bookingFlight('123jfk', undefined, 500);

console.log(bookings);
