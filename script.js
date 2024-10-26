let humanChoice = "";
let computerChoice = "";
let computerPts = 0;
let humanPts = 0;
let round = 1;

const rockBtn = document.querySelector("#Rock");
const scissorBtn = document.querySelector("#Scissor");
const paperBtn = document.querySelector("#Paper");

rockBtn.addEventListener("click", rockFunction);
scissorBtn.addEventListener("click", scissorFunction);
paperBtn.addEventListener("click", paperFunction);

function rockFunction() {
    humanChoice = "Rock";
    playGame();
}

function paperFunction() {
    humanChoice = "Paper";
    playGame();
}

function scissorFunction() {
    humanChoice = "Scissor";
    playGame();
}

function playGame() {
    let computerChoice = getComputerChoice();
    if(humanChoice == "Rock") {
        if(computerChoice == "Rock") {
            displayResult("Draw");
            console.log("Draw");
        } else if(computerChoice == "Paper") {
            computerPts++;
            displayResult("Computer");
            console.log("Computer wins")
        } else {
            humanPts++;
            displayResult("Human");
            console.log("Human wins")
        }
    } else if(humanChoice == "Paper") {
        if(computerChoice == "Rock") {
            humanPts++;
            displayResult("Human");
            console.log("Human wins");
        } else if(computerChoice == "Paper") {
            displayResult("Draw");
            console.log("Draw")
        } else {
            computerPts++;
            displayResult("Computer");
            console.log("Computer wins")
        }
    } else if(humanChoice == "Scissor") {
        if(computerChoice == "Rock") {
            computerPts++;
            displayResult("Computer");
            console.log("Computer wins");
        } else if(computerChoice == "Paper") {
            humanPts++;
            displayResult("Human");
            console.log("Human wins")
        } else {
            displayResult("Draw");
            console.log("Draw")
        }
    }
    console.log(humanPts);
    console.log(computerPts);
    resetGame();
}

function getComputerChoice(){
    const random = Math.floor(Math.random() * 3);
    if(random == 0) {
        return "Rock";
    } else if(random == 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function resetGame() {
    if(humanPts == 5) {
        alert("Human has won the game");
        humanPts = 0;
        computerPts = 0;
    } else if(computerPts == 5) {
        alert("Computer has won the game");
        humanPts = 0;
        computerPts = 0;
    } else {
        return;
    }
}

function displayResult(winner) {
    const listNode = document.getElementById("list");
    const text = document.createTextNode("ROUND "+ round +", WINNER: " + winner + ", Human score: " + humanPts + ", Computer score: " + computerPts)
    const node = document.createElement("li");
    node.appendChild(text);
    listNode.appendChild(node);
    round++;
}