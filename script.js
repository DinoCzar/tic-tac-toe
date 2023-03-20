const gameBoard = (() => {
  const boardValues = ["", "", "", "", "", "", "", "", ""];

  const tile1 = document.querySelector("#button-1");
  const tile2 = document.querySelector("#button-2");
  const tile3 = document.querySelector("#button-3");
  const tile4 = document.querySelector("#button-4");
  const tile5 = document.querySelector("#button-5");
  const tile6 = document.querySelector("#button-6");
  const tile7 = document.querySelector("#button-7");
  const tile8 = document.querySelector("#button-8");
  const tile9 = document.querySelector("#button-9");

  const tile = document.querySelectorAll(".tile");
  tile.forEach((tile) => {
    tile.addEventListener("click", () => {
      boardValues[tile.id.slice(7, 8) - 1] = "X";

      for (let i = 0; i < boardValues.length; i++) {
        let computerSelection = [
          Math.floor(Math.random() * boardValues.length),
        ];
        if (boardValues[computerSelection] === "") {
          boardValues[computerSelection] = "O";
          break;
        }
        console.log(computerSelection);
      }

      tile1.textContent = boardValues[0];
      tile2.textContent = boardValues[1];
      tile3.textContent = boardValues[2];
      tile4.textContent = boardValues[3];
      tile5.textContent = boardValues[4];
      tile6.textContent = boardValues[5];
      tile7.textContent = boardValues[6];
      tile8.textContent = boardValues[7];
      tile9.textContent = boardValues[8];

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
