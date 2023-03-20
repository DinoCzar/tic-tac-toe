const gameBoard = (() => {
  const boardValues = ["X", "", "X", "O", "X", "", "O", "", ""];

  const tile = document.querySelectorAll(".tile");
  tile.forEach((tile) => {
    tile.addEventListener("click", () => {
      boardValues[tile.id - 1] = "X";
      tile.textContent = boardValues[tile.id - 1];

      const topRow = [boardValues[0], boardValues[1], boardValues[2]];
      const middleRow = [boardValues[3], boardValues[4], boardValues[5]];
      const bottomRow = [boardValues[6], boardValues[7], boardValues[8]];
      const leftColumn = [boardValues[0], boardValues[3], boardValues[6]];
      const middleColumn = [boardValues[1], boardValues[4], boardValues[7]];
      const rightColumn = [boardValues[2], boardValues[5], boardValues[8]];
      const diagonalOne = [boardValues[0], boardValues[4], boardValues[8]];
      const diagonalTwo = [boardValues[2], boardValues[4], boardValues[6]];

      const scores = document.querySelector("#scores");

      function checkWinner(input) {
        if (input[0] === "X" && input[1] === "X" && input[2] === "X") {
          scores.textContent = "Player 1 Wins!";
        } else if (input[0] === "O" && input[1] === "O" && input[2] === "O") {
          scores.textContent = "Player 2 Wins!";
        }
      }

      checkWinner(topRow);
      checkWinner(middleRow);
      checkWinner(bottomRow);
      checkWinner(leftColumn);
      checkWinner(middleColumn);
      checkWinner(rightColumn);
      checkWinner(diagonalOne);
      checkWinner(diagonalTwo);
    });
  });
})();
