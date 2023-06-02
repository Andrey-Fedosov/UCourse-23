// alert('hello');
const dublicateDelete = function (arr) {
  const reversedArr = arr.reverse();
  const workSet = new Set(reversedArr);
  const resultArray = [...workSet].reverse();
  return resultArray;
};

dublicateDelete([3, 4, 4, 3, 6, 3]);
