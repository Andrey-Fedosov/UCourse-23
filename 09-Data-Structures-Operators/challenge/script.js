"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/////// challenge 1

// 1. Create one player array for each team (variables 'players1' and 'players2')

// const [...players1] = game.players[0];
// const [...players2] = game.players[1];

// or

// const [players12, players22] = game.players;
// console.log(players12, players22);

//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// const [gk, ...fieldPlayers] = players1;

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// const [...allPlayers] = [...players1, ...players2];

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// const [...players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5 Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
//or look below

// let team1 = game.odds.team1;
// let draw = game.odds.x;
// let team2 = game.odds.team2;

//6 Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoals = function (playerName) {
//   let numberGoals = 0;
//   for (let j = 0; j < game.scored.length; j++) {
//     if (playerName === game.scored[j]) {
//       numberGoals++;
//     }
//   }
//   console.log(`${playerName} scored ${numberGoals} goal `);
// };

// printGoals('Lewandowski');
// printGoals('Gnarby');

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller');
// printGoals(...game.scored);
//7 The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// team1 < team2 && console.log('team 1 is likely winner');
// team2 < team1 && console.log('team2 is likely winner');

// console.table(team1, draw, team2);
// console.log(players2);

// const myTestString = 'a', 'b';

//15.05.2023 Coding Challenge #2

// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
const scoredArray = game.scored;

for (const [i, goal] of scoredArray.entries()) {
  console.log(`Goal ${i + 1} - ${goal}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const oddObject = game.odds;

const oddValues = Object.values(oddObject);
let oddsSum = 0;
for (const value of oddValues) {
  oddsSum += value;
}
console.log(oddsSum / oddValues.length);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

const oddObjectEntries = Object.entries(oddObject);
for (const [team, teamOdd] of oddObjectEntries) {
  if (team == "x") {
    console.log(`Odd of draw: ${teamOdd}`);
  } else {
    console.log(`Odd of victory ${game[team]} : ${teamOdd}`);
  }
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

const scorers = {};

for (const x of scoredArray.entries()) {
  const { goal, j } = [x];
  console.log(goal);
}

// GOOD LUCK 😀

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).




4

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no duplicates)

// const events = [...new Set(gameEvents.values())]; // we get array
// const events1 = new Set([...gameEvents.values()]); // we get set

// console.log(events);
// console.log(events1);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// const deletedEvent = gameEvents.delete(64);
// // gameEvents.delete(69);
// console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// teacher variant

// const time = [...gameEvents.keys()].pop(); // to get time of last event
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// . Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL

//teachers variant

// for (const [min, eve] of gameEvents) {
//   const half = min <= 45 ? 'first' : 'second';
//   console.log(`[${half} half] ${min}: ${eve}`);
// }
// below my variant
// for (const [time, event] of gameEvents) {
//   if (time <= 45) {
//     console.log(`[First Half] ${time}: ${event}`);
//   } else {
//     console.log(`[Second Half] ${time}: ${event}`);
//   }
// }

///////////////////////////////////////
// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// console.log(flights.split("+"));
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const outputData = `${
    type.includes("_Delayed") ? "🔴" : " "
  }${type.replaceAll("_", " ")} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")})`;
  console.log(outputData.padStart(50, " "));
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = ${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// const textareaText = document.querySelector("textarea").value;
/////// below lines 312-326 my variant of coding 4 task
// const convertName = function (text) {
//   let tempStr = text.replaceAll("\n", ",");
//   let tempArr = tempStr.split(",");
//   let newArr = [];

//   for (const item of tempArr) {
//     const secondWord1Char = item[item.indexOf("_") + 1];
//     // console.log(item, secondWord1Char);
//     newArr.push(
//       item.toLowerCase().replace(/_./, secondWord1Char.toUpperCase()).trim()
//     );
//   }
//   console.log(newArr.join("\n"));
// };
// document.querySelector("button").addEventListener("click", function());

// convertName(
//   "undeRscore_CaSe\n ClIEnT_nAMe\nSome_VariaBLe\n calculate_AGE\n DelAYED_depARTUre"
// );

//////below⬇️ teachers variant

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// const textareaText = document.querySelector("textarea").value;
// document.querySelector("button").addEventListener("click", function () {
//   const textareaText = document.querySelector("textarea").value;
//   const rows = textareaText.split("\n");

//   for (const [j, item] of rows.entries()) {
//     const [firstPart, secondPart] = item.toLowerCase().trim().split("_");
//     const outputV = `${firstPart}${secondPart
//       .replace(secondPart[0], secondPart[0].toUpperCase())};
//     console.log(`${outputV.padEnd( 20, )}`);
//   }
//   console.log(rows);

// // console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
