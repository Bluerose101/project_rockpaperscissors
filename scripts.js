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
console.log(computerChoice);