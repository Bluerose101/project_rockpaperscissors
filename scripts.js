const computerChoice = computerPlay() 
function computerPlay() {
    var randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == "0") {
        return "rock";
    }
    else if (randomGameValue == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}
console.log(computerChoice);