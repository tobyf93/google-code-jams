const fs = require('fs');

const forEachCase = (inputPath, callback) => {
  const input = fs.readFileSync(inputPath).toString();
  const lines = input.split('\n');
  const numberOfCases = lines[0];
  const caseLength = (lines.length - 1) / numberOfCases;

  for (let caseIndex = 0; caseIndex < numberOfCases; caseIndex++) {
    let lineIndex = 1 + caseIndex * caseLength;
    let args = lines.slice(lineIndex, lineIndex + caseLength);
    let output = callback(args);
    console.log(`Case #${caseIndex + 1}: ${output}`);
  }
}

module.exports = forEachCase;
