// // [1, 2, 3, 4, 5], 3;
//  1  < 3  1 < 3

//  diff(n - init) < diff(n - element)

const reducer = function (init, element) {
  if (Math.abs(element - init[0]) < Math.abs(init[1] - init[0])) {
    init[1] = element;
  }

  return init;
};

function findNearest(array, n) {
  return array.reduce(reducer, [n, 0])[1];
}
console.log(findNearest([1, 0, 3, 8], 5));
console.log(findNearest([1, 2, 3], 2));
console.log(findNearest([1, 2, 6], 4));
console.log(findNearest([1, 2, 6, 10], 9));
console.log(findNearest([1, 2, 3, 4, 6, 7, 8, 9], 5));