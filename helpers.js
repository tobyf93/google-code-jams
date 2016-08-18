const fs = require('fs');

module.exports = {
  forEachCase,
  parseIntArray
};

function getLines(inputPath) {
  const input = fs.readFileSync(inputPath).toString();
  return input.split('\n');
}



// Parses 'inputPath' and runs each case using 'callback' function passed in.
// 'inputPath' must point to a file in the following format:
// Number of Test Cases
// Number of Lines in Test Case
// TEST CASE
// ...
function forEachCase(inputPath, callback) {
  let lines = getLines(inputPath);
  const numberOfTestCases = lines.shift();

  for (let i = 0; i < numberOfTestCases; i++) {
    const caseLength = lines.shift();
    const output = callback(lines.splice(0, caseLength));
    console.log(`Case #${i + 1}: ${output}`);
  }
}

function parseIntArray(array) {
  array = array.split(' ');
  return array.map((item) => parseInt(item));
}
