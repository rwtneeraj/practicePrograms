// array = [1,2,3,4,5] => 3   when list have odd numbers of element
// array = [2,3,4,5]   => 3.5 when list have even numbers of element

function mean(array) {
  const reducer = function (init, element) {
    init = init + element / 2;
    return init;
  };

  return array.reduce(reducer, 0);
}

const isEven = function (number) {
  return number % 2 === 0;
};

function median(array) {
  const getMedian = function (_, a, b, array) {
    if (isEven(array.length)) {
      return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    }

    return array[Math.floor(array.length / 2)];
  };

  return array.reduce(getMedian);
}

console.log(median([1, 2, 3, 4, 5]));
console.log(median([1, 2, 3, 4, 5, 6]));
// console.log(mean([1,2,3,4]));
// console.log(mean([1,1,1,1,1]));