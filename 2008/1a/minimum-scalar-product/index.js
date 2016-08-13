const { forEachCase, parseIntArray } = require('./helpers.js');
const input = process.argv[2];

forEachCase(input, (args) => {
  const xVectors = parseIntArray(args[1]);
  const yVectors = parseIntArray(args[2]);
});
