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

  const checkRegex = (string, inARow, win) => {
    let redRegex = new RegExp(`R{${inARow}}`);
    let blueRegex = new RegExp(`B{${inARow}}`);

    if (string.match(redRegex)) {
      win.red = true;
    } else if (string.match(blueRegex)) {
      win.blue = true;
    }
  }

  const checkHorizontal = (board, inARow, win) => {
    board.forEach((row) => {
      const rowString = row.join('');
      checkRegex(rowString, inARow, win);
    });
  };

  const checkVertical = (board, inARow, win) => {
    let length = board[0].length;

    for (let i = 0; i < length; i++) {
      let columnString = '';

      board.forEach((row) => {
        columnString += row[i];
      });

      checkRegex(columnString, inARow, win);
    }
  };

  forEachCase(input, (boardStrings, inARow) => {
    let win = {
      red: false,
      blue: false
    };
    let board = buildBoard(boardStrings);

    board = rotateBoard(board);
    console.log(board);
    checkHorizontal(board, inARow, win);
    checkVertical(board, inARow, win);

    if (win.red && win.blue) {
      return 'BOTH';
    } else if (win.red) {
      return 'RED';
    } else if (win.blue) {
      return 'BLUE';
    } else {
      return 'NEITHER';
    }
  });
})();
