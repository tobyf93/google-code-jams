const forEachCase = require('./cases.js');

forEachCase('./small.in', (args) => {
  const credit = parseInt(args[0]);
  let items = args[2].split(' ').map((item) => parseInt(item));

  /*
  // items.sort((a, b) => a - b);
  Need to keep track of original indexes

  //Find the highest sum that is less than or equal to 'credit'
  const lowest = items[0];
  for (var i = items.length - 1; i > 0; i--) {
    let sum = lowest + items[i];

    if (sum === credit) {
      return `1 ${i + 1}`;
    } else if (sum < credit) {
      break;
    }
  }

  // Discard all items greater than 'i'
  items = items.slice(0, i + 1);
  */

  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      let sum = items[i] + items[j];
      if (sum === credit) {
        return `${i + 1} ${j + 1}`;
      }
    }
  }
});
