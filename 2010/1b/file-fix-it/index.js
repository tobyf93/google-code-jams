const forEachCase = require('./helpers.js').forEachCase;
const input = process.argv[2];

let fileSystem = {
  name: '/',
  children: []
};

const childIndex = (pointer, nodeName) => {
  for (let i = 0; i < pointer.children.length; i++) {
    let child = pointer.children[i];

    if (child.name === nodeName) {
      return i;
    }
  }

  return -1;
};

const mkdir = (path) => {
  let pointer = fileSystem;
  let count = 0;
  path = path.split('/').slice(1);

  path.forEach((nodeName) => {
    let i = childIndex(pointer, nodeName);

    if (i === -1) {
      let newChild = {
        name: nodeName,
        children: []
      };

      pointer.children.push(newChild);
      pointer = newChild;
      count++;
    } else {
      pointer = pointer.children[i];
    }

  });

  pointer = fileSystem;
  return count;
};

forEachCase(input, (directoryStats, directories) => {
  for (let i = 0; i < directoryStats[0]; i++) {
    mkdir(directories[i]);
  }

  let count = 0;
  for (let i = directoryStats[0]; i < directoryStats[0] + directoryStats[1]; i++) {
    count += mkdir(directories[i]);
  }

  return count;
});
