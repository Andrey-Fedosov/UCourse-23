'use strict';

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const julieArr = [3, 5, 2, 12, 7];
// const kateArr = [4, 1, 15, 8, 3];
// const julieArr = [9, 16, 6, 8, 3];
const kateArr = [10, 5, 6, 1, 4];

// & 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

// const julieArrCopy = julieArr.slice();
// ? it also possible to do this way⬇️ - using spread operator
const julieArrCopy = [...julieArr];

julieArrCopy.splice(0, 1);
julieArrCopy.splice(-2);
console.log(julieArr);
console.log(julieArrCopy);

// & 2. Create an array with both Julia's (corrected) and Kate's data

// const mutualArr = julieArrCopy.concat(kateArr);
// ? it also possible to do this way⬇️ - using spread operator
const mutualArr = [...julieArrCopy, ...kateArr];

console.log(mutualArr);

// & 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

const checkDogs = function (arr) {
  arr.forEach(function (el, i) {
    const dogAge =
      el < 3
        ? `Dog number ${i + 1} is still a puppy 🐶`
        : `Dog number ${i + 1} is an adult, and is ${el} years old`;
    console.log(dogAge);
  });
};

checkDogs(mutualArr);

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const julieArr1 = [3, 5, 2, 12, 7];

// const calcAverageHumanAge = function (arr) {
//   //1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
//   const humanYears = arr.map(function (age) {
//     if (age <= 2) {
//       return age * 2;
//     } else return age * 4 + 16;
//   });

// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

//   const moreThan18 = humanYears.filter(function (years) {
//     return years >= 18;
//   });
//   console.log(humanYears);
//   console.log(moreThan18);

//   // 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

//   const calcAverage =
//     moreThan18.reduce((acc, el, i, arr) => acc + el / arr.length, 0) /
//     arr.length;

//   return calcAverage;
// };

// console.log(calcAverageHumanAge(julieArr1));
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

const 

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAgeRewrited = function (ages) {
  const averageAgeDog = ages
    .map((age) => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter((year, i, arr) => {
      return year > 18;
    })
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return averageAgeDog;
};

console.log(calcAverageHumanAgeRewrited([16, 6, 10, 5, 6, 1, 4]));
console.log(calcAverageHumanAgeRewrited([5, 2, 4, 1, 15, 8, 3]));
