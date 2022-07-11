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
     const compChoice = choices[randomNumber];
     return compChoice;
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
    result_p.innerHTML = `Your choice is ${convertToWord(userChoice)}.<br>
    Computer choice is ${convertToWord(computerChoice)}. <br/> You win 🔥 !`;
    userChoice_div.classList.add('glow');
    setTimeout(function() { userChoice_div.classList.remove('glow')}, 700);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice); 
    result_p.innerHTML = `Your choice is ${convertToWord(userChoice)}. <br>
    Computer choice is ${convertToWord(computerChoice)}. <br/> You lose !`;
    userChoice_div.classList.add('dark');
    setTimeout(function() { userChoice_div.classList.remove('dark')}, 700);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `You both chose ${convertToWord(computerChoice)}.<br>
    It's a draw <br/>`;
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
const checkForWinner = (userScore, computerScore) => {
    if (userScore === 5) {
        final.innerHTML = " Congrats, you have won the round <br><br/>";
        const resetBtn = document.createElement ('button');
        resetBtn.classList.add('reset');
        resetBtn.innerHTML = " Play Again?";
        final.append(resetBtn);
        resetBtn.addEventListener("click", function () {
            window.location.reload();
        });


    };
    if (computerScore === 5 ) {
        final.innerHTML = `Too bad. you have lost the round <br><br/>`;
        const resetBtn = document.createElement ('button');
        resetBtn.classList.add('reset');
        resetBtn.innerHTML = " Play Again?";
        final.append(resetBtn);
        resetBtn.addEventListener("click", function () {
            window.location.reload();
        });
    };
}
    rock_div.addEventListener("click", function(){
        game("r");
        checkForWinner(userScore, computerScore);
    });
    
    paper_div.addEventListener("click", function(){
        game("p");
        checkForWinner(userScore, computerScore);

        
    })
    
    scissors_div.addEventListener("click", function(){
        game("s");
        checkForWinner(userScore, computerScore);

    });





