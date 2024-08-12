// global variables that keep track of winners
let humanScore = 0;
let computerScore = 0;

// returns either rock, paper or scissor depending on a random number generator
function getComputerChoice() {
    let rand = randomNumberGenerator(3);
    switch(rand) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
        default:
            return "error";
    }
}

// return 0, 1 or 2 in pseudo-random fashion
function randomNumberGenerator(limit) {
    return Math.floor(Math.random() * limit);
}

// gets input from user
function getHumanChoice() {
    let choice = prompt("ROCK/PAPER/SCISSOR\nENTER YOUR CHOICE:");
    return choice;
}

// game logic contained in this function
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if(computerChoice === "rock") {
            console.log("tie");
        } else if(computerChoice === "paper") {
            console.log("you lose! paper beats rock");
            computerScore++;
        } else {
            console.log("you win! rock beats scissor");
            humanScore++;
        }
    } else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("you win! paper beats rock");
            humanScore++;
        } else if(computerChoice === "paper") {
            console.log("tie");
        } else {
            console.log("you lose! scissor beats paper");
            computerScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("you lose! rock beats scissor");
            computerScore++;
        } else if(computerChoice === "paper") {
            console.log("you win! scissor beats paper");
            humanScore++;
        } else {
            console.log("tie");
        }
    }
}

// starts the game
function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(computerScore > humanScore) {
        console.log("Computer wins!!!");
        console.log("Final scores:\ncomputer - ", computerScore, "\nhuman - ", humanScore);
    } else if(computerScore < humanScore) {
        console.log("You win!!!");
        console.log("Final scores:\ncomputer - ", computerScore, "\nhuman - ", humanScore);
    } else {
        console.log("It's a tie!!!");
        console.log("Final scores:\ncomputer - ", computerScore, "\nhuman - ", humanScore);
    }
}

// starting the game
playGame();