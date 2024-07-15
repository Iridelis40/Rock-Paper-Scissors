//variables
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice) {
        case 0:
            return computerChoice = rock;
            break;
        case 1: 
            return computerChoice = paper;
            break;
        case 2:
            return computerChoice = scissors;
            break;
    }
}

function getHumanChoice() {
    humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    console.log("You chose " + humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice===computerChoice) {
        console.log(`It's a tie`);
    } else if (humanChoice==rock && computerChoice==scissors) {
        console.log("You win, rock beats scissors");
        return humanScore++;
    } else if (humanChoice==paper &&computerChoice==rock) {
        console.log("You win, paper beats rock");
        return humanScore++;
    } else if (humanChoice==scissors && computerChoice==paper) {
        console.log("You win, scissors beats paper");
        return humanScore++;
    } else {
        console.log("Computer wins");
        return computerScore++;
    }
}

function playGame() {
    for (let round=0; round<5; round++) {
        console.log("Round: " + round);
        getHumanChoice();
    getComputerChoice();
    console.log(`"The computer chose: " ${computerChoice}, you chose " ${humanChoice}`);
    playRound(humanChoice, computerChoice);
    console.log("Your score is: " + humanScore);
    console.log("The computer score is: " + computerScore);
    if(round==4) {
        if(humanScore > computerScore) {
            console.log("You won the game!");
        } else if (humanScore < computerScore) {
            console.log("You lost the game");
        } else {
            console.log("It's a tie");
        }
    }
    }
    
}
playGame();