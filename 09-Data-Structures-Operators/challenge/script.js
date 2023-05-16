'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
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
  if (team == 'x') {
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
