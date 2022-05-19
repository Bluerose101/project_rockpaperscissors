
let playerScore = 0;
let computerScore = 0;
while (playerScore <= 5 || computerScore <= 5 ) {
//Getting player's choice
const playChoice = prompt("Rock, paper, or scissors?"); 
console.log(playChoice);

//function to generate computer's choice
const computerChoice = computerPlay();
function computerPlay() {
    var randomGameValue = Math.floor(Math.random() * 10);
    if (randomGameValue < 3 ) {
        return "rock";
    }
    else if (randomGameValue <= 6.4 ) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
console.log("Computer's choice is ",computerChoice);

 //function to play the game
function playRound (playChoice, computerChoice) {
    let log = "try it";
    if (playChoice === "rock") {
        if (computerChoice === "paper") {
            log = "Sorry, you lose! Paper beats Rock"; 
            computerScore++;
        } else if (computerChoice === "scissors") {
            log = " Yayyyy! you win, Rock beat Scissors";
            playerScore++;
        } else {
            log = " It's a tie";
        }
    } else if (playChoice === "paper") {
        if (computerChoice === "rock") {
            log = " Yayy! you win, Paper beat Rock";
            playerScore++;
        } else if ( computerChoice === "scissors") {
            log = 'Sorry, you lose! Scissors beats Paper';
            computerScore++;
        } else {
            log = " It's is a tie";
        }
    } else {
        if (computerChoice === "rock") {
            log = " Sorry, you lose! Rock beats scissors";
            computerScore++;
        } else if ( computerChoice === "paper") {
            log = " Yay, you win! Scissors beat paper";
            playerScore++;
        } else {
            log = " it's a tie";
        }
    }
    return log;
}
const result = playRound(playChoice, computerChoice);
console.log(result);
console.log("Your score is", playerScore);
console.log("Computer score is", computerScore);
if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) { console.log("You win");}
    else { console.log("you lost");}
    break;
}
}
