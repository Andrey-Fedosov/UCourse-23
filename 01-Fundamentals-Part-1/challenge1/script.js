/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

"use strict";
// let marksHeight = 1.69;
// let marksWeight = 78;
// let johnsHeight = 1.95;
// let johnsWeight = 92;

// test data 2
// const marksHeight = 1.88;
// const marksWeight = 95;
// const johnsHeight = 1.76;
// const johnsWeight = 85;

// const marksBMI = marksWeight / marksHeight ** 2;
// const johnsBMI = johnsWeight / (johnsHeight * johnsHeight);

// const markHigherBMI = marksBMI >= johnsBMI;

// console.log(`Marks BMI is equal ${marksBMI}`);
// console.log(`Johns BMI is equal ${johnsBMI}`);

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

//if else operator
// if (marksBMI > johnsBMI) {
//   console.log(`Mark BMI is higher than Johns BMI`);
// } else {
//   console.log(`Johns BMI is higher than Marks BMI`);
// }

// ternary operator

// alert('ternary operator is working');

// const comparisonBMI =
//   marksBMI > johnsBMI
//     ? console.log(`Mark BMI is higher than Johns BMI`)
//     : console.log(`Johns BMI is higher than Marks BMI`);
// console.log(
//   `Marks BMI ${marksBMI} is bigger than Johns BMI (${johnsBMI}), this statement is  ${markHigherBMI}`
// );

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
// const scoreDolphin = [96, 108, 89];
// const scoreKoalas = [96, 108, 89]; /*[88, 91, 110];*/

// // const scoreKoalas = [89, 96, 108];
// // const scoreDolphin = [109, 95, 123];
// // const scoreKoalas = [109, 95, 123]; /* [97, 112, 101]*/

// let dolphinsTotalScore = 0;
// let koalasTotalScore = 0;

// for (let i = 0; i < scoreDolphin.length; i++) {
//   dolphinsTotalScore += scoreDolphin[i];
// }
// for (let i = 0; i < scoreKoalas.length; i++) {
//   koalasTotalScore += scoreKoalas[i];
// }

// let dolphinsAverageScore = dolphinsTotalScore / scoreDolphin.length;
// let koalasAverageScore = koalasTotalScore / scoreKoalas.length;

// console.log(dolphinsAverageScore);
// console.log(koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//   console.log(`The winner is Dolphins`);
// } else if (
//   dolphinsAverageScore < koalasAverageScore &&
//   dolphinsAverageScore >= 100
// ) {
//   console.log(`The winner is Koalas`);
// } else if (
//   (dolphinsAverageScore = koalasAverageScore && dolphinsAverageScore >= 100)
// ) {
//   console.log(`today is drow`);
// } else {
//   console.log(`we've got no winner`);
// }

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
// my variant
// const billValue = 275;
// const billValue = 40;
// const billValue = 430;
// let tip;
// let totalBill;

// const tipValue =
//   billValue >= 50 && billValue <= 300
//     ? (tip = billValue * 0.15)
//     : (tip = billValue * 0.2);
// totalBill = billValue + tip;
// console.log(
//   `The bill was ${billValue}, so tip was ${tip}, total bil was ${totalBill}`
// );

// teacher's variant
/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, total value was ${bill + tip}`
);
