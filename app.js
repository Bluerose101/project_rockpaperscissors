let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const final = document.getElementById("shoot-message");

function getComputerChoice() {
     const choices = ['r', 'p', 's'];
     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    userChoice_div.classList.add('glow');
    setTimeout(function() { userChoice_div.classList.remove('glow')}, 700);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose!`;
    userChoice_div.classList.add('dark');
    setTimeout(function() { userChoice_div.classList.remove('dark')}, 700);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = "It's a draw!";
    userChoice_div.classList.add('neutral');
    setTimeout(function() { userChoice_div.classList.remove('neutral')}, 700);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener("click", function(){
        game("r");
    });
    
    paper_div.addEventListener("click", function(){
        game("p");
    })
    
    scissors_div.addEventListener("click", function(){
        game("s");
    })

};
main();


