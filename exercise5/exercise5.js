const gameState = ['X', 'O', 'X', '', '', '', '', '', ''];


const gameElement = document.getElementById("game");

gameElement.innerHTML = '<h1>Tic Tac Toe</h1>';


const descriptionElement = document.createElement('p');
descriptionElement.setAttribute('id', 'description');

const descriptionText = document.createTextNode('This is my tic tac tow game');
descriptionElement.appendChild(descriptionText);

gameElement.appendChild(descriptionElement);

const boardElement = document.createElement('div');

boardElement.setAttribute('id', 'board');
boardElement.setAttribute('class', 'board');


// gameState.forEach((el, index) => {
//   const row = Math.floor(index / 3);
//   const squareElement = document.createElement('div');
//   squareElement.setAttribute('id', `square-${index}`);
//   squareElement.setAttribute('class', `square square-of-row-${row}`);

//   const valueTextNode = document.createTextNode(el);
//   squareElement.appendChild(valueTextNode);

//   boardElement.appendChild(squareElement);
// });

// gameElement.appendChild(boardElement);


// DESIRED
/* 
  <div id="board" class="board"> 
    <div id="row-0" class="row">
      <div id="square-0" class="square">X</div>
      <div id="square-1" class="square">X</div>
      <div id="square-2" class="square">X</div>
    </div>
    <div id="row-1" class="row">
      <div id="square-3" class="square">X</div>
      <div id="square-4" class="square">X</div>
      <div id="square-5" class="square">X</div>
    </div>
    <div id="row-2" class="row">
      <div id="square-6" class="square">X</div>
      <div id="square-7" class="square">X</div>
      <div id="square-8" class="square">X</div>
    </div>
  </div> 
*/


let squaresIndex = 0;

for (let rows = 0; rows < 3; rows++) {
  const rowElement = document.createElement('div');
  rowElement.setAttribute('id', `row-${rows}`);
  rowElement.setAttribute('class', 'square');

  for (let columns = 0; columns < 3; columns++) {
    const squareElement = document.createElement('div');
    squareElement.setAttribute('id', `square-${squaresIndex}`);
    squareElement.setAttribute('class', 'square');

    const valueTextNode = document.createTextNode(gameState[squaresIndex]);
    squareElement.appendChild(valueTextNode);

    rowElement.appendChild(squareElement);

    squaresIndex++;
  }

  boardElement.appendChild(rowElement);
}

gameElement.appendChild(boardElement);