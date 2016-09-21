(function() {
  const { forEachCase } = require('./helpers.js');
  const input = process.argv[2];

  // Build board from string representation
  const buildBoard = (boardStrings) => {
    return boardStrings.map((boardString) => boardString.split(''));
  };

  // Rotate board clockwise
  // Go through each row and unshift the nth item to the nth row in the new board
  const rotateBoard = (board) => {
    let newBoard = [];

    board.forEach((row) => {
      row.forEach((counter, i) => {
        newBoard[i] = newBoard[i] || [];
        newBoard[i].unshift(counter);
      });
    });

    return newBoard;
  };

  const removeEmpties = (board) => {
    return board.map((row) => {
      return row.reduce((prev, curr) => {
        if (curr != '.') {
          prev.push(curr);
          return prev;
        }

        return prev;
      }, []);
    });
  };

  forEachCase(input, (boardStrings, winningNumber) => {
    let board = buildBoard(boardStrings);

    buildBoard(boardStrings);

    // Rotate twice, using left side as bottom
    board = rotateBoard(rotateBoard(board));
    console.log(board);
    board = removeEmpties(board);
    console.log(board);
  });
})();
