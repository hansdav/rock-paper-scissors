

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', function(e) {
    let playerSelection = e.target.textContent.toLowerCase();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    let computerText = document.getElementById("computer");
    const computerContent = document.createElement("div");
    computerContent.textContent = computerSelection;
    computerText.appendChild(computerContent);

    let playerText = document.getElementById("player");
    const playerContent = document.createElement("div");
    playerContent.textContent = playerSelection;
    playerText.appendChild(playerContent);

    let resultText = document.getElementById("result");
    const resultContent = document.createElement("div");
    resultContent.textContent = result;
    resultText.appendChild(resultContent);

    let playerPoints = document.getElementById("playerPoints");
    let points = 0;
    playerPoints.textContent = points;

    updateScore(points);
  });

function updateScore(points) {
    if (result == "playerWin") {
        points++;
        console.log("You have " + points + " points and the computer has " + computerPoints + " points.");
    }
    // } else (result == "computerWin"); {
    //     computerPoints += 1;
    //     console.log("You have " + playerPoints + " points and the computer has " + computerPoints + " points.");
  };

function computerPlay() {
    let computer = ""
    let move = Math.floor(Math.random() * 3) + 1;
    if (move === 1) {
        computer = "rock";
    } else if (move === 2) {
        computer = "paper";
    } else {
        computer = "scissors";
    }
    console.log(computer);
    return computer
};

// took it out because it wasn't grokking with the button input//
// function playerPlay() {
//     let playerMove = "";
//     let input = "";
//     if (input.toLowerCase() == "paper") {
//         playerMove = "paper";
//     } else if (input.toLowerCase() == "scissors") {
//         playerMove = "scissors";
//     } else if (input.toLowerCase() == "rock") {
//         playerMove = "rock";
//     } else {
//         console.log("Please enter a valid move.")
//     }
//     return playerMove;
//     };


function playRound(playerSelection, computerSelection) {
    //took these out for similar reasons as playerPlay//
    // computerSelection = computerPlay();
    // playerSelection = playerPlay();
    result = "";

    if (computerSelection == playerSelection) {
        console.log("It's a tie!");
        result = "draw";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors.");
        result = "playerWin";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose. Paper beats rock.");
        result = "computerWin";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock.");
        result = "playerWin";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats paper.");
        result = "computerWin";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats paper.");
        result = "playerWin";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose. Rock beats scissors.");
        result = "computerWin";
    }
    return result;
};

function game() {
let playerPoints = 0;
let computerPoints = 0;
round = "";
roundResult = "";
for (let round = 0; round <5; round++) {
    // let roundResult = playRound();

    if (roundResult == "playerWin") {
        playerPoints += "1";
        console.log("You have " + playerPoints + " points and the computer has " + computerPoints + " points.");
    } else if (roundResult == "computerWin") {
        computerPoints += 1;
        console.log("You have " + playerPoints + " points and the computer has " + computerPoints + " points.");
    } else {
        round -= 1;
        console.log("You have " + playerPoints + " points and the computer has " + computerPoints + " points.");
    }
}
    
    if (playerPoints > computerPoints) {
        alert("You won the game!!");
    } else {
        alert("You lost the game. :(");
    }
}
})