// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////
/// using google, stackoverflow and mdn

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
// const calcAmplitude = function (temps) {
//   let minTemperature = temperatures[0];
//   let maxTemperature = temperatures[0];

//   for (let i = 0; i < temperatures.length; i++) {
//     const currentTemp = temperatures[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > maxTemperature) maxTemperature = currentTemp;
//     if (currentTemp < minTemperature) minTemperature = currentTemp;
//   }

//   console.log(maxTemperature, minTemperature);
//   return maxTemperature - minTemperature;
// };

// console.log(calcAmplitude(temperatures));

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]
// */

const printForecast = function (arr) {
  let printedString = '';
  for (let i = 0; i < arr.length; i++) {
    printedString += `${arr[i]} celcius in ${i + 1} days, `;
  }
  console.log(printedString);
};

printForecast([17, 21, 23]);

const testArray = [12, 5, -5, 0, 4];

printForecast(testArray);
