//variables
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerChoice;


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
