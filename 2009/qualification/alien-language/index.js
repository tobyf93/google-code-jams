const { forEachCase } = require('./helpers.js');
const input = process.argv[2];

forEachCase(input, (alienLines, testCase) => {
  let regexString = testCase.replace(/\(/g, '[');
  regexString = regexString.replace(/\)/g, ']');
  let re = new RegExp(regexString);

  let count = 0;
  alienLines.forEach((alienLine) => {
    if (alienLine.match(re)) {
      count++;
    }
  });

  return count;
});
