function multiplication(multiplicant, multiplier) {
  let numberOfOnes = 0;
  let number = multiplier;

  while (number > 2) {
    number = number >> 1;
    numberOfOnes++;
  }

  const remiander = number === 2 ? multiplicant << 1 : multiplicant;

  return multiplicant << numberOfOnes + remiander;
}

console.log(multiplication(2, 4));