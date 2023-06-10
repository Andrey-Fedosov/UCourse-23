'use strict';

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

let poll = {
  question: 'What is your favourite programming language?',
  answers: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  results: [0, 0, 0, 0],
  registerAnswer: function () {
    // const pollAnswer = Number(
    //   prompt(`${this.question}
    // 0: ${this.answers[0]},
    // 1: ${this.answers[1]},
    // 2: ${this.answers[2]},
    // 3: ${this.answers[3]}`)
    // );

    const pollAnswer = Number(
      prompt(
        `${this.question}\n${this.answers.join('\n')}\n(Write option number)`
      )
    );

    if (
      typeof pollAnswer == 'number' &&
      pollAnswer >= 0 &&
      pollAnswer < this.answers.length
    ) {
      this.results[pollAnswer]++;
    } else {
      alert('incorrect answer');
    }

    ////teacher uses short circuitng notation
    // it looks next way
    // typeof pollAnswer === 'number' && pollAnswer >= 0 && pollAnswer < this.answers.length && this.results[pollAnswer]++

    // displayResults: function (type) {
    //   const resultArr = this.results;
    //   const result =
    //     type === 'string' ? `Poll results are ${[...resultArr]}` : poll.results;
    //   return result;
    // }

    ///line 69-75 - my variant
    //below teachers variant
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.results);
    } else {
      console.log(`Poll results are ${this.results.join(', ')}`);
    }
  },
};

// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

// poll.registerAnswer();

//Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
/* 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)

1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?) */
// pol.type = 'string';
// pol.registerNewAnswer = function () {
//   let newAnswer = prompt(`${this.question}\n
//   0: JavaScript \n
//   1: Python \n
//   2: Rust \n
//   3: C++ \n
//   (Write option number)`);
//   if (
//     typeof newAnswer !== 'number' &&
//     newAnswer >= 0 &&
//     newAnswer < pol.answers.length
//   ) {
//     this.results[newAnswer]++;
//     pol.displayResults = function () {
//       pol.type === 'array'
//         ? console.log(this.results)
//         : console.log(`Poll results are ${pol.results.join(', ')}`);
//     };
//     // console.log(this.results);
//   } else {
//     alert('incorrect answer, try again');
//   }
// };

///////upper my variant of challenge⬆️
///////07.06.2023

// 2. Call this method whenever the user clicks the "Answer poll" button.
// document
//   .querySelector('.poll')
//   .addEventListener('click', pol.registerNewAnswer.bind(pol));

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerAnswer.bind(poll));

// console.log(pol);

// pol.registerNewAnswer();
// console.log;

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ results: [5, 2, 3] });
poll.displayResults.call({ results: [1, 5, 3, 9, 6, 1] }, 'string');

////////challenge 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'orange';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'green';
  });
})();
console.dir(function () {
  const header = document.querySelector('h1');
  header.style.color = 'orange';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'green';
  });
});
