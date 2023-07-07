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

// Coding Challenge #4

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const calcFoodPortion = function (dogArr) {
  dogArr.forEach((dog) => {
    dog.food = Math.trunc(dog.weight ** 0.75 * 28);
  });
  return dogArr;
};
console.log(calcFoodPortion(dogs));

//*07.07.2023 challenge

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// teacher's variant

const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));

console.log(dogSarah);

const isNormalPortion = function (owner) {
  if (owner.curFood > owner.food * 1.1) {
    console.log('dog eats too much');
  } else if (owner.curFood < owner.food * 0.9) {
    console.log('dog eats too little');
  } else {
    console.log('dog eats normal');
  }
};

isNormalPortion(dogSarah);
console.log(
  `Sarah's dog eats too ${dogSarah.curFood > dogSarah.food ? `much` : `little`}`
);

// isNormalPortion(150, 200);
// isNormalPortion(200, 180);
// isNormalPortion(200, 200);

// const checkFood = function (dogArr, ownerName) {
//   dogArr.forEach((dog) =>
//     dog.owners.includes(ownerName)
//       ? isNormalPortion(dog.food, dog.curFood)
//       : dog
//   );
// };

// checkFood(dogs, 'Sarrah');

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.food)
  .map((dog) => dog.owners)
  .flat();

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.food)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//* 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//* 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

console.log(dogs.some((dog) => dog.curFood === dog.food));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const isNormal = (dog) =>
  dog.curFood > dog.food * 0.8 && dog.curFood < dog.food * 1.1;

console.log(dogs.some(isNormal));

//

console.log(dogs.filter(isNormal));
console.log(dogs.filter(isNormal).flatMap((dog) => dog.owners));

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

const dogsCopy = dogs.slice().sort((a, b) => a.food - b.food);

console.log(dogsCopy);

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:

// GOOD LUCK 😀
