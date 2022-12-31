let userPoint = 0,
computerPoint = 0;
let button;

userScoreUI = document.querySelector(".user-score");
computerScoreUI = document.querySelector(".computer-score");

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const para = document.querySelector(".para");

let div;

rockImage = document.createElement("img");
rockImage.src = "./images/icon-rock.svg";
paperImage = document.createElement("img")
paperImage.setAttribute("src", "./images/icon-paper.svg");
scissorsImage = document.createElement("img")
scissorsImage.setAttribute("src", "./images/icon-scissors.svg");

rockImage2 = document.createElement("img");
rockImage2.src = "./images/icon-rock.svg";
paperImage2 = document.createElement("img")
paperImage2.setAttribute("src", "./images/icon-paper.svg");
scissorsImage2 = document.createElement("img")
scissorsImage2.setAttribute("src", "./images/icon-scissors.svg");


rockImage.style.cssText = paperImage.style.cssText = scissorsImage.style.cssText = "height:200px; width: 200px";
rockImage2.style.cssText = paperImage2.style.cssText = scissorsImage2.style.cssText = "height:200px; width: 200px"; 

rock.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playGame("rock", computerChoice);
})
scissors.addEventListener("click", () => {
  computerChoice = getComputerChoice();
  playGame("scissors", computerChoice);
})
paper.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playGame("paper", computerChoice);
})

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
        return `Computer picks ${computerChoice} and wins this Round`;
    }
} 

function playGame(userChoice, computerChoice) {
    if (userPoint < 5 && computerPoint < 5) {
        let result = playRound(userChoice, computerChoice);
        displayUserChoice(userChoice, computerChoice);
        para.textContent = result;
        if (result.includes("User Wins")) {
            userPoint += 1;
            userScoreUI.textContent = userPoint;
            console.log(`You won a point -- Your score: ${userPoint}; Computer Score: ${computerPoint}`);  
        }

        else if (result.includes("Computer picks")) {
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
    `CONGRATULATIONS!! YOU WIN.` :
    `GAME OVER! YOU LOST.`;
    button = document.createElement("button");
    button.textContent = "RESTART"
    button.setAttribute("class", "restart");
    para.parentElement.appendChild(button);
    button.addEventListener("click", () => {
        userPoint = computerPoint = 0;
        userScoreUI.textContent = computerScoreUI.textContent = 0;
        para.parentElement.removeChild(button); //removes button element from page
        button = undefined; // set it to undefined
        para.textContent = undefined;}); // set paragraph content to undefined
        document.body.removeChild(div);
        div = undefined;
} 

function displayUserChoice(userChoice, computerChoice) {

    if (div) {
        document.body.removeChild(div);
    }
        //container div
    div = document.createElement("div");
    div.setAttribute("class", "icon-container")

    //items div
    userDiv = document.createElement("div");
    computerDiv = document.createElement("div"); 
    userDiv.setAttribute("class", "icon");
    computerDiv.setAttribute("class", "icon"); 
    
    //appending item div to container div
    div.appendChild(userDiv);
    div.appendChild(computerDiv)

    userDiv.style.cssText += computerDiv.style.cssText += "height:250px; width:250px";
    switch (userChoice) {
        case "rock":
            userDiv.appendChild(rockImage);
            break;
        case "paper":
            userDiv.appendChild(paperImage);
            break;
        case "scissors":
            userDiv.appendChild(scissorsImage);

    }
    
            //computer choice
    switch (computerChoice) {
        case "rock":
            computerDiv.appendChild(rockImage2);
            break;
        case "paper":
            computerDiv.appendChild(paperImage2);
            break;
        case "scissors":
            computerDiv.appendChild(scissorsImage2);
    }

    document.body.appendChild(div);

    }        
    