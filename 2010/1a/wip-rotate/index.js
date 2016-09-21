(function() {
  const { forEachCase } = require('./helpers.js');
  const input = process.argv[2];

  // Build board from string representation
  const buildBoard = (boardStrings) => {
    return boardStrings.map((boardString) => boardString.split(''));
  };

  // Not REALLY a rotate, just changing which way is down by shifting counters
  // to the right.
  const rotateBoard = (board) => {
    board.forEach((row) => {
      for (let i = 0; i < row.length; i++) {
        let counter = row[i];

        // Place all empty cells at front
        if (counter === '.') {
          row.unshift(row.splice(i, 1)[0]);
        }
      }
    });

    return board;
  };

  forEachCase(input, (boardStrings, winningNumber) => {
    let board = buildBoard(boardStrings);
    board = rotateBoard(board);
    console.log(board);
  });
})();
