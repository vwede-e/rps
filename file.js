let userPoint = 0,
computerPoint = 0;

function getUserChoice() {
    let choice = "";
    while ((choice === null) || (choice.toLowerCase() !== "rock" && 
      choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors")) {
        choice = prompt("Enter Rock, Paper or Scissors");
    }
    return choice.toLowerCase();
}


function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(userChoice, computerChoice) {
    userChoice = userChoice();
    computerChoice = computerChoice();
    if (userChoice === "paper" && computerChoice ==="rock") {
        return `User Wins This Round: Computer Picked ${computerChoice}`;
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        return `User Wins This Round: Computer Picked ${computerChoice}`;
    }
    else if(userChoice === "rock" && computerChoice === "scissors") {
        return `User Wins This Round: Computer Picked ${computerChoice}`;
    }
    else if(userChoice === computerChoice) {
        return "A tie";
    }
    else {
        return "Computer Wins This Round";
    }

}

function playGame() {
    while (userPoint < 5 && computerPoint < 5) {
        let result = playRound(getUserChoice, getComputerChoice);
        if (result.includes("User Wins")) {
            userPoint += 1;
            console.log(`You won a point -- Your score: ${userPoint}; Computer Score: ${computerPoint}`);  
        }

        else if (result.includes("Computer Wins")) {
            computerPoint +=1;
            console.log(`Computer won a point -- Your score: ${userPoint}; Computer Score: ${computerPoint}`);
        }

        else {
            console.log("A tie! No point for either of you");
        }
    }

    let result = userPoint > computerPoint ? 
    `You win -- Your Score ${userPoint}; Computer Score: ${computerPoint}` :
    `You lost -- Computer Score: ${computerPoint}; Your Score: ${userPoint}`;
    let p = document.createElement("p");
    p.textContent = result; 
    let body = document.querySelector("body");
    body.append(p);
    return result;
}
