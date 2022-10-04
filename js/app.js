let choose = Array.from(document.querySelectorAll(".choose"));
let player1 = document.querySelector(".individual");
let gridInput = Array.from(document.querySelectorAll(".grid-item"));
let totalXElement = 0;
let totalOElement = 0;
// let player1Score = 00;
// let player2Score = 00;
// let draw = 00;
let playerX = "X";
let playerO = `0`;
let turn = playerX;
const reset = document.querySelector(".reset");
let xWins = [];
let xCombinations = [];
let oWins = [];
let oCombinations = [];
let arrangedXCombinations = [];
let arrangedOCombinations = [];

let diagonalLeft = document.querySelector(".diagonal-left");
let diagonalRight = document.querySelector(".diagonal-right");
let container = document.querySelector(".container");
let score = document.querySelector(".result");

// console.log(diagonalLeft);
// console.log(gridInput);
let winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function containerDisable() {
  container.classList.add("disable");
}
// console.log(winningCondition);
let player2 = document.querySelector(".individual-2");
choose.forEach(function (e, i) {
  e.addEventListener("click", function () {
    e.classList.add("choose-color");

    let chooseF = choose.filter(function (e) {
      return e !== choose[i];
    });

    // console.log(chooseF);
    for (const e of chooseF) {
      e.classList.remove("choose-color");
      resetScore();
    }
  });
});

gridInput.forEach(function (e, i) {
  //   console.log(xWins);
  e.addEventListener("click", function () {
    if (!e.textContent.includes("X") && !e.textContent.includes("0")) {
      e.innerText = turn;
    }

    changeTurn();

    if (e.textContent.includes("X") || e.textContent.includes("0")) {
      e.classList.add("disable");
    }
    if (e.textContent.includes("X")) {
      totalXElement++;
      xWins.push(i);

      // console.log(xWins);
      //   console.log(xWins.length);
      if (xWins.length >= 3) {
        // console.log(xWins);
        for (let i = 0; i < xWins.length - 2; i++) {
          for (let j = i + 1; j < xWins.length - 1; j++) {
            for (let k = j + 1; k < xWins.length; k++) {
              xCombinations.push([xWins[i], xWins[j], xWins[k]]);
            }
          }
        }

        let xArray = [];
        // console.log(xArray);
        xCombinations.forEach(function (e, i) {
          arrangedXCombinations = e.sort(function (a, b) {
            return a - b;
          });
          xArray.push(arrangedXCombinations);

          winningCondition.forEach(function (el, i) {
            // console.log(arrangedXCombinations);
            // console.log(el);

            xArray.forEach(function (e) {
              // console.log(e);

              if (JSON.stringify(e) == JSON.stringify(el)) {
                // console.log(`HI`);
                // console.log(i);

                // console.log(JSON.stringify(e));
                // console.log(winningCondition[6]);
                score.innerText = `Player 1 Wins the match`;
                containerDisable();
                if (i == 6) {
                  diagonalLeft.style.display = "block";
                }
                if (i == 7) {
                  diagonalRight.style.display = "block";
                }

                for (let k = 0; k < 3; k++) {
                  if (i == k) {
                    console.log(`hi`);
                    console.log(k);

                    if (k == 1) {
                      k = 3;
                    }
                    if (k == 2) {
                      k = 6;
                    }
                    document.querySelector(
                      `.click-${k + 1}`
                    ).innerHTML += `<hr class="horizontal-line" />`;
                  }
                }
                for (let k = 3; k <= 5; k++) {
                  let l;
                  if (i == k) {
                    if (k == 3) {
                      l = 1;
                      console.log(k);
                    }
                    if (k == 4) {
                      l = 2;
                    }
                    if (k == 5) {
                      l = 3;
                    }
                    document.querySelector(
                      `.click-${l}`
                    ).innerHTML += `<hr class="vertical-line" />`;
                  }
                }
              } else if (totalOElement == 4 && totalXElement == 5) {
                // console.log(`hi`);
                if (
                  JSON.stringify(e) !== JSON.stringify(el) &&
                  i != 6 &&
                  i != 7
                ) {
                  // console.log(`hi`);
                  score.innerText = `Draw`;
                }
              }
            });
          });

          // console.log(arrangedXCombinations);
        });

        // console.log(xCombinations);
        // console.log(`hello`);
      }
    }
    if (e.textContent.includes("0")) {
      //   console.log(i);
      totalOElement++;
      oWins.push(i);
      if (oWins.length >= 3) {
        // console.log(xWins);
        for (let i = 0; i < oWins.length - 2; i++) {
          for (let j = i + 1; j < oWins.length - 1; j++) {
            for (let k = j + 1; k < oWins.length; k++) {
              oCombinations.push([oWins[i], oWins[j], oWins[k]]);
            }
          }
        }

        let oArray = [];
        oCombinations.forEach(function (e, i) {
          arrangedOCombinations = e.sort(function (a, b) {
            return a - b;
          });
          oArray.push(arrangedOCombinations);

          winningCondition.forEach(function (el, i) {
            // console.log(arrangedXCombinations);
            // console.log(el);
            oArray.forEach(function (e) {
              // console.log(e);
              if (JSON.stringify(e) == JSON.stringify(el)) {
                // console.log(`HI`);
                // console.log(i);

                // console.log(JSON.stringify(e));
                // console.log(winningCondition[6]);
                score.innerText = `Player 2 Wins the match`;

                containerDisable();
                if (i == 6) {
                  diagonalLeft.style.display = "block";
                }
                if (i == 7) {
                  diagonalRight.style.display = "block";
                }

                for (let k = 0; k < 3; k++) {
                  if (i == k) {
                    console.log(`hi`);
                    console.log(k);

                    if (k == 1) {
                      k = 3;
                    }
                    if (k == 2) {
                      k = 6;
                    }
                    document.querySelector(
                      `.click-${k + 1}`
                    ).innerHTML += `<hr class="horizontal-line" />`;
                  }
                }
                for (let k = 3; k <= 5; k++) {
                  let l;
                  if (i == k) {
                    if (k == 3) {
                      l = 1;
                      console.log(k);
                    }
                    if (k == 4) {
                      l = 2;
                    }
                    if (k == 5) {
                      l = 3;
                    }
                    document.querySelector(
                      `.click-${l}`
                    ).innerHTML += `<hr class="vertical-line" />`;
                  }
                }
              }
              // if (JSON.stringify(e) != JSON.stringify(el)) {
              //   score.innerText = `Draw`;
              // }
            });
          });
          // console.log(arrangedXCombinations);
        });

        // console.log(xCombinations);
        // console.log(`hello`);
      }

      // console.log(e.textContent);

      //   console.log(xWins.push(i));
      //   console.log(oWins);
      //   console.log([...xWins]);
    }

    // console.log(e.textContent.inlcude("x"));
    // let xStatus = xWins;
    // console.log(xStatus);
    // console.log(x);
  });
});
function changeTurn() {
  if (turn === playerX) {
    turn = playerO;
  } else if (turn === playerO) {
    turn = playerX;
  }
}
let resetScore = function () {
  playerX = "X";
  playerO = `0`;
  turn = playerX;
  xWins = [];
  xCombinations = [];
  oWins = [];
  oCombinations = [];
  container.classList.remove("disable");
  gridInput.forEach(function (e) {
    e.classList.remove("disable");
    e.innerHTML = "";
    diagonalLeft.style.display = "none";
    diagonalRight.style.display = "none";
  });
  score.innerText = ``;
};
reset.addEventListener("click", function () {
  resetScore();
});
