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
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value == '') {
    delete records[id][prop];
  } else if (prop !== 'tracks' && value != '') {
    records[id][prop] = value;
  } else if (prop === 'tracks' && value !== '') {
    if (!records[id].hasOwnProperty(prop)) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  console.log(records);
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love');
updateRecords(recordCollection, 2468, 'tracks', 'Free');
