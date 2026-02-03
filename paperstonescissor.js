// console.log("welcome to stone paper scissor game");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissor):").toLowerCase();
    return choice;
}

function playGround(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie 🤝");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win this round 🎉");
    } else {
        computerScore++;
        console.log("Computer wins this round 💻");
    }
}

// play one round
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log("Human chose:", humanChoice);
console.log("Computer chose:", computerChoice);

playGround(humanChoice, computerChoice);

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);
