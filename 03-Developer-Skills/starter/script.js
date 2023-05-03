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

/// if  we've got 2 arrays, we should merge 2 arrays

// const newCalcTemp = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let maxTemp = temps[0];
//   let minTemp = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];

//     if (typeof currTemp !== 'number') continue;

//     if (currTemp > maxTemp) maxTemp = currTemp;
//     if (currTemp < minTemp) minTemp = currTemp;
//   }
//   console.log(maxTemp, minTemp);

//   return maxTemp - minTemp;
// };

// console.log(newCalcTemp(temperatures, [17, 3, 8, -9]));

/////////////////////////////////////
///Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    value: Number(prompt('Degree Celcius')),
  };

  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

///////////////////////////////
// using debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug(
  [10, 15, -3, 0, 8],
  [20, 'yellow', 13, -6]
);

console.log(amplitudeBug);
