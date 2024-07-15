//variables
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerChoice;
let humanChoice;


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