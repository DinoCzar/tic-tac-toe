const gameBoard = (() => {
  const boardValues = ["", "", "", "O", "X", "", "", "", ""];
  const tile = document.querySelectorAll(".tile");
  tile.forEach((tile) => {
    tile.textContent = boardValues[tile.id - 1];
  });
})();
