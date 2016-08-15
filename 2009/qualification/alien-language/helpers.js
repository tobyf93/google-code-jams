const fs = require('fs');

module.exports = {
  forEachCase,
  parseIntArray
};

function forEachCase(inputPath, callback) {
  const input = fs.readFileSync(inputPath).toString();
  let lines = input.split('\n');

  const info = parseIntArray(lines.shift());
  const wordLength = info[0];
  const numberOfAlienLines = info[1];

  const alienLines = lines.splice(0, numberOfAlienLines);
  const cases = lines;

  for (let i = 0; i < cases.length; i++) {
    const output = callback(alienLines, cases[i]);
    console.log(`Case #${i + 1}: ${output}`);
  }
}

function parseIntArray(array) {
  array = array.split(' ');
  return array.map((item) => parseInt(item));
}
