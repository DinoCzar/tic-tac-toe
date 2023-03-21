let boardValues = ["", "", "", "", "", "", "", "", ""];

const userOne = (name) => {
  return { name };
};

const userTwo = (name) => {
  const turns = 0;
  return { name, turns };
};

const usernameOne = userOne("John");
const usernameTwo = userOne("Mark");

const playerOneDiv = document.querySelector("#player-one");
const playerTwoDiv = document.querySelector("#player-two");
const scoreboard = document.querySelector("#scoreboard");

const playerOne = document.querySelector("#username-one");
const playerTwo = document.querySelector("#username-two");
playerOne.textContent = usernameOne.name;
playerTwo.textContent = usernameTwo.name;

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

const tile = document.querySelectorAll(".tile");

const newGame = document.querySelector("#new-game-button");
newGame.addEventListener("click", () => {
  boardValues = ["", "", "", "", "", "", "", "", ""];
  tile.forEach((tile) => {
    tile.textContent = "";
    scores.textContent = usernameOne.name + "'s Turn";
    tile.style.cssText = "background-color: grey;";
    scoreboard.style.cssText = "background-color: red;";
  });
});

const gameBoard = (() => {
  scores.textContent = usernameOne.name + "'s Turn";

  tile.forEach((tile) => {
    tile.addEventListener("click", () => {
      if (
        boardValues[tile.id.slice(7, 8) - 1] === "X" ||
        boardValues[tile.id.slice(7, 8) - 1] === "O"
      ) {
        alert("Please select a blank square");
      } else {
        if (
          scores.textContent === usernameOne.name + "'s Turn" ||
          scores.textContent === usernameOne.name + " Wins!" ||
          scores.textContent === usernameTwo.name + " Wins!" ||
          scores.textContent === "It's a Tie!"
        ) {
          scores.textContent = usernameTwo.name + "'s Turn";
          boardValues[tile.id.slice(7, 8) - 1] = "X";
          tile.style.cssText = "background-color: red;";
          playerTwoDiv.style.cssText = "background-color: green;";
          playerOneDiv.style.cssText = "background-color: grey;";
          scoreboard.style.cssText = "background-color: green;";
        } else {
          scores.textContent = usernameOne.name + "'s Turn";
          boardValues[tile.id.slice(7, 8) - 1] = "O";
          tile.style.cssText = "background-color: green;";
          playerOneDiv.style.cssText = "background-color: red;";
          playerTwoDiv.style.cssText = "background-color: grey;";
          scoreboard.style.cssText = "background-color: red;";
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
            scores.textContent = usernameOne.name + " Wins!";
            boardValues = ["", "", "", "", "", "", "", "", ""];
          } else if (input[0] === "O" && input[1] === "O" && input[2] === "O") {
            scores.textContent = usernameTwo.name + " Wins!";
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
      }
    });
  });
})();
