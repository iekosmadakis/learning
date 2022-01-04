/* 
   Na valeis ena koumpi Reset to opoio na kanei reset olo to paixnidi.
  na ftia3eis logikh pou na metraei nikes ka8e paikth
  na valeis ena element opou 8a deixneis to status tou paixnidiou (poios paizei, an kerdise kapoios h an elh3e isopalia)
*/

// automatically  or self or immediately  invoked function
(() => {
  window.addEventListener('load', () => {
    const state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      nowPlays: 'X',
      winner: ''
    };

    const checkWinner = () => {
      const { squares } = state;
      const row1 = [squares[0], squares[1], squares[2]];
      const row2 = [squares[3], squares[4], squares[5]];
      const row3 = [squares[6], squares[7], squares[8]];

      const column1 = [squares[0], squares[3], squares[6]];
      const column2 = [squares[1], squares[4], squares[7]];
      const column3 = [squares[2], squares[5], squares[8]];

      const diag1 = [squares[0], squares[4], squares[8]];
      const diag2 = [squares[2], squares[4], squares[6]];

      const allWinningCombinations = [row1, row2, row3, column1, column2, column3, diag1, diag2 ];
  
      const xIsWinning = allWinningCombinations.find(triple => triple.filter(el => el === 'X'). length === 3);
      const oIsWinning = allWinningCombinations.find(triple => triple.filter(el => el === 'O'). length === 3);

      if(xIsWinning) {
        state.winner = 'X';
      } else if (oIsWinning) {
        state.winner = 'O';
      } else if (!squares.includes('')) {
        state.winner = 'nobody';
      }

      if(state.winner) {
        alert('winner is ' + state.winner);
      }
    }

    const onSquareClicked = (index) => {
      if(!state.squares[index]) {
        const player = state.nowPlays;

        state.squares[index] = player;
        document.getElementById(`square-${index}`).innerHTML = player;

        state.nowPlays = state.nowPlays === 'X' ? 'O' : 'X';

        checkWinner();
      }
    }


    const gameElement = document.getElementById("root");

    const boardElement = document.createElement('div');

    boardElement.setAttribute('id', 'board');
    boardElement.setAttribute('class', 'board');

    for (let rows = 0; rows < 3; rows++) {
      const rowElement = document.createElement('div');
      rowElement.setAttribute('id', `row-${rows}`);
      rowElement.setAttribute('class', 'row');

      for (let columns = 0; columns < 3; columns++) {
        const squaresIndex = columns + rows * 3;

        const squareElement = document.createElement('div');
        squareElement.setAttribute('id', `square-${squaresIndex}`);
        squareElement.setAttribute('class', 'square');
        squareElement.addEventListener('click', () => onSquareClicked(squaresIndex));
        

        rowElement.appendChild(squareElement);
      }

      boardElement.appendChild(rowElement);
    }

    gameElement.appendChild(boardElement);
    });
})();