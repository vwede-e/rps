let userPoint = 0,
computerPoint = 0;
let button;

userScoreUI = document.querySelector(".user-score");
computerScoreUI = document.querySelector(".computer-score");

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const para = document.querySelector(".para");

rock.addEventListener("click", () => playGame("rock"));
scissors.addEventListener("click", () => playGame("scissors"));
paper.addEventListener("click", () => playGame("paper"));

//function getUserChoice() {
   //let choice = "";
   //while ((choice === null) || (choice.toLowerCase() !== "rock" && 
      //choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors")) {
       // choice = prompt("Enter Rock, Paper or Scissors");
   // }
    //return choice.toLowerCase();

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
    computerChoice = getComputerChoice();

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
        return `A tie. You both picked ${userChoice}`;
    }
    else {
        return ("Computer Wins This Round");
    }
} 

function playGame(userChoice) {
    if (userPoint < 10 && computerPoint < 10) {
        let result = playRound(userChoice, getComputerChoice);
        para.textContent = result;
        if (result.includes("User Wins")) {
            userPoint += 1;
            userScoreUI.textContent = userPoint;
            console.log(`You won a point -- Your score: ${userPoint}; Computer Score: ${computerPoint}`);  
        }

        else if (result.includes("Computer Wins")) {
            computerPoint +=1;
            computerScoreUI.textContent = computerPoint;
            console.log(`Computer won a point -- Your score: ${userPoint}; Computer Score: ${computerPoint}`);
        }

        else {
            console.log("A tie! No point for either of you");
        }
    }

    else {
        displayFinalResult();
    }
}

function displayFinalResult() {
    if (button) {
        para.parentElement.removeChild(button); // prevents multiple button creation
    }
    
    para.textContent = userPoint > computerPoint ? 
    `CONGRATULATIONS!! YOU WIN` :
    `GAME OVER! YOU LOST. Computer Score: ${computerPoint}; Your Score: ${userPoint}`;
    button = document.createElement("button");
    button.textContent = "RESTART"
    button.setAttribute("class", "restart");
    para.parentElement.appendChild(button);
    button.addEventListener("click", () => {
        userPoint = computerPoint = 0;
        userScoreUI.textContent = computerScoreUI.textContent = 0 
        para.parentElement.removeChild(button); //removes button element from page
        button = undefined; // set it to undefined
        para.textContent = undefined;}); // set paragraph content to undefined
} 