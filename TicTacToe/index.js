// selectors
const gameBoard = document.querySelector("#board");
const info = document.querySelector("#info");
let turn;

function createGameboard() {
  const emptyTiles = " ".repeat(9).split("");
  const tileGrid = emptyTiles
    .map((t) => `<button class="tile"></button>`)
    .join("");
  gameBoard.innerHTML = tileGrid;
}

createGameboard();
