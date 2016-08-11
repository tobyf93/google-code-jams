const forEachCase = require('./cases.js');

const indexesAscending = (a, b) => {
  a++;
  b++;

  if (a < b) {
    return `${a} ${b}`;
  } else {
    return `${b} ${a}`;
  }
}

forEachCase('./large.in', (args) => {
  const credit = parseInt(args[0]);

  // Convert each element in array to an object to keep track of 'originalIndex'
  let items = args[2].split(' ').map((item, i) => {
    return {
      originalIndex: i,
      value: parseInt(item)
    }
  });

  // Sort in ascending order
  items.sort((a, b) => a.value - b.value);

  //Find the highest sum that is less than or equal to 'credit'
  const lowest = items[0].value;
  for (var i = items.length - 1; i > 0; i--) {
    let sum = lowest + items[i].value;

    if (sum === credit) {
      return indexesAscending(items[0].originalIndex, items[i].originalIndex);
    } else if (sum < credit) {
      break;
    }
  }

  // Discard all items greater than 'i'
  items = items.slice(0, i + 1);

  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      let sum = items[i].value + items[j].value;
      if (sum === credit) {
        return indexesAscending(items[i].originalIndex, items[j].originalIndex);
      }
    }
  }
});
