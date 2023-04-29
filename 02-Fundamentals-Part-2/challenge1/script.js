'use strict';
// console.log('hi,man');

// Coding Challenge #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// GOOD LUCK

// const calcAverage = function (score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// };
// // const teamAverage = function (
// //   dolphinScore1,
// //   dolphinScore2,
// //   dolphinScore3,
// //   koalasScore1,
// //   koalasScore2,
// //   koalasScore3
// // ) {
// //   const dolphinAverageScore = calcAverage(
// //     dolphinScore1,
// //     dolphinScore2,
// //     dolphinScore3
// //   );
// //   const koalaAverageScore = calcAverage(
// //     koalasScore1,
// //     koalasScore2,
// //     koalasScore3
// //   );

// // let avgDolphins = function (a, b, c) {
// //   return calcAverage(a, b, c);
// // };

// // let avgKoalas = function (a, b, c) {
// //   return calcAverage(a, b, c);
// // };

// let dolphinsScore = calcAverage(44, 23, 71);
// let koalasScore = calcAverage(65, 54, 49);

// console.log(dolphinsScore, koalasScore);

// // console.log(avgDolphins(44, 23, 71), avgKoalas(65, 54, 49));
// // console.log(avgDolphins(85, 54, 41), avgKoalas(23, 11, 11));

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`dolphins have won (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`koalas have won (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`there is no winner`);
//   }
// };

// checkWinner(dolphinsScore, koalasScore);

// dolphinsScore = calcAverage(85, 54, 41);
// koalasScore = calcAverage(23, 34, 27);

// console.log(dolphinsScore, koalasScore);
// checkWinner(dolphinsScore, koalasScore);

// avgDolphins(85, 54, 41);
// avgKoalas(23, 11, 12);

// checkWinner(avgDolphins, avgKoalas));

/////////////////////////////////////////////
// part 2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44
*/
// const calcTip = function (billValue) {
//   const tipValue =
//     billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
//   return tipValue;
// };

// const calcTip2 = (billValue) =>
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// // console.log(calcTip(100));

// const billValueList = [125, 555, 300];

// let tipValueList = [];
// tipValueList.push(calcTip2(billValueList[0]));
// tipValueList.push(calcTip2(billValueList[1]));
// tipValueList.push(calcTip2(billValueList[2]));

// const totalBill = [billValueList[0] + tipValueList[0]];

// totalBill.push(billValueList[1] + tipValueList[1]);
// totalBill.push(billValueList[2] + tipValueList[2]);

// console.log(billValueList, tipValueList, totalBill);

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
//

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};

for (let b = 0; b < bills.length; b++) {
  tips.push(calcTip(bills[b]));
  totals.push(bills[b] + tips[b]);
}

const calcAverage = function (arr) {
  let summs = 0;
  for (let i = 0; i < arr.length; i++) {
    summs += arr[i];
  }
  return summs / arr.length;
};

console.log(calcAverage(bills));
console.log(calcAverage([10, 12, 14]));

// console.log(bills, tips, totals);
