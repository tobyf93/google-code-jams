const { forEachCase } = require('./helpers.js');
const input = process.argv[2];

// TODO: Would like to find out how to match all tokens wrapped in parenthesis
// so i don't have to do this manual stuff.  /\(.+\)/ wasn't giving me the results
// i was looking for.
const makeRegEx = (testCase) => {
  let regExString = '';
  const letters = testCase.split('');

  let optional = false;
  let optionalLetters = [];

  letters.forEach((letter) => {
    if (letter === '(') {
      optional = true;
      regExString += '(';
      return;
    } else if (letter === ')') {
      optional = false;
      regExString += optionalLetters.join('|');
      optionalLetters = [];
      regExString += ')';
      return;
    }

    if (optional) {
      optionalLetters.push(letter);
    } else {
      regExString += letter;
    }
  });

  return new RegExp(regExString);
};

forEachCase(input, (alienLines, testCase) => {
  const re = makeRegEx(testCase);

  let count = 0;
  alienLines.forEach((alienLine) => {
    if (alienLine.match(re)) {
      count++;
    }
  });

  return count;
});
