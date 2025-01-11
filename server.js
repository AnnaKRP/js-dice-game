const countPlayerOne = document.getElementById("count1");
const countPlayerTwo = document.getElementById("count2");
const imgPlayerOne = document.getElementById("img1");
const imgPlayerTwo = document.getElementById("img2");
const heading = document.querySelector("h1");
const btn = document.getElementById("btn");

let countOne = 0;
let countTwo = 0;

const diceImages = [
  "assets/1.png",
  "assets/2.png",
  "assets/3.png",
  "assets/4.png",
  "assets/5.png",
  "assets/6.png"
];

// roll the dice and update the images
function rollDice() {
  // generate random numbers for both players between 0 and 5
  const randomNumber1 = Math.floor(Math.random() * 6);
  const randomNumber2 = Math.floor(Math.random() * 6);

  // update the images for Player 1 and Player 2
  imgPlayerOne.setAttribute("src", diceImages[randomNumber1]);
  imgPlayerTwo.setAttribute("src", diceImages[randomNumber2]);

  // determine the result text based on the dice roll
  const resultText = randomNumber1 > randomNumber2 ?
    `Player <em style="color:#DBD56E;">1</em> Wins!` :
    randomNumber2 > randomNumber1 ?
    `Player <em style="color: #FC7753;">2</em> Wins!` :
    `<em style="color: #FC7753;">Draw!</em>`;

  heading.innerHTML = resultText;

  // update the count based on who won
  if (randomNumber1 > randomNumber2) {
    countOne++;
  } else if (randomNumber2 > randomNumber1) {
    countTwo++;
  }

  // update the displayed count for both players
  countPlayerOne.innerHTML = countOne;
  countPlayerTwo.innerHTML = countTwo;

  // update the border style for the player with the highest score
  updatePlayerBorders();
}

// update the border styles to highlight the winning player
function updatePlayerBorders() {
  // reset both borders
  countPlayerOne.style.borderBottom = "none";
  countPlayerTwo.style.borderBottom = "none";

  if (countOne > countTwo) {
    countPlayerOne.style.borderBottom = "2px solid #FC7753";
  } else if (countTwo > countOne) {
    countPlayerTwo.style.borderBottom = "2px solid #FC7753";
  }
}

// set up the event listener for the roll dice button
btn.addEventListener("click", rollDice);