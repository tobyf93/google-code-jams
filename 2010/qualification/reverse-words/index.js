const forEachCase = require('./helpers.js').forEachCase;
const input = process.argv[2];

forEachCase(input, (args) => {
  let sentence = args[0];
  sentence = sentence.split(' ').reverse().join(' ');
  return sentence;
});
