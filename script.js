const gameBoard = (() => {
  let boardValues = ["", "", "", "", "", "", "", "", ""];

  const tile1 = document.querySelector("#button-1");
  const tile2 = document.querySelector("#button-2");
  const tile3 = document.querySelector("#button-3");
  const tile4 = document.querySelector("#button-4");
  const tile5 = document.querySelector("#button-5");
  const tile6 = document.querySelector("#button-6");
  const tile7 = document.querySelector("#button-7");
  const tile8 = document.querySelector("#button-8");
  const tile9 = document.querySelector("#button-9");
  const scores = document.querySelector("#scores");
  scores.textContent = "Player 1's Turn";

  const tile = document.querySelectorAll(".tile");
  tile.forEach((tile) => {
    tile.addEventListener("click", () => {
      if (
        boardValues[tile.id.slice(7, 8) - 1] === "X" ||
        boardValues[tile.id.slice(7, 8) - 1] === "O"
      ) {
        alert("Please select a blank square");
      } else {
        if (
          scores.textContent === "Player 1's Turn" ||
          scores.textContent === "Player 1 Wins!" ||
          scores.textContent === "Player 2 Wins!" ||
          scores.textContent === "It's a Tie!"
        ) {
          scores.textContent = "Player 2's Turn";
          boardValues[tile.id.slice(7, 8) - 1] = "X";
        } else {
          scores.textContent = "Player 1's Turn";
          boardValues[tile.id.slice(7, 8) - 1] = "O";
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

        function checkWinner(input) {
          if (input[0] === "X" && input[1] === "X" && input[2] === "X") {
            scores.textContent = "Player 1 Wins!";
            boardValues = ["", "", "", "", "", "", "", "", ""];
          } else if (input[0] === "O" && input[1] === "O" && input[2] === "O") {
            scores.textContent = "Player 2 Wins!";
            boardValues = ["", "", "", "", "", "", "", "", ""];
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

        for (let i = 0; i < boardValues.length; i++) {
          if (boardValues[i] === "X" || boardValues[i] === "O") {
            break;
          } else {
            scores.textContent = "It's a Tie!";
          }
        }
      }
    });
  });
})();
