function createArray(value, times) {
  const array = [];
  for (let i = 0; i < times; i++) {
    array.push(value);
  }
  
  return array;
}

function rectanglePattern(dimensions) {
  const createLine = function () {
    return "*".repeat(dimensions[0]);
  };

  const array = createArray(dimensions[0], dimensions[1]);
  return array.map(createLine).join("\n");
}

function generatePattern(style, dimensions) {
  return rectanglePattern(dimensions);
}

function testGeneratePattern(style, dimensions, expected, failed) {
  const actual = generatePattern(style, dimensions);
  if (actual !== expected) {
    failed.push([style, dimensions, actual, expected]);
  }
}

function testRectanglePattern(failed) {
  testGeneratePattern("rectangle", [3, 3], "***\n***\n***", failed);
  testGeneratePattern("rectangle", [4,4], "****\n****\n****\n****", failed);
}

function testAll() {
  const failed = [];

  testRectanglePattern(failed);

  console.table(failed);
}

testAll();