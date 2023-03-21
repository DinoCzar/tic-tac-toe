let boardValues = ["", "", "", "", "", "", "", "", ""];

const playerOneDiv = document.querySelector("#player-one");
const playerTwoDiv = document.querySelector("#player-two");
const usernameP1 = document.querySelector("#username-p1");
const usernameP2 = document.querySelector("#username-p2");
const submitP1 = document.querySelector("#submit-p1");
const submitP2 = document.querySelector("#submit-p2");
const playerOne = document.querySelector("#username-one");
const playerTwo = document.querySelector("#username-two");
const scoreboard = document.querySelector("#scoreboard");

const userOne = (name) => {
  return { name };
};

const userTwo = (name) => {
  return { name };
};

let usernameOne = "";
let usernameTwo = "";

submitP1.addEventListener("click", (e) => {
  usernameOne = userOne(usernameP1.value);
  console.log(usernameOne.name);
});

submitP2.addEventListener("click", (e) => {
  usernameTwo = userTwo(usernameP2.value);
  console.log(usernameTwo.name);
});

playerOne.textContent = usernameOne.name;
playerTwo.textContent = usernameTwo.name;

const tile = document.querySelectorAll(".tile");
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

const newGame = document.querySelector("#new-game-button");
newGame.addEventListener("click", () => {
  boardValues = ["", "", "", "", "", "", "", "", ""];
  tile.forEach((tile) => {
    tile.textContent = "";
    scores.textContent = usernameOne.name + "'s Turn";
    tile.style.cssText = "background-color: #f5f5f5;";
    playerOneDiv.style.cssText = "background-color: #a5f3fc;";
    playerTwoDiv.style.cssText = "background-color: #f5f5f5;";
    scoreboard.style.cssText = "background-color: #a5f3fc;";
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
          tile.style.cssText = "background-color: #22d3ee;";
          playerTwoDiv.style.cssText = "background-color: #bbf7d0;";
          playerOneDiv.style.cssText = "background-color: #f5f5f5;";
          scoreboard.style.cssText = "background-color: #bbf7d0;";
        } else {
          scores.textContent = usernameOne.name + "'s Turn";
          boardValues[tile.id.slice(7, 8) - 1] = "O";
          tile.style.cssText = "background-color: #4ade80;";
          playerOneDiv.style.cssText = "background-color: #a5f3fc;";
          playerTwoDiv.style.cssText = "background-color: #f5f5f5;";
          scoreboard.style.cssText = "background-color: #a5f3fc;";
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
            scoreboard.style.cssText = "background-color: #22d3ee;";
            playerOneDiv.style.cssText = "background-color: #22d3ee;";
            playerTwoDiv.style.cssText = "background-color: #f5f5f5;";
          } else if (input[0] === "O" && input[1] === "O" && input[2] === "O") {
            scores.textContent = usernameTwo.name + " Wins!";
            boardValues = ["", "", "", "", "", "", "", "", ""];
            scoreboard.style.cssText = "background-color: #4ade80;";
            playerTwoDiv.style.cssText = "background-color: #4ade80;";
            playerOneDiv.style.cssText = "background-color: #f5f5f5;";
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

        if (
          (boardValues[0] === "X" || boardValues[0] === "O") &&
          (boardValues[1] === "X" || boardValues[1] === "O")
        ) {
          if (
            (boardValues[2] === "X" || boardValues[2] === "O") &&
            (boardValues[3] === "X" || boardValues[3] === "O")
          ) {
            if (
              (boardValues[4] === "X" || boardValues[4] === "O") &&
              (boardValues[5] === "X" || boardValues[5] === "O")
            ) {
              if (
                (boardValues[6] === "X" || boardValues[6] === "O") &&
                (boardValues[7] === "X" || boardValues[7] === "O")
              ) {
                if (boardValues[8] === "X" || boardValues[8] === "O") {
                  scores.textContent = "It's a Tie!";
                  scoreboard.style.cssText = "background-color: #a78bfa";
                  playerTwoDiv.style.cssText = "background-color: #a78bfa";
                  playerOneDiv.style.cssText = "background-color: #a78bfa";
                }
              }
            }
          }
        }
      }
    });
  });
})();
