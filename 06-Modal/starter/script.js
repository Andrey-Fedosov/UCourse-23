'use strict';

// const modalNode = document.querySelector('.modal');
// const showModal = document.querySelectorAll('.show-modal');
// const btnCloseModal = document.querySelector('.close-modal');
// const overlayNode = document.querySelector('.overlay');

// for (let j = 0; j < showModal.length; j++) {
//   showModal[j].addEventListener('click', function () {
//     modalNode.classList.remove('hidden');
//     overlayNode.classList.remove('hidden');
//   });
// }

// btnCloseModal.addEventListener('click', function () {
//   modalNode.classList.add('hidden');
//   overlayNode.classList.add('hidden');
// });

// overlayNode.addEventListener('click', function () {
//   modalNode.classList.add('hidden');
//   overlayNode.classList.add('hidden');
// });

// document.addEventListener('keydown', function (keyboardBtn) {
//   if (keyboardBtn.key === 'Escape') {
//     if (!modalNode.classList.contains('hidden')) {
//       modalNode.classList.add('hidden');
//       overlayNode.classList.add('hidden');
//     }
//   }
// });

/* const modal = document.querySelector('.modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlayBtn = document.querySelector('.overlay');

const closeModal = function () {
  modal.classList.add('hidden');
  overlayBtn.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlayBtn.classList.remove('hidden');
};

for (let j = 0; j < btnShowModal.length; j++) {
  btnShowModal[j].addEventListener('click', openModal);
}

///////////// refactoring closing action
btnCloseModal.addEventListener('click', closeModal);
overlayBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (keyEscape) {
  if (keyEscape.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});

document.addEventListener('keydown', function (keyDowned) {
  if (keyDowned.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}); */

/* const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');

for (let j = 0; j < btnShowModal.length; j++) {
  btnShowModal[j].addEventListener('click', function () {
    modalElement.classList.remove('hidden');
    overlayElement.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', function () {
  modalElement.classList.add('hidden');
  overlayElement.classList.add('hidden');
});

overlayElement.addEventListener('click', function () {
  modalElement.classList.add('hidden');
  overlayElement.classList.add('hidden');
});

document.addEventListener('keydown', function (keyDowned) {
  if (keyDowned.key === 'Escape') {
    if (!modalElement.classList.contains('hidden')) {
      modalElement.classList.add('hidden');
      overlayElement.classList.add('hidden');
    }
  }
}); */

// const showModalBtn = document.querySelectorAll('.show-modal');
// const modalWindowElement = document.querySelector('.modal');
// const closeModalBtn = document.querySelector('.close-modal');
// const overlayElement = document.querySelector('.overlay');

// const closeModal = function () {
//   modalWindowElement.classList.add('hidden');
//   overlayElement.classList.add('hidden');
// };

// for (let j = 0; j < showModalBtn.length; j++) {
//   showModalBtn[j].addEventListener('click', function () {
//     modalWindowElement.classList.remove('hidden');
//     overlayElement.classList.remove('hidden');
//   });
// }

// closeModalBtn.addEventListener('click', closeModal);

// overlayElement.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (keyDowned) {
//   if (keyDowned.key === 'Escape') {
//     if (!modalWindowElement.classList.contains('hidden')) {
//       closeModal();
//     }
//   }
// });

// Setup
//

let contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let j = 0; j < contacts.length; j++) {
    if (contacts[j].firstName === name) {
      if (contacts[j].hasOwnProperty(prop)) {
        console.log(contacts[j][prop]);
        return contacts[j][prop];
      } else {
        console.log('No such property');
        return 'No such property';
      }
    }
    console.log(`object ${j + 1} is checked`);
  }
  console.log('No such contact');
  return 'No such contact';
  // Only change code above this line
}

lookUpProfile('Bob', 'number');
