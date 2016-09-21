(function() {
  const { forEachCase } = require('./helpers.js');
  const input = process.argv[2];

  // Build board from string representation
  const buildBoard = (boardStrings) => {
    return boardStrings.map((boardString) => boardString.split(''));
  };

  // Rotate board clockwise
  const rotateBoard = () => {
  };

  forEachCase(input, (boardStrings, winningNumber) => {
    let board = buildBoard(boardStrings);

    buildBoard(boardStrings);
    board = rotateBoard(board);

    console.log(board);
  });
})();
