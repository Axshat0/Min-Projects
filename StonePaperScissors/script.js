let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const msgColor = document.querySelector(".msg-board")
const userPoints = document.querySelector(".user-points")
const compPoints = document.querySelector(".comp-points")
const comp = document.querySelector(".comp")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    msgColor.style.backgroundColor = "#fcfcfc"
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++
        userPoints.innerText = userScore
        console.log("You win");
        msg.innerText = "You win";
        msgColor.style.backgroundColor = "#5dff3b"
    }else{
        compScore++
        compPoints.innerText = compScore
        console.log("You lose");
        msg.innerText = "You lose";
        msgColor.style.backgroundColor = "#ff3b3b"
    }
}

const playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);
    // computer choice
    const compChoice = genCompChoice();
    console.log(`computer choice = ${compChoice}`);
    compPlay(compChoice);

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const compPlay = (compChoice) => {
    if(compChoice === "rock"){
        comp.classList.add("rock");
        comp.classList.remove("paper", "scissors");
    }else if(compChoice === "paper"){
        comp.classList.add("paper");
        comp.classList.remove("rock", "scissors");
    }else{
        comp.classList.add("scissors");
        comp.classList.remove("paper", "rock");
    }
}
