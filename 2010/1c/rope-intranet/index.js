const { forEachCase } = require('./helpers.js');
const input = process.argv[2];

forEachCase(input, (args) => {
  console.log(args);
});
