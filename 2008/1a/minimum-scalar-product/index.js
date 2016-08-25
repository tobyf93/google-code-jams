const { forEachCase, parseIntArray } = require('./helpers.js');
const input = process.argv[2];

const ascending = (a, b) => a - b;
const descending = (a, b) => b - a;

forEachCase(input, (args) => {
  let xVectors = parseIntArray(args[1]);
  let yVectors = parseIntArray(args[2]);

  xVectors.sort(ascending);
  yVectors.sort(descending);

  let total = 0;
  for (let i = 0; i < xVectors.length; i++) {
    total += xVectors[i] * yVectors[i];
  }

  return total;
});
